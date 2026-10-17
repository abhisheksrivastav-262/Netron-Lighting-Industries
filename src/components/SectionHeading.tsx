import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <div
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.24em] ${
            isDark ? "text-ice" : "text-electric"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-semibold leading-[1.1] sm:text-4xl ${
          isDark ? "text-white" : "text-midnight"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            isDark ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
