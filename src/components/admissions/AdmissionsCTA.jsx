import { FiArrowRight, FiMessageCircle } from "react-icons/fi";

export default function AdmissionsCTA() {
  return (
    <section
      id="admissions-contact"
      className="border-t border-gray-200 bg-white"
    >
      <div className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-16 xl:px-40">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">
              Your Child's Next Chapter
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-navy sm:text-4xl">
              Let's Begin the Learning Journey
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Contact S. R. P. Global School to discuss class availability,
              admission requirements, and the next steps for your child.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 min-[420px]:flex-row">
            <a
              href="#admission-process"
              className="btn-gold inline-flex min-h-11 items-center justify-center gap-2 text-black"
            >
              Start Your Enquiry
              <FiArrowRight />
            </a>

            <a
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[3px] border border-gray-300 px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <FiMessageCircle />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}