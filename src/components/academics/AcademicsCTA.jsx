import { FiArrowRight, FiMessageCircle } from "react-icons/fi";

export default function AcademicsCTA() {
  return (
    <section
      id="academic-enquiry"
      className="bg-[#F6F6F3] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-16 xl:px-40"
    >
      <div className="flex flex-col gap-6 border-t border-gray-200 pt-7 sm:pt-9 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold">Your Child's Journey</p>

          <h2 className="h-section mt-2">
            Let's Build a Strong Foundation
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            Contact S. R. P. Global School to learn more about the academic
            stages, curriculum approach, and admissions from Nursery
            to Class XII.
          </p>
        </div>

        <div className="flex flex-col gap-3 min-[420px]:flex-row lg:shrink-0">
          <a
            href="/admissions"
            className="btn-gold inline-flex min-h-11 items-center justify-center gap-2"
          >
            Admissions
            <FiArrowRight />
          </a>

          <a
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[3px] border border-navy/40 px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <FiMessageCircle />
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}