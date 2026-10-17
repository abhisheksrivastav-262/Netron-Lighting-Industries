import { chromium } from "playwright";

const BASE = "http://localhost:4173";
const results = [];
const check = (name, ok, detail = "") =>
  results.push(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? ` (${detail})` : ""}`);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

// ---- Home page ----
await page.goto(BASE + "/", { waitUntil: "networkidle" });

const hero = await page.evaluate(() => {
  const h1 = document.querySelector("h1");
  const cs = getComputedStyle(h1);
  return {
    bg: cs.backgroundImage,
    anim: cs.animationName,
    color: getComputedStyle(h1.querySelector("span") || h1).color,
    text: h1.textContent.slice(0, 40),
  };
});
check("hero h1 gradient background", hero.bg.includes("linear-gradient"), hero.bg.slice(0, 60));
check("hero h1 animated gradient", hero.anim.includes("gradShift"), hero.anim);
check("hero h1 has real text", hero.text.length > 0, JSON.stringify(hero.text));

const stagger = await page.evaluate(() => {
  const sel = 'main [style*="animation-delay"]';
  return [...document.querySelectorAll(sel)].length;
});
check("hero staggered entrance elements", stagger >= 3, `${stagger} elements`);

const progress = await page.evaluate(() => {
  const bar = document.querySelector('header div[style*="width"]');
  return bar ? { found: true, width: Math.round(bar.getBoundingClientRect().width) } : { found: false };
});
check("navbar scroll-progress bar present", progress.found && progress.width === 0,
  JSON.stringify(progress));

const sticky = await page.evaluate(async () => {
  const header = document.querySelector("header");
  window.scrollTo(0, 1500);
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  const r = header.getBoundingClientRect();
  window.scrollTo(0, 0);
  return { top: Math.round(r.top), pos: getComputedStyle(header).position };
});
check("sticky header still works with overflow-x clip", sticky.pos === "sticky" && sticky.top === 0,
  `position=${sticky.pos} top=${sticky.top}`);

// progress bar width after scroll
await page.evaluate(() => window.scrollTo(0, 1500));
await page.waitForTimeout(400);
const barWidth = await page.evaluate(() => {
  const bar = document.querySelector('header div[style*="width"]');
  if (!bar) return -1;
  return Math.round(bar.getBoundingClientRect().width);
});
const scrollWidth = await page.evaluate(() => window.innerWidth);
check("progress bar grows on scroll", barWidth > 50 && barWidth <= scrollWidth,
  `${barWidth}px of ${scrollWidth}px`);
await page.evaluate(() => window.scrollTo(0, 0));

// reveals resolve to visible (no stuck opacity 0 / transform)
await page.evaluate(async () => {
  const step = window.innerHeight * 0.7;
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 130));
  }
  window.scrollTo(0, document.body.scrollHeight);
});
await page.waitForTimeout(1200);
const reveals = await page.evaluate(() => {
  const els = [...document.querySelectorAll(".reveal")];
  const stuck = els.filter((el) => parseFloat(getComputedStyle(el).opacity) < 0.99);
  return {
    total: els.length,
    stuck: stuck.length,
    sample: stuck.slice(0, 3).map((e) => `${e.className}:${getComputedStyle(e).opacity}`),
  };
});
check("all reveals become visible after scrolling through", reveals.stuck === 0,
  `${reveals.total} reveals, ${reveals.stuck} stuck ${JSON.stringify(reveals.sample)}`);

// floating contact buttons visible & overlapping check
const float = await page.evaluate(() => {
  const btns = [...document.querySelectorAll('a[href^="tel:"], a[href^="https://wa.me"]')]
    .filter((a) => a.closest('div[class*="fixed"]'));
  const rects = btns.map((b) => b.getBoundingClientRect());
  const overlap = rects.length === 2 &&
    rects[0].right > rects[1].left && rects[0].left < rects[1].right &&
    rects[0].bottom > rects[1].top && rects[0].top < rects[1].bottom;
  return { count: rects.length, overlap, visible: rects.every((r) => r.width > 0 && r.height > 0) };
});
check("floating Call + WhatsApp visible, not overlapping", float.count === 2 && float.visible && !float.overlap,
  JSON.stringify(float));

// ---- Products: staggered cards ----
await page.goto(BASE + "/products", { waitUntil: "networkidle" });
const cards = await page.evaluate(() => {
  const lis = [...document.querySelectorAll("main [class*='anim-pop']")];
  return { count: lis.length, delays: lis.map((n) => n.style.animationDelay) };
});
check("product grid staggered entrance", cards.count >= 8 && new Set(cards.delays).size >= 5,
  `${cards.count} cards, ${new Set(cards.delays).size} unique delays`);

// ---- Gallery: tiles pop + lightbox pops ----
await page.goto(BASE + "/gallery", { waitUntil: "networkidle" });
const gallery = await page.evaluate(() => {
  const tiles = [...document.querySelectorAll("main button[aria-label^='View larger']")];
  return { count: tiles.length, delays: new Set(tiles.map((t) => t.style.animationDelay)).size };
});
check("gallery tiles staggered", gallery.count >= 18 && gallery.delays >= 5,
  `${gallery.count} tiles, ${gallery.delays} delay steps`);
await page.locator("button[aria-label^='View larger']").first().click();
await page.waitForTimeout(400);
const lightbox = await page.evaluate(() => {
  const fig = document.querySelector('figure[class*="anim-pop"]');
  if (!fig) return { open: false, anim: "" };
  const cs = getComputedStyle(fig);
  return { open: !!document.querySelector('[role="dialog"], [aria-modal="true"]'), anim: cs.animationName, opacity: cs.opacity };
});
check("lightbox figure animated", lightbox.anim.includes("popIn"), `anim=${lightbox.anim} open=${lightbox.open}`);
await page.keyboard.press("Escape");

// ---- Mobile: floating buttons do not cover CTA / footer ----
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto(BASE + "/", { waitUntil: "networkidle" });
const mFloat = await mobile.evaluate(() => {
  const fixed = [...document.querySelectorAll('a[href^="tel:"], a[href^="https://wa.me"]')]
    .filter((a) => a.closest('div[class*="fixed"]'))
    .map((a) => a.getBoundingClientRect());
  return { count: fixed.length, allOnScreen: fixed.every((r) => r.right <= innerWidth + 0.5 && r.left >= 0) };
});
check("mobile floating buttons on-screen", mFloat.count === 2 && mFloat.allOnScreen, JSON.stringify(mFloat));

// footer bottom padding reserves space for them
const footPad = await mobile.evaluate(() => {
  const els = [...document.querySelectorAll("footer .container-page")];
  const target = els.find((e) => e.className.includes("pb-40")) || els[els.length - 1];
  return target ? getComputedStyle(target).paddingBottom : "none";
});
check("footer reserves space for floating buttons", parseFloat(footPad) >= 140, footPad);

// ---- Reduced motion ----
const rm = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
await rm.goto(BASE + "/", { waitUntil: "networkidle" });
const rmState = await rm.evaluate(() => {
  const h1 = document.querySelector("h1");
  const cs = getComputedStyle(h1);
  const population = [...document.querySelectorAll(".reveal, .anim-pop, .anim-float, .anim-glow")];
  const looping = population.filter((n) => {
    const s = getComputedStyle(n);
    return s.animationIterationCount !== "1" ||
      parseFloat(s.animationDuration) > 0.01;
  });
  return {
    h1Duration: cs.animationDuration,
    h1Iterations: cs.animationIterationCount,
    looping: looping.length,
    total: population.length,
    visible: [...document.querySelectorAll(".reveal")].every(
      (n) => parseFloat(getComputedStyle(n).opacity) > 0.99
    ),
  };
});
check("reduced-motion: loops disabled (duration ~0, 1 iteration)",
  parseFloat(rmState.h1Duration) <= 0.01 && rmState.h1Iterations === "1" &&
  rmState.looping === 0,
  `h1 ${rmState.h1Duration}/${rmState.h1Iterations}, looping=${rmState.looping}/${rmState.total}`);
check("reduced-motion: all content visible", rmState.visible, "");

await browser.close();

const failed = results.filter((r) => r.startsWith("FAIL"));
console.log(results.join("\n"));
console.log(`\nSummary: ${results.length - failed.length} passed, ${failed.length} failed`);
process.exit(failed.length ? 1 : 0);
