import banner from "../../../assets/images/banner/building-03.png";
import { FiArrowRight } from "react-icons/fi";
import {
  FiBookOpen,
  FiActivity,
  FiShield,
  FiMonitor,
  FiHeart,
  FiUsers,
} from "react-icons/fi";

const campusFeatures = [
  {
    title: "Academic Excellence",
    text: "CBSE-based learning from Nursery to Class XII.",
    icon: FiBookOpen,
  },
  {
    title: "Sports & Arts",
    text: "Building fitness, creativity and teamwork.",
    icon: FiActivity,
  },
  {
    title: "Safe Campus",
    text: "A caring environment supported by CCTV surveillance.",
    icon: FiShield,
  },
  {
    title: "Modern Facilities",
    text: "Computer room, science labs and a school library.",
    icon: FiMonitor,
  },
  {
    title: "Strong Values",
    text: "Respect, discipline, empathy and responsibility.",
    icon: FiHeart,
  },
  {
    title: "Student Development",
    text: "Encouraging critical thinking and leadership skills.",
    icon: FiUsers,
  },
];

export default function CampusLife() {
  return (
    <section
      id="campus"
      className="relative isolate overflow-hidden bg-navy px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40"
    >
      {/* School building background */}
      <img
        src={banner}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-[-2] h-full w-full object-cover object-center"
      />

      {/* Image overlay for readability */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />

      {/* Content directly over the background */}
      <div className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Introduction */}
        <div className="max-w-xl">
          <p className="eyebrow !text-gold">
            Life at S.R.P. School
          </p>

          <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            More Than Education.
            <br />
            A Brighter Future.
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-white/85 sm:text-base">
            From Nursery to Class XII, S.R.P. School nurtures curious
            minds, builds strong academic foundations and develops
            confident, responsible individuals through the CBSE
            curriculum.
          </p>

          <p className="mt-4 flex items-center gap-2 text-xs font-medium tracking-wide text-white/80 sm:text-sm">
            <FiHeart className="shrink-0 text-gold" />
            Learn with confidence. Grow with values.
          </p>

          <a
            href="#student-life"
            className="btn-gold mt-7 inline-flex items-center justify-center gap-2"
          >
            Discover School Life
            <FiArrowRight />
          </a>
        </div>

        {/* School highlights — no enclosing card or container */}
        <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 sm:gap-x-6">
          {campusFeatures.map(({ title, text, icon: Icon }, index) => (
            <li
              key={title}
              className={`flex gap-3.5 py-4 ${
                index < 4 ? "border-b border-white/20" : ""
              }`}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-gold">
                <Icon className="text-lg" aria-hidden="true" />
              </span>

              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  {title}
                </h3>

                <p className="mt-1.5 text-xs leading-relaxed text-white/75 sm:text-sm">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}