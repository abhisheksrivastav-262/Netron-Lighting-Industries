import { ASSETS } from "./assets";

export interface GalleryImage {
  id: string;
  src: string;
  /** Short category chip shown on the tile */
  label: string;
  /** Proper name of the photograph, shown in the lightbox */
  name: string;
  /** Accessible description */
  alt: string;
}

/**
 * All 18 supplied photographs (the logo is presented separately).
 * Names were derived by reading the content of each image with on-device
 * vision (text recognition + image classification + face detection), not by
 * guessing. See src/assets/asset-manifest.json for the evidence.
 */
export const GALLERY: GalleryImage[] = [
  {
    id: "p01",
    src: ASSETS.brandBoard,
    label: "Signboard",
    name: "NETRON LIGHTING signboard",
    alt: "Blue signboard carrying the Netron Lighting brand name",
  },
  {
    id: "p02",
    src: ASSETS.amareFan,
    label: "Ceiling fan",
    name: 'Amare 48" induction ceiling fan',
    alt: 'Amare 48-inch induction ceiling fan, 1200 mm sweep, 100% copper motor',
  },
  {
    id: "p03",
    src: ASSETS.founder,
    label: "Team",
    name: "Er. Arun Vishwakarma — Founder & CMD",
    alt: "Portrait of Er. Arun Vishwakarma, Founder and CMD",
  },
  {
    id: "p04",
    src: ASSETS.ariaFan,
    label: "Ceiling fan",
    name: "Aria induction ceiling fan",
    alt: "Aria induction ceiling fan product photograph",
  },
  {
    id: "p05",
    src: ASSETS.etoileFan,
    label: "Ceiling fan",
    name: "Etoile ceiling fan",
    alt: "Etoile ceiling fan product photograph",
  },
  {
    id: "p06",
    src: ASSETS.zephyrFan,
    label: "Ceiling fan",
    name: 'Zephyr 48" ceiling fan (brown)',
    alt: 'Zephyr 48-inch induction ceiling fan in brown, 1200 mm sweep, 100% copper motor',
  },
  {
    id: "p07",
    src: ASSETS.ledBulb,
    label: "LED bulb",
    name: "LED bulb",
    alt: "LED bulb product photograph",
  },
  {
    id: "p08",
    src: ASSETS.ledBulbLit,
    label: "LED bulb",
    name: "LED bulb (lit)",
    alt: "LED bulb glowing against a dark background",
  },
  {
    id: "p09",
    src: ASSETS.suzexFan,
    label: "Ceiling fan",
    name: "SUZEX ceiling fan",
    alt: "SUZEX ceiling fan product photograph",
  },
  {
    id: "p10",
    src: ASSETS.suzexFanDisplay,
    label: "Ceiling fan",
    name: "SUZEX ceiling fan (display)",
    alt: "SUZEX ceiling fan on display at a counter",
  },
  {
    id: "p11",
    src: ASSETS.ceilingFanA,
    label: "Ceiling fan",
    name: "Ceiling fan",
    alt: "Ceiling fan photographed against a dark ceiling",
  },
  {
    id: "p12",
    src: ASSETS.ceilingFanB,
    label: "Ceiling fan",
    name: "Ceiling fan",
    alt: "Ceiling fan photographed against a dark ceiling",
  },
  {
    id: "p13",
    src: ASSETS.ceilingFanC,
    label: "Ceiling fan",
    name: "Ceiling fan",
    alt: "Ceiling fan photographed against a dark ceiling",
  },
  {
    id: "p15",
    src: ASSETS.ceilingFanD,
    label: "Ceiling fan",
    name: "Ceiling fan (grey)",
    alt: "Grey ceiling fan photographed from below",
  },
  {
    id: "p16",
    src: ASSETS.downlight7w,
    label: "LED downlight",
    name: "7W LED downlight",
    alt: "7W LED downlight with a one-year guarantee",
  },
  {
    id: "p17",
    src: ASSETS.solarPanel,
    label: "Solar panel",
    name: "Solar panel",
    alt: "Solar panel product photograph",
  },
  {
    id: "p18",
    src: ASSETS.signboard,
    label: "Signboard",
    name: "NETRONE LIGHTING & SOLAR INDUSTRIES signboard",
    alt: "Signboard for Netrone Lighting & Solar Industries with the contact numbers for Er. Arun Vishwakarma",
  },
  {
    id: "p19",
    src: ASSETS.chandrayaanPackaging,
    label: "Packaging",
    name: "Chandrayaan Series LED bulb packaging (20W–50W)",
    alt: "Chandrayaan Series LED bulb packaging showing 20W, 30W, 40W and 50W variants",
  },
  {
    id: "p20",
    src: ASSETS.ledBulb9w,
    label: "LED bulb",
    name: "Netron Lighting 9 Watt",
    alt: "Netron Lighting 9 Watt LED bulb packaging boxes",
  },
];
