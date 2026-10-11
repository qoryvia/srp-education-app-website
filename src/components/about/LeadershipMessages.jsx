import banner from "../../assets/images/banner/building-04.png";
import { FiMessageCircle } from "react-icons/fi";

const leadershipMessages = [
  {
    id: "chairman-message",
    role: "Leadership",
    title: "Message of the Chairman",
    greeting: "It is my privilege to welcome you to S. R. P. Global School.",
    paragraphs: [
      "It is my privilege to welcome you to S. R. P. Global School, an institution founded on the belief that education has the power to transform individuals and, ultimately, society.",
      "The world around us is changing rapidly. In such an environment, children need more than academic knowledge. They need confidence, adaptability, creativity, critical-thinking skills, strong values, and the courage to face new challenges. Our vision is to provide an education that prepares students not simply for examinations, but for life.",
      "At S. R. P. Global School, we are committed to creating an environment where every child is respected, encouraged, and given the opportunity to discover their abilities. We believe that education should develop both the mind and the character, enabling students to become knowledgeable, compassionate, disciplined, and socially responsible individuals.",
      "Our school community is built upon a strong partnership between students, teachers, parents, and the wider society. Together, we can create an atmosphere where learning becomes meaningful, achievements are celebrated, mistakes become opportunities to grow, and every child is inspired to reach their fullest potential.",
      "As Chairman, I am proud of the dedicated educators and staff who work tirelessly to shape the future of our students. I am equally grateful to parents for entrusting us with the most precious responsibility—the education and development of their children.",
      "Let us continue this journey together, nurturing young minds with knowledge, values, vision, and purpose, and empowering them to become the leaders and responsible citizens of tomorrow.",
    ],
    closing: "With best wishes for a bright and successful future,",
    signature: "Chairman",
  },
  {
    id: "principal-message",
    role: "Academic Leadership",
    title: "Message of the Principal",
    greeting: "It gives me immense pleasure to welcome you to our school.",
    paragraphs: [
      "It gives me immense pleasure to welcome you to S. R. P. Global School, a place where education is envisioned as a journey of discovery, growth, and transformation.",
      "We believe that every child carries within them unique talents, dreams, and possibilities. Our responsibility as educators is to provide the right environment, guidance, encouragement, and opportunities that allow these possibilities to flourish.",
      "At S. R. P. Global School, academic excellence is important, but we believe true education goes far beyond textbooks and examinations. We strive to develop curiosity, confidence, creativity, discipline, empathy, and a strong sense of responsibility in every learner. Our classrooms encourage students to question, explore, collaborate, and learn from their experiences.",
      "Our dedicated teachers are committed to recognizing the individual needs of every child and helping them progress at their own pace. Alongside academics, we give importance to sports, arts, communication, leadership, technology, and social values so that our students grow into well-rounded personalities.",
      "I firmly believe that education is the foundation upon which a child's future is built. With the continued support of our parents and the dedication of our teachers, we can provide our students with the knowledge and values they need to face the future with confidence.",
      "Let us work together to inspire our children to dream big, work hard, remain humble, and become responsible citizens who contribute positively to society.",
    ],
    closing: "With warm regards,",
    signature: "Principal",
  },
];

export default function LeadershipMessages() {
  return (
    <section
      id="leadership-messages"
      className=" py-12  sm:py-16  lg:py-20 "
    >
      {/* Leadership heading with background image */}
      <div className="relative isolate overflow-hidden bg-navy py-12 sm:py-16 lg:py-20">
        {/* Background image */}
        <img
          src={banner}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center object-top"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/55" />

        {/* Content above image */}
        <div className="relative px-5 sm:px-8 lg:px-12 xl:px-40">
          <p className="eyebrow !text-gold">Words That Guide Us</p>

          <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            A Message from
            <br className="hidden sm:block" />
            Our Leadership
          </h2>

          <span className="mt-4 block h-0.5 w-10 bg-gold" />

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
            At S. R. P. Global School, our leadership shares a commitment to
            meaningful education, strong values, and the development of every
            child.
          </p>

          <p className="mt-5 text-xs font-medium tracking-wide text-white/80 sm:text-sm">
            Knowledge <span className="mx-1.5 text-gold">·</span>
            Values <span className="mx-1.5 text-gold">·</span>
            Purpose
          </p>
        </div>
      </div>

      {/* Leadership messages */}
      <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-10 lg:gap-14 px-5  sm:px-8 lg:px-12 xl:px-40">
        {leadershipMessages.map((message, messageIndex) => (
          <article
            key={message.id}
            id={message.id}
            className={`min-w-0 border-t-2 border-gold pt-5 ${
              messageIndex === 1
                ? "md:border-l md:border-t-0 md:border-l-gray-200 md:pl-7 md:pt-0 lg:pl-10"
                : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy/5 text-navy">
                <FiMessageCircle className="text-lg" aria-hidden="true" />
              </span>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-600">
                  {message.role}
                </p>

                <h3 className="mt-1 font-serif text-2xl leading-snug text-navy sm:text-3xl">
                  {message.title}
                </h3>
              </div>
            </div>

            <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
              {message.paragraphs.map((paragraph, index) => (
                <p key={`${message.id}-${index}`}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 border-t border-gray-200 pt-4">
              <p className="text-sm leading-6 text-gray-600">
                {message.closing}
              </p>

              <p className="mt-3 font-serif text-xl font-semibold text-navy">
                {message.signature}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                S. R. P. Global School
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
