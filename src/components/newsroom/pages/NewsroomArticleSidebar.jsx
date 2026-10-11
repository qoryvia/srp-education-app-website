import { Link } from "react-router-dom";
import {
  FiBookOpen,
  FiUser,
  FiArrowUpRight,
} from "react-icons/fi";

export default function NewsroomArticleSidebar({ article }) {
  const authorName =
    typeof article.author === "string"
      ? article.author
      : article.author?.name;

  const authorRole =
    typeof article.author === "object"
      ? article.author?.role
      : null;

  return (
    <aside className="min-w-0 lg:sticky lg:top-6">
      {/* Article information */}
      <div className="border-t-2 border-navy pt-5">
        <h2 className="font-serif text-xl text-navy">
          Article Information
        </h2>

        <dl className="mt-5 divide-y divide-gray-200">
          <div className="py-4">
            <dt className="text-xs text-gray-500">Category</dt>
            <dd className="mt-1 text-sm font-semibold text-navy">
              {article.category}
            </dd>
          </div>

          {authorName && (
            <div className="py-4">
              <dt className="flex items-center gap-2 text-xs text-gray-500">
                <FiUser className="text-gold-600" />
                Author
              </dt>

              <dd className="mt-1 text-sm font-semibold text-navy">
                {authorName}
              </dd>

              {authorRole && (
                <dd className="mt-1 text-xs text-gray-500">
                  {authorRole}
                </dd>
              )}
            </div>
          )}

          {article.readTime && (
            <div className="py-4">
              <dt className="text-xs text-gray-500">
                Estimated reading time
              </dt>
              <dd className="mt-1 text-sm font-semibold text-navy">
                {article.readTime}
              </dd>
            </div>
          )}

          {article.contentType && (
            <div className="py-4">
              <dt className="text-xs text-gray-500">Content type</dt>
              <dd className="mt-1 text-sm font-semibold capitalize text-navy">
                {article.contentType}
              </dd>
            </div>
          )}
        </dl>
      </div>

      {/* Helpful links */}
      <div className="mt-8 border-t border-gray-200 pt-5">
        <h2 className="font-serif text-xl text-navy">
          Explore Our School
        </h2>

        <ul className="mt-4 divide-y divide-gray-200">
          <li>
            <Link
              to="/academics"
              className="flex items-center justify-between gap-3 py-3 text-sm text-gray-600 transition-colors hover:text-navy"
            >
              <span className="flex items-center gap-2">
                <FiBookOpen className="text-gold-600" />
                Academics
              </span>
              <FiArrowUpRight />
            </Link>
          </li>

          <li>
            <Link
              to="/admissions"
              className="flex items-center justify-between gap-3 py-3 text-sm text-gray-600 transition-colors hover:text-navy"
            >
              <span>Admissions</span>
              <FiArrowUpRight />
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="flex items-center justify-between gap-3 py-3 text-sm text-gray-600 transition-colors hover:text-navy"
            >
              <span>About Our School</span>
              <FiArrowUpRight />
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="flex items-center justify-between gap-3 py-3 text-sm text-gray-600 transition-colors hover:text-navy"
            >
              <span>Contact the School</span>
              <FiArrowUpRight />
            </Link>
          </li>
        </ul>
      </div>

      {/* Return link */}
      <div className="mt-8 border-t border-gray-200 pt-5">
        <Link
          to="/newsroom"
          className="inline-flex min-h-10 w-full items-center justify-center border border-gray-300 px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          View All News
        </Link>
      </div>
    </aside>
  );
}