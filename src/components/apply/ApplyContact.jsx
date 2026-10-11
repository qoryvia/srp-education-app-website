import { FiPhone, FiMail, FiArrowRight } from "react-icons/fi";

export default function ApplyContact() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="grid gap-7 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 xl:px-40">
        <div>
          <p className="eyebrow text-gold">Need Assistance?</p>

          <h2 className="h-section mt-2">
            Speak with Our School Team
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
            If you have questions about class availability, the application
            procedure, or fees, please contact S. R. P. Global School.
          </p>

          <p className="mt-4 text-sm text-gray-600">
            Buddha Marg, Jhungawa, Kushinagar - 274403 (U.P.)
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="tel:+919170316993"
            className="inline-flex min-h-11 items-center justify-center gap-2 border border-gray-300 px-4 py-3 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <FiPhone />
            +91-9170316993
          </a>

          <a
            href="mailto:plsglobalschool2021@gmail.com"
            className="inline-flex min-h-11 items-center justify-center gap-2 border border-gray-300 px-4 py-3 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <FiMail />
            Email the School
            <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}