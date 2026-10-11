import {
  FiCheckCircle,
  FiMessageCircle,
  FiTrendingUp,
} from "react-icons/fi";

const supportPoints = [
  {
    icon: FiCheckCircle,
    title: "Understand Progress",
    text: "Learning activities and assessments can help identify strengths and areas that need more attention.",
  },
  {
    icon: FiMessageCircle,
    title: "Learn from Feedback",
    text: "Constructive feedback helps students understand mistakes, improve their work, and ask for support when needed.",
  },
  {
    icon: FiTrendingUp,
    title: "Build Exam Confidence",
    text: "Consistent practice, revision, and study habits help students prepare for assessments appropriate to their class.",
  },
];

export default function AssessmentSupport() {
  return (
    <section
      id="academic-support"
      className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40"
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div>
          <p className="eyebrow text-gold">Progress & Guidance</p>

          <h2 className="h-section mt-2">
            Helping Every Learner
            <br className="hidden sm:block" />
            Move Forward
          </h2>

          <span className="mt-4 block h-0.5 w-10 bg-gold" />

          <p className="mt-5 max-w-md text-sm leading-7 text-gray-600">
            Every student's learning journey is different. Regular practice,
            constructive feedback, and clear learning goals can help
            children build understanding and confidence over time.
          </p>
        </div>

        <ul className="divide-y divide-gray-200 border-t border-gray-200">
          {supportPoints.map(({ icon: Icon, title, text }, index) => (
            <li key={title} className="flex gap-4 py-5 sm:py-6">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy/5 text-navy">
                <Icon className="text-xl" aria-hidden="true" />
              </span>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gold-600">
                  Step {index + 1}
                </p>

                <h3 className="mt-1 text-base font-semibold text-navy">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-600">
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