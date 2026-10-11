import logo from "../../assets/logo/logo.png";

export default function Logo({ light = false }) {
  return (
    <a
      href="/"
      aria-label="S. R. P. Global School home"
      className="inline-flex min-w-0 items-center gap-3"
    >
      {/* Existing logo image */}
      <img
        src={logo}
        alt=""
        className="w-10 shrink-0 object-contain"
      />

      {/* School wordmark */}
      <span className="min-w-0 leading-none">
        <span
          className={`block whitespace-nowrap font-serif text-[18px] font-semibold tracking-[0.025em] sm:text-[20px] ${
            light ? "text-white" : "text-navy"
          }`}
        >
          S.R.P. GLOBAL
        </span>

        <span
          className={`mt-1.5 block text-[10px] font-semibold uppercase tracking-[0.28em] ${
            light ? "text-white/80" : "text-navy/75"
          }`}
        >
          SCHOOL
        </span>
      </span>
    </a>
  );
}