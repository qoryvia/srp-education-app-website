import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { SITE_URL as CONFIG_SITE_URL } from "./sitemap.config.mjs";
import { newsroomItems } from "../components/newsroom/newsroomData.js";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDirectory, "../..");

const outputDirectory = resolve(projectRoot, "public");
const outputFile = resolve(outputDirectory, "sitemap.xml");

// An environment variable can override sitemap.config.mjs.
const configuredSiteUrl = process.env.SITE_URL || CONFIG_SITE_URL;

function validateSiteUrl(value) {
  if (
    !value ||
    value.includes("YOUR-ACTUAL-SCHOOL-DOMAIN") ||
    value.includes("your-domain.com")
  ) {
    throw new Error(
      [
        "The sitemap domain has not been configured.",
        "Edit src/script/sitemap.config.mjs and set SITE_URL to the school's real public domain.",
        "Alternatively, set the SITE_URL environment variable before running this script.",
      ].join("\n")
    );
  }

  let parsed;

  try {
    parsed = new URL(value);
  } catch {
    throw new Error(
      `Invalid SITE_URL: "${value}". Enter a full URL such as https://www.example.in`
    );
  }

  const isLocalHost = [
    "localhost",
    "127.0.0.1",
    "::1",
  ].includes(parsed.hostname);

  if (
    parsed.protocol !== "https:" &&
    !(parsed.protocol === "http:" && isLocalHost)
  ) {
    throw new Error(
      "Use HTTPS for the production website URL. HTTP is allowed only for localhost."
    );
  }

  if (parsed.pathname !== "/" || parsed.search || parsed.hash) {
    throw new Error(
      "SITE_URL must contain only the website origin, without a page path, query, or fragment."
    );
  }

  return parsed.origin;
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function normalizePath(path) {
  if (!path || path === "/") return "/";

  const withoutLeadingSlashes = String(path).replace(/^\/+/, "");
  const withoutTrailingSlashes = withoutLeadingSlashes.replace(/\/+$/, "");

  return `/${withoutTrailingSlashes}`;
}

function getAbsoluteUrl(siteUrl, path) {
  const normalizedPath = normalizePath(path);

  if (normalizedPath === "/") {
    return `${siteUrl}/`;
  }

  return new URL(normalizedPath.slice(1), `${siteUrl}/`).href;
}

function getValidLastModified(value) {
  if (!value) return null;

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date.toISOString();
}

const staticRoutes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/academics", changefreq: "monthly", priority: "0.9" },
  { path: "/admissions", changefreq: "monthly", priority: "0.9" },
  { path: "/apply", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "yearly", priority: "0.7" },
  { path: "/gallery", changefreq: "monthly", priority: "0.7" },
  { path: "/newsroom", changefreq: "weekly", priority: "0.8" },
];

function createUrlEntry(siteUrl, entry) {
  const loc = getAbsoluteUrl(siteUrl, entry.path);
  const parts = [
    "  <url>",
    `    <loc>${escapeXml(loc)}</loc>`,
  ];

  const lastmod = getValidLastModified(entry.lastmod);

  if (lastmod) {
    parts.push(`    <lastmod>${lastmod}</lastmod>`);
  }

  if (entry.changefreq) {
    parts.push(`    <changefreq>${entry.changefreq}</changefreq>`);
  }

  if (entry.priority) {
    parts.push(`    <priority>${entry.priority}</priority>`);
  }

  parts.push("  </url>");

  return parts.join("\n");
}

async function generateSitemap() {
  const siteUrl = validateSiteUrl(configuredSiteUrl);

  const entries = [
    ...staticRoutes,

    // Dynamic newsroom detail pages, based on the existing article data.
    ...newsroomItems
      .filter((item) => item.slug)
      .map((item) => ({
        path: `/newsroom/${item.slug}`,
        changefreq: "yearly",
        priority: item.featured ? "0.7" : "0.6",
        lastmod: item.updatedAt || item.publishedAt || null,
      })),
  ];

  // Avoid duplicate URLs in case static and dynamic routes overlap.
  const uniqueEntries = [];
  const seenUrls = new Set();

  for (const entry of entries) {
    const normalizedEntry = {
      ...entry,
      path: normalizePath(entry.path),
    };

    const absoluteUrl = getAbsoluteUrl(siteUrl, normalizedEntry.path);

    if (seenUrls.has(absoluteUrl)) continue;

    seenUrls.add(absoluteUrl);
    uniqueEntries.push(normalizedEntry);
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...uniqueEntries.map((entry) => createUrlEntry(siteUrl, entry)),
    "</urlset>",
    "",
  ].join("\n");

  await mkdir(outputDirectory, { recursive: true });
  await writeFile(outputFile, xml, "utf8");

  console.log("Sitemap generated successfully.");
  console.log(`Website: ${siteUrl}`);
  console.log(`URLs included: ${uniqueEntries.length}`);
  console.log(`Output: ${outputFile}`);
}

generateSitemap().catch((error) => {
  console.error("Failed to generate sitemap.xml.");
  console.error(error.message);
  process.exitCode = 1;
});