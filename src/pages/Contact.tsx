import ContactForm from "../components/ContactForm";
import PageContainer from "../components/PageContainer";
import Photo from "../components/Photo";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SEO from "../components/SEO";
import { ASSETS } from "../data/assets";
import { COMPANY, whatsappUrl } from "../data/company";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us"
        description={`Contact ${COMPANY.name} — LED bulb manufacturing. Call ${COMPANY.phoneDisplay} or message us on WhatsApp. Address: ${COMPANY.addressLine}.`}
        image={ASSETS.signboard}
      />

      <section className="relative overflow-hidden bg-midnight py-16 text-white sm:py-20">
        <div className="light-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <PageContainer className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="Contact"
            title="Get in touch with Netron Lighting Industries"
            description="Call, message on WhatsApp, or send your enquiry using the form. We handle enquiries directly."
          />
        </PageContainer>
      </section>

      <section className="container-page py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          {/* Details */}
          <div className="space-y-6">
            <Reveal>
              <div className="soft-card p-6 sm:p-7">
                <h2 className="text-lg font-semibold text-midnight">
                  Company details
                </h2>
                <dl className="mt-5 space-y-5 text-sm">
                  <div>
                    <dt className="font-medium text-muted">Company</dt>
                    <dd className="mt-0.5 text-base font-semibold text-midnight">
                      {COMPANY.name}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted">Mobile</dt>
                    <dd className="mt-0.5">
                      <a
                        href={COMPANY.phoneDial}
                        className="text-base font-semibold text-electric transition hover:text-midnight"
                      >
                        {COMPANY.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted">Address</dt>
                    <dd className="mt-0.5 text-base leading-relaxed text-midnight">
                      {COMPANY.address.street}
                      <br />
                      {COMPANY.address.city}, {COMPANY.address.region}
                      <br />
                      {COMPANY.address.country}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={COMPANY.phoneDial}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-electric px-5 py-3 text-sm font-semibold text-white transition hover:bg-ice hover:text-midnight"
                  >
                    Call now
                  </a>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-midnight/15 px-5 py-3 text-sm font-semibold text-midnight transition hover:border-electric hover:text-electric"
                  >
                    WhatsApp
                  </a>
                </div>

                <a
                  href={COMPANY.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric transition hover:text-midnight"
                >
                  Get directions in Google Maps
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <figure className="overflow-hidden rounded-2xl border border-midnight/8 bg-white shadow-[var(--shadow-card)]">
                <Photo
                  src={ASSETS.signboard}
                  alt="NETRONE LIGHTING & SOLAR INDUSTRIES signboard with contact numbers"
                  rounded="rounded-none"
                  imgClassName="bg-mist"
                  width={719}
                  height={419}
                />
                <figcaption className="px-4 py-3 text-xs text-muted">
                  Signboard photograph supplied by Netron Lighting Industries.
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={60}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
