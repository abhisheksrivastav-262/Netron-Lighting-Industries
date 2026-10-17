import pkg from '/Users/abhisheksrivastav/Documents/Netron Lighting Industries/node_modules/playwright/index.js';
const { chromium } = pkg;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 390, height: 844 } });
await p.goto("http://localhost:4173/", { waitUntil: "networkidle" });
await p.evaluate(() => window.scrollTo(0, 1200));
await p.waitForTimeout(300);
await p.click('button[aria-label="Open navigation menu"]');
await p.waitForTimeout(400);
const panel = await p.evaluate(() => {
  const el = [...document.querySelectorAll("div")].find(d => /fixed inset-x-0 top-16/.test(d.className));
  const r = el ? el.getBoundingClientRect() : null;
  return { found: !!el, rect: r ? { top: Math.round(r.top), left: Math.round(r.left), width: Math.round(r.width), height: Math.round(r.height) } : null };
});
console.log("panel:", JSON.stringify(panel));
// check a link is clickable (in viewport)
const link = await p.evaluate(() => {
  const a = [...document.querySelectorAll("header a")].find(x => x.textContent.trim() === "Gallery");
  const r = a ? a.getBoundingClientRect() : null;
  return r ? { top: Math.round(r.top), bottom: Math.round(r.bottom), visible: r.top >= 0 && r.bottom <= 844 } : null;
});
console.log("Gallery link:", JSON.stringify(link));
// navigate via link
await p.click('text=Gallery');
await p.waitForTimeout(500);
console.log("after click url:", p.url());
await b.close();
