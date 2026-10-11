import banner from "../../../assets/images/banner/building-01.png";
import {
  FiArrowRight,
  FiChevronRight,
  FiBookOpen,
  FiUsers,
  FiUser,
  FiShield,
  FiHeart,
  FiPlay,
  FiCheckCircle,
  FiGlobe,
} from "react-icons/fi";

const quickLinks = [
  {
    title: "Admissions & Enquiry",
    description: "Begin your child's learning journey",
    href: "#admissions",
    icon: FiArrowRight,
  },
  {
    title: "Academics & CBSE",
    description: "Explore our academic approach",
    href: "#academics",
    icon: FiBookOpen,
  },
  {
    title: "School Facilities",
    description: "Discover our learning environment",
    href: "#facilities",
    icon: FiShield,
  },
  {
    title: "Student Life",
    description: "Learning beyond the classroom",
    href: "#student-life",
    icon: FiHeart,
  },
];

export const stats = [
  { value: "800+", label: "Happy Students", icon: FiUsers },
  { value: "20+", label: "Dedicated Faculty", icon: FiUser },
  { value: "12+", label: "Classes of Learning", icon: FiBookOpen },
  { value: "100%", label: "Focus on Every Child", icon: FiHeart },
  { value: "1", label: "Safe Learning Community", icon: FiShield },
];

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative overflow-hidden bg-navy">
        {/* Background image */}
        <img
          src={banner}
          alt="School building and campus"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Improved overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
        <div className="absolute inset-0 bg-navy/15" />

        <div className="relative grid items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[460px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-12 lg:py-16 xl:px-40">
          {/* Hero content */}
          <div className="max-w-xl">
            <p className="eyebrow !text-gold">
              Learn. Lead. Transform.
            </p>

            <h1 className="mt-3 font-serif text-3xl leading-tight text-white sm:mt-4 sm:text-5xl lg:text-[52px] lg:leading-[1.1]">
              Building Futures.
              <br />
              Changing Lives.
            </h1>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/90 sm:mt-5 sm:text-base">
              At S.R.P GLOBAL, we empower minds, inspire innovation,
              and prepare global leaders for a better tomorrow.
            </p>

            <div className="mt-6 flex flex-col items-stretch gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center sm:mt-7 sm:gap-4">
              <a
                href="#programs"
                className="btn-gold inline-flex items-center justify-center gap-2 text-white"
              >
                Explore programs
                <FiArrowRight />
              </a>

              <a
                href="#campus"
                className="btn-outline inline-flex items-center justify-center gap-3 text-white"
              >
                Campus tour
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-navy">
                  <FiPlay className="ml-0.5 text-[10px]" />
                </span>
              </a>
            </div>
          </div>

          {/* Quick links panel */}
          <aside
            className="w-full rounded-lg border border-white/15 bg-navy/80 p-2 shadow-lg backdrop-blur-md sm:p-3 lg:w-full lg:max-w-[340px] lg:justify-self-end"
            aria-label="Quick links"
          >
            <div className="px-3 pb-2 pt-2 sm:px-4">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                Explore S.R.P GLOBAL
              </p>
            </div>

            <ul className="divide-y divide-white/10">
              {quickLinks.map(({ title, description, href, icon: Icon }) => (
                <li key={title}>
                  <a
                    href={href}
                    className="group flex min-h-[68px] items-center gap-3 rounded-md px-3 py-3 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:gap-4 sm:px-4"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white/10 text-gold transition-colors group-hover:bg-white/15">
                      <Icon className="text-xl" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold leading-snug">
                        {title}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-white/65">
                        {description}
                      </span>
                    </span>

                    <FiChevronRight className="shrink-0 text-white/60 transition-transform group-hover:translate-x-1 group-hover:text-gold" />
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 -mt-5 px-4 sm:-mt-8 sm:px-8 lg:px-12 xl:px-40">
        <ul className="grid grid-cols-2 overflow-hidden rounded-lg bg-white px-3 py-4 shadow-card sm:grid-cols-3 sm:px-4 sm:py-5 lg:grid-cols-5 lg:divide-x lg:divide-gray-200 lg:px-2">
          {stats.map(({ value, label, icon: Icon }) => (
            <li
              key={label}
              className="flex min-w-0 items-center justify-start gap-2.5 border-b border-gray-100 px-2 py-4 last:border-b-0 sm:justify-center sm:gap-3 sm:px-3 lg:border-b-0 lg:py-3"
            >
              <Icon
                className="shrink-0 text-2xl text-navy sm:text-[30px]"
                strokeWidth={1.4}
                aria-hidden="true"
              />

              <div className="min-w-0">
                <p className="font-serif text-xl leading-tight text-navy sm:text-2xl">
                  {value}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-gray-600 sm:text-xs">
                  {label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}