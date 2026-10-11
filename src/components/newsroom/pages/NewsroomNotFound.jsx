import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiFileText } from "react-icons/fi";

export default function NewsroomNotFound() {
  return (
    <main className="flex min-h-[65vh] items-center justify-center px-5 py-16 sm:px-8">
      <div className="w-full max-w-xl text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-navy/5 text-navy">
          <FiFileText className="text-2xl" aria-hidden="true" />
        </span>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
          S. R. P. Global School
        </p>

        <h1 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">
          Story Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-600">
          This newsroom article may have moved, been removed, or have an
          incorrect address. Explore the newsroom to find other stories
          and school information.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 min-[420px]:flex-row">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex min-h-11 items-center justify-center gap-2 border border-gray-300 px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <FiArrowLeft />
            Go Back
          </button>

          <Link
            to="/newsroom"
            className="btn-gold inline-flex min-h-11 items-center justify-center gap-2"
          >
            Browse Newsroom
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </main>
  );
}