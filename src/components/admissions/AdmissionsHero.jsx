import banner from "../../assets/images/banner/building-01.png";
import { FiArrowRight, FiFileText, FiCheckCircle } from "react-icons/fi";

export default function AdmissionsHero() {
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
            <span aria-hidden="true">/</span>
            <span className="text-gold">Admissions</span>
          </div>

          <p className="eyebrow !text-gold">Admissions 2026–27</p>

          <h1 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.12]">
            Begin Your Child's
            <br />
            Journey with Us
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
            Welcome to S. R. P. Global School. We aim to nurture
            confident, curious, and responsible learners in a supportive
            environment from Nursery to Class XII.
          </p>

          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <a
              href="#admission-process"
              className="btn-gold inline-flex min-h-11 items-center justify-center gap-2 text-white"
            >
              Admission Process
              <FiArrowRight />
            </a>

            <a
              href="#fee-structure"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[3px] border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <FiFileText />
              View Fee Structure
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-white/85 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <FiCheckCircle className="text-gold" />
              Nursery to Class XII
            </span>

            <span className="inline-flex items-center gap-2">
              <FiCheckCircle className="text-gold" />
              CBSE-pattern Education
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}