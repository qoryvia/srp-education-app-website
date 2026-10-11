import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

const contactDetails = [
  {
    id: "address",
    title: "Visit Our School",
    value: "Buddha Marg, Jhungawa, Kushinagar - 274403 (U.P.)",
    description: "S. R. P. Global School",
    icon: FiMapPin,
    href: "https://www.google.com/maps/search/?api=1&query=S.R.P.+GLOBAL+SCHOOL+KUSHINAGAR",
    external: true,
    linkLabel: "Get Directions",
  },
  {
    id: "phone",
    title: "Call Us",
    value: "+91-9170316993",
    description: "Contact the school by phone.",
    icon: FiPhone,
    href: "tel:+919170316993",
    linkLabel: "Call Now",
  },
  {
    id: "email",
    title: "Email Us",
    value: "plsglobalschool2021@gmail.com",
    description: "Send your questions or enquiries by email.",
    icon: FiMail,
    href: "mailto:plsglobalschool2021@gmail.com",
    linkLabel: "Send Email",
  },
];

export default function ContactInformation() {
  return (
    <div className="min-w-0">
      <p className="eyebrow text-gold">
        Contact Information
      </p>

      <h2 className="h-section mt-2">
        We're Here to Help
      </h2>

      <span className="mt-4 block h-0.5 w-10 bg-gold" />

      <p className="mt-4 text-sm leading-7 text-gray-600">
        Reach out to our school for information about admissions,
        classes, school facilities, or any other general enquiry.
      </p>

      <ul className="mt-7 divide-y divide-gray-200 border-t border-gray-200">
        {contactDetails.map(
          ({
            id,
            title,
            value,
            description,
            icon: Icon,
            href,
            external,
            linkLabel,
          }) => (
            <li key={id} className="py-5 sm:py-6">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy/5 text-navy">
                  <Icon
                    className="text-xl"
                    aria-hidden="true"
                  />
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-navy">
                    {title}
                  </h3>

                  <p className="mt-2 break-words text-sm font-medium leading-6 text-gray-800">
                    {value}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {description}
                  </p>

                  <a
                    href={href}
                    {...(external
                      ? {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    className="mt-3 inline-flex min-h-8 items-center gap-2 text-xs font-semibold text-navy transition-colors hover:text-gold-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    {linkLabel}
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </li>
          )
        )}
      </ul>

      <div className="mt-5 border-l-2 border-gold pl-4">
        <p className="text-sm font-semibold text-navy">
          S. R. P. Global School
        </p>

        <p className="mt-1 text-xs leading-6 text-gray-600">
          Supporting your child's learning journey from Nursery
          to Class XII.
        </p>
      </div>
    </div>
  );
}