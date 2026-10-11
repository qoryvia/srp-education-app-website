import { useParams } from "react-router-dom";

import SEO from "../../../seo/SEO.jsx";

import {
  createSchoolSchema,
  createWebsiteSchema,
  createWebPageSchema,
  createBreadcrumbSchema,
  createNewsArticleSchema,
} from "../../../seo/schema/index.js";

import { newsroomItems } from "../../../components/newsroom/newsroomData.js";

import NewsroomDetailHero from "../../../components/newsroom/pages/NewsroomDetailHero.jsx";
import NewsroomArticleBody from "../../../components/newsroom/pages/NewsroomArticleBody.jsx";
import NewsroomArticleSidebar from "../../../components/newsroom/pages/NewsroomArticleSidebar.jsx";
import RelatedNewsroomStories from "../../../components/newsroom/pages/RelatedNewsroomStories.jsx";
import NewsroomNotFound from "../../../components/newsroom/pages/NewsroomNotFound.jsx";

export default function NewsroomDetail() {
  const { slug } = useParams();

  const article = newsroomItems.find(
    (item) => item.slug === slug
  );

  // Prevent search engines from indexing invalid article URLs.
  if (!article) {
    return (
      <>
        <SEO
          title="Article Not Found | S. R. P. Global School"
          description="The requested newsroom article could not be found. Explore the latest stories and school updates from S. R. P. Global School."
          canonical="/newsroom"
          siteName="S. R. P. Global School"
          noIndex
          robots="noindex,nofollow"
        />

        <NewsroomNotFound />
      </>
    );
  }

  const siteUrl =
    typeof window !== "undefined" ? window.location.origin : "";

  const articleTitle =
    article.seo?.title ||
    `${article.title} | S. R. P. Global School`;

  const articleDescription =
    article.seo?.description || article.description;

  const articlePath = `/newsroom/${article.slug}`;

  const articleAuthor =
    typeof article.author === "string"
      ? article.author
      : article.author?.name || "S. R. P. Global School";

  const structuredData = siteUrl
    ? [
        createSchoolSchema(siteUrl),
        createWebsiteSchema(siteUrl),

        createWebPageSchema({
          siteUrl,
          path: articlePath,
          name: articleTitle,
          description: articleDescription,
          image: article.image,
        }),

        createBreadcrumbSchema(siteUrl, [
          { name: "Home", path: "/" },
          { name: "Newsroom", path: "/newsroom" },
          {
            name: article.title,
            path: articlePath,
          },
        ]),

        createNewsArticleSchema(siteUrl, article),
      ]
    : [];

  // Prefer related articles from the same category.
  const relatedArticles = newsroomItems
    .filter((item) => item.slug !== article.slug)
    .sort((a, b) => {
      const aSameCategory =
        a.categorySlug === article.categorySlug;

      const bSameCategory =
        b.categorySlug === article.categorySlug;

      if (aSameCategory && !bSameCategory) return -1;
      if (!aSameCategory && bSameCategory) return 1;

      return 0;
    })
    .slice(0, 4);

  return (
    <>
      <SEO
        title={articleTitle}
        description={articleDescription}
        keywords={article.seo?.keywords || article.tags || []}
        canonical={articlePath}
        image={article.image}
        type="article"
        siteName="S. R. P. Global School"
        author={articleAuthor}
        locale="en_IN"
        lang="en"
        robots="index,follow,max-image-preview:large"
        structuredData={structuredData}
      />

      <main>
        <NewsroomDetailHero article={article} />

        <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16 xl:px-40">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-14">
            <NewsroomArticleBody article={article} />

            <NewsroomArticleSidebar article={article} />
          </div>
        </section>

        <RelatedNewsroomStories articles={relatedArticles} />
      </main>
    </>
  );
}