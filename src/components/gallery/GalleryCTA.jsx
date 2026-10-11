import { FiArrowRight, FiMessageCircle } from "react-icons/fi";

export default function GalleryCTA() {
  return (
    <section
      id="gallery-contact"
      className="border-t border-gray-200 bg-white"
    >
      <div className="flex flex-col gap-6 px-5 py-12 sm:px-8 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:px-12 xl:px-40">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold">Discover S. R. P. Global School</p>

          <h2 className="h-section mt-2">
            Every Day Is an Opportunity to Grow
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            Learn more about our academic journey, school environment,
            and the opportunities available to students from Nursery
            to Class XII.
          </p>
        </div>

        <div className="flex flex-col gap-3 min-[420px]:flex-row lg:shrink-0">
          <a
            href="/about"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-gray-300 px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            About Our School
            <FiArrowRight />
          </a>

          <a
            href="/contact"
            className="btn-gold inline-flex min-h-11 items-center justify-center gap-2"
          >
            Contact Us
            <FiMessageCircle />
          </a>
        </div>
      </div>
    </section>
  );
}