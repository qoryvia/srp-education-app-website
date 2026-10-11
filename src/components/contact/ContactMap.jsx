import { FiMapPin, FiExternalLink } from "react-icons/fi";

export default function ContactMap() {
  return (
    <section
      id="school-location"
      className="border-t border-gray-200 bg-[#F6F6F3] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40"
    >
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow text-gold">
            Find Our Location
          </p>

          <h2 className="h-section mt-2">
            Visit S. R. P. Global School
          </h2>

          <span className="mt-4 block h-0.5 w-10 bg-gold" />

          <p className="mt-4 flex items-start gap-2 text-sm leading-7 text-gray-600">
            <FiMapPin
              className="mt-1 shrink-0 text-lg text-gold-600"
              aria-hidden="true"
            />

            <span>
              Buddha Marg, Jhungawa,
              <br className="sm:hidden" />
              {" "}Kushinagar - 274403 (U.P.)
            </span>
          </p>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=S.R.P.+GLOBAL+SCHOOL+KUSHINAGAR"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 w-fit items-center gap-2 border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-navy transition-colors hover:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          Open in Google Maps
          <FiExternalLink />
        </a>
      </div>

      <div className="mt-7 overflow-hidden border border-gray-200 bg-white">
        <iframe
          title="Location of S. R. P. Global School, Kushinagar"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14252.792868979608!2d83.88746300000001!3d26.73805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993eb11c9f08745%3A0x6e239c3947828389!2sS.R.P%20GLOBAL%20SCHOOL%20KUSHINAGAR!5e0!3m2!1sen!2sin!4v1791685773058!5m2!1sen!2sin"
          className="h-[300px] w-full sm:h-[400px] lg:h-[450px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}