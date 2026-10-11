import {
  FiSearch,
  FiMessageCircle,
  FiHeart,
  FiTrendingUp,
} from "react-icons/fi";

const approaches = [
  {
    icon: FiSearch,
    number: "01",
    title: "Learn by Exploring",
    text: "Encouraging children to ask questions, investigate ideas, and develop curiosity through meaningful learning experiences.",
  },
  {
    icon: FiMessageCircle,
    number: "02",
    title: "Think & Communicate",
    text: "Building critical thinking, logical reasoning, communication, and problem-solving skills step by step.",
  },
  {
    icon: FiHeart,
    number: "03",
    title: "Grow with Values",
    text: "Promoting kindness, honesty, discipline, respect, empathy, and a sense of responsibility.",
  },
  {
    icon: FiTrendingUp,
    number: "04",
    title: "Progress with Confidence",
    text: "Helping students recognize their strengths, learn from mistakes, and become more independent learners.",
  },
];

export default function LearningApproach() {
  return (
    <section
      id="learning-approach"
      className="bg-[#F6F6F3] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40"
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div>
          <p className="eyebrow text-gold">How We Teach</p>

          <h2 className="h-section mt-2">
            Learning That
            <br className="hidden sm:block" />
            Goes Beyond Books
          </h2>

          <span className="mt-4 block h-0.5 w-10 bg-gold" />

          <p className="mt-5 max-w-md text-sm leading-7 text-gray-600">
            Children learn in different ways and at different paces.
            Our educational approach aims to make learning meaningful
            by encouraging participation, exploration, reflection,
            and steady progress.
          </p>
        </div>

        <ul className="grid gap-x-7 sm:grid-cols-2">
          {approaches.map(({ icon: Icon, number, title, text }) => (
            <li
              key={number}
              className="border-t border-gray-300 py-5 sm:py-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest text-gold-600">
                  {number}
                </span>

                <Icon
                  className="text-2xl text-navy"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-4 text-base font-semibold text-navy">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}