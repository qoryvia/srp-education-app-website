import banner from "../../assets/images/banner/building-01.png";
import { FiArrowRight, FiFileText } from "react-icons/fi";

export default function ApplyHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img
        src={banner}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/55" />

      <div className="relative px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-40">
        <nav
          aria-label="Breadcrumb"
          className="mb-5 flex items-center gap-2 text-xs text-white/75"
        >
          <a href="/" className="transition-colors hover:text-white">
            Home
          </a>
          <span aria-hidden="true">/</span>
          <span className="text-gold">Apply for Admission</span>
        </nav>

        <div className="max-w-3xl">
          <p className="eyebrow !text-gold">
            Admissions · S. R. P. Global School
          </p>

          <h1 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.12]">
            Every Great Journey
            <br />
            Begins with a First Step
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
            Start your child's educational journey with S. R. P. Global
            School. Submit an admission enquiry to learn about class
            availability, eligibility, required documents, and the next
            steps for admission from Nursery to Class XII.
          </p>

          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <a
              href="#application-form"
              className="btn-gold inline-flex min-h-11 items-center justify-center gap-2"
            >
              Begin Application Enquiry
              <FiArrowRight />
            </a>

            <a
              href="/admissions#fee-structure"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[3px] border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <FiFileText />
              View Fee Structure
            </a>
          </div>

          <p className="mt-6 text-xs font-medium tracking-wide text-white/80 sm:text-sm">
            Nursery to Class XII
            <span className="mx-2 text-gold">·</span>
            CBSE-pattern Education
          </p>
        </div>
      </div>
    </section>
  );
}