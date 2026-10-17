export const COMPANY = {
  name: "Netron Lighting Industries",
  business: "LED Bulb Manufacturing",
  phoneDisplay: "+91 9621346653",
  phoneDial: "tel:+919621346653",
  whatsappBase: "https://wa.me/919621346653",
  address: {
    street: "Patel Chauraha, Meja Road",
    city: "Prayagraj",
    region: "Uttar Pradesh",
    country: "India",
  },
  get addressLine() {
    return `${this.address.street}, ${this.address.city}, ${this.address.region}, ${this.address.country}`;
  },
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Netron Lighting Industries, Patel Chauraha, Meja Road, Prayagraj, Uttar Pradesh, India",
    ),
} as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Netron Lighting Industries, I would like to enquire about your LED bulbs.";

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `${COMPANY.whatsappBase}?text=${encodeURIComponent(message)}`;
}

export function productWhatsappUrl(productName: string): string {
  return whatsappUrl(
    `Hello Netron Lighting Industries, I would like to enquire about the product: ${productName}.`,
  );
}
