import { FiArrowLeft, FiArrowRight, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20">
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-gray-50"
      />

      <div className="relative mx-auto w-full max-w-2xl text-center">
        <p className="eyebrow text-gold">S.R.P. School</p>

        <div className="relative mt-4">
          <span
            aria-hidden="true"
            className="font-serif text-[120px] font-bold leading-none tracking-tight text-navy/5 sm:text-[180px]"
          >
            404
          </span>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-5xl font-bold tracking-tight text-navy sm:text-7xl">
              404
            </span>
          </div>
        </div>

        <h1 className="mt-3 font-serif text-2xl leading-tight text-navy sm:text-3xl">
          Oops! This Page Is Missing
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
          It looks like the page you are looking for has moved or does not
          exist. Let’s help you find your way back to S.R.P. School.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 min-[420px]:flex-row">
          <a
            href="/"
            className="btn-gold inline-flex min-h-11 items-center justify-center gap-2"
          >
            <FiHome />
            Back to Home
          </a>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[3px] border border-gray-300 px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <FiArrowLeft />
            Go Back
          </button>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-5">
          <p className="text-xs leading-relaxed text-gray-500">
            Need assistance?{" "}
            <a
              href="/contact"
              className="inline-flex items-center gap-1 font-semibold text-navy hover:text-gold-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Contact our school
              <FiArrowRight />
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}