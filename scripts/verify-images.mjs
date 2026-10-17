import { chromium } from "playwright";
const BASE = "http://localhost:4173";
const ROUTES = ["/", "/about", "/products", "/products/netron-7w-led-downlight", "/manufacturing", "/why-us", "/gallery", "/contact"];
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

let coverCount = 0;
let distorted = 0;
let notPainted = 0;
let collapsed = 0;
let broken = 0;

for (const route of ROUTES) {
  await page.goto(BASE + route, { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise((r) => setTimeout(r, 800));
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(600);
  const data = await page.$$eval("img", (els) =>
    els.map((e) => {
      const cs = getComputedStyle(e);
      const r = e.getBoundingClientRect();
      return {
        src: (e.getAttribute("src") || "").split("/").pop(),
        fit: cs.objectFit,
        natural: e.naturalWidth + "x" + e.naturalHeight,
        nw: e.naturalWidth,
        natRatio: +(e.naturalWidth / e.naturalHeight).toFixed(3),
        rw: Math.round(r.width),
        rh: Math.round(r.height),
        renRatio: r.height > 0 ? +(r.width / r.height).toFixed(3) : 0,
        opacity: cs.opacity,
      };
    }),
  );
  for (const d of data) {
    if (d.fit === "cover") coverCount++;
    // natural-size images (no fixed aspect box) must keep their ratio (no stretch)
    if (d.fit === "fill" && d.renRatio && Math.abs(d.renRatio - d.natRatio) > 0.02) distorted++;
    if (d.opacity === "0") notPainted++;
    if (d.nw > 0 && (d.rw === 0 || d.rh === 0)) collapsed++;
    if (d.nw === 0) broken++;
  }
  console.log(
    `${route}: ${data.length} images, cover=${data.filter((d) => d.fit === "cover").length}, collapsed=${data.filter((d) => d.nw > 0 && (d.rw === 0 || d.rh === 0)).length}`,
  );
}

console.log("\nSummary:", { coverCount, distorted, notPainted, collapsed, broken });
await browser.close();
if (coverCount > 0 || distorted > 0 || notPainted > 0 || collapsed > 0 || broken > 0) {
  console.log("ISSUES FOUND");
  process.exit(1);
}
console.log("NO CROPPING / NO DISTORTION / NO COLLAPSE / ALL PAINTED");
