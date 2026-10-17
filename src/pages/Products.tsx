import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import PageContainer from "../components/PageContainer";
import ProductGrid from "../components/ProductGrid";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SEO from "../components/SEO";
import { ASSETS } from "../data/assets";
import { COMPANY } from "../data/company";
import {
  PRODUCT_CATEGORIES,
  PRODUCTS,
  type ProductCategory,
} from "../data/products";

type Filter = "All" | ProductCategory;

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesFilter = filter === "All" || p.category === filter;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [query, filter]);

  const filters: Filter[] = ["All", ...PRODUCT_CATEGORIES];

  return (
    <>
      <SEO
        title="Products"
        description={`Browse LED bulbs, ceiling fans and lighting products from ${COMPANY.name}, a lighting manufacturer in ${COMPANY.address.city}, ${COMPANY.address.region}. Enquire by phone or WhatsApp.`}
        image={ASSETS.ariaFan}
      />

      <section className="relative overflow-hidden bg-midnight py-16 text-white sm:py-20">
        <div className="light-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <PageContainer className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="Products"
            title="LED bulbs, ceiling fans and lighting products"
            description="Browse our product range. Product photography is from Netron Lighting Industries. Where a specification is not confirmed, it is marked as “Contact us for details”."
          />
        </PageContainer>
      </section>

      <section className="container-page py-12 sm:py-16">
        {/* Controls */}
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              {filters.map((f) => {
                const active = filter === f;
                return (
                  <button
                    key={f}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(f)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "border-electric bg-electric text-white"
                        : "border-midnight/15 bg-white text-midnight hover:border-electric hover:text-electric"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>

            <div className="w-full lg:max-w-xs">
              <label htmlFor="product-search" className="sr-only">
                Search products
              </label>
              <div className="relative">
                <span
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                  aria-hidden="true"
                >
                  🔍
                </span>
                <input
                  id="product-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products…"
                  className="w-full rounded-full border border-midnight/15 bg-white py-3 pl-11 pr-4 text-sm text-midnight placeholder:text-muted/60 transition focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <p className="mt-6 text-sm text-muted" aria-live="polite">
          Showing {filtered.length} of {PRODUCTS.length} products
        </p>

        <div className="mt-6">
          <ProductGrid products={filtered} />
        </div>

        <Reveal className="mt-12">
          <div className="soft-card flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-base font-semibold text-midnight">
                Looking for something not listed here?
              </h2>
              <p className="mt-1 text-sm text-muted">
                Tell us your requirement and we will confirm what we can supply.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white transition hover:bg-ice hover:text-midnight"
            >
              Send an enquiry
            </Link>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
