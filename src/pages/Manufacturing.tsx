import CTASection from "../components/CTASection";
import PageContainer from "../components/PageContainer";
import Photo from "../components/Photo";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SEO from "../components/SEO";
import { ASSETS } from "../data/assets";
import { COMPANY } from "../data/company";

const PHOTOS = [
  {
    src: ASSETS.ariaFan,
    alt: "Aria induction ceiling fan product photograph",
    caption: "Aria induction ceiling fan supplied by the company.",
  },
  {
    src: ASSETS.downlight7w,
    alt: "7W LED downlight product photograph",
    caption: "7W LED downlight supplied by the company.",
  },
  {
    src: ASSETS.chandrayaanPackaging,
    alt: "Chandrayaan Series LED bulb packaging",
    caption: "Chandrayaan Series LED bulb packaging supplied by the company.",
  },
];

export default function ManufacturingPage() {
  return (
    <>
      <SEO
        title="Manufacturing & Quality"
        description={`${COMPANY.name} is an LED bulb manufacturing business based at ${COMPANY.address.street}, ${COMPANY.address.city}. Contact us to learn how we work with buyers and distributors.`}
        image={ASSETS.ariaFan}
      />

      <section className="relative overflow-hidden bg-midnight py-16 text-white sm:py-20">
        <div className="light-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <PageContainer className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="Manufacturing"
            title="LED bulb manufacturing, done from Prayagraj"
            description={`${COMPANY.name} manufactures LED bulbs from ${COMPANY.address.street}, ${COMPANY.address.city}, ${COMPANY.address.region}. This page explains our business focus and how to work with us.`}
          />
        </PageContainer>
      </section>

      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Our Focus"
              title="A manufacturing business centred on LED bulbs"
              description="We keep our work focused: manufacturing LED bulbs and supporting the buyers and distributors who source them from us."
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-midnight/80 sm:text-base">
              <p>
                Netron Lighting Industries operates as an LED bulb
                manufacturing business from Patel Chauraha, Meja Road in
                Prayagraj, Uttar Pradesh. Our production is dedicated to LED
                lighting products.
              </p>
              <p>
                We believe buyers should be able to get clear, direct answers
                about what we make. Rather than publishing unverified figures,
                we invite you to contact us so we can discuss your requirement,
                confirm what we can supply, and share the details that matter to
                you.
              </p>
              <p>
                If you are a distributor, retailer or trade buyer looking for a
                local LED bulb manufacturer, we would be glad to hear from you.
              </p>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Product focus",
                  body: "LED bulbs and LED lighting products manufactured for trade and retail supply.",
                },
                {
                  title: "Direct communication",
                  body: "Enquiries are handled personally by phone and WhatsApp — no automated responses.",
                },
                {
                  title: "Local manufacturing",
                  body: `Production and supply handled from ${COMPANY.address.city}, ${COMPANY.address.region}.`,
                },
                {
                  title: "Open to visits",
                  body: "Business visitors and trade partners can arrange to visit by contacting us first.",
                },
              ].map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * 60}>
                    <div className="soft-card h-full p-5">
                      <h3 className="text-sm font-semibold text-midnight">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {item.body}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <figure className="overflow-hidden rounded-3xl border border-midnight/8 bg-white shadow-[var(--shadow-card)]">
              <Photo
                src={ASSETS.ariaFan}
                alt="Aria induction ceiling fan from Netron Lighting Industries"
                rounded="rounded-none"
                imgClassName="bg-mist"
                width={1600}
                height={1204}
              />
              <figcaption className="px-5 py-4 text-xs text-muted">
                Photograph supplied by Netron Lighting Industries.
              </figcaption>
            </figure>

            <div className="mt-6 rounded-2xl border border-electric/20 bg-electric/5 p-5">
              <h3 className="text-sm font-semibold text-midnight">
                A note on transparency
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-midnight/75">
                We publish only information we can stand behind. Claims about
                capacity, certifications or specifications are shared directly
                when confirmed for your enquiry.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <PageContainer>
          <Reveal>
            <SectionHeading
              eyebrow="Photographs"
              title="From our collection"
              description="Photographs from our own collection. We do not use outside or generated imagery."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PHOTOS.map((photo, i) => (
              <Reveal key={photo.src} delay={i * 70}>
                <figure className="overflow-hidden rounded-2xl border border-midnight/8 bg-mist shadow-[var(--shadow-card)]">
                  <Photo
                    src={photo.src}
                    alt={photo.alt}
                    aspect="aspect-[4/3]"
                    tone="mist"
                    rounded="rounded-none"
                    width={1600}
                    height={1204}
                  />
                  <figcaption className="px-4 py-3 text-xs text-muted">
                    {photo.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      <CTASection
        title="Interested in sourcing LED bulbs from us?"
        description="Speak with Netron Lighting Industries about your product and business requirements."
      />
    </>
  );
}
