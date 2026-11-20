export const stores = ['Gizmo Galaxy', 'Oops! Outlet', 'Probably Tech'] as const;
export type GadgetId = 'toaster' | 'plant' | 'socks' | 'duck' | 'pillow' | 'spoon';
type Store = (typeof stores)[number];
type Review = readonly [name: string, text: string];

export interface Gadget {
  id: GadgetId;
  name: string;
  store: Store;
  category: string;
  description: string;
  demo: string;
  regular: number;
  inflated: number;
  opening: number;
  drop: number;
  buyers: number;
  reviews: readonly [Review, Review];
  skeptic: Review;
}

export const catalog: readonly Gadget[] = [
  {
    id: 'toaster', name: 'Wi-Fry Toaster', store: 'Gizmo Galaxy', category: 'Smart kitchen',
    description: 'Sends a notification to your toast when you’re ready. The toast rarely replies.',
    demo: 'Toast detected. Sending a very important notification…',
    regular: 19.99, inflated: 99.99, opening: 39.99, drop: 1.25, buyers: 1248,
    reviews: [['Mina B.', 'My toast has a better Wi-Fi signal than I do. It changed my mornings forever.'], ['Cal T.', 'I used to check on my toast. Now it checks on me. Life-changing.']],
    skeptic: ['Drew P.', 'It was twenty bucks last week. I think the only thing it toasted was my wallet.'],
  },
  {
    id: 'plant', name: 'Plant Compliment Bot', store: 'Probably Tech', category: 'Plant care',
    description: 'Whispers encouraging words to your houseplants. Comes with 40 fern affirmations.',
    demo: '“Your new leaf looks fantastic!” The fern is thinking about it.',
    regular: 14.99, inflated: 79.99, opening: 27.99, drop: .8, buyers: 876,
    reviews: [['Fernanda L.', 'My fern finally believes in itself. We both cried. Life-changing.'], ['Pip R.', 'I played the compliments for myself. I’ve never felt so photosynthetic.']],
    skeptic: ['Lou K.', 'An ordinary speaker in a flowerpot! I found the cheaper listing from last week.'],
  },
  {
    id: 'socks', name: 'Sock GPS Mini', store: 'Oops! Outlet', category: 'Laundry tech',
    description: 'Tracks missing socks to their natural habitat: the very back of the dryer.',
    demo: 'Beep! Sock found: 0.3 metres away, dramatically wedged behind the dryer.',
    regular: 11.99, inflated: 49.99, opening: 24.99, drop: .65, buyers: 2105,
    reviews: [['Sam S.', 'Reunited two socks after seven years apart. A life-changing family reunion.'], ['Tess M.', 'No more odd socks. Now I can focus on the important things, like odd mittens.']],
    skeptic: ['Ari V.', 'The app just says “check the dryer.” Then I checked last week’s price. One star.'],
  },
  {
    id: 'duck', name: 'Rubber Duck Debugger', store: 'Gizmo Galaxy', category: 'Desk gadgets',
    description: 'Listens to your problems, then quacks once to signal deep understanding.',
    demo: 'Problem received. Processing… quack! That means “try turning it off and on.”',
    regular: 12.99, inflated: 59.99, opening: 20.99, drop: .5, buyers: 653,
    reviews: [['Jo E.', 'Our family meetings are half as long now. The duck gets right to the point.'], ['Nell D.', 'One quack fixed my spreadsheet and my outlook on life.']],
    skeptic: ['Kit W.', 'It’s a bath toy with a very fancy price history. I have been quacked.'],
  },
  {
    id: 'pillow', name: 'Nap Time Translator', store: 'Probably Tech', category: 'Sleep tech',
    description: 'Turns snores into polite meeting notes. Includes a dedicated “zzzing off” mode.',
    demo: 'Snore translated: “Let’s circle back after a little lie-down.”',
    regular: 23.99, inflated: 119.99, opening: 59.99, drop: 1.5, buyers: 431,
    reviews: [['Lea F.', 'My afternoon nap now has an action plan. Truly life-changing.'], ['Bo N.', 'It gave my snoring minutes, an agenda, and a promotion. Brilliant.']],
    skeptic: ['Jay H.', 'I stayed awake long enough to see the old price. This “deal” is a snooze.'],
  },
  {
    id: 'spoon', name: 'Self-Stirring Spoon', store: 'Oops! Outlet', category: 'Smart kitchen',
    description: 'Gives your cocoa a tiny whirlpool and calls it a productivity upgrade.',
    demo: 'Whirlpool engaged. Marshmallows are advised to keep arms and legs inside.',
    regular: 8.99, inflated: 34.99, opening: 21.99, drop: .35, buyers: 982,
    reviews: [['Remy A.', 'I saved four seconds per cocoa. I’m spending them with my family. Life-changing.'], ['Uma G.', 'The whirlpool gave my marshmallows their first vacation. Five stars.']],
    skeptic: ['Ren C.', 'The spoon needs a hand to stir, and the discount needs a very creative calculator.'],
  },
];

const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
export const usd = (value: number) => formatter.format(value);
export const buyerCount = (value: number) => value.toLocaleString('en-US');
const suppliers = ['Basement & Beyond', 'The Cardboard Co.', 'Spare Parts Palace', 'Warehouse-ish', 'Parcel Pals', 'Pocket Factory'];

export function simulate(deal: Gadget, index: number, elapsed: number) {
  const firstDrop = 12 + index * 6;
  const drops = Math.min(7, Math.max(0, 1 + Math.floor((elapsed - firstDrop) / 30)));
  const price = Math.round((deal.opening - drops * deal.drop) * 100) / 100;
  const interval = 3 + index % 4;
  const buyers = deal.buyers + Math.floor(elapsed / interval) * (1 + index % 3);
  return {
    ...deal, price, buyers, discount: Math.floor((1 - price / deal.inflated) * 100),
    supplier: drops > 0 ? suppliers[(index + drops - 1) % suppliers.length] : null,
    skeptical: elapsed >= 24 + index * 11,
  };
}

export type LiveDeal = ReturnType<typeof simulate>;
