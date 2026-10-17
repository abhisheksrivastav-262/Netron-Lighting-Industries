import { Link, useParams } from "react-router-dom";
import CTASection from "../components/CTASection";
import PageContainer from "../components/PageContainer";
import Photo from "../components/Photo";
import ProductGrid from "../components/ProductGrid";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import { COMPANY, productWhatsappUrl } from "../data/company";
import { getProductBySlug, getRelatedProducts } from "../data/products";
import NotFoundPage from "./NotFound";

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return <NotFoundPage />;
  }

  const related = getRelatedProducts(product, 3);

  return (
    <>
      <SEO
        title={product.name}
        description={`${product.description} Enquire with ${COMPANY.name} by phone or WhatsApp.`}
        image={product.image}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.description,
          category: product.category,
          image: product.image,
          brand: { "@type": "Brand", name: COMPANY.name },
        }}
      />

      <section className="border-b border-midnight/5 bg-white">
        <PageContainer className="pt-6">
          <nav aria-label="Breadcrumb" className="text-xs text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="transition hover:text-electric">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/products" className="transition hover:text-electric">
                  Products
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-midnight" aria-current="page">
                {product.name}
              </li>
            </ol>
          </nav>
        </PageContainer>
      </section>

      <section className="container-page py-10 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Photo
              src={product.image}
              alt={product.imageAlt}
              aspect="aspect-square"
              tone="white"
              rounded="rounded-3xl"
              className="border border-midnight/8 shadow-[var(--shadow-card)]"
              imgClassName="p-4"
              width={1200}
              height={1200}
              priority
            />
          </Reveal>

          <Reveal delay={80}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">
              {product.category}
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight text-midnight sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-muted">
              {product.tagline}
            </p>
            <p className="mt-5 text-base leading-relaxed text-midnight/80">
              {product.description}
            </p>

            <dl className="mt-8 divide-y divide-midnight/8 overflow-hidden rounded-2xl border border-midnight/10 bg-white">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between gap-4 px-5 py-3.5 text-sm"
                >
                  <dt className="font-medium text-muted">{spec.label}</dt>
                  <dd className="text-right font-semibold text-midnight">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={productWhatsappUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-electric px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-ice hover:text-midnight"
              >
                Enquire on WhatsApp
              </a>
              <Link
                to={`/contact?product=${encodeURIComponent(product.name)}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-midnight/15 px-6 py-3.5 text-sm font-semibold text-midnight transition hover:border-electric hover:text-electric"
              >
                Enquiry form
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted">
              Or call{" "}
              <a
                href={COMPANY.phoneDial}
                className="font-semibold text-midnight hover:text-electric"
              >
                {COMPANY.phoneDisplay}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <PageContainer>
            <Reveal>
              <h2 className="text-2xl font-semibold text-midnight">
                Related products
              </h2>
            </Reveal>
            <Reveal className="mt-8" delay={60}>
              <ProductGrid products={related} />
            </Reveal>
          </PageContainer>
        </section>
      )}

      <CTASection productName={product.name} />
    </>
  );
}
