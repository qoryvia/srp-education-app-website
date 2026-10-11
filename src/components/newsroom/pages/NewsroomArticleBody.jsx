import { FiTag } from "react-icons/fi";

export default function NewsroomArticleBody({ article }) {
  return (
    <article className="min-w-0">
      {/* Article introduction */}
      <div className="border-b border-gray-200 pb-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-600">
          {article.category}
        </p>

        <h2 className="mt-2 font-serif text-2xl leading-snug text-navy sm:text-3xl">
          {article.title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
          {article.description}
        </p>
      </div>

      {/* Full article content */}
      {article.longDescription ? (
        <div
          className={[
            "newsroom-article-content mt-7 min-w-0 break-words",
            "[&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:leading-snug [&_h2]:text-navy sm:[&_h2]:text-2xl",
            "[&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-navy",
            "[&_p]:mb-5 [&_p]:text-sm [&_p]:leading-7 [&_p]:text-gray-600 sm:[&_p]:text-base sm:[&_p]:leading-8",
            "[&_ul]:mb-6 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
            "[&_ol]:mb-6 [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6",
            "[&_li]:pl-1 [&_li]:text-sm [&_li]:leading-7 [&_li]:text-gray-600 sm:[&_li]:text-base",
            "[&_a]:font-semibold [&_a]:text-gold-600 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-navy",
            "[&_strong]:font-semibold [&_strong]:text-navy",
            "[&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-gold [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-gray-600",
            "[&_img]:my-6 [&_img]:h-auto [&_img]:max-w-full",
          ].join(" ")}
          dangerouslySetInnerHTML={{
            __html: article.longDescription,
          }}
        />
      ) : (
        <p className="mt-7 text-sm leading-7 text-gray-600">
          {article.description}
        </p>
      )}

      {/* Article tags */}
      {article.tags?.length > 0 && (
        <div className="mt-10 border-t border-gray-200 pt-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-navy">
            <FiTag className="text-gold-600" />
            Topics
          </div>

          <ul className="mt-3 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <li
                key={tag}
                className="border border-gray-200 px-3 py-1.5 text-xs text-gray-600"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )}

      {article.updatedAt && (
        <p className="mt-5 text-xs text-gray-500">
          Last updated: {article.updatedAt}
        </p>
      )}
    </article>
  );
}