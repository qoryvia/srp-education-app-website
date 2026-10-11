import SEO from "../../seo/SEO.jsx";

import {
  createSchoolSchema,
  createWebsiteSchema,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "../../seo/schema/index.js";

import banner from "../../assets/images/banner/building-04.png";

import NewsroomHero from "../../components/newsroom/NewsroomHero.jsx";
import FeaturedStory from "../../components/newsroom/FeaturedStory.jsx";
import NewsroomUpdates from "../../components/newsroom/NewsroomUpdates.jsx";
import SchoolNotices from "../../components/newsroom/SchoolNotices.jsx";
import NewsroomCTA from "../../components/newsroom/NewsroomCTA.jsx";

export default function Newsroom() {
  const siteUrl =
    typeof window !== "undefined" ? window.location.origin : "";

  const structuredData = siteUrl
    ? [
        createSchoolSchema(siteUrl),
        createWebsiteSchema(siteUrl),
        createWebPageSchema({
          siteUrl,
          path: "/newsroom",
          name: "Newsroom & School Updates | S. R. P. Global School",
          description:
            "Explore school news, educational stories, admission information, and useful notices for parents and students at S. R. P. Global School in Kushinagar, Uttar Pradesh.",
          image: banner,
        }),
        createBreadcrumbSchema(siteUrl, [
          { name: "Home", path: "/" },
          { name: "Newsroom", path: "/newsroom" },
        ]),
      ]
    : [];

  return (
    <>
      <SEO
        title="Newsroom & School Updates | S. R. P. Global School, Kushinagar"
        description="Read school news, educational stories, student development updates, admission information, and important notices from S. R. P. Global School, Kushinagar, Uttar Pradesh."
        keywords={[
          "S. R. P. Global School news",
          "SRP Global School Kushinagar",
          "school news Kushinagar",
          "school updates Uttar Pradesh",
          "school notices for parents",
          "school activities",
          "student development",
          "school admissions 2026-27",
          "school fee information",
          "Nursery to Class XII",
        ]}
        canonical="/newsroom"
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
        <NewsroomHero />
        <FeaturedStory />
        <NewsroomUpdates />
        <SchoolNotices />
        <NewsroomCTA />
      </main>
    </>
  );
}