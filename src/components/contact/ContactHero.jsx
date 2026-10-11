import banner from "../../assets/images/banner/building-03.png";
import { FiArrowDown } from "react-icons/fi";

export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {/* Background image */}
      <img
        src={banner}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />

      <div className="relative px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40">
        <div className="mb-5 flex items-center gap-2 text-xs text-white/75">
          <a href="/" className="transition-colors hover:text-white">
            Home
          </a>

          <span aria-hidden="true">/</span>

          <span className="text-gold">Contact</span>
        </div>

        <div className="max-w-3xl">
          <p className="eyebrow !text-gold">
            Get in Touch
          </p>

          <h1 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.12]">
            We Would Love to
            <br />
            Hear From You
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
            Have questions about admissions, academics, or school
            facilities? Contact S. R. P. Global School, and our team
            can help guide you to the information you need.
          </p>

          <a
            href="#contact-information"
            className="mt-7 inline-flex min-h-11 items-center gap-2 border-b border-gold pb-2 text-sm font-semibold text-white transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Contact the School
            <FiArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
}