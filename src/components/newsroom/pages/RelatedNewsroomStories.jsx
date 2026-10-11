import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

import fallbackImage from "../../../assets/images/banner/building-02.png";

export default function RelatedNewsroomStories({ articles = [] }) {
  if (!articles.length) return null;

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackImage;
  };

  return (
    <section className="border-t border-gray-200 bg-[#F6F6F3] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-16 xl:px-40">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow text-gold">Continue Exploring</p>

          <h2 className="h-section mt-2">
            Related Stories
          </h2>

          <span className="mt-4 block h-0.5 w-10 bg-gold" />
        </div>

        <Link
          to="/newsroom"
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold-600"
        >
          All Newsroom Stories
          <FiArrowUpRight />
        </Link>
      </div>

      <ul className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articles.map((item) => (
          <li
            key={item.id}
            className="group flex min-w-0 flex-col border border-gray-200 bg-white transition-colors hover:border-gray-300"
          >
            <Link
              to={`/newsroom/${item.slug}`}
              aria-label={`Read article: ${item.title}`}
              className="block overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
            >
              <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                <img
                  src={item.image || fallbackImage}
                  alt={item.alt || item.title}
                  loading="lazy"
                  onError={handleImageError}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] object-top"
                />
              </div>
            </Link>

            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-600">
                {item.category}
              </p>

              <h3 className="mt-2 text-base font-semibold leading-snug text-navy">
                {item.title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
                {item.description}
              </p>

              <Link
                to={`/newsroom/${item.slug}`}
                className="mt-5 inline-flex w-fit items-center gap-2 text-xs font-semibold text-navy transition-colors hover:text-gold-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                Read Story
                <FiArrowUpRight />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}