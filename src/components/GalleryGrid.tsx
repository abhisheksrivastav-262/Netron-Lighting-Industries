import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryImage } from "../data/gallery";

interface GalleryGridProps {
  images: GalleryImage[];
  /** Tailwind classes controlling the responsive masonry column count */
  columnsClassName?: string;
  /** Show the small category chip on each tile */
  showLabels?: boolean;
}

/**
 * Masonry-style grid of supplied photographs. Every image keeps its natural
 * aspect ratio, so nothing is ever cropped. Clicking a tile opens an accessible
 * lightbox that shows the full-resolution image.
 */
export default function GalleryGrid({
  images,
  columnsClassName = "columns-2 sm:columns-3 lg:columns-4",
  showLabels = true,
}: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const step = useCallback(
    (dir: number) =>
      setActiveIndex((i) =>
        i === null ? i : (i + dir + images.length) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, step]);

  const active = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <div className={`${columnsClassName} gap-4 [column-fill:_balance]`}>
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="anim-pop group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-midnight/10 bg-mist text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
            style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}
            aria-label={`View larger: ${image.alt}`}
          >
            <span className="relative block">
              <img
                src={image.src}
                alt={image.alt}
                className="h-auto w-full object-contain transition duration-500 ease-out group-hover:scale-[1.04]"
                loading="lazy"
                decoding="async"
              />
              {showLabels && (
                <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-midnight/70 px-2.5 py-1 text-[0.7rem] font-medium text-white backdrop-blur-sm transition duration-300 group-hover:-translate-y-0.5">
                  {image.label}
                </span>
              )}
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-midnight/0 opacity-0 transition duration-300 group-hover:bg-midnight/20 group-hover:opacity-100">
                <span className="scale-95 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-midnight transition duration-300 group-hover:scale-100">
                  View
                </span>
              </span>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-midnight/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close image viewer"
            className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10 sm:left-4"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next image"
                className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10 sm:right-4"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </>
          )}

          <figure
            className="anim-pop flex max-h-full w-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[78vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-4 flex flex-col items-center gap-2 text-center text-sm text-white/70">
              <span className="text-base font-semibold text-white">{active.name}</span>
              <span className="flex items-center gap-3">
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white">
                  {active.label}
                </span>
                <span>
                  {(activeIndex ?? 0) + 1} / {images.length}
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
