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
 * All 21 official Netron Lighting Industries photographs and posters.
 * Every image is shown uncropped with natural dimensions.
 */
export const GALLERY: GalleryImage[] = [
  {
    id: "img-01",
    src: ASSETS.productsBanner,
    label: "Brand",
    name: "Netron Lighting Industries — Quality & On-Time Delivery",
    alt: "Netron Lighting Industries Manufacturer & Suppliers of LED Products banner",
  },
  {
    id: "img-02",
    src: ASSETS.downlight9wPack,
    label: "Downlight",
    name: "Netron 9W Downlight (1 Year Guarantee)",
    alt: "Netron Lighting Industries 9W Downlight with 1 Year Guarantee packaging",
  },
  {
    id: "img-03",
    src: ASSETS.industrialRange,
    label: "Outdoor",
    name: "Industrial & Outdoor Lights (Street, Junction, Flood, Panel)",
    alt: "Netron Lighting Street Lights, Junction Lights, Flood Lights and Panel Lights IP65",
  },
  {
    id: "img-03",
    src: ASSETS.streetLight120w,
    label: "Street Light",
    name: "100W / 120W LED Street Light (IP65, 110 Lm/W)",
    alt: "Netron 100W / 120W LED Street Light with IP65 waterproof housing",
  },
  {
    id: "img-04",
    src: ASSETS.multiColorSpotDownlight,
    label: "Downlight",
    name: "5W / 9W Multi-Colour Spot & Downlight (IP65)",
    alt: "Netron 5W and 9W LED Downlight and Spot Light in 7 vibrant colors",
  },
  {
    id: "img-05",
    src: ASSETS.spotLight1y,
    label: "Spot Light",
    name: "Netron LED Spot Light (1 Year Guarantee)",
    alt: "Netron LED Spot Light with 1 Year Guarantee",
  },
  {
    id: "img-06",
    src: ASSETS.panelLightSlim,
    label: "Panel Light",
    name: "Netron LED Panel Light (Slim & Surface, 130 Lm/W)",
    alt: "Netron LED Panel Light 130 lm/watt with 12 months warranty",
  },
  {
    id: "img-07",
    src: ASSETS.ceilingFanHighAir,
    label: "Ceiling Fan",
    name: "Netron High Air Delivery Ceiling Fan (₹500)",
    alt: "Netron High Air Delivery Ceiling Fan with 1 Year Guarantee priced at ₹500",
  },
  {
    id: "img-08",
    src: ASSETS.ceilingFanMotor,
    label: "Fan Motor",
    name: "High Performance Ceiling Fan Motor (₹250)",
    alt: "Netron High Performance Ceiling Fan Motor with 1 Year Guarantee priced at ₹250",
  },
  {
    id: "img-09",
    src: ASSETS.ceilingFanPowerfulAir,
    label: "Ceiling Fan",
    name: "Netron Powerful Air Flow Ceiling Fan (₹600)",
    alt: "Netron Powerful Air Flow Ceiling Fan with 1 Year Guarantee priced at ₹600",
  },
  {
    id: "img-10",
    src: ASSETS.downlightPremium,
    label: "Downlight",
    name: "Netron Designer LED Downlight (₹600)",
    alt: "Netron Designer LED Downlight with 1 Year Guarantee priced at ₹600",
  },
  {
    id: "img-11",
    src: ASSETS.downlight7w,
    label: "Downlight",
    name: "Netron 7W LED Downlight (1 Year Guarantee)",
    alt: "Netron 7W LED Downlight with 1 Year Guarantee",
  },
  {
    id: "img-12",
    src: ASSETS.downlight9wColor,
    label: "Downlight",
    name: "Netron 9W Multi-Colour LED Downlight (7 Colours)",
    alt: "Netron 9W LED Downlight available in White, Yellow, Red, Green, Blue, Pink and Multi",
  },
  {
    id: "img-13",
    src: ASSETS.ledBulbSeries,
    label: "LED Bulb",
    name: "Netron LED Bulb Series (20W • 30W • 40W • 50W)",
    alt: "Netron Lighting LED Bulb Series 20W, 30W, 40W, and 50W",
  },
  {
    id: "img-14",
    src: ASSETS.fanFreedom24in,
    label: "Ceiling Fan",
    name: "Netron Freedom Model 24-Inch 4-Blade Ceiling Fan",
    alt: "Netron Freedom Model 24-Inch 4 Blades Ceiling Fan with 600mm sweep",
  },
  {
    id: "img-15",
    src: ASSETS.fanVedsunRunner24in,
    label: "Ceiling Fan",
    name: "Vedsun Runner 24-Inch High Speed Ceiling Fan (₹450)",
    alt: "Vedsun Runner Series 24-inch High Speed Ceiling Fan priced at ₹450",
  },
  {
    id: "img-16",
    src: ASSETS.fanSummerBeat48in,
    label: "Ceiling Fan",
    name: "Netron Summer Beat 48-Inch Ceiling Fan (₹800)",
    alt: "Netron Summer Beat 48-Inch Aluminium Ceiling Fan priced at ₹800",
  },
  {
    id: "img-17",
    src: ASSETS.cobDownlightAluminum,
    label: "COB Light",
    name: "Premium COB LED Downlight (Aluminium Housing)",
    alt: "Netron Premium Quality COB LED Downlight with aluminium housing",
  },
  {
    id: "img-18",
    src: ASSETS.slimPanelDownlight,
    label: "Downlight",
    name: "Netron Slim Panel Series LED Downlight",
    alt: "Netron Slim Panel Series LED Downlight made in India",
  },
  {
    id: "img-19",
    src: ASSETS.foldableLedBulb4Blade,
    label: "LED Bulb",
    name: "Netron 4-Blade Foldable LED Bulb (360° Light)",
    alt: "Netron 4-Blade Foldable LED Bulb showing folded and expanded dimensions",
  },
  {
    id: "img-21",
    src: ASSETS.chandrayaan50wBulb,
    label: "LED Bulb",
    name: "Chandrayaan Series 50W High Power LED Bulb",
    alt: "Netron Chandrayaan Series 50W High Power LED bulb",
  },
];
