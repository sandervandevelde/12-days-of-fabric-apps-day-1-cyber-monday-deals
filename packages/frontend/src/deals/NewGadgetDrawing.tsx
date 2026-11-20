import type { GadgetId } from './catalog';

const ink = 'var(--color-art-ink)';
const paper = 'var(--color-art-paper)';
const purple = 'var(--color-art-violet)';
const orange = 'var(--color-art-orange)';
const yellow = 'var(--color-accent)';
const blue = 'var(--color-art-blue)';
const green = 'var(--color-art-green)';
const rose = 'var(--color-art-rose)';

export function NewGadgetDrawing({ id }: { id: GadgetId }) {
  let drawing;
  switch (id) {
    case 'fridge': drawing = <>
      <rect x="110" y="23" width="82" height="122" rx="12" fill={blue} />
      <path d="M171 24h19q10 0 10 12v95q0 13-14 14h-15Z" fill={purple} />
      <rect x="110" y="23" width="69" height="122" rx="10" fill={blue} />
      <path d="M111 67h68m-53-30v14m0 29v23" />
      <rect x="139" y="84" width="27" height="24" rx="6" fill={yellow} />
      <path d="M146 94h13m-11 5h9" />
      <path className="gadget-effect" d="m210 73 13-8m-11 20 17 1m-20 11 13 9" />
    </>; break;
    case 'umbrella': drawing = <>
      <path d="M149 38v-9m0 48v52q0 18 14 18 12 0 12-10" />
      <path d="M71 88q16-49 79-49t79 49q-18-11-40 0-19-11-39 0-20-11-39 0-22-11-40 0Z" fill={rose} />
      <path d="M111 87q13-35 39-48 24 11 39 48-19-11-39 0-20-11-39 0Z" fill={purple} />
      <rect x="137" y="106" width="25" height="22" rx="6" fill={yellow} />
      <path className="gadget-effect" d="m80 33-5 9m18-6-5 9m123-18-5 9m18-3-5 9" stroke={ink} />
    </>; break;
    case 'remote': drawing = <>
      <g transform="rotate(18 169 90)">
        <rect x="145" y="29" width="48" height="113" rx="14" fill={purple} />
        <rect x="151" y="39" width="36" height="31" rx="7" fill={paper} />
        <circle cx="169" cy="55" r="7" fill={yellow} />
        <path d="M160 85h3m12 0h3m-18 12h3m12 0h3m-18 12h3m12 0h3m-18 12h18" />
      </g>
      <g transform="rotate(-17 114 99)">
        <rect x="99" y="64" width="30" height="77" rx="10" fill={blue} />
        <circle cx="114" cy="80" r="5" fill={rose} /><path d="M108 94h12m-12 11h12m-12 11h12" />
      </g>
      <path className="gadget-effect" d="M105 50q11-11 23-5M98 41q16-15 33-7" />
    </>; break;
    case 'pencil': drawing = <>
      <rect x="91" y="83" width="118" height="61" rx="14" fill={green} />
      <rect x="101" y="92" width="70" height="37" rx="8" fill={paper} />
      <path d="M112 110h12l5-8 7 15 6-7h17" /><circle cx="189" cy="109" r="10" fill={yellow} />
      <g className="gadget-effect"><path d="m154 88 34-56 13 8-34 56-13 9Z" fill={yellow} /><path d="m188 32 6-9 13 8-6 9Z" fill={rose} /><path d="m154 95 8 5-8 5Z" fill={ink} /></g>
    </>; break;
    case 'clock': drawing = <>
      <rect x="76" y="62" width="148" height="74" rx="16" fill={orange} />
      <rect x="86" y="72" width="127" height="51" rx="10" fill={paper} />
      <path d="m91 135-6 9m119-9 8 9m-84-83v-8h45v8" />
      <text x="150" y="107" textAnchor="middle" fill={ink} stroke="none" fontWeight="700" fontSize="24">SAT 00:01</text>
      <path className="gadget-effect" d="m143 32 11-7v14Zm14 0 11-7v14Z" fill={yellow} />
    </>; break;
    case 'pizza': drawing = <>
      <rect x="78" y="107" width="144" height="35" rx="12" fill={purple} />
      <rect x="132" y="115" width="36" height="17" rx="5" fill={paper} />
      <path d="M143 124h14" />
      <g className="gadget-effect"><path d="M113 47q36-29 75 0l-38 62Z" fill={yellow} /><path d="M113 47q35-29 75 0l-6 9q-33-23-63 1z" fill={orange} /><circle cx="146" cy="66" r="6" fill={rose} /><circle cx="163" cy="61" r="5" fill={rose} /><circle cx="151" cy="85" r="5" fill={rose} /></g>
    </>; break;
    case 'doorbell': drawing = <>
      <rect x="113" y="29" width="61" height="114" rx="19" fill={purple} />
      <rect x="120" y="39" width="47" height="45" rx="11" fill={ink} />
      <circle cx="144" cy="59" r="12" fill={blue} /><circle cx="145" cy="58" r="4" fill={paper} />
      <circle cx="144" cy="108" r="14" fill={yellow} /><path d="M139 111h10l-2-3v-4h-6v4Z" />
      <g className="gadget-effect"><path d="M178 78h38a9 9 0 0 1 9 9v20a9 9 0 0 1-9 9h-41l-10 7v-15h-1V87a9 9 0 0 1 9-9Z" fill={paper} /><path d="M181 93h27m-21 8h15" /></g>
    </>; break;
    case 'tape': drawing = <>
      <rect x="100" y="61" width="101" height="69" rx="12" fill={rose} />
      <path d="M112 61V39h75v22" fill={paper} /><path d="M122 49h32m10 0h10" />
      <rect x="115" y="84" width="70" height="15" rx="5" fill={ink} />
      <circle cx="182" cy="73" r="4" fill={yellow} />
      <g className="gadget-effect"><path d="M124 95h51v48l-8-4-9 5-8-5-8 5-9-5-9 4Z" fill={paper} /><path d="M149 128q-15-9-8-13 4-2 8 3 4-5 8-3 7 4-8 13Z" fill={rose} /></g>
    </>; break;
    case 'mug': drawing = <>
      <path d="M186 92h15a17 17 0 0 1 0 34h-15v-9h13a8 8 0 0 0 0-16h-13Z" fill={orange} />
      <path d="M99 81h93l-6 43q-2 20-21 20h-37q-20 0-23-20Z" fill={blue} />
      <ellipse cx="145" cy="82" rx="46" ry="10" fill={paper} />
      <path d="M123 109h45m-39 10h33" />
      <g className="gadget-effect"><path d="M165 80V34" /><path d="M113 28h59v33h-59Z" fill={yellow} /><text x="142" y="49" textAnchor="middle" fill={ink} stroke="none" fontSize="12" fontWeight="700">BUSY</text></g>
    </>; break;
    case 'slipper': drawing = <>
      <path d="M90 105q-11-18 11-33l26-17q17-11 28 7 8 14-1 26l-31 31q-17 16-33-14Z" fill={rose} />
      <path d="M100 78q10 15 25 21l17-17q-13-5-24-18Z" fill={paper} />
      <path d="M135 131q-10-19 10-35l29-21q18-10 30 9 8 14-2 27l-31 30q-17 15-36-10Z" fill={green} />
      <path d="M143 98q11 17 26 23l19-17q-16-6-26-18Z" fill={paper} />
      <path className="gadget-effect" d="m172 50 8-15 8 15h-5v12h-6V50Zm27 8 6-12 7 12h-5v8h-4v-8Z" fill={yellow} />
    </>; break;
    default: return null;
  }
  return <g className="gadget-body" fill="none" stroke={ink} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">{drawing}</g>;
}
