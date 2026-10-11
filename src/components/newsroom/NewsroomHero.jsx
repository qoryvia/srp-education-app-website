import banner from "../../assets/images/banner/building-01.png";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";

export default function NewsroomHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img
        src={banner}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/55" />

      <div className="relative px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-40">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-2 text-xs text-white/75">
            <a href="/" className="transition-colors hover:text-white">
              Home
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-gold">Newsroom</span>
          </div>

          <p className="eyebrow !text-gold">
            News, Notices & School Updates
          </p>

          <h1 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.12]">
            Stories from
            <br />
            S. R. P. Global School
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
            Discover our approach to learning, student development,
            school facilities, and the information families need
            throughout their child's educational journey.
          </p>

          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <a
              href="#latest-updates"
              className="btn-gold inline-flex min-h-11 items-center justify-center gap-2"
            >
              Explore Updates
              <FiArrowRight />
            </a>

            <a
              href="#school-notices"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[3px] border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              School Notices
              <FiArrowDown />
            </a>
          </div>

          <p className="mt-7 text-xs font-medium tracking-wide text-white/75 sm:text-sm">
            Nursery to Class XII
            <span className="mx-2 text-gold">·</span>
            CBSE-pattern Education
          </p>
        </div>
      </div>
    </section>
  );
}