import pkg from '/Users/abhisheksrivastav/Documents/Netron Lighting Industries/node_modules/playwright/index.js'; const { chromium } = pkg;
const b = await chromium.launch();
for (const vp of [{width:1440,height:900},{width:390,height:844}]) {
  const p = await b.newPage({ viewport: vp });
  await p.goto("http://localhost:4173/", { waitUntil: "networkidle" });
  await p.evaluate(() => window.scrollTo(0, 1200));
  await p.waitForTimeout(300);
  const info = await p.evaluate(() => ({
    scrollY: window.scrollY,
    headerTop: document.querySelector("header").getBoundingClientRect().top,
    headerPos: getComputedStyle(document.querySelector("header")).position,
    htmlOverflow: getComputedStyle(document.documentElement).overflowX,
  }));
  console.log(JSON.stringify(vp), JSON.stringify(info));
  await p.close();
}
await b.close();
