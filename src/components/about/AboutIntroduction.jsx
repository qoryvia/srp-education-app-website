import banner from "../../assets/images/banner/building-02.png";
import {
  FiBookOpen,
  FiHeart,
  FiTarget,
} from "react-icons/fi";

const highlights = [
  {
    icon: FiBookOpen,
    title: "Academic Excellence",
    text: "Strong foundations and a lifelong love for learning.",
  },
  {
    icon: FiHeart,
    title: "Character & Values",
    text: "Compassion, integrity, respect, and responsibility.",
  },
  {
    icon: FiTarget,
    title: "All-Round Development",
    text: "Opportunities to grow through sports, arts, and leadership.",
  },
];

export default function AboutIntroduction() {
  return (
    <section
      id="our-story"
      className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40"
    >
      {/* Section heading */}
      <div className="max-w-3xl">
        <p className="eyebrow text-gold">About SRPGS</p>

        <h2 className="h-section mt-3">
          Education That Shapes
          <br className="hidden sm:block" />
          Character and Potential
        </h2>

        <span className="mt-4 block h-0.5 w-10 bg-gold" />

        <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
          At S. R. P. Global School, education goes beyond the classroom.
          We nurture knowledge, confidence, character, and compassion
          to help every child discover their potential.
        </p>
      </div>

      {/* Image and introduction */}
      <div className="mt-8 grid items-start gap-7 sm:mt-10 sm:gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        {/* School image */}
        <div className="min-w-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-gray-100 sm:aspect-[5/4] lg:aspect-[5/4]">
            <img
              src={banner}
              alt="S. R. P. Global School building"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="mt-4 flex items-start gap-3 border-l-2 border-gold pl-4">
            <div>
              <p className="font-serif text-lg leading-snug text-navy sm:text-xl">
                Every Child Has the Potential to Shine
              </p>

              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                Nurturing young minds from Nursery to Class XII.
              </p>
            </div>
          </div>
        </div>

        {/* School introduction */}
        <div className="min-w-0 lg:pt-1">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-600">
            Our Story
          </p>

          <div className="mt-4 space-y-4 text-sm leading-7 text-gray-600 sm:leading-8">
            <p>
              S. R. P. Global School is committed to nurturing young minds
              with knowledge, confidence, character, and compassion. We
              believe that education is not merely about academic achievement;
              it is about preparing children to understand the world, discover
              their potential, and become responsible citizens.
            </p>

            <p>
              Our school provides a safe, stimulating, and inclusive learning
              environment where every child is encouraged to ask questions,
              think creatively, express ideas, and develop a lifelong love
              for learning. Through a balanced approach to academics,
              co-curricular activities, sports, technology, and value-based
              education, we strive to develop well-rounded individuals.
            </p>

            <p>
              At S. R. P. Global School, we recognize that every child is
              unique. Our dedicated educators work closely with students and
              parents to identify individual strengths, encourage curiosity,
              and build the confidence needed to face the challenges of an
              ever-changing world.
            </p>

            <p>
              We aim to create not only successful students, but also ethical,
              compassionate, independent, and responsible human beings who
              can make a positive difference in society.
            </p>
          </div>
        </div>
      </div>

      {/* School strengths */}
      <div className="mt-12 border-t border-gray-200 sm:mt-14">
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              className={`flex items-start gap-4 py-5 sm:px-5 lg:px-6 ${
                index === 0
                  ? "sm:pl-0"
                  : "border-t border-gray-200 sm:border-l sm:border-t-0"
              } ${
                index === 2
                  ? "sm:col-span-2 sm:border-l-0 lg:col-span-1 lg:border-l"
                  : ""
              }`}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy/5 text-navy">
                <Icon className="text-xl" aria-hidden="true" />
              </span>

              <div className="min-w-0">
                <h3 className="text-sm font-semibold leading-snug text-navy">
                  {title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}