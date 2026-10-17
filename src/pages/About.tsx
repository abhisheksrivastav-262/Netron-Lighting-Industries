import CTASection from "../components/CTASection";
import PageContainer from "../components/PageContainer";
import Photo from "../components/Photo";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SEO from "../components/SEO";
import { ASSETS } from "../data/assets";
import { COMPANY } from "../data/company";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description={`${COMPANY.name} is an LED bulb manufacturing business based at ${COMPANY.address.street}, ${COMPANY.address.city}, ${COMPANY.address.region}.`}
        image={ASSETS.brandBoard}
      />

      {/* Page header */}
      <section className="relative overflow-hidden bg-midnight py-16 text-white sm:py-20">
        <div className="light-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <PageContainer className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="About Us"
            title="LED bulb manufacturing from Prayagraj"
            description={`${COMPANY.name} is an LED bulb manufacturing business based in ${COMPANY.address.street}, ${COMPANY.address.city}, ${COMPANY.address.region}, India.`}
          />
        </PageContainer>
      </section>

      {/* Intro */}
      <section className="container-page py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Our Business"
              title="What we do"
              description={`${COMPANY.name} manufactures LED bulbs. Our focus is on producing LED lighting products and making them available to buyers, distributors and trade customers who contact us directly.`}
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-midnight/80 sm:text-base">
              <p>
                Our business operates from Patel Chauraha on Meja Road in
                Prayagraj, Uttar Pradesh. From here we manufacture and supply LED
                bulbs, and handle enquiries from customers and trade partners.
              </p>
              <p>
                We keep our product information honest and specific. Where a
                technical detail or price has not been confirmed for publication,
                we simply ask you to contact us rather than publishing an
                unverified figure.
              </p>
              <p>
                To discuss product requirements, availability or business
                enquiries, reach us by phone or WhatsApp — details are on our{" "}
                Contact page.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-4">
              <Photo
                src={ASSETS.ledBulb}
                alt="LED bulb from Netron Lighting Industries"
                aspect="aspect-[4/3]"
                tone="white"
                rounded="rounded-2xl"
                className="col-span-2"
                imgClassName="p-4"
                width={1280}
                height={1280}
              />
              <Photo
                src={ASSETS.amareFan}
                alt="Amare 48-inch induction ceiling fan from Netron Lighting Industries"
                aspect="aspect-[4/5]"
                tone="mist"
                rounded="rounded-2xl"
                width={1148}
                height={1280}
              />
              <Photo
                src={ASSETS.downlight7w}
                alt="7W LED downlight from Netron Lighting Industries"
                aspect="aspect-[4/5]"
                tone="mist"
                rounded="rounded-2xl"
                width={1600}
                height={1204}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Facts */}
      <section className="bg-white py-16 sm:py-24">
        <PageContainer>
          <Reveal>
            <SectionHeading
              eyebrow="At a Glance"
              title="Company information"
              description="Verified details about Netron Lighting Industries."
            />
          </Reveal>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Company", value: COMPANY.name },
              { label: "Business", value: COMPANY.business },
              {
                label: "Location",
                value: `${COMPANY.address.street}, ${COMPANY.address.city}`,
              },
              { label: "Phone", value: COMPANY.phoneDisplay },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 70}>
                <div className="soft-card h-full p-6">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-base font-semibold text-midnight">
                    {item.value}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </PageContainer>
      </section>

      {/* Gallery */}
      <section className="container-page py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="From our collection of photographs"
            description="Photographs supplied by Netron Lighting Industries. We publish only our own imagery."
          />
        </Reveal>
        <Reveal className="mt-10" delay={80}>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { src: ASSETS.zephyrFan, alt: 'Zephyr 48-inch ceiling fan from Netron Lighting Industries' },
              { src: ASSETS.ledBulbLit, alt: "LED bulb from Netron Lighting Industries photographed while lit" },
              { src: ASSETS.founder, alt: "Er. Arun Vishwakarma, Founder and CMD" },
              { src: ASSETS.etoileFan, alt: "Etoile ceiling fan from Netron Lighting Industries" },
            ].map((img) => (
              <Photo
                key={img.src}
                src={img.src}
                alt={img.alt}
                aspect="aspect-[4/5]"
                tone="mist"
                rounded="rounded-2xl"
              />
            ))}
          </div>
        </Reveal>
      </section>

      <CTASection
        title="Have a question about our LED products?"
        description="Contact Netron Lighting Industries directly for product details, availability and business enquiries."
      />
    </>
  );
}
