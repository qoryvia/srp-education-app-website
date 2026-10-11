import SEO from "../../seo/SEO.jsx";

import {
  createSchoolSchema,
  createWebsiteSchema,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "../../seo/schema/index.js";

import banner from "../../assets/images/banner/building-03.png";

import GalleryHero from "../../components/gallery/GalleryHero.jsx";
import GalleryGrid from "../../components/gallery/GalleryGrid.jsx";
import GalleryCTA from "../../components/gallery/GalleryCTA.jsx";

export default function Gallery() {
  const siteUrl =
    typeof window !== "undefined" ? window.location.origin : "";

  const structuredData = siteUrl
    ? [
        createSchoolSchema(siteUrl),
        createWebsiteSchema(siteUrl),
        createWebPageSchema({
          siteUrl,
          path: "/gallery",
          name: "School Gallery | S. R. P. Global School, Kushinagar",
          description:
            "Explore the S. R. P. Global School gallery featuring school life, learning environments, educational activities, sports, arts, and student development.",
          image: banner,
        }),
        createBreadcrumbSchema(siteUrl, [
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]),
      ]
    : [];

  return (
    <>
      <SEO
        title="School Gallery | S. R. P. Global School, Kushinagar"
        description="Explore the gallery of S. R. P. Global School in Kushinagar, Uttar Pradesh. Discover school life, learning activities, creative experiences, sports, and educational facilities for students from Nursery to Class XII."
        keywords={[
          "S. R. P. Global School gallery",
          "SRP Global School Kushinagar",
          "school gallery Kushinagar",
          "school activities Kushinagar",
          "school campus photos",
          "school learning activities",
          "student life",
          "school sports and arts",
          "school facilities",
          "Nursery to Class XII",
        ]}
        canonical="/gallery"
        image={banner}
        type="website"
        siteName="S. R. P. Global School"
        author="S. R. P. Global School"
        locale="en_IN"
        lang="en"
        robots="index,follow,max-image-preview:large"
        structuredData={structuredData}
      />

      <main>
        <GalleryHero />
        <GalleryGrid />
        <GalleryCTA />
      </main>
    </>
  );
}