import SEO from "../../seo/SEO.jsx";

import {
  createSchoolSchema,
  createWebsiteSchema,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "../../seo/schema/index.js";

import banner from "../../assets/images/banner/building-01.png";

import AcademicsHero from "../../components/academics/AcademicsHero.jsx";
import AcademicStages from "../../components/academics/AcademicStages.jsx";
import LearningApproach from "../../components/academics/LearningApproach.jsx";
import CurriculumAreas from "../../components/academics/CurriculumAreas.jsx";
import BeyondAcademics from "../../components/academics/BeyondAcademics.jsx";
import AssessmentSupport from "../../components/academics/AssessmentSupport.jsx";
import AcademicsCTA from "../../components/academics/AcademicsCTA.jsx";

export default function Academics() {
  const siteUrl =
    typeof window !== "undefined" ? window.location.origin : "";

  const structuredData = siteUrl
    ? [
        createSchoolSchema(siteUrl),
        createWebsiteSchema(siteUrl),
        createWebPageSchema({
          siteUrl,
          path: "/academics",
          name: "Academics | S. R. P. Global School, Kushinagar",
          description:
            "Explore the academic journey at S. R. P. Global School, Kushinagar, from Nursery to Class XII, including academic stages, learning approaches, curriculum areas, and student development.",
          image: banner,
        }),
        createBreadcrumbSchema(siteUrl, [
          { name: "Home", path: "/" },
          { name: "Academics", path: "/academics" },
        ]),
      ]
    : [];

  return (
    <>
      <SEO
        title="Academics | S. R. P. Global School, Kushinagar"
        description="Discover the academic programme at S. R. P. Global School in Kushinagar, Uttar Pradesh. Explore learning stages from Nursery to Class XII, CBSE-pattern education, curriculum areas, critical thinking, and holistic student development."
        keywords={[
          "S. R. P. Global School academics",
          "SRP Global School Kushinagar",
          "school in Kushinagar",
          "school in Jhungawa Uttar Pradesh",
          "Nursery to Class XII",
          "CBSE-pattern education",
          "primary school academics",
          "middle school education",
          "secondary school education",
          "senior secondary education",
          "school curriculum",
          "critical thinking for students",
          "holistic student development",
        ]}
        canonical="/academics"
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
        <AcademicsHero />
        <AcademicStages />
        <LearningApproach />
        <CurriculumAreas />
        <BeyondAcademics />
        <AssessmentSupport />
        <AcademicsCTA />
      </main>
    </>
  );
}