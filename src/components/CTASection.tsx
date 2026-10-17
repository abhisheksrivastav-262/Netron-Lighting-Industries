import { Link } from "react-router-dom";
import { COMPANY, whatsappUrl } from "../data/company";
import Reveal from "./Reveal";

interface CTASectionProps {
  title?: string;
  description?: string;
  productName?: string;
}

export default function CTASection({
  title = "Ready to enquire about LED bulbs?",
  description = "Reach Netron Lighting Industries directly by phone or WhatsApp for product details, availability and business enquiries.",
  productName,
}: CTASectionProps) {
  const message = productName
    ? `Hello Netron Lighting Industries, I would like to enquire about the product: ${productName}.`
    : undefined;

  return (
    <section className="container-page py-16 sm:py-20">
      <Reveal>
        <div className="light-grid relative overflow-hidden rounded-3xl bg-deep px-6 py-14 text-center shadow-[var(--shadow-glow)] sm:px-12">
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={
                  message
                    ? `${COMPANY.whatsappBase}?text=${encodeURIComponent(message)}`
                    : whatsappUrl()
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-ice hover:text-midnight sm:w-auto"
              >
                Enquire on WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/55">
              Or call{" "}
              <a
                href={COMPANY.phoneDial}
                className="font-semibold text-white underline-offset-4 hover:underline"
              >
                {COMPANY.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
