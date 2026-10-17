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
            <figcaption className="mt-4 flex flex-col items-center gap-3 text-center text-sm text-white/70">
              <span className="text-base font-semibold text-white">{active.name}</span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white">
                  {active.label}
                </span>
                <span>
                  {(activeIndex ?? 0) + 1} / {images.length}
                </span>
                <a
                  href={`https://wa.me/919621346653?text=${encodeURIComponent(`Hello Netron Lighting Industries, I would like to enquire about: ${active.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3.5 py-1 text-xs font-semibold text-white shadow transition hover:bg-emerald-700"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Enquiry Now
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
