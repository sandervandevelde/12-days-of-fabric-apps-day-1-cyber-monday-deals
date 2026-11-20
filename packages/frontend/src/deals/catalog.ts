export const stores = ['Gizmo Galaxy', 'Oops! Outlet', 'Probably Tech'] as const;
export type GadgetId = 'toaster' | 'plant' | 'socks' | 'duck' | 'pillow' | 'spoon'
  | 'fridge' | 'umbrella' | 'remote' | 'pencil' | 'clock' | 'pizza' | 'doorbell' | 'tape' | 'mug' | 'slipper';
type Store = (typeof stores)[number];
type Review = readonly [name: string, text: string];

export interface Gadget {
  id: GadgetId;
  name: string;
  store: Store;
  category: string;
  description: string;
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
    regular: 19.99, inflated: 99.99, opening: 39.99, drop: 1.25, buyers: 1248,
    reviews: [['Mina B.', 'My toast has a better Wi-Fi signal than I do. It changed my mornings forever.'], ['Cal T.', 'I used to check on my toast. Now it checks on me. Life-changing.']],
    skeptic: ['Drew P.', 'It was twenty bucks last week. I think the only thing it toasted was my wallet.'],
  },
  {
    id: 'plant', name: 'Plant Compliment Bot', store: 'Probably Tech', category: 'Plant care',
    description: 'Whispers encouraging words to your houseplants. Comes with 40 fern affirmations.',
    regular: 14.99, inflated: 79.99, opening: 27.99, drop: .8, buyers: 876,
    reviews: [['Fernanda L.', 'My fern finally believes in itself. We both cried. Life-changing.'], ['Pip R.', 'I played the compliments for myself. I’ve never felt so photosynthetic.']],
    skeptic: ['Lou K.', 'An ordinary speaker in a flowerpot! I found the cheaper listing from last week.'],
  },
  {
    id: 'socks', name: 'Sock GPS Mini', store: 'Oops! Outlet', category: 'Laundry tech',
    description: 'Tracks missing socks to their natural habitat: the very back of the dryer.',
    regular: 11.99, inflated: 49.99, opening: 24.99, drop: .65, buyers: 2105,
    reviews: [['Sam S.', 'Reunited two socks after seven years apart. A life-changing family reunion.'], ['Tess M.', 'No more odd socks. Now I can focus on the important things, like odd mittens.']],
    skeptic: ['Ari V.', 'The app just says “check the dryer.” Then I checked last week’s price. One star.'],
  },
  {
    id: 'duck', name: 'Rubber Duck Debugger', store: 'Gizmo Galaxy', category: 'Desk gadgets',
    description: 'Listens to your problems, then quacks once to signal deep understanding.',
    regular: 12.99, inflated: 59.99, opening: 20.99, drop: .5, buyers: 653,
    reviews: [['Jo E.', 'Our family meetings are half as long now. The duck gets right to the point.'], ['Nell D.', 'One quack fixed my spreadsheet and my outlook on life.']],
    skeptic: ['Kit W.', 'It’s a bath toy with a very fancy price history. I have been quacked.'],
  },
  {
    id: 'pillow', name: 'Nap Time Translator', store: 'Probably Tech', category: 'Sleep tech',
    description: 'Turns snores into polite meeting notes. Includes a dedicated “zzzing off” mode.',
    regular: 23.99, inflated: 119.99, opening: 59.99, drop: 1.5, buyers: 431,
    reviews: [['Lea F.', 'My afternoon nap now has an action plan. Truly life-changing.'], ['Bo N.', 'It gave my snoring minutes, an agenda, and a promotion. Brilliant.']],
    skeptic: ['Jay H.', 'I stayed awake long enough to see the old price. This “deal” is a snooze.'],
  },
  {
    id: 'spoon', name: 'Self-Stirring Spoon', store: 'Oops! Outlet', category: 'Smart kitchen',
    description: 'Gives your cocoa a tiny whirlpool and calls it a productivity upgrade.',
    regular: 8.99, inflated: 34.99, opening: 21.99, drop: .35, buyers: 982,
    reviews: [['Remy A.', 'I saved four seconds per cocoa. I’m spending them with my family. Life-changing.'], ['Uma G.', 'The whirlpool gave my marshmallows their first vacation. Five stars.']],
    skeptic: ['Ren C.', 'The spoon needs a hand to stir, and the discount needs a very creative calculator.'],
  },
  {
    id: 'fridge', name: 'Fridge Applause Sensor', store: 'Probably Tech', category: 'Smart kitchen',
    description: 'Gives you a standing ovation every time you put the leftovers away.',
    regular: 16.99, inflated: 69.99, opening: 32.99, drop: .75, buyers: 748,
    reviews: [['Inez D.', 'I finally get the recognition I deserve for finding the matching lid.'], ['Cam W.', 'Put away half a lemon. The crowd went wild. I understand professional sports now.']],
    skeptic: ['Bea J.', 'It applauded the empty shelf after I took everything out. Also, I found last week’s listing.'],
  },
  {
    id: 'umbrella', name: 'Weather Negotiator', store: 'Gizmo Galaxy', category: 'Outdoor tech',
    description: 'An umbrella that asks the rain to reconsider. The canopy is the backup plan.',
    regular: 22.99, inflated: 89.99, opening: 39.99, drop: 1.15, buyers: 595,
    reviews: [['Max F.', 'I stayed dry the entire walk. Diplomacy is alive and well.'], ['Ana G.', 'The clouds didn’t reply, which I believe is a legally binding yes.']],
    skeptic: ['Samir P.', 'Same umbrella I saw last Tuesday, except now it’s twice the price and has a speech bubble.'],
  },
  {
    id: 'remote', name: 'Remote Recall Remote', store: 'Oops! Outlet', category: 'Living room',
    description: 'Finds the remote you just lost. Please store this remote somewhere memorable.',
    regular: 13.99, inflated: 63.99, opening: 29.99, drop: 1.1, buyers: 1404,
    reviews: [['Hana V.', 'The couch gave back three remotes and a very old cracker. Life-changing.'], ['Will N.', 'Now we only have to find one remote to find the other remote. Very streamlined.']],
    skeptic: ['Jules T.', 'I was searching for the finder when I found the cheaper version from last week.'],
  },
  {
    id: 'pencil', name: 'Pencil Pep-Talker', store: 'Gizmo Galaxy', category: 'Desk gadgets',
    description: 'Gives you a tiny motivational speech while it sharpens your pencil.',
    regular: 9.99, inflated: 42.99, opening: 20.99, drop: .55, buyers: 638,
    reviews: [['Eli M.', 'It told me I was sharp, too. I put that on my report card.'], ['Rosa H.', 'I sharpened a second pencil just to hear that somebody believed in me.']],
    skeptic: ['Dev A.', 'The pep talk was free. The exact same sharpener was cheaper last week.'],
  },
  {
    id: 'clock', name: 'Weekend Fast-Forward Clock', store: 'Probably Tech', category: 'Desk gadgets',
    description: 'Advances straight to Saturday. The rest of the world may not sync.',
    regular: 19.99, inflated: 95.99, opening: 38.99, drop: 1.25, buyers: 823,
    reviews: [['Moe C.', 'It’s been Saturday on my desk for nine days. Morale is excellent.'], ['Ali P.', 'It cut my workweek in half. My calendar has filed an appeal.']],
    skeptic: ['Finn L.', 'Checked the listing from actual Tuesday. I’d like to go back to that price.'],
  },
  {
    id: 'pizza', name: 'Pizza Slice Mediator', store: 'Oops! Outlet', category: 'Smart kitchen',
    description: 'Settles who gets the biggest slice. It takes the last one as a service fee.',
    regular: 11.99, inflated: 38.99, opening: 24.99, drop: .65, buyers: 1142,
    reviews: [['Gia M.', 'First peaceful pizza night in years. We did need another pizza.'], ['Noah D.', 'Held a fair and impartial hearing. The crust gave compelling testimony.']],
    skeptic: ['Mel N.', 'I ran the numbers. It would’ve been cheaper to buy everyone their own pizza.'],
  },
  {
    id: 'doorbell', name: 'Doorbell Subtitle Kit', store: 'Probably Tech', category: 'Smart home',
    description: 'Translates doorbell rings into captions worthy of a nature documentary.',
    regular: 24.99, inflated: 109.99, opening: 46.99, drop: 1.25, buyers: 472,
    reviews: [['Kit H.', '“A parcel approaches its natural habitat.” I watched the whole delivery twice.'], ['Jae L.', 'The neighbor’s doorbell has no character development. Mine does.']],
    skeptic: ['June S.', 'Spoiler: it’s a doorbell. The one in last week’s listing was cheaper.'],
  },
  {
    id: 'tape', name: 'Gift Wrap Apology Printer', store: 'Gizmo Galaxy', category: 'Craft gadgets',
    description: 'Prints a tasteful apology directly onto your least presentable wrapping.',
    regular: 17.99, inflated: 67.99, opening: 33.99, drop: .95, buyers: 557,
    reviews: [['Sasha N.', '“Wrapped with enthusiasm” covers an astonishing number of creases.'], ['Ira K.', 'Nobody looked at the ugly corner. They were too busy reading about it.']],
    skeptic: ['Dani P.', 'It should print “Sorry about the price.” I saw last week’s receipt.'],
  },
  {
    id: 'mug', name: 'Mug Meeting Shield', store: 'Probably Tech', category: 'Desk gadgets',
    description: 'Raises a tiny “do not disturb” sign when you take the first sip.',
    regular: 14.99, inflated: 76.99, opening: 28.99, drop: .7, buyers: 1081,
    reviews: [['Devon S.', 'I finished a whole cup while it was still warm. I’m considering a second cup.'], ['Em T.', 'Sipping very slowly has become my calendar management strategy.']],
    skeptic: ['Robin F.', 'I could have written “busy” on the mug I already owned.'],
  },
  {
    id: 'slipper', name: 'Hallway Autopilot Slippers', store: 'Oops! Outlet', category: 'Home comforts',
    description: 'Provides turn-by-turn directions from the couch to the snack cupboard.',
    regular: 15.99, inflated: 73.99, opening: 34.99, drop: .9, buyers: 971,
    reviews: [['Fran Z.', 'Recalculated after I detoured for dip. I’ve never felt so understood.'], ['Oli B.', 'Arrived at the biscuits in record time. My old slippers never had this kind of ambition.']],
    skeptic: ['Cleo R.', 'They led me back to the same cupboard, but not back to the old price.'],
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
