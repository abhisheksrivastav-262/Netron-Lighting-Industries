import { Link } from "react-router-dom";
import { COMPANY, whatsappUrl } from "../data/company";
import Logo from "./Logo";

const FOOTER_NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/why-us", label: "Why Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
  { to: "/privacy-policy", label: "Privacy Policy" },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const year = CURRENT_YEAR;

  return (
    <footer className="border-t border-white/10 bg-midnight text-white">
      <div className="container-page grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo size={56} withWordmark wordmarkClassName="text-white" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
            {COMPANY.name} is an LED bulb manufacturing business based in{" "}
            {COMPANY.address.street}, {COMPANY.address.city},{" "}
            {COMPANY.address.region}, India.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={COMPANY.phoneDial}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
            >
              {COMPANY.phoneDisplay}
            </a>
            <a
              href={COMPANY.emailMailto}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
            >
              {COMPANY.email}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-electric px-4 py-2 text-sm font-semibold text-white transition hover:bg-ice hover:text-midnight"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ice">
            Company
          </h2>
          <ul className="mt-4 space-y-3">
            {FOOTER_NAV.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ice">
            Visit / Contact
          </h2>
          <address className="mt-4 space-y-3 text-sm not-italic text-white/70">
            <p>{COMPANY.address.street}</p>
            <p>
              {COMPANY.address.city}, {COMPANY.address.region}
            </p>
            <p>{COMPANY.address.country}</p>
            <p>
              <a
                href={COMPANY.phoneDial}
                className="transition hover:text-white"
              >
                {COMPANY.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={COMPANY.emailMailto}
                className="transition hover:text-white"
              >
                {COMPANY.email}
              </a>
            </p>
          </address>
          <a
            href={COMPANY.mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ice transition hover:text-white"
          >
            Get directions
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-3 pb-40 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:pb-6">
          <p>
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <p>
            {COMPANY.business} · {COMPANY.address.city},{" "}
            {COMPANY.address.region}, {COMPANY.address.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
