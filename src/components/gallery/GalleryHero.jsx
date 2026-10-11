import banner from "../../assets/images/banner/building-03.png";
import { FiArrowDown } from "react-icons/fi";

export default function GalleryHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img
        src={banner}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/55" />

      <div className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-40">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-2 text-xs text-white/75">
            <a href="/" className="transition-colors hover:text-white">
              Home
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-gold">Gallery</span>
          </div>

          <p className="eyebrow !text-gold">Life at S. R. P. Global School</p>

          <h1 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.12]">
            Moments That Make
            <br />
            School Life Special
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
            Explore the learning experiences, school activities, creative
            pursuits, and everyday moments that make the journey from
            Nursery to Class XII meaningful.
          </p>

          <a
            href="#school-gallery"
            className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 border-b border-gold pb-2 text-sm font-semibold text-white transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Explore the Gallery
            <FiArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
}