import fallbackImage from "../../assets/images/banner/building-02.png";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { featuredStory } from "./newsroomData.js";

export default function FeaturedStory() {
  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackImage;
  };

  return (
    <section className="px-5 pt-12 sm:px-8 sm:pt-16 lg:px-12 xl:px-40">
      <div className="grid overflow-hidden border border-gray-200 bg-white lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[240px] overflow-hidden bg-gray-100 sm:min-h-[340px]">
          <img
            src={featuredStory.image}
            alt={featuredStory.alt}
            loading="lazy"
            onError={handleImageError}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
          <p className="eyebrow text-gold">
            {featuredStory.eyebrow}
          </p>

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
            {featuredStory.category}
          </p>

          <h2 className="mt-2 font-serif text-2xl leading-snug text-navy sm:text-3xl">
            {featuredStory.title}
          </h2>

          <span className="mt-4 block h-0.5 w-10 bg-gold" />

          <p className="mt-4 text-sm leading-7 text-gray-600">
            {featuredStory.description}
          </p>

          <a
            href={featuredStory.href}
            className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            {featuredStory.linkLabel}
            <FiArrowRight />
          </a>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4 border-b border-gray-200 pb-4">
        <p className="text-xs leading-5 text-gray-500">
          School stories, learning highlights, and useful information for families.
        </p>

        <a
          href="#latest-updates"
          className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-navy hover:text-gold-600"
        >
          Latest updates
          <FiArrowUpRight />
        </a>
      </div>
    </section>
  );
}