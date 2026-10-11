import { useMemo, useState } from "react";
import fallbackImage from "../../assets/images/banner/building-02.png";
import {
  FiArrowUpRight,
  FiSearch,
  FiX,
  FiFileText,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  newsroomCategories,
  newsroomItems,
} from "./newsroomData.js";

export default function NewsroomUpdates() {
  const [activeCategory, setActiveCategory] = useState("All Updates");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return newsroomItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All Updates" ||
        item.category === activeCategory;

      const searchableText =
        `${item.title} ${item.description} ${item.category}`.toLowerCase();

      const matchesSearch =
        !query || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackImage;
  };

  return (
    <section
      id="latest-updates"
      className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40"
    >
      {/* Heading */}
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="eyebrow text-gold">Explore the Newsroom</p>

          <h2 className="h-section mt-2">
            School News & Updates
          </h2>

          <span className="mt-4 block h-0.5 w-10 bg-gold" />

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600">
            Browse school-related topics, educational insights, and
            useful information for parents and students.
          </p>
        </div>

        <p className="text-sm text-gray-500" aria-live="polite">
          {filteredItems.length}{" "}
          {filteredItems.length === 1 ? "result" : "results"}
        </p>
      </div>

      {/* Search */}
      <div className="mt-7 max-w-xl">
        <label
          htmlFor="newsroom-search"
          className="mb-2 block text-xs font-semibold text-navy"
        >
          Search updates
        </label>

        <div className="flex min-h-12 items-center gap-3 border border-gray-300 bg-white px-3 focus-within:border-navy">
          <FiSearch
            className="shrink-0 text-lg text-gray-500"
            aria-hidden="true"
          />

          <input
            id="newsroom-search"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search by keyword or category..."
            className="min-w-0 flex-1 bg-transparent py-3 text-base text-navy outline-none placeholder:text-gray-400"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="grid h-8 w-8 shrink-0 place-items-center text-gray-500 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <FiX />
            </button>
          )}
        </div>
      </div>

      {/* Category filters */}
      <div className="-mx-1 mt-5 overflow-x-auto pb-2">
        <div
          className="flex min-w-max gap-2 px-1"
          role="group"
          aria-label="Filter school updates by category"
        >
          {newsroomCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`min-h-10 rounded-sm border px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  isActive
                    ? "border-navy bg-navy text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-navy hover:text-navy"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Update cards */}
      {filteredItems.length > 0 ? (
        <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <li
              key={item.id}
              className="group min-w-0 border border-gray-200 bg-white transition-colors hover:border-gray-300"
            >
              <Link
                to={item.href}
                onClick={() => window.scrollTo({top:0 , behavior: "smooth"})}
                aria-label={`${item.linkLabel}: ${item.title}`}
                className="flex h-full min-w-0 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
              >
                <div className="relative block overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    onError={handleImageError}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-600">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-base font-semibold leading-snug text-navy">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>

                  <span className="mt-5 inline-flex w-fit items-center gap-2 border-b border-transparent pb-1 text-xs font-semibold text-navy transition-colors group-hover:border-gold group-hover:text-gold-600">
                    {item.linkLabel}
                    <FiArrowUpRight />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-8 border border-gray-200 px-5 py-12 text-center">
          <FiFileText className="mx-auto text-2xl text-gray-400" />

          <h3 className="mt-3 text-base font-semibold text-navy">
            No matching updates
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            Try another keyword or choose a different category.
          </p>

          <button
            type="button"
            onClick={() => {
              setActiveCategory("All Updates");
              setSearchQuery("");
            }}
            className="mt-4 inline-flex min-h-10 items-center justify-center border border-gray-300 px-4 py-2 text-xs font-semibold text-navy hover:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}