import type { CSSProperties } from "react";

interface PhotoProps {
  src: string;
  alt: string;
  /**
   * Optional Tailwind aspect utility, e.g. "aspect-square", "aspect-[4/3]",
   * "aspect-video". When provided the image is fitted with object-contain
   * inside that box (full image visible, letterboxed on the chosen tone).
   * When omitted the image keeps its natural aspect ratio and simply scales
   * with the container width — so it is never cropped.
   */
  aspect?: string;
  /** Wrapper element classes */
  className?: string;
  /** <img> classes */
  imgClassName?: string;
  /** Backdrop tone used when `aspect` is set */
  tone?: "white" | "mist" | "midnight";
  rounded?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  style?: CSSProperties;
}

const TONES: Record<string, string> = {
  white: "bg-white",
  mist: "bg-mist",
  midnight: "bg-midnight",
};

/**
 * Renders a supplied Netron Lighting Industries photograph without ever
 * cropping it. Responsive by default: scales to the container width and keeps
 * the full image visible on every screen size.
 */
export default function Photo({
  src,
  alt,
  aspect,
  className = "",
  imgClassName = "",
  tone = "mist",
  rounded = "rounded-2xl",
  priority = false,
  width,
  height,
  style,
}: PhotoProps) {
  if (aspect) {
    return (
      <div
        className={`relative overflow-hidden ${aspect} ${rounded} ${TONES[tone]} ${className}`}
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`absolute inset-0 h-full w-full object-contain ${imgClassName}`}
          style={style}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          {...(priority ? { fetchPriority: "high" as const } : {})}
        />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`h-auto w-full ${rounded} ${imgClassName}`}
      style={style}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
    />
  );
}
