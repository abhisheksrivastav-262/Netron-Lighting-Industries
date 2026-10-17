import { ASSETS } from "./assets";

export type ProductCategory =
  | "LED Bulbs"
  | "LED Lighting"
  | "Ceiling Fans"
  | "Packaging"
  | "Solar";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Optional verified specs. Unverified fields are intentionally omitted. */
  specs: { label: string; value: string }[];
}

/**
 * Product records are centralised here and consumed by the catalogue grid,
 * product detail pages and enquiry links. Names and images were matched to the
 * real supplied photographs using on-device vision analysis (see
 * src/assets/asset-manifest.json). Technical specifications are not invented —
 * where a value is unavailable it is shown as "Contact us for details".
 */
export const PRODUCTS: Product[] = [
  {
    slug: "netron-led-bulb",
    name: "LED Bulb",
    category: "LED Bulbs",
    tagline: "LED bulb",
    description:
      "An LED bulb from Netron Lighting Industries. For confirmed wattage, base type and packaging options, please contact us directly.",
    image: ASSETS.ledBulb,
    imageAlt: "LED bulb product photograph from Netron Lighting Industries",
    specs: [
      { label: "Product type", value: "LED bulb" },
      { label: "Wattage", value: "Contact us for details" },
      { label: "Base type", value: "Contact us for details" },
      { label: "Packaging", value: "Contact us for details" },
    ],
  },
  {
    slug: "netron-led-bulb-lit",
    name: "LED Bulb (Lit)",
    category: "LED Bulbs",
    tagline: "LED bulb in operation",
    description:
      "An LED bulb from Netron Lighting Industries photographed while lit. Ask us about the current wattages and variants available.",
    image: ASSETS.ledBulbLit,
    imageAlt: "LED bulb from Netron Lighting Industries glowing against a dark background",
    specs: [
      { label: "Product type", value: "LED bulb" },
      { label: "Wattage", value: "Contact us for details" },
      { label: "Base type", value: "Contact us for details" },
      { label: "Availability", value: "Contact us for details" },
    ],
  },
  {
    slug: "netron-7w-led-downlight",
    name: "7W LED Downlight",
    category: "LED Lighting",
    tagline: "7W LED downlight",
    description:
      "A 7W LED downlight supplied by Netron Lighting Industries, carrying a one-year guarantee. Contact us to confirm colour temperature and quantities.",
    image: ASSETS.downlight7w,
    imageAlt: "7W LED downlight from Netron Lighting Industries on a dark background",
    specs: [
      { label: "Product type", value: "LED downlight" },
      { label: "Wattage", value: "7W" },
      { label: "Guarantee", value: "1 year" },
      { label: "Colour temperature", value: "Contact us for details" },
    ],
  },
  {
    slug: "aria-induction-ceiling-fan",
    name: "Aria Induction Ceiling Fan",
    category: "Ceiling Fans",
    tagline: "Induction ceiling fan",
    description:
      "The Aria induction ceiling fan from our range. Contact us for current colours, sweep sizes and order quantities.",
    image: ASSETS.ariaFan,
    imageAlt: "Aria induction ceiling fan product photograph",
    specs: [
      { label: "Product type", value: "Induction ceiling fan" },
      { label: "Sweep", value: "Contact us for details" },
      { label: "Motor", value: "Contact us for details" },
      { label: "Colours", value: "Contact us for details" },
    ],
  },
  {
    slug: "etoile-ceiling-fan",
    name: "Etoile Ceiling Fan",
    category: "Ceiling Fans",
    tagline: "Ceiling fan",
    description:
      "The Etoile ceiling fan from our range. Please contact us for availability, colours and specifications.",
    image: ASSETS.etoileFan,
    imageAlt: "Etoile ceiling fan product photograph",
    specs: [
      { label: "Product type", value: "Ceiling fan" },
      { label: "Sweep", value: "Contact us for details" },
      { label: "Motor", value: "Contact us for details" },
      { label: "Colours", value: "Contact us for details" },
    ],
  },
  {
    slug: "zephyr-48-ceiling-fan",
    name: 'Zephyr 48" Ceiling Fan',
    category: "Ceiling Fans",
    tagline: "48-inch induction ceiling fan",
    description:
      "The Zephyr 48-inch induction ceiling fan, built with a 100% copper motor and a 1200 mm sweep. Available in brown. Contact us for current stock.",
    image: ASSETS.zephyrFan,
    imageAlt: "Zephyr 48-inch brown induction ceiling fan with a 1200 mm sweep",
    specs: [
      { label: "Product type", value: "Induction ceiling fan" },
      { label: "Sweep", value: "1200 mm" },
      { label: "Motor", value: "100% copper" },
      { label: "Colour", value: "Brown" },
    ],
  },
  {
    slug: "amare-48-ceiling-fan",
    name: 'Amare 48" Ceiling Fan',
    category: "Ceiling Fans",
    tagline: "48-inch induction ceiling fan",
    description:
      "The Amare 48-inch induction ceiling fan, built with a 100% copper motor and a 1200 mm sweep. Available in white. Contact us for current stock.",
    image: ASSETS.amareFan,
    imageAlt: "Amare 48-inch white induction ceiling fan with a 1200 mm sweep",
    specs: [
      { label: "Product type", value: "Induction ceiling fan" },
      { label: "Sweep", value: "1200 mm" },
      { label: "Motor", value: "100% copper" },
      { label: "Colour", value: "White" },
    ],
  },
  {
    slug: "suzex-ceiling-fan",
    name: "SUZEX Ceiling Fan",
    category: "Ceiling Fans",
    tagline: "Ceiling fan",
    description:
      "The SUZEX ceiling fan from our range. Contact us for available models, colours and specifications.",
    image: ASSETS.suzexFan,
    imageAlt: "SUZEX ceiling fan product photograph",
    specs: [
      { label: "Product type", value: "Ceiling fan" },
      { label: "Sweep", value: "Contact us for details" },
      { label: "Motor", value: "Contact us for details" },
      { label: "Colours", value: "Contact us for details" },
    ],
  },
  {
    slug: "chandrayaan-series-led-bulb-packaging",
    name: "Chandrayaan Series LED Bulb Packaging",
    category: "Packaging",
    tagline: "Printed packaging",
    description:
      "Printed packaging for the Chandrayaan Series LED bulb range. Contact us for carton sizes, printed variants and minimum order details.",
    image: ASSETS.chandrayaanPackaging,
    imageAlt: "Chandrayaan Series LED bulb packaging box showing 20W, 30W, 40W and 50W variants",
    specs: [
      { label: "Product type", value: "LED bulb packaging" },
      { label: "Series", value: "Chandrayaan" },
      { label: "Variants", value: "20W / 30W / 40W / 50W" },
      { label: "Branding options", value: "Contact us for details" },
    ],
  },
  {
    slug: "solar-panel",
    name: "Solar Panel",
    category: "Solar",
    tagline: "Solar panel",
    description:
      "A solar panel supplied by Netron Lighting Industries. Contact us to confirm the current wattage range, sizes and availability.",
    image: ASSETS.solarPanel,
    imageAlt: "Solar panel product photograph from Netron Lighting Industries",
    specs: [
      { label: "Product type", value: "Solar panel" },
      { label: "Wattage", value: "Contact us for details" },
      { label: "Size", value: "Contact us for details" },
      { label: "Availability", value: "Contact us for details" },
    ],
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "LED Bulbs",
  "LED Lighting",
  "Ceiling Fans",
  "Packaging",
  "Solar",
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return PRODUCTS.filter(
    (p) => p.slug !== product.slug && p.category === product.category,
  )
    .concat(PRODUCTS.filter((p) => p.slug !== product.slug))
    .filter(
      (p, i, arr) => arr.findIndex((x) => x.slug === p.slug) === i,
    )
    .slice(0, limit);
}
