import banner from "../../assets/images/banner/building-03.png";
import { FiCheckCircle, FiCompass } from "react-icons/fi";

const missionPoints = [
  "Provide quality education that develops intellectual curiosity and a love for lifelong learning.",
  "Create a safe, inclusive, and joyful learning environment where every child feels valued.",
  "Encourage critical thinking, creativity, innovation, and problem-solving skills.",
  "Promote strong moral values, discipline, integrity, empathy, and respect.",
  "Provide opportunities for students to excel in academics, sports, arts, culture, and leadership.",
  "Integrate appropriate technology and modern teaching methodologies into the learning process.",
  "Encourage students to become confident communicators and independent learners.",
  "Build a strong partnership between school, students, parents, and the community.",
  "Prepare students to meet the demands of the modern world while remaining rooted in values, culture, and responsibility.",
];

export default function VisionMission() {
  return (
    <section
      id="vision-mission"
      className="mt-14 bg-[#F6F6F3] px-5 py-12 sm:mt-16 sm:px-8 sm:py-16 lg:mt-20 lg:px-12 lg:py-20 xl:px-40"
    >
      {/* Section heading */}
      <div className="mb-8 max-w-2xl sm:mb-10">
        <p className="eyebrow text-gold">Our Purpose</p>

        <h2 className="h-section mt-2">
          Vision & Mission
        </h2>

        <span className="mt-4 block h-0.5 w-10 bg-gold" />

        <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600">
          We believe education should help every child develop knowledge,
          character, independence, and the confidence to make a positive
          difference in the world.
        </p>
      </div>

      <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
        {/* Vision panel */}
        <article className="flex flex-col bg-navy text-white">
          <img
            src={banner}
            alt="S. R. P. Global School campus"
            loading="lazy"
            className="h-48 w-full object-cover object-center sm:h-56"
          />

          <div className="flex-1 p-5 sm:p-7 lg:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/25 text-gold">
                <FiCompass className="text-xl" aria-hidden="true" />
              </span>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                  Our Direction
                </p>

                <h3 className="mt-1 font-serif text-2xl sm:text-3xl">
                  Our Vision
                </h3>
              </div>
            </div>

            <p className="mt-5 text-base font-medium leading-7 text-white">
              To inspire, empower, and educate every child to become a
              confident, compassionate, creative, and responsible global
              citizen.
            </p>

            <div className="mt-4 space-y-4 text-sm leading-7 text-white/75">
              <p>
                Our vision is to establish an educational environment where
                excellence and values go hand in hand. We aspire to develop
                learners who possess strong academic foundations,
                critical-thinking abilities, creativity, emotional
                intelligence, and respect for others.
              </p>

              <p>
                We envision S. R. P. Global School as a place where children
                learn not only what to think, but also how to think—preparing
                them to embrace opportunities, overcome challenges, and
                contribute meaningfully to the world.
              </p>
            </div>
          </div>
        </article>

        {/* Mission panel */}
        <article className="border border-gray-200 bg-white p-5 sm:p-7 lg:p-8">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy/5 text-navy">
              <FiCheckCircle className="text-xl" aria-hidden="true" />
            </span>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-600">
                Our Commitments
              </p>

              <h3 className="mt-1 font-serif text-2xl text-navy sm:text-3xl">
                Our Mission
              </h3>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-gray-600">
            Our mission is to provide a balanced educational experience
            that supports academic growth, builds strong values, and prepares
            students for the challenges and opportunities of life.
          </p>

          <ul className="mt-6 space-y-4">
            {missionPoints.map((point, index) => (
              <li
                key={point}
                className="flex items-start gap-3 border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
              >
                <span className="mt-0.5 shrink-0 font-serif text-sm text-gold-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-6 text-gray-600">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}