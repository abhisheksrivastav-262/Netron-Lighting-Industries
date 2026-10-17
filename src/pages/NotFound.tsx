import { Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import SEO from "../components/SEO";
import { COMPANY, whatsappUrl } from "../data/company";

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you were looking for could not be found on the Netron Lighting Industries website."
      />

      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-midnight text-white">
        <div className="light-grid absolute inset-0 opacity-80" aria-hidden="true" />
        <PageContainer className="relative">
          <div className="mx-auto max-w-xl text-center">
            <p className="font-display text-7xl font-bold text-ice sm:text-9xl">
              404
            </p>
            <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">
              This page could not be found
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              The page you were looking for may have moved or no longer exists.
              Let us guide you back to the Netron Lighting Industries range.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-ice hover:text-midnight sm:w-auto"
              >
                Back to Home
              </Link>
              <Link
                to="/products"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 sm:w-auto"
              >
                Browse Products
              </Link>
            </div>
            <p className="mt-8 text-sm text-white/55">
              Need help?{" "}
              <a
                href={COMPANY.phoneDial}
                className="font-semibold text-white underline-offset-4 hover:underline"
              >
                Call {COMPANY.phoneDisplay}
              </a>{" "}
              or{" "}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline-offset-4 hover:underline"
              >
                message us on WhatsApp
              </a>
              .
            </p>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
