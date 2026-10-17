import { Link } from "react-router-dom";
import type { Product } from "../data/products";
import Photo from "./Photo";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group soft-card flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-25px_rgba(7,20,38,0.45)]">
      <Link
        to={`/products/${product.slug}`}
        className="relative block"
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
        <span className="absolute left-3 top-3 rounded-full bg-midnight/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          {product.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-midnight">{product.name}</h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
          {product.tagline}
        </p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between pt-1">
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric transition hover:gap-2.5"
          >
            View details
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            to={`/contact?product=${encodeURIComponent(product.name)}`}
            className="rounded-full border border-midnight/10 px-3.5 py-1.5 text-xs font-semibold text-midnight transition hover:border-electric hover:text-electric"
          >
            Enquire
          </Link>
        </div>
      </div>
    </article>
  );
}
