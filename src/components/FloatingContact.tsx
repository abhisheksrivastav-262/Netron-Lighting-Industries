import { COMPANY, whatsappUrl } from "../data/company";

/**
 * Floating contact controls (Call + WhatsApp), stacked at the bottom-right.
 * Positioned clear of essential mobile UI (above the safe-area inset and
 * offset from the screen edge).
 */
export default function FloatingContact({ className = "" }: { className?: string }) {
  return (
    <div
      className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 flex flex-col items-end gap-3 ${className}`}
    >
      <a
        href={COMPANY.phoneDial}
        aria-label={`Call ${COMPANY.name}`}
        className="inline-flex h-14 items-center gap-2 rounded-full bg-electric pl-4 pr-5 text-sm font-semibold text-white shadow-lg shadow-black/25 transition hover:scale-[1.03] hover:bg-ice hover:text-midnight focus-visible:outline-offset-4"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
        </svg>
        <span className="hidden sm:inline">Call</span>
      </a>

      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Netron Lighting Industries on WhatsApp"
        className="inline-flex h-14 items-center gap-2 rounded-full bg-[#25D366] pl-4 pr-5 text-sm font-semibold text-white shadow-lg shadow-black/25 transition hover:scale-[1.03] hover:bg-[#1ebe5b] focus-visible:outline-offset-4"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.8a8.1 8.1 0 0 1 5.75 2.38 8.08 8.08 0 0 1 2.38 5.73c0 4.48-3.65 8.12-8.13 8.12a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.11.82.83-3.04-.19-.31a8.07 8.07 0 0 1-1.24-4.3c0-4.48 3.65-8.12 8.14-8.12zm-2.9 3.6c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.52.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.39-.41-.54-.42-.14 0-.3-.01-.46-.01z" />
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
