import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Gallery", to: "/gallery" },
  { label: "News & Events", to: "/newsroom" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="px-5 xl:px-40 flex items-center justify-between py-4">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-[13px] font-medium text-navy transition-colors hover:text-gold-600"
            >
              {label}
            </Link>
          ))}
          <a
            href="/apply"
            className="inline-flex items-center gap-2 rounded-[3px] bg-navy px-5 py-3 text-[12px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-navy-700"
          >
            Apply now <FiArrowRight />
          </a>
        </nav>

        <button
          className="text-2xl text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-gray-200 bg-white lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col px-5 py-3 sm:px-8">
            {navLinks.map(({ label, to }) => (
              <li key={to} className="border-b border-gray-100 last:border-b-0">
                <Link
                  to={to}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center rounded-sm px-3 py-3 text-sm font-medium text-navy transition-colors hover:bg-gray-50 hover:text-gold-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  {label}
                </Link>
              </li>
            ))}

            <li className="pt-3">
              <a
                href="/apply"
                onClick={() => setOpen(false)}
                className="btn-gold flex min-h-11 w-full items-center justify-center gap-2 bg-navy px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Apply Now
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
