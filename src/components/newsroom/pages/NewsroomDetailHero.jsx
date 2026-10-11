import { Link } from "react-router-dom";
import { FiArrowLeft, FiClock, FiCalendar, FiUser } from "react-icons/fi";

import fallbackImage from "../../../assets/images/banner/building-02.png";

function formatDate(value) {
  if (!value) return null;

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default function NewsroomDetailHero({ article }) {
  const authorName =
    typeof article.author === "string"
      ? article.author
      : article.author?.name;

  const image = article.image || fallbackImage;
  const publishedDate = formatDate(article.publishedAt);

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackImage;
  };

  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        onError={handleImageError}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/65" />

      <div className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40">
        <div className="max-w-4xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/70"
          >
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>

            <span aria-hidden="true">/</span>

            <Link
              to="/newsroom"
              className="transition-colors hover:text-white"
            >
              Newsroom
            </Link>

            <span aria-hidden="true">/</span>

            <span className="max-w-[200px] truncate text-gold sm:max-w-xs">
              {article.title}
            </span>
          </nav>

          <Link
            to="/newsroom"
            className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-white/80 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <FiArrowLeft />
            Back to Newsroom
          </Link>

          <p className="eyebrow !text-gold">
            {article.category}
          </p>

          <h1 className="mt-4 max-w-4xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
            {article.title}
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
            {article.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/20 pt-5 text-xs text-white/75 sm:text-sm">
            {authorName && (
              <span className="inline-flex items-center gap-2">
                <FiUser className="text-gold" aria-hidden="true" />
                {authorName}
              </span>
            )}

            {publishedDate && (
              <span className="inline-flex items-center gap-2">
                <FiCalendar className="text-gold" aria-hidden="true" />
                {publishedDate}
              </span>
            )}

            {article.readTime && (
              <span className="inline-flex items-center gap-2">
                <FiClock className="text-gold" aria-hidden="true" />
                {article.readTime}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}