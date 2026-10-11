const SCHOOL_NAME = "S. R. P. Global School";

function getBaseUrl(siteUrl) {
  try {
    return new URL(siteUrl).origin;
  } catch {
    throw new Error(
      "Provide the full public website URL, such as https://school.example."
    );
  }
}

function getAbsoluteUrl(siteUrl, path = "/") {
  const baseUrl = getBaseUrl(siteUrl);
  return new URL(String(path).replace(/^\/+/, ""), `${baseUrl}/`).href;
}

function getValidDate(value) {
  if (!value) return undefined;

  const date = new Date(value);

  return Number.isNaN(date.getTime())
    ? undefined
    : date.toISOString();
}

export function createSchoolSchema(siteUrl) {
  const baseUrl = getBaseUrl(siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "School",
    "@id": `${baseUrl}/#school`,
    name: SCHOOL_NAME,
    url: `${baseUrl}/`,
    description:
      "S. R. P. Global School supports school education from Nursery to Class XII.",
    telephone: "+91-9170316993",
    email: "plsglobalschool2021@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Buddha Marg, Jhungawa",
      addressLocality: "Kushinagar",
      addressRegion: "Uttar Pradesh",
      postalCode: "274403",
      addressCountry: "IN",
    },
  };
}

export function createWebsiteSchema(siteUrl) {
  const baseUrl = getBaseUrl(siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: SCHOOL_NAME,
    url: `${baseUrl}/`,
    publisher: {
      "@id": `${baseUrl}/#school`,
    },
    inLanguage: "en-IN",
  };
}

export function createWebPageSchema({
  siteUrl,
  path = "/",
  name,
  description,
  image,
}) {
  const url = getAbsoluteUrl(siteUrl, path);
  const baseUrl = getBaseUrl(siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: name || SCHOOL_NAME,
    description,
    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },
    about: {
      "@id": `${baseUrl}/#school`,
    },
    ...(image ? { primaryImageOfPage: getAbsoluteUrl(siteUrl, image) } : {}),
    inLanguage: "en-IN",
  };
}

export function createBreadcrumbSchema(siteUrl, items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(siteUrl, item.path || "/"),
    })),
  };
}

export function createNewsArticleSchema(siteUrl, article) {
  const articleUrl = getAbsoluteUrl(
    siteUrl,
    `/newsroom/${article.slug}`
  );

  const authorName =
    typeof article.author === "string"
      ? article.author
      : article.author?.name || SCHOOL_NAME;

  const publishedAt = getValidDate(article.publishedAt);
  const updatedAt = getValidDate(article.updatedAt);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline: article.title,
    description: article.description,
    image: article.image ? [article.image] : undefined,
    author: {
      "@type": "Organization",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${getBaseUrl(siteUrl)}/#school`,
      name: SCHOOL_NAME,
    },
    articleSection: article.category,
    keywords: article.tags?.join(", "),
    ...(publishedAt ? { datePublished: publishedAt } : {}),
    ...(updatedAt ? { dateModified: updatedAt } : {}),
    inLanguage: "en-IN",
  };
}