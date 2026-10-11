import {
  FiMessageCircle,
  FiFileText,
  FiCheckCircle,
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: FiMessageCircle,
    title: "Submit an Enquiry",
    description:
      "Share your contact information and the class you are interested in.",
  },
  {
    number: "02",
    icon: FiFileText,
    title: "Confirm Requirements",
    description:
      "Contact the school to confirm seat availability, eligibility, fees, and required documents.",
  },
  {
    number: "03",
    icon: FiCheckCircle,
    title: "Complete Admission",
    description:
      "Follow the school's instructions for document verification and completion of admission formalities.",
  },
];

export default function ApplicationGuidelines() {
  return (
    <section className="bg-[#F6F6F3] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 xl:px-40">
      <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
        <div>
          <p className="eyebrow text-gold">How It Works</p>

          <h2 className="h-section mt-2">
            Your Admission Journey
          </h2>

          <span className="mt-4 block h-0.5 w-10 bg-gold" />

          <p className="mt-4 text-sm leading-7 text-gray-600">
            Our admission enquiry process helps parents understand
            the requirements before proceeding with a formal application.
          </p>
        </div>

        <ol className="grid gap-x-6 sm:grid-cols-3">
          {steps.map(({ number, icon: Icon, title, description }) => (
            <li key={number} className="border-t border-gray-300 py-5">
              <div className="flex items-center justify-between gap-3">
                <span className="font-serif text-2xl text-gold-600">
                  {number}
                </span>

                <Icon
                  className="text-2xl text-navy"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-4 text-sm font-semibold leading-snug text-navy">
                {title}
              </h3>

              <p className="mt-2 text-xs leading-6 text-gray-600 sm:text-sm">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}