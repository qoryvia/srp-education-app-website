import SEO from "../../seo/SEO.jsx";

import {
  createSchoolSchema,
  createWebsiteSchema,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "../../seo/schema/index.js";

import banner from "../../assets/images/banner/building-01.png";

import AdmissionsHero from "../../components/admissions/AdmissionsHero.jsx";
import AdmissionProcess from "../../components/admissions/AdmissionProcess.jsx";
import RequiredDocuments from "../../components/admissions/RequiredDocuments.jsx";
import FeeStructure from "../../components/admissions/FeeStructure.jsx";
import FacultyDirectory from "../../components/admissions/FacultyDirectory.jsx";
import AdmissionsFAQ from "../../components/admissions/AdmissionsFAQ.jsx";
import AdmissionsCTA from "../../components/admissions/AdmissionsCTA.jsx";

export default function Admissions() {
  const siteUrl =
    typeof window !== "undefined" ? window.location.origin : "";

  const structuredData = siteUrl
    ? [
        createSchoolSchema(siteUrl),
        createWebsiteSchema(siteUrl),
        createWebPageSchema({
          siteUrl,
          path: "/admissions",
          name: "Admissions 2026–27 | S. R. P. Global School, Kushinagar",
          description:
            "Explore admission procedures, required documents, fee details, faculty information, and frequently asked questions for S. R. P. Global School in Kushinagar, Uttar Pradesh.",
          image: banner,
        }),
        createBreadcrumbSchema(siteUrl, [
          { name: "Home", path: "/" },
          { name: "Admissions", path: "/admissions" },
        ]),
      ]
    : [];

  return (
    <>
      <SEO
        title="Admissions 2026–27 | S. R. P. Global School, Kushinagar"
        description="Find admission information for S. R. P. Global School, Kushinagar, Uttar Pradesh. Explore the application process, required documents, fee structure for applicable classes, and school contact details for Nursery to Class XII."
        keywords={[
          "S. R. P. Global School admissions",
          "SRP Global School Kushinagar",
          "school admission Kushinagar",
          "school admission Jhungawa",
          "admissions 2026-27",
          "Nursery to Class XII admission",
          "school admission documents",
          "school fee structure Kushinagar",
          "primary school admission",
          "secondary school admission",
          "school contact Kushinagar",
        ]}
        canonical="/admissions"
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
        <AdmissionsHero />
        <AdmissionProcess />
        <RequiredDocuments />
        <FeeStructure />
        <FacultyDirectory />
        <AdmissionsFAQ />
        <AdmissionsCTA />
      </main>
    </>
  );
}