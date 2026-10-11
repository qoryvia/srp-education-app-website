import { FiArrowRight, FiSun, FiBookOpen, FiLayers, FiTarget, FiAward } from "react-icons/fi";
import SmartImage from "./SmartImage.jsx";

export const programs = [
  {
    title: "Nursery & Kindergarten",
    classes: "Nursery – UKG",
    text: "A joyful start to learning through play, creativity, language and early numeracy.",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80",
    icon: FiSun,
    href: "#academics",
  },
  {
    title: "Primary School",
    classes: "Classes I – V",
    text: "Build strong foundations in literacy, mathematics, communication and curiosity.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
    icon: FiBookOpen,
    href: "#academics",
  },
  {
    title: "Middle School",
    classes: "Classes VI – VIII",
    text: "Develop subject knowledge, critical thinking, practical skills and independence.",
    img: "https://images.unsplash.com/photo-1573894998033-c0cef4ed722b?auto=format&fit=crop&w=600&q=80",
    icon: FiLayers,
    href: "#academics",
  },
  {
    title: "Secondary School",
    classes: "Classes IX – X",
    text: "Strengthen conceptual understanding, practical learning and CBSE board preparation.",
    img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=600&q=80",
    icon: FiTarget,
    href: "#academics",
  },
  {
    title: "Senior Secondary",
    classes: "Classes XI – XII",
    text: "Pursue focused academic learning, prepare for board examinations and plan future pathways.",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
    icon: FiAward,
    href: "#academics",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="px-5 pt-16 sm:px-8 lg:px-12 xl:px-40">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow text-gold">CBSE Curriculum</p>

          <h2 className="h-section mt-2">
            A Learning Journey
            <br />
            from Nursery to Class XII
          </h2>

          <span className="mt-3 block h-0.5 w-10 bg-gold" />
        </div>

        <a
          href="#academics"
          className="hidden shrink-0 items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-navy transition-colors hover:text-gold-600 sm:inline-flex"
        >
          Explore academics <FiArrowRight />
        </a>
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {programs.map(
          ({ title, classes, text, img, icon: Icon, href }) => (
            <li
              key={title}
              className="group overflow-hidden rounded-md bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative">
                <SmartImage
                  src={img}
                  alt={`${title} – ${classes}`}
                  className="h-[150px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />

                <span className="absolute -bottom-4 left-3 grid h-9 w-9 place-items-center rounded-full bg-navy text-white ring-2 ring-white">
                  <Icon className="text-base" aria-hidden="true" />
                </span>
              </div>

              <div className="px-3 pb-4 pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gold-600">
                  {classes}
                </p>

                <h3 className="mt-1 text-sm font-semibold leading-snug text-navy">
                  {title}
                </h3>

                <p className="mt-2 min-h-[60px] text-xs leading-relaxed text-gray-600">
                  {text}
                </p>

                <a
                  href={href}
                  className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-gold-600 transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  Explore <FiArrowRight />
                </a>
              </div>
            </li>
          )
        )}
      </ul>

      <div className="mt-6 sm:hidden">
        <a
          href="#academics"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-navy hover:text-gold-600"
        >
          Explore academics <FiArrowRight />
        </a>
      </div>
    </section>
  );
}