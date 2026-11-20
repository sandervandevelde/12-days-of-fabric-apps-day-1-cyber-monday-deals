import { useEffect, useMemo, useRef } from 'react';
import { VegaVisual, useCssTheme, type VisualizationSpec } from '@microsoft/fabric-visuals';
import type { DataTable } from '@microsoft/fabric-visuals-core';
import { ChartNoAxesCombined, MessageCircle, X } from 'lucide-react';
import { usd, type LiveDeal } from './catalog';
import { GadgetArt } from './GadgetArt';

const historySpec: VisualizationSpec = {
  width: 'container',
  height: 'container',
  mark: { type: 'line', point: true, strokeWidth: 3 },
  encoding: {
    x: { field: 'Stage', type: 'ordinal', title: null, sort: ['Two weeks ago', 'Last week', 'Just before sale', 'Cyber Monday', 'Now'], axis: { labelAngle: -22 } },
    y: { field: 'Price', type: 'quantitative', title: null, axis: { format: '$.0f', tickCount: 5 } },
    tooltip: [{ field: 'Stage', type: 'nominal' }, { field: 'Price', type: 'quantitative', format: '$.2f' }],
  },
};

const compareSpec: VisualizationSpec = {
  width: 'container',
  height: 'container',
  mark: { type: 'bar', cornerRadiusEnd: 5, size: 23 },
  encoding: {
    y: { field: 'Stage', type: 'nominal', title: null, sort: ['Usual', 'Marked up', 'Now'] },
    x: { field: 'Price', type: 'quantitative', title: null, axis: { format: '$.0f', tickCount: 4 } },
    tooltip: [{ field: 'Stage', type: 'nominal' }, { field: 'Price', type: 'quantitative', format: '$.2f' }],
  },
};

const columns: DataTable['columns'] = [
  { name: 'Stage', displayName: 'Price stage' },
  { name: 'Price', displayName: 'Price', format: '$0.00' },
];

export default function DealDetail({ deal, onClose }: { deal: LiveDeal; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const theme = useCssTheme();
  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    return () => { element?.close(); };
  }, []);

  const { price, regular, inflated, opening } = deal;
  const history = useMemo<DataTable>(() => ({
    columns,
    rows: [
      ['Two weeks ago', regular], ['Last week', regular],
      ['Just before sale', inflated], ['Cyber Monday', opening], ['Now', price],
    ],
  }), [price, regular, inflated, opening]);
  const comparison = useMemo<DataTable>(() => ({
    columns, rows: [['Usual', regular], ['Marked up', inflated], ['Now', price]],
  }), [price, regular, inflated]);

  return (
    <dialog
      ref={dialog}
      aria-labelledby="deal-title"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      className="m-auto max-h-[92dvh] w-[calc(100%-2rem)] max-w-4xl overflow-auto rounded-4xl border border-border bg-background text-foreground shadow-2xl backdrop:bg-art-ink/65"
    >
      <div>
        <header className="sticky top-0 z-10 flex items-start justify-between gap-400 border-b border-border bg-card px-500 py-400 sm:px-800">
          <div>
            <p className="mb-100 font-monospace text-200 font-bold tracking-wider text-primary uppercase">Deal detective · {deal.store}</p>
            <h2 id="deal-title" className="text-hero-700 leading-tight font-bold">{deal.name}</h2>
          </div>
          <button type="button" aria-label="Close deal details" onClick={onClose} className="cursor-pointer rounded-full border bg-background p-200 hover:bg-secondary"><X className="icon-size-300" /></button>
        </header>
        <div className="space-y-600 p-500 sm:p-800">
          <div className="grid items-center gap-400 sm:grid-cols-[1fr_1.2fr]">
            <div className="overflow-hidden rounded-3xl"><GadgetArt deal={deal} /></div>
            <div>
              <p className="text-400 text-muted-foreground">{deal.description}</p>
              <p className="mt-200 text-hero-800 font-bold">{usd(price)} <del className="text-400 font-medium text-muted-foreground">{usd(inflated)}</del></p>
              <p className="text-300 font-bold text-success">{deal.supplier ? `Cheaper supplier: ${deal.supplier}` : 'Looking for a cheaper supplier…'}</p>
            </div>
          </div>
          <section aria-labelledby="price-history">
            <h3 id="price-history" className="mb-200 flex items-center gap-200 text-600 font-bold"><ChartNoAxesCombined className="icon-size-400 text-primary" /> The price trick</h3>
            <p className="mb-400 rounded-2xl bg-accent px-400 py-300 text-300 text-accent-foreground">
              <strong>Still {usd(price - regular)} above the usual price.</strong> The store raised the price from {usd(regular)} to {usd(inflated)} just before the sale. That’s where the flashy {deal.discount}% comes from.
            </p>
            <div className="grid gap-400 sm:grid-cols-2 sm:auto-rows-chart">
              <div className="h-chart min-w-0">
                <VegaVisual spec={historySpec} data={history} theme={theme} header={{ title: 'Price history' }} />
              </div>
              <div className="h-chart min-w-0">
                <VegaVisual spec={compareSpec} data={comparison} theme={theme} header={{ title: 'Usual vs. marked-up vs. now' }} />
              </div>
            </div>
          </section>
          <section aria-labelledby="reviews">
            <h3 id="reviews" className="mb-300 flex items-center gap-200 text-600 font-bold"><MessageCircle className="icon-size-400 text-primary" /> Fictional customer reviews</h3>
            <ul className="grid gap-300 sm:grid-cols-2">
              {deal.reviews.map(([name, text]) => <Review key={name} name={name} text={text} />)}
              {deal.skeptical && <Review name={deal.skeptic[0]} text={deal.skeptic[1]} skeptical />}
            </ul>
          </section>
        </div>
      </div>
    </dialog>
  );
}

function Review({ name, text, skeptical = false }: { name: string; text: string; skeptical?: boolean }) {
  return (
    <li className={`rounded-2xl border px-400 py-300 ${skeptical ? 'bg-secondary sm:col-span-2' : 'bg-card'}`}>
      <p className="flex items-center gap-200 text-300 font-bold">
        <span aria-label={skeptical ? '1 out of 5 stars' : '5 out of 5 stars'} role="img" className={skeptical ? 'text-deal' : 'text-primary'}>{skeptical ? '★☆☆☆☆' : '★★★★★'}</span>
        {name}{skeptical && <span className="rounded-full bg-card px-200 py-100 text-200 text-deal">Spotted the scam</span>}
      </p>
      <blockquote className="mt-100 text-300 text-muted-foreground">“{text}”</blockquote>
    </li>
  );
}
