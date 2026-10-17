import pkg from '/Users/abhisheksrivastav/Documents/Netron Lighting Industries/node_modules/playwright/index.js';
const { chromium } = pkg;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 390, height: 844 } });
await p.goto("http://localhost:4173/", { waitUntil: "networkidle" });
await p.evaluate(() => window.scrollTo(0, 1200));
await p.waitForTimeout(300);
await p.click('button[aria-label="Open navigation menu"]');
await p.waitForTimeout(500);
// find panel
const panelInfo = await p.evaluate(() => {
  const el = [...document.querySelectorAll("div")].find(d => /max-h-\[32rem\]/.test(d.className));
  const r = el ? el.getBoundingClientRect() : null;
  return r ? { top: Math.round(r.top), height: Math.round(r.height), bottom: Math.round(r.bottom) } : null;
});
console.log("panel rect:", JSON.stringify(panelInfo));
// find Gallery link in panel
const galleryLink = await p.evaluate(() => {
  const links = [...document.querySelectorAll("header a, header button")];
  const g = links.find(x => x.textContent.trim() === "Gallery");
  const r = g ? g.getBoundingClientRect() : null;
  return r ? { top: Math.round(r.top), bottom: Math.round(r.bottom), visible: r.top >= 0 && r.bottom <= 844 } : null;
});
console.log("Gallery link:", JSON.stringify(galleryLink));
// click it
await p.click('header a:has-text("Gallery")');
await p.waitForTimeout(600);
console.log("url after click:", p.url());
await b.close();
