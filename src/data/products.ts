import { ASSETS } from "./assets";

export type ProductCategory =
  | "LED Bulbs"
  | "LED Downlights"
  | "Ceiling Fans"
  | "Outdoor & Industrial"
  | "Panel Lights"
  | "Fan Components"
  | "Company & Quality";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  price?: string;
  specs: { label: string; value: string }[];
}

/**
 * All 20 official Netron Lighting Industries products & marketing posters.
 * Every product image is mapped from public/images, never cropped,
 * and matched with technical specifications verified directly from the posters.
 */
export const PRODUCTS: Product[] = [
  {
    slug: "netron-led-bulb-series-20w-50w",
    name: "Netron LED Bulb Series (20W - 50W)",
    category: "LED Bulbs",
    tagline: "20W • 30W • 40W • 50W • 85% Energy Saving",
    description:
      "Heavy-duty commercial and residential high-wattage LED bulb range from Netron Lighting Industries. Available in 20W, 30W, 40W, and 50W models delivering up to 85% energy savings and superior heat dissipation.",
    image: ASSETS.ledBulbSeries,
    imageAlt: "Netron Lighting LED Bulb Series 20W, 30W, 40W, and 50W packaging and bulbs",
    specs: [
      { label: "Product type", value: "High Power LED Bulb" },
      { label: "Wattage range", value: "20W / 30W / 40W / 50W" },
      { label: "Energy saving", value: "Up to 85% Energy Saving" },
      { label: "Brand", value: "Netron Lighting Industries" },
      { label: "Base type", value: "Standard B22 / E27" },
    ],
  },
  {
    slug: "netron-chandrayaan-50w-led-bulb",
    name: "Chandrayaan Series 50W LED Bulb",
    category: "LED Bulbs",
    tagline: "High Power • 85% Energy Saving • High Brightness",
    description:
      "Netron Chandrayaan Series 50W high-power LED bulb engineered for spacious shops, workshops, banquet halls, and outdoor sheds. Delivers intense luminous flux with long service life and high energy efficiency.",
    image: ASSETS.chandrayaan50wBulb,
    imageAlt: "Netron Chandrayaan Series 50W High Power LED bulb",
    specs: [
      { label: "Product type", value: "High Power LED Bulb" },
      { label: "Series", value: "Chandrayaan Series" },
      { label: "Wattage", value: "50W" },
      { label: "Energy saving", value: "Up to 85%" },
      { label: "Illumination", value: "High Brightness Long Life" },
    ],
  },
  {
    slug: "netron-4-blade-foldable-led-bulb",
    name: "Netron 4-Blade Foldable LED Bulb",
    category: "LED Bulbs",
    tagline: "Foldable Fan-Blade Design • Expansive 360° Light",
    description:
      "Innovative 4-blade foldable fan-style LED bulb. Folds into a compact 6.5 x 15 cm body and expands to 19.5 x 9.5 cm for wide-area panoramic illumination. Built with durable heat-resistant materials and high-efficiency LED chips.",
    image: ASSETS.foldableLedBulb4Blade,
    imageAlt: "Netron 4-Blade Foldable LED Bulb showing folded and expanded dimensions",
    specs: [
      { label: "Product type", value: "Foldable LED Bulb" },
      { label: "Blade design", value: "4 Multi-Angle Adjustable Blades" },
      { label: "Folded size", value: "6.5 cm x 15 cm" },
      { label: "Expanded size", value: "19.5 cm x 9.5 cm" },
      { label: "Features", value: "Bright LED, Durable Build, Energy Efficient" },
    ],
  },
  {
    slug: "netron-7w-led-downlight",
    name: "Netron 7W LED Downlight",
    category: "LED Downlights",
    tagline: "7W Downlight • 1 Year Guarantee",
    description:
      "Standard 7W recessed LED downlight from Netron Lighting Industries. Engineered with an efficient heat-sink, glare-free optical diffuser, and reliable driver backed by a 1-year guarantee.",
    image: ASSETS.downlight7w,
    imageAlt: "Netron 7W LED Downlight with 1 Year Guarantee",
    specs: [
      { label: "Product type", value: "Recessed LED Downlight" },
      { label: "Wattage", value: "7W" },
      { label: "Guarantee", value: "1 Year Guarantee" },
      { label: "Fitment", value: "Concealed / False Ceiling" },
      { label: "Quality", value: "Reliable Performance" },
    ],
  },
  {
    slug: "netron-9w-multicolour-downlight",
    name: "Netron 9W Multi-Colour LED Downlight",
    category: "LED Downlights",
    tagline: "Brighter • Smarter • Longer • 7 Color Options",
    description:
      "Made in India 9W LED downlight designed for AC 85-265V 50/60Hz. IP22 rated with 50,000 hours service life. Available in 7 distinct single colors plus Multi-colour mode.",
    image: ASSETS.downlight9wColor,
    imageAlt: "Netron 9W LED Downlight available in White, Yellow, Red, Green, Blue, Pink and Multi",
    specs: [
      { label: "Wattage", value: "9W" },
      { label: "Voltage", value: "AC 85-265V 50/60Hz" },
      { label: "Available colours", value: "White, Yellow, Red, Green, Blue, Pink, Multi" },
      { label: "Lifespan", value: "50,000 Hours" },
      { label: "Ingress rating", value: "IP22 (Made in India)" },
    ],
  },
  {
    slug: "netron-multicolour-spot-downlight",
    name: "Netron 5W / 9W Spot & Downlight System",
    category: "LED Downlights",
    tagline: "5W & 9W Variants • IP65 Waterproof • 7 Colors",
    description:
      "Dual-capability 5 Watt and 9 Watt spot/downlight engineered for high-brightness architectural illumination. Features IP65 waterproof housing for both indoor and outdoor applications with 50,000+ hours working life.",
    image: ASSETS.multiColorSpotDownlight,
    imageAlt: "Netron 5W and 9W LED Downlight and Spot Light in multiple colors",
    specs: [
      { label: "Wattage options", value: "5 Watt / 9 Watt" },
      { label: "Waterproof rating", value: "IP65 (Indoor & Outdoor)" },
      { label: "Colours", value: "White, Yellow, Red, Green, Blue, Pink, Multi" },
      { label: "Working hours", value: "50,000+ Hours" },
      { label: "Voltage range", value: "AC 85-265V" },
    ],
  },
  {
    slug: "netron-led-spot-light-1y",
    name: "Netron LED Spot Light (1 Year Guarantee)",
    category: "LED Downlights",
    tagline: "Focused High Intensity Beam • 1 Year Guarantee",
    description:
      "Compact, focused Netron LED spotlight designed for modern interior showcases, accent walls, and ceiling highlights. Tested for zero flicker and backed by a 1-year guarantee.",
    image: ASSETS.spotLight1y,
    imageAlt: "Netron LED Spot Light with 1 Year Guarantee",
    specs: [
      { label: "Product type", value: "LED Spot Light" },
      { label: "Guarantee", value: "1 Year Guarantee" },
      { label: "Beam angle", value: "Narrow Focused Beam" },
      { label: "Energy efficiency", value: "High Lumen per Watt" },
    ],
  },
  {
    slug: "netron-cob-led-downlight-aluminum",
    name: "Netron Premium COB LED Downlight",
    category: "LED Downlights",
    tagline: "Aluminium Housing • First Class COB Chip • Low Glare",
    description:
      "Premium architectural COB LED downlight featuring heavy-duty aluminium housing, dust-proof sealing, standard electrical safety cable, and colourful metallic finish reflectors. Delivers brighter spaces and better living.",
    image: ASSETS.cobDownlightAluminum,
    imageAlt: "Netron Premium Quality COB LED Downlight with aluminium housing",
    specs: [
      { label: "Housing", value: "Die-Cast Aluminium, Dust Proof" },
      { label: "COB chip", value: "First Class LED COB (High Lumen)" },
      { label: "Reflector", value: "Colorful Metallic Finish Reflector" },
      { label: "Glare rating", value: "Low Glare & Eye Comfort" },
      { label: "Application", value: "Premium Indoor Lighting" },
    ],
  },
  {
    slug: "netron-premium-designer-downlight",
    name: "Netron Designer LED Downlight (₹600)",
    category: "LED Downlights",
    tagline: "High Brightness • Low Glare • ₹600",
    description:
      "Designer architectural LED downlight priced at ₹600 with 1-year guarantee. Offers deep reflector anti-glare technology and radiant illumination for upscale residences, offices, and hotels.",
    image: ASSETS.downlightPremium,
    imageAlt: "Netron Designer LED Downlight with 1 Year Guarantee priced at ₹600",
    price: "₹600",
    specs: [
      { label: "Price", value: "₹600" },
      { label: "Guarantee", value: "1 Year Guarantee" },
      { label: "Illumination", value: "High Brightness & Low Glare" },
      { label: "Efficiency", value: "Energy Efficient & Durable" },
    ],
  },
  {
    slug: "netron-slim-panel-led-downlight",
    name: "Netron Slim Panel Series LED Downlight",
    category: "LED Downlights",
    tagline: "Slim Panel • AC 85-265V • Easy Installation",
    description:
      "Ultra-slim recessed LED downlight from Netron Lighting Industries. Tailored for shallow false ceilings with high brightness output, energy saving circuitry, and snap-in spring clips for rapid installation.",
    image: ASSETS.slimPanelDownlight,
    imageAlt: "Netron Slim Panel Series LED Downlight made in India",
    specs: [
      { label: "Series", value: "Slim Panel Series" },
      { label: "Voltage", value: "AC 85-265V 50/60Hz" },
      { label: "Origin", value: "Made in India" },
      { label: "Installation", value: "Easy Spring Clip Mount" },
      { label: "Features", value: "High Brightness & Energy Saving" },
    ],
  },
  {
    slug: "netron-slim-surface-panel-light",
    name: "Netron LED Panel Light (Slim & Surface)",
    category: "Panel Lights",
    tagline: "130 Lm/Watt • 85% Energy Saving • 12 Months Warranty",
    description:
      "High-efficiency Netron LED panel light available in Slim Panel and Surface Panel formats. Delivers 130 lumens/watt with up to 85% power savings and 50,000 hours lifespan. Make in India certified with a 12-month warranty.",
    image: ASSETS.panelLightSlim,
    imageAlt: "Netron LED Panel Light 130 lm/watt with 12 months warranty",
    specs: [
      { label: "Luminous efficacy", value: "130 Lumens / Watt" },
      { label: "Energy saving", value: "85% Energy Saving" },
      { label: "Lifespan", value: "Up to 50,000 Hours" },
      { label: "Warranty", value: "12 Months Warranty" },
      { label: "Mounting types", value: "Slim Panel & Surface Panel Light" },
    ],
  },
  {
    slug: "netron-summer-beat-48in-ceiling-fan",
    name: "Netron Summer Beat 48-Inch Ceiling Fan (₹800)",
    category: "Ceiling Fans",
    tagline: "1200mm Sweep • Aluminium Blades • ₹800",
    description:
      "Premium 48-inch (1200mm) ceiling fan manufactured by ISO 9001:2015 certified Netron Lighting Industries. Equipped with 3 aerodynamically balanced aluminium blades for high air throw and smooth, quiet cooling.",
    image: ASSETS.fanSummerBeat48in,
    imageAlt: "Netron Summer Beat 48-Inch Aluminium Ceiling Fan priced at ₹800",
    price: "₹800",
    specs: [
      { label: "Price", value: "₹800" },
      { label: "Sweep size", value: "1200 mm (48-Inch)" },
      { label: "Blades", value: "3x Aerodynamic Aluminium Blades" },
      { label: "Certification", value: "ISO 9001:2015 Certified Company" },
      { label: "Model", value: "Summer Beat" },
    ],
  },
  {
    slug: "netron-freedom-24-inch-ceiling-fan",
    name: "Netron Freedom Model 24-Inch Ceiling Fan",
    category: "Ceiling Fans",
    tagline: "24-Inch • 4x Aluminium Blades • 600mm Sweep",
    description:
      "Compact 24-inch 4-blade high-speed ceiling fan ideal for kitchens, corridors, cabins, and compact living rooms. Features 600mm sweep, aluminium winding, high RPM motor, and standard 8-piece master carton packaging.",
    image: ASSETS.fanFreedom24in,
    imageAlt: "Netron Freedom Model 24-Inch 4 Blades Ceiling Fan with 600mm sweep",
    specs: [
      { label: "Sweep size", value: "600 mm (24-Inch)" },
      { label: "Blades", value: "4x High-Speed Blades" },
      { label: "Winding", value: "Aluminium Winding" },
      { label: "Packing", value: "8 pcs per master carton" },
      { label: "Model", value: "Freedom Model" },
    ],
  },
  {
    slug: "vedsun-runner-24in-high-speed-fan",
    name: "Vedsun Runner 24-Inch High Speed Ceiling Fan (₹450)",
    category: "Ceiling Fans",
    tagline: "High Speed • Double Ball Bearing • ₹450",
    description:
      "Vedsun Runner Series 24-inch ceiling fan manufactured by Netron Lighting Industries. Features double ball bearings, aerodynamic aluminium blades for higher air delivery, and stator season warranty at ₹450.",
    image: ASSETS.fanVedsunRunner24in,
    imageAlt: "Vedsun Runner Series 24-inch High Speed Ceiling Fan priced at ₹450",
    price: "₹450",
    specs: [
      { label: "Price", value: "₹450" },
      { label: "Sweep size", value: "24-Inch High Speed" },
      { label: "Bearing", value: "Double Ball Bearing" },
      { label: "Warranty", value: "Season Warranty (Stator Only)" },
      { label: "Air delivery", value: "Higher Air Delivery Aerodynamic Design" },
    ],
  },
  {
    slug: "netron-high-air-delivery-ceiling-fan",
    name: "Netron High Air Delivery Ceiling Fan (₹500)",
    category: "Ceiling Fans",
    tagline: "High Air Delivery • Low Noise • ₹500",
    description:
      "Value-packed Netron ceiling fan priced at ₹500 with a 1-year guarantee. Engineered for robust air throw, whisper-quiet operation, and low electricity consumption.",
    image: ASSETS.ceilingFanHighAir,
    imageAlt: "Netron High Air Delivery Ceiling Fan with 1 Year Guarantee priced at ₹500",
    price: "₹500",
    specs: [
      { label: "Price", value: "₹500" },
      { label: "Guarantee", value: "1 Year Guarantee" },
      { label: "Performance", value: "High Air Delivery" },
      { label: "Noise", value: "Low Noise Energy Saving" },
      { label: "Durability", value: "Durable & Reliable" },
    ],
  },
  {
    slug: "netron-powerful-air-flow-ceiling-fan",
    name: "Netron Powerful Air Flow Ceiling Fan (₹600)",
    category: "Ceiling Fans",
    tagline: "Powerful Air Flow • 1 Year Guarantee • ₹600",
    description:
      "Netron luxury series ceiling fan priced at ₹600 with a 1-year guarantee. Features powerful air flow dynamics, low noise bearings, and long-lasting motor casing.",
    image: ASSETS.ceilingFanPowerfulAir,
    imageAlt: "Netron Powerful Air Flow Ceiling Fan with 1 Year Guarantee priced at ₹600",
    price: "₹600",
    specs: [
      { label: "Price", value: "₹600" },
      { label: "Guarantee", value: "1 Year Guarantee" },
      { label: "Air flow", value: "Powerful Air Flow" },
      { label: "Efficiency", value: "Energy Efficient & Low Noise" },
    ],
  },
  {
    slug: "netron-ceiling-fan-motor",
    name: "Netron Ceiling Fan Motor (₹250)",
    category: "Fan Components",
    tagline: "High Performance Motor • 1 Year Guarantee • ₹250",
    description:
      "High-performance replacement and assembly ceiling fan motor from Netron Lighting Industries. Equipped with copper winding, low-noise operation, and backed by a 1-year guarantee.",
    image: ASSETS.ceilingFanMotor,
    imageAlt: "Netron High Performance Ceiling Fan Motor with 1 Year Guarantee priced at ₹250",
    price: "₹250",
    specs: [
      { label: "Price", value: "₹250" },
      { label: "Guarantee", value: "1 Year Guarantee" },
      { label: "Performance", value: "High Performance Low Noise" },
      { label: "Efficiency", value: "Energy Efficient" },
      { label: "Build", value: "Durable & Reliable" },
    ],
  },
  {
    slug: "netron-led-street-light-120w",
    name: "Netron 100W / 120W LED Street Light",
    category: "Outdoor & Industrial",
    tagline: "110 Lm/Watt • IP65 Waterproof • 50,000+ Hours",
    description:
      "High-output 100W / 120W LED street light delivering up to 110 lumens/watt. Features IP65 waterproof rugged die-cast enclosure, high-brightness LED chips, low power consumption, and 50,000+ hours lifespan.",
    image: ASSETS.streetLight120w,
    imageAlt: "Netron 100W/120W LED Street Light with IP65 waterproof housing",
    specs: [
      { label: "Wattage", value: "100W / 120W" },
      { label: "Luminous output", value: "Up to 110 Lumens / Watt" },
      { label: "Protection", value: "IP65 Waterproof" },
      { label: "Lifespan", value: "50,000+ Hours" },
      { label: "Enclosure", value: "Rugged & Durable Design" },
    ],
  },
  {
    slug: "netron-industrial-lighting-range",
    name: "Netron Industrial & Outdoor Lighting Range",
    category: "Outdoor & Industrial",
    tagline: "Street • Junction • Flood • Panel Lights (IP65)",
    description:
      "Commercial and industrial heavy-duty outdoor luminaire portfolio from Netron Lighting Industries. Includes IP65 rated Street Lights, Junction Lights, Flood Lights, and High-Output Industrial Panel Lights.",
    image: ASSETS.industrialRange,
    imageAlt: "Netron Lighting Industries Street, Junction, Flood and Panel Lights range",
    specs: [
      { label: "Product scope", value: "Street, Junction, Flood & Panel Lights" },
      { label: "Weatherproofing", value: "IP65 Rating" },
      { label: "Application", value: "Roadways, Industrial Plants, Yards & Warehouses" },
      { label: "Supply", value: "Direct Manufacturer Supply" },
    ],
  },
  {
    slug: "netron-manufacturing-quality-guarantee",
    name: "Netron Manufacturing & Quality Guarantee",
    category: "Company & Quality",
    tagline: "Quality in Best Price and On Time Delivery",
    description:
      "Official manufacturing and supply assurance from Netron Lighting Industries. We manufacture and supply high-grade LED bulbs, ceiling fans, and luminaires directly to distributors, contractors, and retailers nationwide.",
    image: ASSETS.productsBanner,
    imageAlt: "Netron Lighting Industries Manufacturer and Suppliers of LED Products",
    specs: [
      { label: "Company", value: "Netron Lighting Industries" },
      { label: "Core philosophy", value: "Quality in Best Price & On-Time Delivery" },
      { label: "Facility base", value: "Patel Chauraha, Meja Road, Prayagraj (UP)" },
      { label: "Trade inquiries", value: "Bulk Orders & Dealerships Welcome" },
    ],
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "LED Bulbs",
  "LED Downlights",
  "Ceiling Fans",
  "Outdoor & Industrial",
  "Panel Lights",
  "Fan Components",
  "Company & Quality",
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
