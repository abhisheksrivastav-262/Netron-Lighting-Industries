import pkg from '/Users/abhisheksrivastav/Documents/Netron Lighting Industries/node_modules/playwright/index.js';
const { chromium } = pkg;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 390, height: 844 } });
await p.goto("http://localhost:4173/", { waitUntil: "networkidle" });
await p.evaluate(() => window.scrollTo(0, 1200));
await p.waitForTimeout(300);
console.log("before click:", await p.evaluate(() => window.scrollY));
// click and immediately measure
await p.click('button[aria-label="Open navigation menu"]');
for (let i = 0; i < 5; i++) {
  await p.waitForTimeout(50);
  console.log(`t=${(i+1)*50}ms:`, await p.evaluate(() => window.scrollY));
}
await b.close();
