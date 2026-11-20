import { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';
import type { GadgetId, LiveDeal } from './catalog';

const backgrounds: Record<GadgetId, string> = {
  toaster: 'bg-lavender', plant: 'bg-mint', socks: 'bg-peach',
  duck: 'bg-lemon', pillow: 'bg-sky', spoon: 'bg-pink',
};

function Spark({ x, y, size = 8 }: { x: number; y: number; size?: number }) {
  return <path transform={`translate(${x} ${y}) scale(${size / 8})`} d="M0-8Q1-1 8 0Q1 1 0 8Q-1 1-8 0Q-1-1 0-8Z" />;
}

function Drawing({ id }: { id: GadgetId }) {
  switch (id) {
    case 'toaster': return <>
      <g className="gadget-effect" stroke="var(--color-art-ink)" strokeWidth="2.5">
        <path d="M113 65q-12-10-5-21t22-8q3-13 22-13t21 13q16-2 22 11t-8 21l-4 31-65 3z" fill="var(--color-art-orange)" />
        <path d="M120 59q-8-7-2-13t19-2q3-13 16-13t13 12q14-3 19 5t-5 14l-4 28-51 1z" fill="var(--color-art-paper)" />
        <path d="M140 57q12-10 24 0m-20 5q8-6 16 0m-12 5q4-3 8 0" fill="none" strokeLinecap="round" />
      </g>
      <g className="gadget-body" stroke="var(--color-art-ink)" strokeWidth="3" strokeLinejoin="round">
        <path d="M96 137v8h19v-8m59 0v8h17v-8" fill="var(--color-art-ink)" />
        <path d="M84 91l19-16h91l22 17-11 38-23 11H97z" fill="var(--color-art-deep)" />
        <path d="M103 75h91l22 17-24 8H83z" fill="var(--color-art-paper)" />
        <path d="M119 83h58l8 6h-73z" fill="var(--color-art-ink)" />
        <rect x="79" y="95" width="116" height="46" rx="14" fill="var(--color-art-violet)" />
        <path d="M94 111h33m-33 9h22m87-12h25" fill="none" strokeLinecap="round" />
        <circle cx="170" cy="118" r="9" fill="var(--color-accent)" />
      </g>
    </>;
    case 'plant': return <>
      <g className="gadget-effect" stroke="var(--color-art-ink)" strokeWidth="2.7" strokeLinejoin="round">
        <path d="M146 90q14-43 50-52m-49 54q-13-32-37-35" fill="none" />
        <path d="M153 70q-1-39 49-41 0 36-49 41Z" fill="var(--color-art-green)" />
        <path d="M143 79q-35 2-47-33 37-3 47 33Z" fill="var(--color-art-green)" />
        <path d="M157 79q16-19 39-12-7 23-39 12Z" fill="var(--color-art-paper)" />
        <path d="M63 40h29a9 9 0 0 1 0 18h-8l-8 9v-9H63a9 9 0 0 1 0-18Z" fill="var(--color-art-paper)" />
        <path d="M70 49h17" strokeLinecap="round" />
      </g>
      <g className="gadget-body" stroke="var(--color-art-ink)" strokeWidth="3">
        <path d="M107 97h88l-9 37q-2 11-13 11h-44q-12 0-14-11z" fill="var(--color-art-orange)" />
        <rect x="101" y="85" width="100" height="17" rx="8" fill="var(--color-accent)" />
        <circle cx="136" cy="116" r="2" fill="var(--color-art-ink)" /><circle cx="166" cy="116" r="2" fill="var(--color-art-ink)" />
        <path d="M144 124q8 9 15 0" fill="none" strokeLinecap="round" />
      </g>
    </>;
    case 'socks': return <>
      <g className="gadget-body" stroke="var(--color-art-ink)" strokeWidth="3" strokeLinejoin="round">
        <path d="M115 46h55v47l31 7q28 7 19 28-7 16-28 15l-56-9q-21-3-21-27z" fill="var(--color-art-rose)" />
        <path d="M115 67h55m-55 12h55m-54 27q24 0 27 29m52-36q-15 17-6 43" fill="none" />
        <rect x="105" y="41" width="74" height="22" rx="7" fill="var(--color-art-paper)" />
        <path d="M121 48v8m13-8v8m13-8v8m13-8v8" strokeLinecap="round" />
        <circle cx="154" cy="94" r="14" fill="var(--color-art-blue)" /><circle cx="154" cy="94" r="4" fill="var(--color-art-paper)" />
      </g>
      <g className="gadget-effect" stroke="var(--color-art-ink)" strokeWidth="2.5" strokeLinecap="round" fill="none">
        <path d="M193 73q14-14 28 0m-34-10q20-22 40 0m-27 18q7-7 14 0M91 96q-15 8-8 23t-14 14" strokeDasharray="4 5" />
      </g>
    </>;
    case 'duck': return <>
      <g className="gadget-body" stroke="var(--color-art-ink)" strokeWidth="3" strokeLinejoin="round">
        <path d="M80 99q21 13 38 1-9-47 20-58 34-13 51 18l3 25q25 16 22 31-3 27-66 27-55 0-68-44Z" fill="var(--color-accent)" />
        <path d="M175 75q23-13 43 2-9 18-41 13z" fill="var(--color-art-orange)" />
        <path d="M112 116q19 22 49 2-15-19-39-15" fill="none" strokeLinecap="round" />
        <circle cx="169" cy="67" r="4" fill="var(--color-art-ink)" />
        <path d="M129 53q6-17 23-17t29 17" strokeWidth="6" fill="none" />
        <rect x="123" y="55" width="17" height="26" rx="7" fill="var(--color-art-violet)" />
      </g>
      <path className="gadget-effect" d="M224 59l12-6m-9 20h15m-18 15 12 6" stroke="var(--color-art-ink)" fill="none" strokeWidth="3" strokeLinecap="round" />
    </>;
    case 'pillow': return <>
      <g className="gadget-body" stroke="var(--color-art-ink)" strokeWidth="3" strokeLinejoin="round">
        <path d="M89 66q47 11 107 0 26-11 17 20-7 15 0 38 7 24-19 18-43-9-99 1-25 8-16-18 6-14 0-39-6-24 10-20Z" fill="var(--color-art-blue)" />
        <path d="M96 84q48 9 97 0m-92 43q43-9 89-1m-68-23q8 8 16 0m21 0q8 8 16 0m-29 12h6" fill="none" strokeLinecap="round" />
        <rect x="189" y="112" width="27" height="13" rx="4" fill="var(--color-art-paper)" />
      </g>
      <path className="gadget-effect" d="M154 55h13l-12 12h13m11-28h18l-17 17h18m12-37h20l-19 19h20" stroke="var(--color-art-ink)" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </>;
    case 'spoon': return <>
      <g className="gadget-effect" stroke="var(--color-art-ink)" strokeWidth="3" strokeLinejoin="round">
        <path d="M159 96l32-67q5-10 14-6t5 14l-38 66z" fill="var(--color-art-violet)" />
        <path d="m190 43 12 6" /><path d="M93 60q-10-7-4-16m41 12q-10-9-4-18" fill="none" strokeLinecap="round" />
      </g>
      <g className="gadget-body" stroke="var(--color-art-ink)" strokeWidth="3">
        <path d="M193 88h13q20 0 20 17t-20 16h-16v-10h15q9 0 9-6t-9-6h-12z" fill="var(--color-art-orange)" />
        <path d="M84 88h116l-8 36q-4 19-25 19h-47q-21 0-27-18z" fill="var(--color-art-rose)" />
        <ellipse cx="142" cy="87" rx="58" ry="15" fill="var(--color-art-paper)" />
        <path d="M113 87q13-9 35-6 20 4 7 9-11 4-24 0" fill="none" strokeLinecap="round" />
        <path d="M122 114h14m-7-7v14" strokeLinecap="round" />
      </g>
    </>;
  }
}

export function GadgetArt({ deal }: { deal: LiveDeal }) {
  const [play, setPlay] = useState(0);
  return (
    <figure className={`relative isolate flex aspect-[2/1] items-center justify-center overflow-hidden ${backgrounds[deal.id]} text-art-ink`}>
      <div className="art-pattern absolute inset-0 -z-10 opacity-65" />
      <svg key={play} className={`h-full w-full ${play ? 'art-playing' : ''}`} viewBox="0 0 300 170" role="img" aria-label={`Illustration of the ${deal.name}`}>
        <ellipse cx="150" cy="147" rx="76" ry="9" fill="var(--color-art-ink)" opacity=".10" />
        <g fill="var(--color-art-ink)" opacity=".55"><Spark x={61} y={80} /><Spark x={243} y={114} size={7} /><Spark x={230} y={40} size={5} /></g>
        <Drawing id={deal.id} />
      </svg>
      <span className="absolute top-300 left-300 rounded-full bg-accent px-300 py-100 font-monospace text-200 font-bold text-accent-foreground">−{deal.discount}%</span>
      <button type="button" onClick={() => setPlay((count) => count + 1)} aria-label={`${play ? 'Replay' : 'Play'} ${deal.name} demo`} className="absolute right-300 bottom-300 inline-flex cursor-pointer items-center gap-200 rounded-full bg-art-paper px-300 py-200 text-200 font-bold shadow-sm hover:bg-accent">
        {play ? <RotateCcw className="icon-size-100" /> : <Play className="icon-size-100 fill-current" />} Demo
      </button>
      <figcaption className="sr-only" aria-live="polite">{play ? deal.demo : ''}</figcaption>
    </figure>
  );
}

export function HeroArt() {
  return (
    <svg viewBox="0 0 470 320" className="w-full max-w-sm overflow-visible" aria-hidden="true">
      <ellipse cx="239" cy="263" rx="128" ry="23" fill="var(--color-art-ink)" opacity=".3" />
      <circle cx="242" cy="154" r="119" fill="none" stroke="var(--color-art-paper)" opacity=".35" strokeWidth="1.5" strokeDasharray="5 8" />
      <g fill="var(--color-accent)"><Spark x={91} y={89} size={17} /><Spark x={373} y={134} size={21} /><Spark x={347} y={42} size={12} /><Spark x={104} y={217} size={10} /></g>
      <g fill="var(--color-art-paper)"><Spark x={391} y={213} size={8} /><Spark x={138} y={50} size={7} /><Spark x={74} y={157} size={8} /></g>
      <g stroke="var(--color-art-ink)" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
        <path d="M147 158l99-44 97 42-96 54Z" fill="var(--color-art-deep)" />
        <path d="M147 158l-33-29 102-39 30 24Z" fill="var(--color-art-rose)" />
        <path d="M246 114l35-33 96 41-34 34Z" fill="var(--color-art-orange)" />
        <path d="M198 115q-26-10-20-45m112 61q32-4 41-29" fill="none" stroke="var(--color-art-paper)" strokeWidth="7" />
        <path d="M172 74l-7-10 7-11m12 18 7-13m136 46-1-12m8 10 10-5" fill="none" stroke="var(--color-art-paper)" />
        <path d="M244 79l-6-20" fill="none" /><circle cx="236" cy="53" r="9" fill="var(--color-accent)" />
        <rect x="187" y="74" width="119" height="97" rx="31" fill="var(--color-art-violet)" transform="rotate(-8 247 122)" />
        <rect x="198" y="87" width="91" height="62" rx="23" fill="var(--color-art-paper)" transform="rotate(-8 245 118)" />
        <path d="M217 115q5-10 12-1m28-3q5-10 12-2m-32 13q9 13 17-2" fill="none" />
        <path d="M147 158l100 40 96-42v82l-94 44-102-43Z" fill="var(--color-art-violet)" />
        <path d="M247 198l96-42v82l-94 44Z" fill="var(--color-art-deep)" />
        <path d="M147 158l100 40-30 30-106-44Z" fill="var(--color-art-rose)" />
        <path d="M247 198l96-42 33 32-96 45Z" fill="var(--color-art-orange)" />
        <path d="M164 213l38 16v23l-38-16Z" fill="var(--color-art-paper)" />
        <path d="M171 225l23 10m-23-3 14 6" strokeWidth="2.5" />
      </g>
      <g transform="translate(326 204) rotate(12)">
        <path d="M0 10 11 0h44l12 12v35H0Z" fill="var(--color-accent)" stroke="var(--color-art-ink)" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" fill="var(--color-art-ink)" />
        <text x="35" y="34" textAnchor="middle" fill="var(--color-art-ink)" fontWeight="700" fontSize="16">-?!%</text>
      </g>
    </svg>
  );
}
