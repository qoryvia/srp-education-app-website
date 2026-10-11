import {
  FiSun,
  FiBookOpen,
  FiLayers,
  FiTarget,
  FiAward,
  FiArrowUpRight,
} from "react-icons/fi";

const stages = [
  {
    number: "01",
    title: "Nursery & Kindergarten",
    classes: "Nursery – UKG",
    text: "A joyful introduction to learning through play, stories, language, creative activities, and foundational numeracy.",
    icon: FiSun,
  },
  {
    number: "02",
    title: "Primary School",
    classes: "Classes I – V",
    text: "Building strong foundations in reading, writing, mathematics, communication, curiosity, and good learning habits.",
    icon: FiBookOpen,
  },
  {
    number: "03",
    title: "Middle School",
    classes: "Classes VI – VIII",
    text: "Developing subject knowledge, independent learning, critical thinking, practical understanding, and problem-solving.",
    icon: FiLayers,
  },
  {
    number: "04",
    title: "Secondary School",
    classes: "Classes IX – X",
    text: "Strengthening conceptual understanding, subject knowledge, revision habits, and preparation for board examinations.",
    icon: FiTarget,
  },
  {
    number: "05",
    title: "Senior Secondary",
    classes: "Classes XI – XII",
    text: "Encouraging deeper subject learning, independent study, academic responsibility, and preparation for future pathways.",
    icon: FiAward,
  },
];

export default function AcademicStages() {
  return (
    <section
      id="academic-stages"
      className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40"
    >
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow text-gold">Our Academic Journey</p>

          <h2 className="h-section mt-2">
            Learning at Every Stage
          </h2>

          <span className="mt-4 block h-0.5 w-10 bg-gold" />

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600">
            Every stage brings new opportunities to learn, explore,
            build confidence, and prepare for the next step.
          </p>
        </div>

        <p className="shrink-0 text-sm font-medium text-navy">
          Nursery <span className="mx-1.5 text-gold">→</span> Class XII
        </p>
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {stages.map(({ number, title, classes, text, icon: Icon }) => (
          <li
            key={number}
            className="flex min-w-0 flex-col border border-gray-200 bg-white p-4 transition-colors hover:border-gold/60 sm:p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold tracking-widest text-gold-600">
                {number}
              </span>

              <Icon
                className="shrink-0 text-2xl text-navy"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>

            <p className="mt-5 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              {classes}
            </p>

            <h3 className="mt-2 text-base font-semibold leading-snug text-navy">
              {title}
            </h3>

            <p className="mt-3 flex-1 text-xs leading-6 text-gray-600">
              {text}
            </p>

            <a
              href="#learning-approach"
              className="mt-5 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-navy transition-colors hover:text-gold-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Learn more
              <FiArrowUpRight />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}