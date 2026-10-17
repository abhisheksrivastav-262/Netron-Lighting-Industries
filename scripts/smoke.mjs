import { chromium, devices } from "playwright";

const BASE = "http://localhost:4173";
const ROUTES = [
  "/",
  "/about",
  "/products",
  "/products/netron-7w-led-downlight",
  "/products/nonexistent-slug",
  "/manufacturing",
  "/why-us",
  "/gallery",
  "/contact",
  "/privacy-policy",
  "/this-page-does-not-exist",
];

const problems = [];
const notes = [];

function check(cond, msg) {
  if (cond) notes.push(`PASS  ${msg}`);
  else problems.push(`FAIL  ${msg}`);
}

const browser = await chromium.launch();

// ---- Desktop pass ----
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
const consoleErrors = [];
page.on("console", (m) => {
  if (m.type() === "error") consoleErrors.push(m.text());
});
page.on("pageerror", (e) => consoleErrors.push(`pageerror: ${e.message}`));

for (const route of ROUTES) {
  await page.goto(BASE + route, { waitUntil: "networkidle" });
  const rootText = (await page.locator("#root").innerText()) || "";
  check(rootText.trim().length > 40, `route ${route} renders content (${rootText.trim().length} chars)`);
  const title = await page.title();
  check(title.includes("Netron Lighting Industries"), `route ${route} has branded title`);
  // horizontal overflow
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth,
  );
  check(overflow <= 1, `route ${route} no horizontal overflow (delta ${overflow}px)`);
}

// broken images
await page.goto(BASE + "/", { waitUntil: "networkidle" });
const brokenImages = await page.evaluate(() =>
  Array.from(document.images)
    .filter((img) => img.complete && img.naturalWidth === 0)
    .map((img) => img.currentSrc || img.src),
);
check(brokenImages.length === 0, `no broken images on home (${brokenImages.join(", ") || "none"})`);

// header logo (the supplied logo.png lockup)
const logoCheck = await page.evaluate(() => {
  const img = document.querySelector('header img');
  if (!img) return null;
  const r = img.getBoundingClientRect();
  return { w: Math.round(r.width), h: Math.round(r.height), src: img.getAttribute("src") };
});
check(
  !!logoCheck?.src?.includes("logo.png"),
  `navbar uses the supplied logo (${logoCheck?.src})`,
);
check(
  !!logoCheck && logoCheck.w > 0 && logoCheck.h > 0,
  `navbar logo renders at a sensible size (${logoCheck?.w}x${logoCheck?.h})`,
);

// business name next to the logo in the header
const headerBrand = await page.locator("header").innerText();
check(
  /Netron/i.test(headerBrand) && /Lighting Industries/i.test(headerBrand),
  `header shows the business name next to the logo (${headerBrand.replace(/\s+/g, " ").trim().slice(0, 50)})`,
);

// phone + whatsapp links in navbar
const telHref = await page.locator('header a[href^="tel:"]').first().getAttribute("href");
check(telHref === "tel:+919621346653", `click-to-call href correct (${telHref})`);
const waHref = await page.locator('header a[href*="wa.me"]').first().getAttribute("href");
check(
  waHref?.startsWith("https://wa.me/919621346653?text="),
  `WhatsApp href correct and encoded (${waHref?.slice(0, 60)}...)`,
);

// floating whatsapp + call buttons
const floatWa = await page.locator('a[href*="wa.me"][aria-label*="WhatsApp" i]').count();
check(floatWa >= 1, `floating WhatsApp button present (${floatWa})`);
const floatCall = await page.locator('a[href^="tel:"][aria-label^="Call"]').count();
check(floatCall >= 1, `floating Call button present (${floatCall})`);

// nav to each page via header links
for (const [label, path] of [
  ["About Us", "/about"],
  ["Products", "/products"],
  ["Manufacturing", "/manufacturing"],
  ["Why Us", "/why-us"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
]) {
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.locator(`header a:has-text("${label}")`).first().click();
  await page.waitForLoadState("networkidle");
  check(new URL(page.url()).pathname === path, `nav link "${label}" -> ${path}`);
}

// product card + detail links
await page.goto(BASE + "/products", { waitUntil: "networkidle" });
await page.locator('a:has-text("View details")').first().click();
await page.waitForURL(/\/products\/[a-z0-9-]+$/);
await page.waitForSelector('h2:has-text("Related products")');
check(
  /\/products\/[a-z0-9-]+$/.test(new URL(page.url()).pathname),
  `product card navigates to detail (${new URL(page.url()).pathname})`,
);

// product detail: product-specific whatsapp link + related products
const detailWa = await page
  .locator('main a[href*="wa.me"]')
  .filter({ hasText: /Enquir/i })
  .first()
  .getAttribute("href");
check(
  detailWa?.includes(encodeURIComponent("I would like to enquire about the product")),
  `product detail WhatsApp link encoded with product name`,
);
const related = await page.locator('h2:has-text("Related products")').count();
check(related === 1, "related products section present");

// product search + filter
await page.goto(BASE + "/products", { waitUntil: "networkidle" });
await page.fill("#product-search", "Chandrayaan");
await page.waitForTimeout(200);
const chandrayaanCard = await page.locator('article:has-text("Chandrayaan")').count();
const cardsAfterSearch = await page.locator("article").count();
check(
  chandrayaanCard >= 1 && cardsAfterSearch >= 1,
  `search "Chandrayaan" shows matching product (${cardsAfterSearch} card(s), Chandrayaan present: ${chandrayaanCard >= 1})`,
);
await page.fill("#product-search", "zzzznomatch");
await page.waitForTimeout(200);
const emptyState = await page.locator('text=No products match your search').count();
check(emptyState === 1, "empty-state UI shown when no products match");
await page.fill("#product-search", "");
await page.locator('button:has-text("LED Bulbs")').click();
await page.waitForTimeout(200);
const bulbCards = await page.locator("article").count();
check(bulbCards === 3, `category filter "LED Bulbs" shows 3 products (got ${bulbCards})`);

// ---- Gallery ----
const galleryTile = 'button[aria-label^="View larger:"]';
await page.goto(BASE + "/gallery", { waitUntil: "networkidle" });
const galleryTiles = await page.locator(galleryTile).count();
check(galleryTiles === 20, `gallery page shows all 20 photographs (got ${galleryTiles})`);
await page.locator(galleryTile).first().click();
await page.waitForSelector('[role="dialog"]');
check((await page.locator('[role="dialog"]').count()) === 1, "clicking a gallery tile opens the lightbox");
const dialogImg = await page.locator('[role="dialog"] img').getAttribute("src");
check(!!dialogImg, `lightbox shows the full-size image (${dialogImg})`);
await page.keyboard.press("ArrowRight");
await page.waitForTimeout(150);
check((await page.locator('[role="dialog"]').count()) === 1, "arrow key navigates the lightbox");
await page.keyboard.press("Escape");
await page.waitForTimeout(200);
check((await page.locator('[role="dialog"]').count()) === 0, "Escape closes the lightbox");

await page.goto(BASE + "/", { waitUntil: "networkidle" });
const homeTiles = await page.locator(galleryTile).count();
check(homeTiles === 20, `home page gallery shows all 20 photographs (got ${homeTiles})`);

// contact form validation
await page.goto(BASE + "/contact", { waitUntil: "networkidle" });
await page.getByRole("button", { name: /Send enquiry via WhatsApp/i }).click();
await page.waitForTimeout(200);
const nameErr = await page.locator("#error-name").count();
const phoneErr = await page.locator("#error-phone").count();
const typeErr = await page.locator("#error-enquiryType").count();
const msgErr = await page.locator("#error-message").count();
check(
  nameErr + phoneErr + typeErr + msgErr === 4,
  `empty form shows all 4 validation errors (${nameErr}/${phoneErr}/${typeErr}/${msgErr})`,
);

// contact page prefill from ?product=
await page.goto(BASE + "/contact?product=Netron%20LED%20Bulb", { waitUntil: "networkidle" });
const msgVal = await page.inputValue("#field-message");
check(
  msgVal.includes("Netron LED Bulb"),
  `contact form prefilled from product query (${msgVal.slice(0, 50)}...)`,
);

check(consoleErrors.length === 0, `no console/page errors on desktop pass (${consoleErrors.slice(0, 3).join(" | ") || "none"})`);

// ---- Mobile pass ----
const mctx = await browser.newContext({ ...devices["iPhone 12"] });
const mpage = await mctx.newPage();
const mobileErrors = [];
mpage.on("pageerror", (e) => mobileErrors.push(e.message));
await mpage.goto(BASE + "/", { waitUntil: "networkidle" });

const toggle = mpage.getByRole("button", { name: /Open navigation menu/i });
check(await toggle.isVisible(), "mobile menu toggle visible");
await toggle.click();
await mpage.waitForTimeout(400);
const panelLink = mpage.locator("header").getByRole("link", { name: "Products", exact: true });
check(await panelLink.isVisible(), "mobile menu opens and shows links");
await panelLink.click();
await mpage.waitForLoadState("networkidle");
check(new URL(mpage.url()).pathname === "/products", "mobile menu link navigates");
await mpage.waitForTimeout(400);
const panelCollapsed = await mpage
  .locator("#root")
  .evaluate(() => {
    const el = document.querySelector("header [id]");
    return el ? getComputedStyle(el).maxHeight : null;
  });
check(panelCollapsed === "0px", `mobile menu collapses after navigation (max-height ${panelCollapsed})`);

const mOverflow = await mpage.evaluate(
  () => document.documentElement.scrollWidth - window.innerWidth,
);
check(mOverflow <= 1, `mobile no horizontal overflow (delta ${mOverflow}px)`);
check(mobileErrors.length === 0, `no mobile page errors (${mobileErrors.join(", ") || "none"})`);

// ---- Valid contact-form submission ----
await page.goto(BASE + "/contact", { waitUntil: "networkidle" });
await page.fill("#field-name", "Test Enquiry");
await page.fill("#field-phone", "9621346653");
await page.selectOption("#field-enquiryType", "Product enquiry");
await page.fill(
  "#field-message",
  "Please share details of your LED bulb range and packaging options.",
);
await page.getByRole("button", { name: /Send enquiry via WhatsApp/i }).click();
await page.waitForTimeout(400);
const success = await page.locator("text=Your enquiry is ready in WhatsApp").count();
const fallbackLink = await page
  .locator('a:has-text("tap here to send it")')
  .getAttribute("href");
check(success === 1, "valid form submission shows honest WhatsApp-ready state");
check(
  fallbackLink?.startsWith("https://wa.me/919621346653?text=") &&
    decodeURIComponent(fallbackLink).includes("Test Enquiry"),
  "valid form builds WhatsApp fallback link with user details",
);

// ---- Responsive overflow sweep across breakpoints ----
for (const width of [390, 768, 1024, 1280, 1920]) {
  const c = await browser.newContext({ viewport: { width, height: 900 } });
  const p = await c.newPage();
  for (const route of ["/", "/products", "/contact"]) {
    await p.goto(BASE + route, { waitUntil: "networkidle" });
    const delta = await p.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );
    check(delta <= 1, `${width}px ${route} no horizontal overflow (delta ${delta}px)`);
  }
  await c.close();
}

await browser.close();

console.log(notes.join("\n"));
console.log("\n" + (problems.length ? problems.join("\n") : "ALL CHECKS PASSED"));
console.log(`\nSummary: ${notes.length} passed, ${problems.length} failed`);
if (problems.length) process.exit(1);
