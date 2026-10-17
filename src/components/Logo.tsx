import { ASSETS } from "../data/assets";
import { COMPANY } from "../data/company";

interface LogoProps {
  /** Rendered height of the logo in pixels (width follows the aspect ratio) */
  size?: number;
  className?: string;
  /** Show the business name next to the logo mark */
  withWordmark?: boolean;
  wordmarkClassName?: string;
}

/**
 * Presentation of the real Netron Lighting Industries logo. The original asset
 * is never modified. When `withWordmark` is set, the business name is shown
 * alongside the mark.
 */
export default function Logo({
  size = 48,
  className = "",
  withWordmark = false,
  wordmarkClassName = "",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src={ASSETS.logo}
        alt={`${COMPANY.name} logo`}
        style={{ height: size }}
        className="block h-full w-auto shrink-0 rounded-xl object-contain"
        loading="eager"
        decoding="async"
      />
      {withWordmark && (
        <span
          className={`font-display text-[1.05rem] font-semibold leading-tight tracking-tight ${wordmarkClassName}`}
        >
          Netron
          <span className="block text-[0.62rem] font-medium uppercase tracking-[0.22em] opacity-70">
            Lighting Industries
          </span>
        </span>
      )}
    </span>
  );
}
