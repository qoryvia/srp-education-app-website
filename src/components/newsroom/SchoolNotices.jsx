import {
  FiArrowUpRight,
  FiBell,
  FiCalendar,
  FiFileText,
} from "react-icons/fi";
import { schoolNotices } from "./newsroomData.js";

const noticeIcons = {
  Admissions: FiBell,
  "Fee Information": FiFileText,
  "Parent Information": FiCalendar,
};

export default function SchoolNotices() {
  return (
    <section
      id="school-notices"
      className="bg-[#F6F6F3] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40"
    >
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
        {/* Introduction */}
        <div>
          <p className="eyebrow text-gold">For Parents & Students</p>

          <h2 className="h-section mt-2">
            Notices & Useful Information
          </h2>

          <span className="mt-4 block h-0.5 w-10 bg-gold" />

          <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
            Keep essential school information within easy reach.
            For confirmed dates, timings, admission requirements,
            and fee details, please contact the school office.
          </p>
        </div>

        {/* Information links */}
        <ul className="divide-y divide-gray-200 border-t border-gray-200">
          {schoolNotices.map((notice) => {
            const Icon = noticeIcons[notice.type] || FiBell;

            return (
              <li key={notice.id} className="py-5 sm:py-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gray-300 text-navy">
                    <Icon className="text-lg" aria-hidden="true" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-600">
                      {notice.type}
                    </p>

                    <h3 className="mt-1 text-base font-semibold text-navy">
                      {notice.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {notice.description}
                    </p>

                    <a
                      href={notice.href}
                      className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-navy transition-colors hover:text-gold-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      {notice.linkLabel}
                      <FiArrowUpRight />
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}