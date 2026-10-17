import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "up" | "left" | "right" | "scale" | "blur";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Entrance direction. "up" is the default and is used by all existing call sites. */
  variant?: Variant;
}

/** Scroll-entrance effect with several directions; disabled for reduced-motion users. */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (visible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
