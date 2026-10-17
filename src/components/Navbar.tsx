import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { COMPANY, whatsappUrl } from "../data/company";
import Logo from "./Logo";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/why-us", label: "Why Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const distance = doc.scrollHeight - window.innerHeight;
      setProgress(distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `group relative text-sm font-medium transition-colors ${
      isActive
        ? "text-white"
        : "text-white/70 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight/85 backdrop-blur-md">
      <nav
        className="container-page flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="flex items-center rounded-lg text-white"
          aria-label={`${COMPANY.name} — home`}
        >
          <Logo size={46} withWordmark wordmarkClassName="text-white" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === "/"} className={linkClass}>
                  {({ isActive }) => (
                    <span className="relative">
                      {link.label}
                      <span
                        className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-ice transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        } group-hover:w-full`}
                      />
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={COMPANY.phoneDial}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/85 transition hover:border-ice/60 hover:text-white"
            >
              <PhoneIcon className="h-4 w-4" />
              {COMPANY.phoneDisplay}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-electric px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:bg-ice hover:text-midnight"
            >
              Enquire Now
            </a>
          </div>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white lg:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        id={panelId}
        className={`lg:hidden overflow-hidden border-t border-white/10 bg-midnight transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-base font-medium transition ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/75 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="mt-2 flex flex-col gap-2">
            <a
              href={COMPANY.phoneDial}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-medium text-white"
            >
              <PhoneIcon className="h-4 w-4" />
              Call {COMPANY.phoneDisplay}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-electric px-4 py-3 text-sm font-semibold text-white"
            >
              WhatsApp Enquiry
            </a>
          </li>
        </ul>
      </div>

      {/* Scroll progress indicator */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-white/5"
      >
        <div
          className="h-full rounded-full transition-[width] duration-150 ease-out"
          style={{
            width: `${progress * 100}%`,
            backgroundImage: "linear-gradient(90deg, var(--color-electric), var(--color-ice))",
          }}
        />
      </div>
    </header>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
