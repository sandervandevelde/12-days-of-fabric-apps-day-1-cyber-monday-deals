//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
//        Licensed under the MIT license. See LICENSE file in the project root for full license information.
// </copyright>
//-----------------------------------------------------------------------

import { lazy, Suspense, useEffect, useState } from 'react';
import {
  ArrowDown, ArrowDownRight, ArrowRight, BarChart3, ChevronDown, CircleHelp,
  Moon, PackageOpen, SlidersHorizontal, Sparkles, Store, Sun, Tag, Users, Zap,
} from 'lucide-react';
import { useAppTheme } from '@/hooks/use-theme';
import { buyerCount, catalog, simulate, stores, usd, type GadgetId, type LiveDeal } from './deals/catalog';
import { GadgetArt, HeroArt } from './deals/GadgetArt';

const DealDetail = lazy(() => import('./deals/DealDetail'));
const control = 'h-1000 w-full cursor-pointer appearance-none rounded-xl border border-input bg-card pr-800 pl-1000 text-300 font-bold text-foreground hover:border-primary sm:w-auto';

function DealCard({ deal, select }: { deal: LiveDeal; select: () => void }) {
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md">
      <GadgetArt deal={deal} />
      <div className="flex flex-1 flex-col p-400 sm:p-500">
        <div className="flex items-center gap-200 text-200 font-bold text-primary">
          <Store className="icon-size-200" />{deal.store}
          <span className="text-muted-foreground">· {deal.category}</span>
        </div>
        <h3 className="mt-200 text-600 leading-tight font-bold tracking-tight">
          <button type="button" onClick={select} className="cursor-pointer text-left hover:text-primary">{deal.name}</button>
        </h3>
        <p className="mt-200 mb-400 flex-1 text-300 leading-300 text-muted-foreground">{deal.description}</p>
        <div className="flex flex-wrap items-baseline gap-200">
          <span className="text-hero-700 leading-none font-bold tracking-tight tabular-nums">{usd(deal.price)}</span>
          <del aria-label={`Marked-up price ${usd(deal.inflated)}`} className="text-300 text-muted-foreground">{usd(deal.inflated)}</del>
        </div>
        <p className="mt-200 flex items-center gap-100 text-200 font-bold text-success">
          <ArrowDownRight className="icon-size-200 shrink-0" />
          {deal.supplier ? `New supplier: ${deal.supplier}` : 'Scouting a cheaper supplier'}
        </p>
        <div className="mt-400 flex flex-wrap items-center justify-between gap-200 border-t border-border pt-300">
          <span className="flex items-center gap-200 text-200 text-muted-foreground"><Users className="icon-size-200" /><span><b className="tabular-nums">{buyerCount(deal.buyers)}</b> bought</span></span>
          <button type="button" onClick={select} aria-label={`Inspect deal: ${deal.name}`} className="flex cursor-pointer items-center gap-200 rounded-lg bg-secondary px-300 py-200 text-200 font-bold text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
            <BarChart3 className="icon-size-200" /> Inspect deal
          </button>
        </div>
      </div>
    </article>
  );
}

function App() {
  const { isDark, toggleTheme } = useAppTheme();
  const [elapsed, setElapsed] = useState(0);
  const [store, setStore] = useState('');
  const [discount, setDiscount] = useState(0);
  const [selected, setSelected] = useState<GadgetId | null>(null);

  useEffect(() => {
    const start = Date.now();
    const timer = window.setInterval(() => setElapsed(Math.floor((Date.now() - start) / 1000)), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const deals = catalog.map((gadget, index) => simulate(gadget, index, elapsed));
  const visible = deals.filter((deal) => (!store || deal.store === store) && deal.discount >= discount);
  const active = deals.find((deal) => deal.id === selected);
  const total = deals.reduce((sum, deal) => sum + deal.buyers, 0);

  return (
    <div className="min-h-full">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-storefront items-center justify-between gap-300 px-400 py-300 sm:px-600">
          <a href="#" className="flex items-center gap-200 text-600 font-bold tracking-tight">
            <span className="grid size-1000 place-items-center rounded-xl bg-hero text-accent"><Zap className="icon-size-400 fill-current" aria-hidden="true" /></span>
            OddCart<span className="-ml-200 text-primary">.</span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-600 text-300 font-bold sm:flex">
            <a href="#deals" className="text-primary hover:underline">Live deals</a>
            <a href="#about" className="text-muted-foreground hover:text-primary">How it works</a>
          </nav>
          <div className="flex items-center gap-200 sm:gap-300">
            <span className="rounded-full bg-secondary px-300 py-200 font-monospace text-200 font-bold tracking-wide text-secondary-foreground">PARODY SHOP</span>
            <button type="button" onClick={toggleTheme} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'} className="grid size-1000 cursor-pointer place-items-center rounded-full border hover:bg-secondary">
              {isDark ? <Sun className="icon-size-300" /> : <Moon className="icon-size-300" />}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-storefront px-400 pt-600 pb-1200 sm:px-600 sm:pt-800">
        <section aria-labelledby="hero-title" className="relative isolate grid overflow-hidden rounded-4xl bg-hero text-hero-foreground md:grid-cols-[1.25fr_1fr]">
          <div className="hero-pattern pointer-events-none absolute inset-0 -z-10 opacity-65" />
          <div className="p-600 pb-300 sm:p-1000 md:p-1200 md:pr-100">
            <p className="mb-400 inline-flex items-center gap-200 rounded-full bg-accent px-300 py-200 font-monospace text-200 font-bold tracking-wider text-accent-foreground uppercase"><Zap className="icon-size-200 fill-current" /> Cyber Monday special</p>
            <h1 id="hero-title" className="text-hero-900 leading-[1.01] font-bold tracking-tighter sm:text-hero-1000">Big deals.<br /><span className="text-accent">Weird gadgets.</span></h1>
            <p className="mt-400 max-w-sm text-400 leading-400 text-hero-muted">Wild inventions, falling prices, and a few very creative discounts. Nothing here is real. That’s the deal.</p>
            <a className="mt-500 inline-flex items-center gap-200 rounded-xl bg-hero-foreground px-400 py-300 text-300 font-bold text-art-ink hover:bg-accent focus-visible:outline-accent" href="#deals">Browse deals <ArrowDown className="icon-size-200" /></a>
          </div>
          <div className="flex items-center justify-center px-500 md:pr-800"><HeroArt /></div>
        </section>

        <aside aria-label="Simulation activity" className="mt-400 flex flex-wrap items-center justify-between gap-x-600 gap-y-200 rounded-2xl border border-border bg-card px-400 py-300 sm:px-500">
          <div className="flex flex-wrap items-center gap-x-300 gap-y-100">
            <span className="flex items-center gap-200 rounded-full bg-success-soft px-300 py-100 font-monospace text-200 font-bold text-success"><span className="size-200 rounded-full bg-success" /> LIVE SIMULATION</span>
            <span className="text-300 text-muted-foreground">Prices drop as imaginary suppliers are found.</span>
          </div>
          <span className="flex items-center gap-200 text-300 text-muted-foreground"><Users className="icon-size-200 text-primary" /><strong className="text-foreground tabular-nums">{buyerCount(total)}</strong> simulated purchases</span>
        </aside>

        <section id="deals" aria-labelledby="deals-title" className="mt-800 scroll-mt-400 sm:mt-1000">
          <div className="mb-500 flex flex-wrap items-end justify-between gap-400">
            <div>
              <p className="mb-100 flex items-center gap-200 font-monospace text-200 font-bold tracking-wider text-primary uppercase"><Sparkles className="icon-size-200" /> The odd aisle</p>
              <h2 id="deals-title" className="text-hero-800 leading-tight font-bold tracking-tight">Today’s deals</h2>
              <p className="mt-100 text-300 text-muted-foreground"><span aria-live="polite">{visible.length} {visible.length === 1 ? 'gadget' : 'gadgets'}</span> · Inspect a deal to see the real story.</p>
            </div>
            <div className="flex w-full flex-wrap items-center gap-200 sm:w-auto" aria-label="Deal filters">
              <span className="mr-100 hidden items-center gap-200 text-200 font-bold text-muted-foreground lg:flex"><SlidersHorizontal className="icon-size-200" /> Filter by</span>
              <label className="relative min-w-0 flex-1 sm:flex-auto">
                <span className="sr-only">Store</span>
                <Store aria-hidden="true" className="pointer-events-none absolute top-1/2 left-300 icon-size-200 -translate-y-1/2 text-primary" />
                <select className={control} value={store} onChange={(event) => setStore(event.target.value)}><option value="">All stores</option>{stores.map((name) => <option key={name}>{name}</option>)}</select>
                <ChevronDown aria-hidden="true" className="pointer-events-none absolute top-1/2 right-300 icon-size-200 -translate-y-1/2" />
              </label>
              <label className="relative min-w-0 flex-1 sm:flex-auto">
                <span className="sr-only">Minimum advertised discount</span>
                <Tag aria-hidden="true" className="pointer-events-none absolute top-1/2 left-300 icon-size-200 -translate-y-1/2 text-primary" />
                <select className={control} value={discount} onChange={(event) => setDiscount(Number(event.target.value))}>
                  <option value="0">Any discount</option>
                  {[40, 50, 60, 70, 80].map((amount) => <option key={amount} value={amount}>{amount}% off or more</option>)}
                </select>
                <ChevronDown aria-hidden="true" className="pointer-events-none absolute top-1/2 right-300 icon-size-200 -translate-y-1/2" />
              </label>
            </div>
          </div>
          {visible.length ? (
            <div className="grid gap-500 sm:grid-cols-2 lg:grid-cols-3">{visible.map((deal) => <DealCard key={deal.id} deal={deal} select={() => setSelected(deal.id)} />)}</div>
          ) : (
            <div className="grid justify-items-center gap-200 rounded-3xl border border-dashed bg-card p-800 text-center">
              <PackageOpen className="icon-size-600 text-primary" />
              <h3 className="text-500 font-bold">No deals in this aisle</h3>
              <p className="text-300 text-muted-foreground">Try a lower discount or look in a different store.</p>
              <button type="button" onClick={() => { setStore(''); setDiscount(0); }} className="mt-100 flex cursor-pointer items-center gap-200 rounded-xl bg-primary px-400 py-200 text-300 font-bold text-primary-foreground">Reset filters <ArrowRight className="icon-size-200" /></button>
            </div>
          )}
        </section>

        <footer id="about" className="mt-1000 flex scroll-mt-400 items-start gap-300 rounded-3xl border bg-card p-500">
          <CircleHelp className="icon-size-400 shrink-0 text-primary" />
          <div><h2 className="text-500 font-bold">How it works</h2><p className="mt-100 text-300 leading-300 text-muted-foreground">OddCart is a parody. The gadgets, stores, reviews, and purchases are all made up. The discounts use a bumped-up price, not the old everyday price. Inspect any deal to compare them, and keep an eye out for customers who noticed the trick.</p></div>
        </footer>
      </main>
      {active && <Suspense fallback={<div role="status" className="fixed right-400 bottom-400 rounded-xl border bg-card px-400 py-300 shadow-md">Opening the deal…</div>}><DealDetail deal={active} onClose={() => setSelected(null)} /></Suspense>}
    </div>
  );
}

export default App;
