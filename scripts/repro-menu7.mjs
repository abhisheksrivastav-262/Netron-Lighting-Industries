import pkg from '/Users/abhisheksrivastav/Documents/Netron Lighting Industries/node_modules/playwright/index.js';
const { chromium } = pkg;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 390, height: 844 } });
await p.goto("http://localhost:4173/", { waitUntil: "networkidle" });
await p.evaluate(() => window.scrollTo(0, 1200));
await p.waitForTimeout(300);
await p.click('button[aria-label="Open navigation menu"]');
await p.waitForTimeout(500);
// click the Gallery link inside the mobile panel (second occurrence / the visible one)
const clicked = await p.evaluate(() => {
  const panel = [...document.querySelectorAll("div")].find(d => /max-h-\[32rem\]/.test(d.className));
  const link = [...panel.querySelectorAll("a")].find(a => a.textContent.trim() === "Gallery");
  if (!link) return "no link";
  link.click();
  return "clicked";
});
console.log("click result:", clicked);
await p.waitForTimeout(600);
console.log("url after click:", p.url());
await b.close();
