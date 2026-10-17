import { Link } from "react-router-dom";
import type { Product } from "../data/products";
import Photo from "./Photo";
import { productWhatsappUrl } from "../data/company";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group soft-card flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-25px_rgba(7,20,38,0.45)]">
      <Link
        to={`/products/${product.slug}`}
        className="relative block bg-white"
        aria-label={`View ${product.name}`}
      >
        <Photo
          src={product.image}
          alt={product.imageAlt}
          aspect="aspect-square"
          tone="white"
          rounded="rounded-none"
          imgClassName="p-3 transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-midnight/85 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            {product.category}
          </span>
          {product.price && (
            <span className="rounded-full bg-emerald-600/90 px-2.5 py-1 text-[0.68rem] font-bold tracking-wider text-white backdrop-blur-sm">
              {product.price}
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-midnight leading-snug">
          <Link
            to={`/products/${product.slug}`}
            className="transition hover:text-electric"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-electric">
          {product.tagline}
        </p>
        <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-muted">
          {product.description}
        </p>

        {/* Bottom Enquiry Action */}
        <div className="mt-auto pt-4 space-y-2.5">
          <a
            href={productWhatsappUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-emerald-700 active:scale-[0.98]"
            aria-label={`Enquire on WhatsApp about ${product.name}`}
          >
            <svg
              className="h-4 w-4 shrink-0 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Enquiry Now
          </a>

          <div className="flex items-center justify-between text-xs pt-0.5">
            <Link
              to={`/products/${product.slug}`}
              className="inline-flex items-center gap-1 font-semibold text-electric transition hover:gap-1.5"
            >
              View details <span aria-hidden="true">→</span>
            </Link>
            <Link
              to={`/contact?product=${encodeURIComponent(product.name)}`}
              className="text-[0.75rem] font-medium text-muted hover:text-midnight transition"
            >
              Contact form
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
