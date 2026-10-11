import {
  FiArrowRight,
  FiArrowUpRight,
  FiBookOpen,
  FiActivity,
  FiAward,
  FiUsers,
} from "react-icons/fi";

const newsItems = [
  {
    category: "Admissions",
    title: "A Learning Journey from Nursery to Class XII",
    description:
      "Discover a school environment that encourages curiosity, strong foundations, and continuous academic growth through the CBSE curriculum.",
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80",
    alt: "Young learner engaged in an educational activity",
    icon: FiBookOpen,
    href: "#admissions",
  },
  {
    category: "Academics",
    title: "Learning Through Exploration and Discovery",
    description:
      "Encouraging students to ask questions, develop critical thinking, and connect classroom concepts with practical learning.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
    alt: "Students participating in a classroom learning activity",
    icon: FiAward,
    href: "#academics",
  },
  {
    category: "Sports & Arts",
    title: "Building Skills Beyond the Classroom",
    description:
      "Sports, arts, and creative activities help students develop teamwork, discipline, confidence, and self-expression.",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80",
    alt: "Creative art and painting activity",
    icon: FiActivity,
    href: "#student-life",
  },
  {
    category: "Student Development",
    title: "Growing with Values and Leadership",
    description:
      "Nurturing responsible, compassionate, and confident learners through collaboration, positive values, and leadership opportunities.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    alt: "A group collaborating during a learning activity",
    icon: FiUsers,
    href: "#student-life",
  },
];

export default function News() {
  return (
    <section
      id="news"
      className="px-5 py-12 sm:px-8 sm:py-14 lg:px-12 xl:px-40"
    >
      {/* Section heading */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow text-gold">News & Updates</p>

          <h2 className="h-section mt-2">
            Discover Life at
            <br className="hidden sm:block" /> S.R.P. School
          </h2>

          <span className="mt-3 block h-0.5 w-10 bg-gold" />

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600">
            Explore the learning experiences, activities, and opportunities
            that support our students from Nursery to Class XII.
          </p>
        </div>

        <a
          href="#news"
          className="hidden shrink-0 items-center gap-2 text-xs font-semibold text-navy transition-colors hover:text-gold-600 sm:inline-flex"
        >
          Explore updates
          <FiArrowRight />
        </a>
      </div>

      {/* Four news cards */}
      <ul className="mt-8 grid grid-cols-1 gap-5 min-[520px]:grid-cols-2 xl:grid-cols-4">
        {newsItems.map(
          ({
            category,
            title,
            description,
            image,
            alt,
            icon: Icon,
            href,
          }) => (
            <li
              key={title}
              className="group flex min-w-0 flex-col overflow-hidden rounded-md border border-gray-200 bg-white transition-colors hover:border-gray-300"
            >
              {/* Image */}
              <a
                href={href}
                className="relative block overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
                aria-label={`Read more: ${title}`}
              >
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] sm:h-48"
                />

                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-sm bg-white/95 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-navy">
                  <Icon className="text-sm text-gold-600" />
                  {category}
                </span>
              </a>

              {/* Content */}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-base font-semibold leading-snug text-navy">
                  {title}
                </h3>

                <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-600">
                  {description}
                </p>

                <a
                  href={href}
                  className="mt-5 inline-flex w-fit items-center gap-2 border-b border-transparent pb-1 text-xs font-semibold text-navy transition-colors hover:border-gold hover:text-gold-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  Read more
                  <FiArrowUpRight className="text-sm" />
                </a>
              </div>
            </li>
          )
        )}
      </ul>

      {/* Mobile link */}
      <div className="mt-6 sm:hidden">
        <a
          href="#news"
          className="inline-flex items-center gap-2 text-xs font-semibold text-navy hover:text-gold-600"
        >
          Explore updates
          <FiArrowRight />
        </a>
      </div>
    </section>
  );
}