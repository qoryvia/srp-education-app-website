import { FiCheckCircle, FiFileText, FiInfo } from "react-icons/fi";

const documentGroups = [
  {
    title: "For a new admission",
    items: [
      "Completed school admission application form.",
      "Child's date-of-birth certificate or other accepted proof of date of birth.",
      "Recent passport-size photographs of the child.",
      "Parent or guardian details and the address/contact information requested by the school.",
    ],
  },
  {
    title: "For admission from another school",
    items: [
      "Previous class report card or marksheet, as applicable.",
      "Transfer Certificate from the previous school, where required.",
      "Supporting academic records required for the class being sought.",
      "Additional documents requested by the school for verification.",
    ],
  },
];

export default function RequiredDocuments() {
  return (
    <section
      id="admission-documents"
      className="bg-[#F6F6F3] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40"
    >
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <div>
          <p className="eyebrow text-gold">Parent Checklist</p>

          <h2 className="h-section mt-2">
            Documents to Prepare
          </h2>

          <span className="mt-4 block h-0.5 w-10 bg-gold" />

          <p className="mt-4 text-sm leading-7 text-gray-600">
            Keeping the necessary documents ready can help make the
            application and verification process smoother.
          </p>

          <div className="mt-6 flex items-start gap-3 border-t border-gray-200 pt-5">
            <FiInfo className="mt-0.5 shrink-0 text-lg text-gold-600" />

            <p className="text-xs leading-6 text-gray-600">
              Please confirm the current document checklist with the
              school office. Some documents apply only to particular
              classes or transfer cases.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {documentGroups.map(({ title, items }) => (
            <div key={title}>
              <div className="flex items-center gap-3">
                <FiFileText
                  className="shrink-0 text-xl text-navy"
                  aria-hidden="true"
                />

                <h3 className="text-base font-semibold text-navy">
                  {title}
                </h3>
              </div>

              <ul className="mt-4 space-y-3 border-t border-gray-200 pt-4">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FiCheckCircle
                      className="mt-1 shrink-0 text-base text-gold-600"
                      aria-hidden="true"
                    />

                    <span className="text-sm leading-6 text-gray-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}