import { useEffect } from "react";
import { COMPANY } from "../data/company";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  jsonLd?: Record<string, unknown>;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Lightweight per-route head manager. Canonical and og:url are intentionally
 * omitted because no production domain has been confirmed for this project.
 */
export default function SEO({
  title,
  description,
  image,
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${COMPANY.name}`;
    document.title = fullTitle;

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", COMPANY.name);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);

    const resolvedImage = image ?? "/images/logo-512.png";
    setMeta("property", "og:image", resolvedImage);
    setMeta("name", "twitter:image", resolvedImage);

    const scriptId = "route-jsonld";
    document.getElementById(scriptId)?.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, image, jsonLd]);

  return null;
}
