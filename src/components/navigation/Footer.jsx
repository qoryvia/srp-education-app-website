import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const footerColumns = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Academics", to: "/academics" },
      { label: "Admissions", to: "/admissions" },
      { label: "Gallery", to: "/gallery" },
      { label: "News & Events", to: "/newsroom" },
    ],
  },
  {
    title: "School Resources",
    links: [
      { label: "Academic Stages", to: "/academics#academic-stages" },
      { label: "Learning Approach", to: "/academics#learning-approach" },
      { label: "School Facilities", to: "/facilities" },
      { label: "School Notices", to: "/newsroom#school-notices" },
      { label: "Faculty & Staff", to: "/about" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "Admission Process", to: "/admissions#admission-process" },
      { label: "Required Documents", to: "/admissions#admission-documents" },
      { label: "Fee Structure", to: "/admissions#fee-structure" },
      { label: "Visit Our School", to: "/contact#school-location" },
      { label: "Apply Now", to: "/apply" },
    ],
  },
];

const socials = [
  { label: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/" },
  { label: "X", icon: FaXTwitter, href: "https://x.com/" },
  { label: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/" },
  { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/" },
  { label: "YouTube", icon: FaYoutube, href: "https://www.youtube.com/" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="grid gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.4fr] lg:gap-8 lg:px-12 xl:px-40">
        {/* School information */}
        <div>
          <Logo light />

          <p className="mt-4 max-w-[260px] text-xs leading-6 text-white/75">
            S. R. P. Global School is committed to academic excellence,
            strong values, creativity, and the all-round development
            of students from Nursery to Class XII.
          </p>

          <ul className="mt-5 flex flex-wrap gap-3">
            {socials.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} website`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-sm text-white/80 transition-colors hover:border-gold hover:bg-gold hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer navigation columns */}
        {footerColumns.map(({ title, links }) => (
          <nav key={title} aria-label={title}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white">
              {title}
            </h3>

            <ul className="mt-4 space-y-3">
              {links.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="group inline-flex items-center gap-1 text-xs leading-5 text-white/75 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <span>{label}</span>
                    <FiArrowUpRight
                      className="shrink-0 text-[11px] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Contact information */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.12em]">
            Contact Us
          </h3>

          <ul className="mt-4 space-y-4 text-xs leading-6 text-white/80">
            <li className="flex items-start gap-3">
              <FiMapPin
                className="mt-1 shrink-0 text-base text-gold"
                aria-hidden="true"
              />

              <a
                href="https://www.google.com/maps/search/?api=1&query=S.R.P.+GLOBAL+SCHOOL+KUSHINAGAR"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                Buddha Marg, Jhungawa,
                <br />
                Kushinagar - 274403 (U.P.)
              </a>
            </li>

            <li className="flex items-start gap-3">
              <FiPhone
                className="mt-1 shrink-0 text-base text-gold"
                aria-hidden="true"
              />

              <a
                href="tel:+919170316993"
                className="transition-colors hover:text-gold"
              >
                +91-9170316993
              </a>
            </li>

            <li className="flex items-start gap-3">
              <FiMail
                className="mt-1 shrink-0 text-base text-gold"
                aria-hidden="true"
              />

              <a
                href="mailto:plsglobalschool2021@gmail.com"
                className="break-all transition-colors hover:text-gold"
              >
                plsglobalschool2021@gmail.com
              </a>
            </li>
          </ul>

          <Link
            to="/contact"
            className="mt-5 inline-flex min-h-9 items-center gap-2 border-b border-gold pb-1 text-xs font-semibold text-white transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Get in Touch
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Copyright and legal links */}
      <div className="border-t border-white/10">
        <div className="flex flex-col gap-4 px-5 py-5 text-[11px] text-white/65 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12 xl:px-40">
          <p>
            © {new Date().getFullYear()} S. R. P. Global School.
            All Rights Reserved.
          </p>

          <nav aria-label="Legal information">
            <ul className="flex flex-wrap gap-x-5 gap-y-3">
              {[
                { label: "Privacy Policy", to: "/privacy-policy" },
                { label: "Terms of Use", to: "/terms-of-use" },
                { label: "Accessibility", to: "/accessibility" },
                { label: "Sitemap", to: "/sitemap" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}