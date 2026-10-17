import type { Product } from "../data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  emptyTitle?: string;
  emptyDescription?: string;
}

export default function ProductGrid({
  products,
  emptyTitle = "No products match your search",
  emptyDescription = "Try a different search term or clear the category filter. You can also contact us directly for the full product range.",
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div
        role="status"
        className="soft-card flex flex-col items-center justify-center px-6 py-16 text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mist text-2xl">
          <span aria-hidden="true">🔎</span>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-midnight">
          {emptyTitle}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
          {emptyDescription}
        </p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <li
          key={product.slug}
          className="anim-pop"
          style={{ animationDelay: `${Math.min(index, 6) * 70}ms` }}
        >
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
