import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import GalleryGrid from "../components/GalleryGrid";
import PageContainer from "../components/PageContainer";
import Photo from "../components/Photo";
import ProductGrid from "../components/ProductGrid";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SEO from "../components/SEO";
import { ASSETS } from "../data/assets";
import { COMPANY, whatsappUrl } from "../data/company";
import { GALLERY } from "../data/gallery";
import { PRODUCTS } from "../data/products";

const STRENGTHS = [
  {
    title: "LED bulb manufacturing",
    body: "Netron Lighting Industries manufactures LED bulbs, with production and supply handled from our base in Prayagraj, Uttar Pradesh.",
    icon: "💡",
  },
  {
    title: "Based on Meja Road, Prayagraj",
    body: "Our business operates from Patel Chauraha, Meja Road — reachable for buyers, distributors and trade enquiries across the region.",
    icon: "📍",
  },
  {
    title: "Direct enquiry line",
    body: "Talk to us straight away on phone or WhatsApp for product information, availability and business requirements.",
    icon: "📞",
  },
  {
    title: "Real product photography",
    body: "Every product shown on this website is photographed from our own range — no stock imagery is used anywhere.",
    icon: "📷",
  },
];

export default function HomePage() {
  const featured = PRODUCTS.slice(0, 6);

  return (
    <>
      <SEO
        title="Reliable LED Lighting for Modern Spaces"
        description={`Discover LED lighting solutions from ${COMPANY.name}, an LED bulb manufacturing business based in Meja Road, Prayagraj, Uttar Pradesh. Enquire by phone or WhatsApp.`}
        image={ASSETS.brandBoard}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: COMPANY.name,
          telephone: COMPANY.phoneDisplay,
          email: COMPANY.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: COMPANY.address.street,
            addressLocality: COMPANY.address.city,
            addressRegion: COMPANY.address.region,
            addressCountry: "IN",
          },
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight">
        <div className="light-grid absolute inset-0 opacity-90" aria-hidden="true" />
        <div
          className="anim-glow absolute -right-40 top-1/2 hidden h-[36rem] w-[36rem] -translate-y-1/2 rounded-full bg-electric/25 blur-[120px] lg:block"
          aria-hidden="true"
        />
        <PageContainer className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <span
              className="anim-pop inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-ice"
              style={{ animationDelay: "60ms" }}
            >
              LED Bulb Manufacturing
            </span>
            <h1
              className="anim-pop mt-6 text-4xl font-semibold leading-[1.05] text-white text-gradient-animated sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "150ms" }}
            >
              Reliable LED Lighting for Modern Spaces
            </h1>
            <p
              className="anim-pop mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
              style={{ animationDelay: "260ms" }}
            >
              Discover LED lighting solutions from {COMPANY.name}, based in Meja
              Road, Prayagraj, Uttar Pradesh. Explore our bulbs and lighting
              products, and reach us directly for business enquiries.
            </p>
            <div
              className="anim-pop mt-9 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "360ms" }}
            >
              <Link
                to="/products"
                className="shine inline-flex items-center justify-center gap-2 rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:bg-ice hover:text-midnight"
              >
                Explore Products
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
            <dl
              className="anim-pop mt-12 grid max-w-lg grid-cols-1 gap-x-8 gap-y-4 border-t border-white/10 pt-8 text-sm sm:grid-cols-2"
              style={{ animationDelay: "460ms" }}
            >
              <div>
                <dt className="text-white/50">Business</dt>
                <dd className="mt-0.5 font-medium text-white">
                  {COMPANY.business}
                </dd>
              </div>
              <div>
                <dt className="text-white/50">Location</dt>
                <dd className="mt-0.5 font-medium text-white">
                  {COMPANY.address.street}, {COMPANY.address.city}
                </dd>
              </div>
            </dl>
          </div>

          <div className="anim-float relative mx-auto w-full max-w-md">
            <Photo
              src={ASSETS.downlight7w}
              alt="7W LED downlight from Netron Lighting Industries photographed against a dark background"
              rounded="rounded-3xl"
              className="ring-1 ring-white/15 shadow-[var(--shadow-glow)]"
              width={1512}
              height={1512}
              priority
            />
            <Photo
              src={ASSETS.ledBulb}
              alt="LED bulb from Netron Lighting Industries"
              aspect="aspect-square"
              tone="white"
              rounded="rounded-2xl"
              className="absolute -bottom-6 -left-4 hidden w-40 border-4 border-midnight ring-1 ring-white/15 sm:block"
              width={1280}
              height={1280}
            />
          </div>
        </PageContainer>
      </section>

      {/* Featured products */}
      <section className="container-page py-16 sm:py-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Product Range"
            title="Featured products"
            description="A selection from the Netron Lighting Industries range. Each listing uses our own product photography."
          />
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-electric transition hover:gap-3"
          >
            View all products
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
        <Reveal className="mt-10" delay={80}>
          <ProductGrid products={featured} />
        </Reveal>
      </section>

      {/* Company introduction */}
      <section className="bg-white py-16 sm:py-24">
        <PageContainer className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="space-y-4">
              <Photo
                src={ASSETS.brandBoard}
                alt="NETRON LIGHTING signboard"
                aspect="aspect-[4/3]"
                tone="midnight"
                rounded="rounded-2xl"
                width={1600}
                height={1204}
              />
              <div className="grid grid-cols-2 gap-4">
                <Photo
                  src={ASSETS.founder}
                  alt="Er. Arun Vishwakarma, Founder and CMD"
                  aspect="aspect-square"
                  tone="mist"
                  rounded="rounded-2xl"
                  width={1204}
                  height={1600}
                />
                <Photo
                  src={ASSETS.ledBulb}
                  alt="LED bulb from Netron Lighting Industries"
                  aspect="aspect-square"
                  tone="white"
                  rounded="rounded-2xl"
                  width={1280}
                  height={596}
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Who We Are"
              title="An LED bulb manufacturing business built for trade enquiries"
              description={`${COMPANY.name} manufactures LED bulbs from Patel Chauraha, Meja Road, Prayagraj. We work with buyers and distributors who need a dependable local source for LED lighting products.`}
            />
            <ul className="mt-8 space-y-4">
              {[
                "LED bulbs manufactured and supplied from Prayagraj, Uttar Pradesh.",
                "Direct phone and WhatsApp support for business enquiries.",
                "Product photography from our own range — not stock images.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-midnight/80">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric/10 text-xs font-bold text-electric"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric transition hover:gap-3"
            >
              More about Netron Lighting Industries
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </PageContainer>
      </section>

      {/* Strengths */}
      <section className="container-page py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Why Enquire With Us"
            title="Straightforward LED manufacturing enquiries"
            description="Clear, verifiable points about working with Netron Lighting Industries."
          />
        </Reveal>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STRENGTHS.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={i * 70}>
                <div className="soft-card card-lift h-full p-6">
                  <span className="text-2xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-midnight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Manufacturing teaser */}
      <section className="bg-deep py-16 text-white sm:py-24">
        <PageContainer className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Manufacturing"
              title="Focused on LED bulb production"
              description="Our business is built around manufacturing LED bulbs and supplying them to buyers and distributors. Visit our manufacturing page to see our manufacturing and product photographs and understand how to work with us."
            />
            <Link
              to="/manufacturing"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Our manufacturing approach
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
          <Reveal delay={100} variant="right">
            <div className="space-y-4">
              <Photo
                src={ASSETS.ledBulbLit}
                alt="LED bulb from Netron Lighting Industries photographed while lit"
                aspect="aspect-[4/3]"
                tone="midnight"
                rounded="rounded-2xl"
                width={1600}
                height={1204}
              />
              <Photo
                src={ASSETS.chandrayaanPackaging}
                alt="Chandrayaan Series LED bulb packaging for Netron Lighting Industries"
                aspect="aspect-[4/3]"
                tone="midnight"
                rounded="rounded-2xl"
                width={1280}
                height={963}
              />
            </div>
          </Reveal>
        </PageContainer>
      </section>

      {/* Gallery showcase — every supplied photograph, uncropped */}
      <section className="container-page py-16 sm:py-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Gallery"
            title="Our photographs"
            description={`All ${GALLERY.length} photographs in our collection, shown exactly as supplied — nothing cropped or stretched. Tap any image to view it full size.`}
          />
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-electric transition hover:gap-3"
          >
            Open full gallery
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
        <Reveal className="mt-10" delay={80}>
          <GalleryGrid images={GALLERY} />
        </Reveal>
      </section>

      <CTASection />

      {/* Contact strip */}
      <section className="container-page pb-20">
        <Reveal>
          <div className="soft-card grid gap-8 p-8 sm:grid-cols-3 sm:p-10">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">
                Call us
              </h2>
              <a
                href={COMPANY.phoneDial}
                className="mt-2 block text-lg font-semibold text-midnight transition hover:text-electric"
              >
                {COMPANY.phoneDisplay}
              </a>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">
                WhatsApp
              </h2>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg font-semibold text-midnight transition hover:text-electric"
              >
                Message us now
              </a>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">
                Visit us
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {COMPANY.addressLine}
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
