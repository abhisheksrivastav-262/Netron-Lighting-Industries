import pkg from '/Users/abhisheksrivastav/Documents/Netron Lighting Industries/node_modules/playwright/index.js';
const { chromium } = pkg;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 390, height: 844 } });
await p.goto("http://localhost:4173/", { waitUntil: "networkidle" });
await p.evaluate(() => window.scrollTo(0, 1200));
await p.waitForTimeout(300);
let info = await p.evaluate(() => ({
  before: { scrollY: window.scrollY, headerTop: document.querySelector("header").getBoundingClientRect().top, pos: getComputedStyle(document.querySelector("header")).position }
}));
console.log("before open:", JSON.stringify(info));
await p.click('button[aria-label="Open navigation menu"]');
await p.waitForTimeout(400);
info = await p.evaluate(() => ({
  after: { scrollY: window.scrollY, headerTop: document.querySelector("header").getBoundingClientRect().top, pos: getComputedStyle(document.querySelector("header")).position, bodyOverflow: document.body.style.overflow }
}));
console.log("after open:", JSON.stringify(info));
// try scrolling
await p.evaluate(() => window.scrollTo(0, 1200));
await p.waitForTimeout(200);
info = await p.evaluate(() => ({ scrollY: window.scrollY, headerTop: document.querySelector("header").getBoundingClientRect().top }));
console.log("after scroll attempt:", JSON.stringify(info));
await b.close();
