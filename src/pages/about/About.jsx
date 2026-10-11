import SEO from "../../seo/SEO.jsx";

import {
  createSchoolSchema,
  createWebsiteSchema,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "../../seo/schema/index.js";

import banner from "../../assets/images/banner/building-02.png";

import AboutHero from "../../components/about/AboutHero.jsx";
import AboutIntroduction from "../../components/about/AboutIntroduction.jsx";
import VisionMission from "../../components/about/VisionMission.jsx";
import LeadershipMessages from "../../components/about/LeadershipMessages.jsx";

export default function About() {
  const siteUrl =
    typeof window !== "undefined" ? window.location.origin : "";

  const structuredData = siteUrl
    ? [
        createSchoolSchema(siteUrl),
        createWebsiteSchema(siteUrl),
        createWebPageSchema({
          siteUrl,
          path: "/about",
          name: "About S. R. P. Global School | Kushinagar",
          description:
            "Learn about S. R. P. Global School in Kushinagar, Uttar Pradesh, including its educational philosophy, vision, mission, and commitment to student development from Nursery to Class XII.",
          image: banner,
        }),
        createBreadcrumbSchema(siteUrl, [
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ]),
      ]
    : [];

  return (
    <>
      <SEO
        title="About S. R. P. Global School, Kushinagar | Our Vision & Mission"
        description="Discover S. R. P. Global School, Kushinagar, Uttar Pradesh. Learn about our vision, mission, educational values, leadership, and commitment to nurturing confident, compassionate learners from Nursery to Class XII."
        keywords={[
          "About S. R. P. Global School",
          "SRP Global School Kushinagar",
          "school in Kushinagar Uttar Pradesh",
          "school in Jhungawa",
          "school vision and mission",
          "Nursery to Class XII",
          "CBSE-pattern education",
          "academic excellence",
          "value-based education",
          "student development",
          "school leadership",
        ]}
        canonical="/about"
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
        <AboutHero />
        <AboutIntroduction />
        <VisionMission />
        <LeadershipMessages />
      </main>
    </>
  );
}