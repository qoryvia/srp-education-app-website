import banner from "../../assets/images/banner/building-01.png";
import { FiArrowRight, FiBookOpen } from "react-icons/fi";

export default function AcademicsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img
        src={banner}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/55" />

      <div className="relative px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-40">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-2 text-xs text-white/75">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span>/</span>
            <span className="text-gold">Academics</span>
          </div>

          <p className="eyebrow !text-gold">
            Academic Excellence
          </p>

          <h1 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.12]">
            A Strong Foundation
            <br />
            for Every Stage of Life
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
            At S. R. P. Global School, we nurture curious minds, encourage
            independent thinking, and build strong academic foundations
            through a CBSE-pattern approach to learning, from Nursery
            to Class XII.
          </p>

          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <a
              href="#academic-stages"
              className="btn-gold inline-flex min-h-11 items-center justify-center gap-2"
            >
              Explore Academic Stages
              <FiArrowRight />
            </a>

            <a
              href="#learning-approach"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[3px] border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <FiBookOpen />
              Our Learning Approach
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-white/80 sm:text-sm">
            <span>Nursery to Class XII</span>
            <span className="text-gold">•</span>
            <span>CBSE-pattern Education</span>
            <span className="text-gold">•</span>
            <span>Holistic Development</span>
          </div>
        </div>
      </div>
    </section>
  );
}