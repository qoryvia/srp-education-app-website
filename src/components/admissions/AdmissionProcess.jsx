const admissionSteps = [
  {
    number: "01",
    title: "Enquiry & Guidance",
    text: "Contact the school to understand available classes, seat availability, eligibility, fee details, and the admission schedule.",
  },
  {
    number: "02",
    title: "Application Form",
    text: "Obtain and complete the school's admission form with accurate student, parent, and contact information.",
  },
  {
    number: "03",
    title: "Document Verification",
    text: "Submit the required documents. The school may request original documents for verification.",
  },
  {
    number: "04",
    title: "Interaction & Assessment",
    text: "Where applicable, the school may arrange an age-appropriate interaction or class-level assessment, according to its admission policy.",
  },
  {
    number: "05",
    title: "Confirmation",
    text: "After eligibility and documents are verified, follow the school's instructions for fee payment and completion of admission formalities.",
  },
];

export default function AdmissionProcess() {
  return (
    <section
      id="admission-process"
      className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40"
    >
      <div className="max-w-3xl">
        <p className="eyebrow text-gold">How to Apply</p>

        <h2 className="h-section mt-2">
          Our Admission Process
        </h2>

        <span className="mt-4 block h-0.5 w-10 bg-gold" />

        <p className="mt-4 text-sm leading-7 text-gray-600">
          We aim to make the admission journey clear and convenient
          for parents. Contact the school for current vacancies and
          class-specific requirements before submitting an application.
        </p>
      </div>

      <ol className="mt-8 grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {admissionSteps.map(({ number, title, text, icon: Icon }) => (
          <li key={number} className="border-t border-gray-200 py-5">
            <div className="flex items-center justify-between gap-3">
              <span className="font-serif text-2xl text-gold-600">
                {number}
              </span>
            </div>

            <h3 className="mt-4 text-base font-semibold leading-snug text-navy">
              {title}
            </h3>

            <p className="mt-2 text-sm leading-7 text-gray-600">
              {text}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-5 border-l-2 border-gold pl-4 text-xs leading-6 text-gray-600">
        Admission is subject to seat availability, document verification,
        applicable age and class eligibility requirements, and the school's
        current admission policy.
      </p>
    </section>
  );
}