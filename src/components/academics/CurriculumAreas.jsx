import {
  FiBookOpen,
  FiHash,
  FiActivity,
  FiGlobe,
  FiMonitor,
  FiEdit3,
} from "react-icons/fi";

const curriculumAreas = [
  {
    icon: FiBookOpen,
    title: "Languages & Communication",
    text: "Reading, writing, vocabulary, comprehension, and the confidence to express ideas clearly.",
  },
  {
    icon: FiHash,
    title: "Mathematics & Logical Thinking",
    text: "Numeracy, analytical thinking, reasoning, patterns, and practical problem-solving.",
  },
  {
    icon: FiActivity,
    title: "Science & Inquiry",
    text: "Observation, investigation, conceptual understanding, and learning through practical exploration.",
  },
  {
    icon: FiGlobe,
    title: "Social Sciences",
    text: "Understanding people, communities, history, geography, citizenship, and the wider world.",
  },
  {
    icon: FiMonitor,
    title: "Computer & Digital Learning",
    text: "Building digital awareness, computer skills, responsible technology use, and confidence with modern tools.",
  },
  {
    icon: FiEdit3,
    title: "Arts, Culture & Expression",
    text: "Encouraging creativity, imagination, cultural awareness, physical activity, and self-expression.",
  },
];

export default function CurriculumAreas() {
  return (
    <section
      id="curriculum-areas"
      className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40"
    >
      <div className="max-w-3xl">
        <p className="eyebrow text-gold">A Balanced Curriculum</p>

        <h2 className="h-section mt-2">
          Building Knowledge Across Subjects
        </h2>

        <span className="mt-4 block h-0.5 w-10 bg-gold" />

        <p className="mt-4 text-sm leading-7 text-gray-600">
          Our curriculum approach aims to develop a broad base of knowledge
          alongside communication, reasoning, creativity, and practical
          skills appropriate to each stage of learning.
        </p>
      </div>

      <ul className="mt-8 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {curriculumAreas.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="border-t border-gray-200 py-5 sm:py-6"
          >
            <span className="grid h-10 w-10 place-items-center rounded-md bg-navy/5 text-navy">
              <Icon className="text-xl" aria-hidden="true" />
            </span>

            <h3 className="mt-4 text-base font-semibold leading-snug text-navy">
              {title}
            </h3>

            <p className="mt-2 text-sm leading-7 text-gray-600">
              {text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}