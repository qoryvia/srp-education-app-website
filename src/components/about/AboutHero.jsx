import banner from "../../assets/images/banner/building-01.png";
import { FiArrowRight, FiBookOpen } from "react-icons/fi";

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img
        src={banner}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/55" />

      <div className="relative mx-auto flex min-h-[360px] items-center px-5 py-16 sm:min-h-[420px] sm:px-8 lg:min-h-[460px] lg:px-12 lg:py-20 xl:px-40">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-2 text-xs font-medium text-white/80">
            <a href="/" className="transition-colors hover:text-white">
              Home
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-gold">About Us</span>
          </div>

          <p className="eyebrow !text-gold">
            S. R. P. Global School
          </p>

          <h1 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.12]">
            Nurturing Young Minds.
            <br />
            Inspiring Bright Futures.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
            We nurture knowledge, confidence, character, and compassion
            through meaningful learning, strong values, and opportunities
            for every child to discover their potential.
          </p>

          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <a
              href="#our-story"
              className="btn-gold inline-flex min-h-11 items-center justify-center gap-2"
            >
              Discover Our School
              <FiArrowRight />
            </a>

            <a
              href="#vision-mission"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[3px] border border-white/50 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <FiBookOpen />
              Our Vision & Mission
            </a>
          </div>

          <p className="mt-6 text-xs font-medium uppercase tracking-[0.15em] text-white/70">
            Nursery to Class XII
            <span className="mx-2 text-gold">•</span>
            CBSE Curriculum
          </p>
        </div>
      </div>
    </section>
  );
}