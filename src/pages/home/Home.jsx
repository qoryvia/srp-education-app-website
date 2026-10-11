import React from "react";

import SEO from "../../seo/SEO.jsx";
import {
  createSchoolSchema,
  createWebsiteSchema,
  createWebPageSchema,
} from "../../seo/schema/index.js";

import banner from "../../assets/images/banner/building-01.png";

import Hero from "../../components/home/sections/Hero";
import Programs from "../../components/home/sections/Programs";
import WhyUs from "../../components/home/sections/WhyUs";
import CampusLife from "../../components/home/sections/CampusLife";
import News from "../../components/home/sections/News";
import Faq from "../../components/home/sections/Faq";

const Home = () => {
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
   

  const structuredData = siteUrl
    ? [
        createSchoolSchema(siteUrl),
        createWebsiteSchema(siteUrl),
        createWebPageSchema({
          siteUrl,
          path: "/",
          name: "S. R. P. Global School | Kushinagar",
          description:
            "Discover S. R. P. Global School in Kushinagar, Uttar Pradesh. Explore academics, admissions, school facilities, student activities, and educational opportunities from Nursery to Class XII.",
          image: banner,
        }),
      ]
    : [];

  return (
    <>
      <SEO
        title="S. R. P. Global School, Kushinagar | Best School in Kushingar UP"
        description="S. R. P. Global School, located in Jhungawa, Kushinagar, Uttar Pradesh, supports learning from Nursery to Class XII through a CBSE-pattern educational approach, academic development, sports, arts, and value-based education."
        keywords={[
          "S. R. P. Global School",
          "SRP Global School Kushinagar",
          "school in Kushinagar",
          "school in Jhungawa",
          "Nursery to Class XII",
          "CBSE-pattern school",
          "school admissions Kushinagar",
          "primary school Kushinagar",
          "secondary school Kushinagar",
          "school academics",
          "school facilities",
        ]}
        canonical="/"
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
        <Hero />
        <Programs />
        <WhyUs />
        <CampusLife />
        <News />
        <Faq />
      </main>
    </>
  );
};

export default Home;