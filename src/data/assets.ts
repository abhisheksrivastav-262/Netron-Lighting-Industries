const BASE = "/images/";

/**
 * Central registry of Netron Lighting Industries official product & company graphics.
 * All 20 supplied images from public/images are mapped here with clean URLs.
 * Backward-compatible keys are preserved so all site pages render without broken images.
 */
export const ASSETS = {
  logo: `${BASE}logo.png`,
  logoSquare: `${BASE}logo-512.png`,
  logoShare: `${BASE}logo-share.png`,
  logoOriginal: `${BASE}logo.jpeg`,

  // 20 New Official Product & Marketing Assets (clean hardlinked paths)
  productsBanner: `${BASE}netron-led-products.png`,
  industrialRange: `${BASE}industrial-outdoor-lights.png`,
  streetLight120w: `${BASE}led-street-light-120w.png`,
  multiColorSpotDownlight: `${BASE}multicolor-downlight-spotlight.png`,
  spotLight1y: `${BASE}led-spot-light-1y.png`,
  panelLightSlim: `${BASE}led-panel-light-slim.png`,
  ceilingFanHighAir: `${BASE}ceiling-fan-high-air.png`,
  ceilingFanMotor: `${BASE}ceiling-fan-motor.png`,
  ceilingFanPowerfulAir: `${BASE}ceiling-fan-powerful-airflow.png`,
  downlightPremium: `${BASE}premium-led-downlight.png`,
  downlight7w: `${BASE}7w-led-downlight.png`,
  downlight9wColor: `${BASE}9w-multicolor-downlight.png`,
  ledBulbSeries: `${BASE}led-bulb-series-20-50w.png`,
  fanFreedom24in: `${BASE}freedom-24in-ceiling-fan.png`,
  fanVedsunRunner24in: `${BASE}vedsun-runner-24in-fan.png`,
  fanSummerBeat48in: `${BASE}summer-beat-48in-fan.png`,
  cobDownlightAluminum: `${BASE}cob-led-downlight-aluminum.png`,
  slimPanelDownlight: `${BASE}slim-panel-led-downlight.png`,
  foldableLedBulb4Blade: `${BASE}4-blade-foldable-led-bulb.png`,
  chandrayaan50wBulb: `${BASE}chandrayaan-50w-led-bulb.png`,

  // Backwards-compatible aliases for existing page references
  brandBoard: `${BASE}netron-led-products.png`,
  signboard: `${BASE}netron-led-products.png`,
  founder: `${BASE}logo-512.png`,
  ledBulb9w: `${BASE}chandrayaan-50w-led-bulb.png`,
  ledBulb: `${BASE}4-blade-foldable-led-bulb.png`,
  ledBulbLit: `${BASE}chandrayaan-50w-led-bulb.png`,
  chandrayaanPackaging: `${BASE}led-bulb-series-20-50w.png`,
  ariaFan: `${BASE}freedom-24in-ceiling-fan.png`,
  etoileFan: `${BASE}vedsun-runner-24in-fan.png`,
  zephyrFan: `${BASE}summer-beat-48in-fan.png`,
  amareFan: `${BASE}ceiling-fan-high-air.png`,
  suzexFan: `${BASE}ceiling-fan-powerful-airflow.png`,
  suzexFanDisplay: `${BASE}ceiling-fan-powerful-airflow.png`,
  solarPanel: `${BASE}industrial-outdoor-lights.png`,
  ceilingFanA: `${BASE}ceiling-fan-high-air.png`,
  ceilingFanB: `${BASE}freedom-24in-ceiling-fan.png`,
  ceilingFanC: `${BASE}vedsun-runner-24in-fan.png`,
  ceilingFanD: `${BASE}summer-beat-48in-fan.png`,
} as const;

export type AssetKey = keyof typeof ASSETS;
