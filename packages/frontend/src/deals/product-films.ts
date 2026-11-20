import {
  AlarmClock, Bell, CalendarDays, CloudRain, Cookie, Gift, Hand, Heart, MapPin, MessageCircle,
  Moon, Package, Pencil, Pizza, Printer, Refrigerator, Search, Smartphone, Sparkles, Tv, Waves, X,
  type LucideIcon,
} from 'lucide-react';
import type { GadgetId } from './catalog';

type Scene = readonly [caption: string, prop: LucideIcon, label: string];
type Film = readonly [Scene, Scene, Scene];

export const films: Record<GadgetId, Film> = {
  toaster: [
    ['Put two slices in. Pair breakfast with your phone.', Smartphone, 'PAIRING…'],
    ['The toast pops. Your phone gets the news first.', Bell, 'TOAST READY'],
    ['The toast leaves you on read.', MessageCircle, 'SEEN 7:04 AM'],
  ],
  plant: [
    ['Place the bot beside a fern with untapped potential.', Sparkles, 'LEAF DETECTED'],
    ['Press the button. “Your new leaf looks fantastic.”', Heart, 'SINCERITY: HIGH'],
    ['The fern asks for some space, in its own way.', MessageCircle, 'NO REPLY'],
  ],
  socks: [
    ['Tap Find Sock and try not to think about the dryer.', Search, 'ACQUIRING SOCK'],
    ['Follow the signal three steps across the laundry room.', MapPin, '0.3 METRES'],
    ['It was behind the dryer. The app marks this a discovery.', Sparkles, 'MISSION COMPLETE'],
  ],
  duck: [
    ['Explain your spreadsheet problem to the duck.', MessageCircle, 'LISTENING'],
    ['After careful consideration, it quacks once.', Waves, 'QUACK'],
    ['You spot the typo mid-sentence. The duck accepts credit.', Sparkles, 'ISSUE CLOSED'],
  ],
  pillow: [
    ['Put your head down for a quick strategic rest.', Moon, 'RECORDING'],
    ['Three snores become a meeting agenda.', Waves, 'TRANSCRIBING…'],
    ['“Let’s circle back after a little lie-down.”', CalendarDays, 'FOLLOW-UP SET'],
  ],
  spoon: [
    ['Lower the spoon into cocoa. Add two marshmallows.', Hand, 'READY TO STIR'],
    ['A tiny whirlpool takes both marshmallows for a spin.', Waves, 'WHIRLPOOL ON'],
    ['The cocoa is mixed. The marshmallows request dry land.', MapPin, 'PLEASE DISEMBARK'],
  ],
  fridge: [
    ['Open the fridge with half a lemon and a sense of purpose.', Refrigerator, 'DOOR OPEN'],
    ['Slide the lemon onto the shelf. Hold for applause.', Hand, 'APPLAUSE'],
    ['Close the door. The fridge gives itself an encore.', Sparkles, 'ENCORE'],
  ],
  umbrella: [
    ['Point the handle at a particularly stubborn cloud.', CloudRain, 'RAIN DETECTED'],
    ['Request a brief pause in the weather.', MessageCircle, 'PLEASE HOLD'],
    ['No agreement is reached. Open the umbrella.', Waves, 'MANUAL OVERRIDE'],
  ],
  remote: [
    ['Turn on the TV. Remember that this requires a remote.', Tv, 'NO SIGNAL'],
    ['Press Locate on the other remote. The couch beeps.', Search, 'SOFA: 2 METRES'],
    ['Recover the first remote. Briefly misplace the second.', X, 'FINDER OFFLINE'],
  ],
  pencil: [
    ['Insert a pencil with a disappointing point.', Pencil, 'PENCIL DETECTED'],
    ['It spins. “You’re sharper than you think.”', Sparkles, 'CONFIDENCE +1'],
    ['Try a second pencil. It needed to hear that too.', Heart, 'KEEP IT UP'],
  ],
  clock: [
    ['Set the clock down on a perfectly ordinary Tuesday.', CalendarDays, 'TUESDAY'],
    ['Hold Fast-Forward until the display says Saturday.', Sparkles, 'SATURDAY'],
    ['Your nine o’clock meeting starts anyway.', AlarmClock, '9:00 AM · TUE'],
  ],
  pizza: [
    ['Submit the final slice for independent measurement.', Pizza, 'EXHIBIT A'],
    ['Two hands reach in. The mediator asks for order.', Hand, 'DELIBERATING'],
    ['Nobody gets the last slice. A service fee has applied.', X, 'CASE CLOSED'],
  ],
  doorbell: [
    ['A courier approaches the front step.', Package, 'SUBJECT IN FRAME'],
    ['The bell rings. The subtitles appear.', Bell, 'DING DONG'],
    ['“At last, the parcel has found its natural habitat.”', MessageCircle, 'GROUNDBREAKING'],
  ],
  tape: [
    ['Wrap the gift. Try to make the fold look intentional.', Gift, 'CREASE DETECTED'],
    ['The printer produces a rather generous label.', Printer, 'PRINTING…'],
    ['“Wrapped with enthusiasm” covers the entire corner.', Heart, 'WITH LOVE'],
  ],
  mug: [
    ['Fill the mug. A meeting invitation arrives.', CalendarDays, 'QUICK CHAT?'],
    ['Take a sip. The tiny sign rises.', Hand, 'DO NOT DISTURB'],
    ['The meeting is moved. You sip considerably slower.', Sparkles, 'BUSY UNTIL 11'],
  ],
  slipper: [
    ['Slip them on and set the snack cupboard as a destination.', MapPin, 'ROUTE SET'],
    ['Take a left at the rug. Detour briefly for dip.', Waves, 'RECALCULATING…'],
    ['You have arrived at the biscuits. The slippers expect a rating.', Cookie, 'DESTINATION REACHED'],
  ],
};
