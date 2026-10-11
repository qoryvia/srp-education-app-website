import { FiArrowRight } from "react-icons/fi";
import {
  FiShield,
  FiAward,
  FiActivity,
  FiMonitor,
  FiBookOpen,
  FiCamera,
} from "react-icons/fi";

export const reasons = [
  {
    title: "CCTV Surveillance",
    text: "Support a secure school environment with CCTV surveillance across key areas.",
    icon: FiCamera,
  },
  {
    title: "Academic Excellence",
    text: "A CBSE-based learning approach focused on strong foundations and academic growth.",
    icon: FiAward,
  },
  {
    title: "Sports & Arts",
    text: "Encourage fitness, creativity, teamwork and self-expression beyond academics.",
    icon: FiActivity,
  },
  {
    title: "Computer Room",
    text: "Introduce students to digital literacy, computer skills and technology-assisted learning.",
    icon: FiMonitor,
  },
  {
    title: "Science Laboratory",
    text: "Connect classroom concepts with practical activities, experiments and discovery.",
    icon: FiShield,
  },
  {
    title: "School Library",
    text: "Promote reading habits, imagination, knowledge and a lifelong love of learning.",
    icon: FiBookOpen,
  },
];

export default function WhyUs() {
  return (
    <section className="px-5 py-12 sm:px-8 lg:px-12 xl:px-40">
      <div className="grid items-start gap-8 rounded-md bg-white p-5 sm:p-7 lg:grid-cols-[0.85fr_2.15fr] lg:gap-8 lg:p-8">
        {/* Section introduction */}
        <div className="lg:sticky lg:top-8">
          <p className="eyebrow text-gold">Why Choose S.R.P.?</p>

          <h2 className="h-section mt-2">
            A Strong Foundation
            <br />
            for a Bright Future
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600">
            From Nursery to Class XII, S.R.P. School encourages academic
            growth, personal development and a love for learning in a
            supportive school environment.
          </p>

          <a
            href="#about"
            className="mt-5 inline-flex items-center gap-2 rounded-[3px] border border-navy/60 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            About S.R.P. School <FiArrowRight />
          </a>
        </div>

        {/* School facilities and benefits */}
        <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {reasons.map(({ title, text, icon: Icon }) => (
            <li
              key={title}
              className="group rounded-md border border-gray-100 bg-gray-50/70 p-4 transition-colors hover:border-gold/40 hover:bg-white"
            >
              <span className="grid h-10 w-10 place-items-center rounded-md bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                <Icon
                  className="text-xl"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </span>

              <h3 className="mt-3 text-sm font-semibold leading-snug text-navy">
                {title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}