import SEO from "../../seo/SEO.jsx";

import {
  createSchoolSchema,
  createWebsiteSchema,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "../../seo/schema/index.js";

import banner from "../../assets/images/banner/building-03.png";

import ContactHero from "../../components/contact/ContactHero.jsx";
import ContactInformation from "../../components/contact/ContactInformation.jsx";
import ContactForm from "../../components/contact/ContactForm.jsx";
import ContactMap from "../../components/contact/ContactMap.jsx";

export default function Contact() {
  const siteUrl =
    typeof window !== "undefined" ? window.location.origin : "";

  const structuredData = siteUrl
    ? [
        createSchoolSchema(siteUrl),
        createWebsiteSchema(siteUrl),
        createWebPageSchema({
          siteUrl,
          path: "/contact",
          name: "Contact S. R. P. Global School | Kushinagar",
          description:
            "Contact S. R. P. Global School in Jhungawa, Kushinagar, Uttar Pradesh, for admission enquiries, academic information, school facilities, and general assistance.",
          image: banner,
        }),
        createBreadcrumbSchema(siteUrl, [
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ]),
      ]
    : [];

  return (
    <>
      <SEO
        title="Contact Us | S. R. P. Global School, Kushinagar"
        description="Get in touch with S. R. P. Global School, Buddha Marg, Jhungawa, Kushinagar, Uttar Pradesh 274403. Call +91-9170316993 or email plsglobalschool2021@gmail.com for admissions and school enquiries."
        keywords={[
          "S. R. P. Global School contact",
          "SRP Global School Kushinagar",
          "school in Jhungawa Kushinagar",
          "school contact number Kushinagar",
          "school email Kushinagar",
          "school admission enquiry",
          "school address Uttar Pradesh",
          "Nursery to Class XII",
          "school facilities enquiry",
        ]}
        canonical="/contact"
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
        <ContactHero />

        <section
          id="contact-information"
          className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40"
        >
          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <ContactInformation />
            <ContactForm />
          </div>
        </section>

        <ContactMap />
      </main>
    </>
  );
}