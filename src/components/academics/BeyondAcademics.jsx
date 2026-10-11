import banner from "../../assets/images/banner/building-02.png";
import {
  FiBookOpen,
  FiMonitor,
  FiActivity,
  FiHeart,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const opportunities = [
  {
    icon: FiBookOpen,
    title: "Library & Reading",
    text: "Encouraging reading habits, imagination, research, and independent learning.",
  },
  {
    icon: FiMonitor,
    title: "Computer Education",
    text: "Supporting digital literacy and technology-assisted learning.",
  },
  {
    icon: FiActivity,
    title: "Sports & Physical Education",
    text: "Developing fitness, teamwork, discipline, and sportsmanship.",
  },
  {
    icon: FiHeart,
    title: "Arts & Creative Activities",
    text: "Making space for imagination, cultural expression, and creative confidence.",
  },
  {
    icon: FiShield,
    title: "Science Laboratory",
    text: "Connecting scientific concepts with observation, experiments, and practical learning.",
  },
  {
    icon: FiUsers,
    title: "Leadership & Teamwork",
    text: "Encouraging responsibility, cooperation, initiative, and respectful communication.",
  },
];

export default function BeyondAcademics() {
  return (
    <section
      id="beyond-academics"
      className="bg-navy px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40"
    >
      <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        {/* Image and introduction */}
        <div>
          <p className="eyebrow !text-gold">Beyond the Classroom</p>

          <h2 className="mt-2 font-serif text-3xl leading-tight text-white sm:text-4xl">
            More Opportunities
            <br className="hidden sm:block" />
            to Discover and Grow
          </h2>

          <span className="mt-4 block h-0.5 w-10 bg-gold" />

          <p className="mt-5 text-sm leading-7 text-white/80">
            Education is also about discovering interests, building
            friendships, developing confidence, and learning to work
            with others. We aim to support students through academic
            learning, activities, and opportunities for personal growth.
          </p>

          <div className="mt-6 overflow-hidden">
            <img
              src={banner}
              alt="S. R. P. Global School campus"
              loading="lazy"
              className="aspect-[5/3] w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Facilities and activities */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
            Learning Environment
          </p>

          <ul className="mt-4 grid gap-x-6 sm:grid-cols-2">
            {opportunities.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="border-t border-white/20 py-5"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className="shrink-0 text-xl text-gold"
                    aria-hidden="true"
                  />

                  <h3 className="text-sm font-semibold text-white">
                    {title}
                  </h3>
                </div>

                <p className="mt-2 text-xs leading-6 text-white/75 sm:text-sm">
                  {text}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-4 border-l-2 border-gold pl-4 text-xs leading-6 text-white/70">
            We believe a supportive and joyful school environment helps
            children develop academic ability, positive values, creativity,
            and a sense of belonging.
          </p>
        </div>
      </div>
    </section>
  );
}