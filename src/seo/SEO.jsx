import { useEffect } from "react";

const DEFAULT_SITE_NAME = "S. R. P. Global School";

function getAbsoluteUrl(value) {
  if (!value || typeof window === "undefined") return "";

  try {
    return new URL(value, window.location.origin).href;
  } catch {
    return "";
  }
}

function getCanonicalUrl(canonical) {
  if (canonical) {
    return getAbsoluteUrl(canonical);
  }

  if (typeof window === "undefined") {
    return "";
  }

  return `${window.location.origin}${window.location.pathname}`;
}

function setMeta(attribute, key, content) {
  const existing = Array.from(
    document.head.querySelectorAll(`meta[${attribute}]`)
  ).filter((element) => element.getAttribute(attribute) === key);

  if (content === undefined || content === null || content === "") {
    existing.forEach((element) => element.remove());
    return;
  }

  const element = existing.shift() || document.createElement("meta");

  // Remove any duplicate tags matching the same key.
  existing.forEach((duplicate) => duplicate.remove());

  element.setAttribute(attribute, key);
  element.setAttribute("content", String(content));

  if (!element.parentNode) {
    document.head.appendChild(element);
  }
}

function setLink(rel, href) {
  const existing = Array.from(
    document.head.querySelectorAll("link[rel]")
  ).filter((element) => element.getAttribute("rel") === rel);

  if (!href) {
    existing.forEach((element) => element.remove());
    return;
  }

  const element = existing.shift() || document.createElement("link");

  existing.forEach((duplicate) => duplicate.remove());

  element.setAttribute("rel", rel);
  element.setAttribute("href", href);

  if (!element.parentNode) {
    document.head.appendChild(element);
  }
}

export default function SEO({
  title = DEFAULT_SITE_NAME,
  description = "",
  keywords = [],
  canonical,
  image,
  type = "website",
  siteName = DEFAULT_SITE_NAME,
  author,
  robots = "index,follow,max-image-preview:large",
  noIndex = false,
  locale = "en_IN",
  lang = "en",
  alternateLanguages = [],
  structuredData,
}) {
  const keywordsContent = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords;

  const schemas = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  // Make the effect depend on serializable values rather than object identity.
  const schemasJson = JSON.stringify(schemas);
  const alternatesJson = JSON.stringify(alternateLanguages);

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;

    const canonicalUrl = getCanonicalUrl(canonical);
    const absoluteImage = getAbsoluteUrl(image);

    // Basic metadata
    setMeta("name", "description", description);
    setMeta("name", "keywords", keywordsContent);
    setMeta("name", "author", author);
    setMeta(
      "name",
      "robots",
      noIndex ? "noindex,nofollow" : robots
    );

    // Open Graph
    setMeta("property", "og:type", type);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:site_name", siteName);
    setMeta("property", "og:locale", locale);
    setMeta("property", "og:image", absoluteImage);

    // Twitter cards
    setMeta(
      "name",
      "twitter:card",
      absoluteImage ? "summary_large_image" : "summary"
    );
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", absoluteImage);

    // Canonical link
    setLink("canonical", canonicalUrl);

    // Alternate language links
    document.head
      .querySelectorAll('link[data-seo-alternate="true"]')
      .forEach((element) => element.remove());

    const alternates = JSON.parse(alternatesJson || "[]");

    alternates.forEach(({ lang: alternateLang, href }) => {
      if (!alternateLang || !href) return;

      const absoluteHref = getAbsoluteUrl(href);
      if (!absoluteHref) return;

      const element = document.createElement("link");

      element.rel = "alternate";
      element.hreflang = alternateLang;
      element.href = absoluteHref;
      element.dataset.seoAlternate = "true";

      document.head.appendChild(element);
    });

    // JSON-LD structured data
    document.head
      .querySelectorAll('script[data-seo-jsonld="true"]')
      .forEach((element) => element.remove());

    const schemaItems = JSON.parse(schemasJson || "[]");

    schemaItems.forEach((schema) => {
      if (!schema || typeof schema !== "object") return;

      const script = document.createElement("script");

      script.type = "application/ld+json";
      script.dataset.seoJsonld = "true";
      script.textContent = JSON.stringify(schema);

      document.head.appendChild(script);
    });

    return () => {
      document.head
        .querySelectorAll('script[data-seo-jsonld="true"]')
        .forEach((element) => element.remove());

      document.head
        .querySelectorAll('link[data-seo-alternate="true"]')
        .forEach((element) => element.remove());
    };
  }, [
    title,
    description,
    keywordsContent,
    canonical,
    image,
    type,
    siteName,
    author,
    robots,
    noIndex,
    locale,
    lang,
    schemasJson,
    alternatesJson,
  ]);

  return null;
}