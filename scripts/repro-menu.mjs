import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 390, height: 844 } });
await p.goto("http://localhost:4173/", { waitUntil: "networkidle" });
// scroll down
await p.evaluate(() => window.scrollTo(0, 1200));
await p.waitForTimeout(300);
// click hamburger
await p.click('button[aria-label="Open navigation menu"]');
await p.waitForTimeout(400);
const state = await p.evaluate(() => {
  const panel = document.querySelector('[id^=":r"]');
  // find panel by aria-controls
  return {
    scrollY: window.scrollY,
    headerTop: document.querySelector("header").getBoundingClientRect().top,
    panelRect: (() => {
      const el = document.querySelector("header > div.lg\\:hidden") || [...document.querySelectorAll("div")].find(d => /max-h-\[32rem\]/.test(d.className));
      return el ? el.getBoundingClientRect() : null;
    })(),
    panelVisible: (() => {
      const el = [...document.querySelectorAll("div")].find(d => /max-h-\[32rem\]/.test(d.className));
      return el ? { opacity: getComputedStyle(el).opacity, maxHeight: getComputedStyle(el).maxHeight, overflow: getComputedStyle(el).overflow } : null;
    })(),
    linksVisible: [...document.querySelectorAll("header a, header button")].filter(e => e.textContent.trim().length > 0).map(e => ({ t: e.textContent.trim().slice(0,20), r: e.getBoundingClientRect() })).filter(x => x.r.height > 0),
  };
});
console.log(JSON.stringify(state, null, 2));
await b.close();
