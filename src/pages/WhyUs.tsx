import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import PageContainer from "../components/PageContainer";
import Photo from "../components/Photo";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SEO from "../components/SEO";
import { ASSETS } from "../data/assets";
import { COMPANY, whatsappUrl } from "../data/company";

const REASONS = [
  {
    icon: "🏭",
    title: "Local manufacturing",
    body: `Products are manufactured and supplied from ${COMPANY.address.street}, ${COMPANY.address.city}, ${COMPANY.address.region} — a dependable regional source for your requirements.`,
  },
  {
    icon: "📞",
    title: "Direct enquiry line",
    body: `Talk to us straight away on ${COMPANY.phoneDisplay} or WhatsApp. Enquiries are handled personally — you are not routed through a call centre.`,
  },
  {
    icon: "🔩",
    title: "100% copper motor fans",
    body: "Our Zephyr 48-inch and Amare 48-inch ceiling fans use a 100% copper motor with a 1200 mm sweep.",
  },
  {
    icon: "🛡️",
    title: "A one-year guarantee",
    body: "The 7W LED downlight we supply carries a one-year guarantee, so you know what you are buying.",
  },
  {
    icon: "📷",
    title: "Real product photography",
    body: "Everything you see on this website is photographed from our own range — no stock or generated imagery is used anywhere.",
  },
  {
    icon: "🤝",
    title: "Honest specifications",
    body: "We never publish figures we cannot confirm. Where a detail is unconfirmed it clearly reads “Contact us for details”.",
  },
];

const CHECKLIST = [
  "LED bulbs, including the Chandrayaan Series packaging range",
  "Induction ceiling fans with 100% copper motors",
  "LED lighting such as the 7W LED downlight",
  "Solar panels as part of our Solar Industries line",
  "Direct support for buyers, distributors and trade enquiries",
];

const STEPS = [
  {
    step: "01",
    title: "Tell us what you need",
    body: "Share the product and quantity you are looking for by phone, WhatsApp or the enquiry form.",
  },
  {
    step: "02",
    title: "We confirm availability",
    body: "We check what we can supply and get back to you with honest, verified details.",
  },
  {
    step: "03",
    title: "Supply and support",
    body: `Products are handled from ${COMPANY.address.city}, ${COMPANY.address.region}, with a direct line for any follow-up.`,
  },
];

export default function WhyUsPage() {
  return (
    <>
      <SEO
        title="Why Us"
        description={`Why buyers and distributors choose ${COMPANY.name} — local manufacturing in ${COMPANY.address.city}, ${COMPANY.address.region}, 100% copper motor fans, a one-year guarantee and direct phone or WhatsApp support.`}
        image={ASSETS.zephyrFan}
      />

      {/* Page header */}
      <section className="relative overflow-hidden bg-midnight py-16 text-white sm:py-20">
        <div className="light-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <PageContainer className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="Why Us"
            title="Why work with Netron Lighting Industries"
            description={`${COMPANY.name} manufactures and supplies LED bulbs, ceiling fans and solar products from ${COMPANY.address.city}, ${COMPANY.address.region}. Here is what sets us apart.`}
          />
        </PageContainer>
      </section>

      {/* Reasons */}
      <section className="container-page py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Our Strengths"
            title="Reasons to work with us"
            description="Straightforward, verifiable points — no inflated claims."
          />
        </Reveal>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={i * 60}>
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

      {/* What you get + photo */}
      <section className="bg-white py-16 sm:py-24">
        <PageContainer className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="What You Get"
              title="A complete lighting and solar range"
              description="From bulbs and fans to lighting and solar, we aim to be a single, dependable source for your business."
            />
            <ul className="mt-8 space-y-4">
              {CHECKLIST.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-midnight/80"
                >
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
              to="/products"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric transition hover:gap-3"
            >
              Browse our products
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <Reveal delay={100} variant="right">
            <div className="grid grid-cols-2 gap-4">
              <Photo
                src={ASSETS.zephyrFan}
                alt="Zephyr 48-inch induction ceiling fan with a 100% copper motor"
                aspect="aspect-[4/5]"
                tone="mist"
                rounded="rounded-2xl"
                width={1204}
                height={1600}
              />
              <Photo
                src={ASSETS.signboard}
                alt="NETRONE LIGHTING & SOLAR INDUSTRIES signboard"
                aspect="aspect-[4/5]"
                tone="mist"
                rounded="rounded-2xl"
                width={1204}
                height={1600}
              />
              <Photo
                src={ASSETS.downlight7w}
                alt="7W LED downlight with a one-year guarantee"
                aspect="aspect-[4/5]"
                tone="mist"
                rounded="rounded-2xl"
                width={1204}
                height={1600}
              />
              <Photo
                src={ASSETS.chandrayaanPackaging}
                alt="Chandrayaan Series LED bulb packaging"
                aspect="aspect-[4/5]"
                tone="mist"
                rounded="rounded-2xl"
                width={1204}
                height={1600}
              />
            </div>
          </Reveal>
        </PageContainer>
      </section>

      {/* How it works */}
      <section className="container-page py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How It Works"
            title="Working with us is simple"
            description="Three clear steps from enquiry to supply."
          />
        </Reveal>
        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
          {STEPS.map((item, i) => (
            <li key={item.step}>
              <Reveal delay={i * 80}>
                <div className="soft-card card-lift h-full p-6">
                  <span className="text-2xl font-semibold text-electric">
                    {item.step}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-midnight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-12">
          <div className="soft-card flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-base font-semibold text-midnight">
                Have a question before you enquire?
              </h2>
              <p className="mt-1 text-sm text-muted">
                Call or message us and we will be glad to help.
              </p>
            </div>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white transition hover:bg-ice hover:text-midnight"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      <CTASection
        title="Ready to work with a dependable local supplier?"
        description="Contact Netron Lighting Industries for product details, availability and business enquiries."
      />
    </>
  );
}
