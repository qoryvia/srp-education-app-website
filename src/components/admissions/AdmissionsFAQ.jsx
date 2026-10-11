import { useState } from "react";
import {
  FiPlus,
  FiMinus,
  FiArrowRight,
} from "react-icons/fi";

const faqs = [
  {
    question: "Which classes are open for admission?",
    answer:
      "S. R. P. Global School caters to students from Nursery to Class XII. Admission to a particular class depends on seat availability, eligibility, and the school's current admission policy.",
  },
  {
    question: "What is the admission procedure?",
    answer:
      "Parents should contact the school, enquire about available seats and requirements, complete the application form, submit the required documents, and follow the school's instructions for any interaction, assessment, and admission confirmation.",
  },
  {
    question: "Which documents should parents prepare?",
    answer:
      "Documents may include the child's date-of-birth proof, photographs, parent or guardian details, previous report card, and a Transfer Certificate for students transferring from another school. The school will confirm the exact checklist for the class concerned.",
  },
  {
    question: "Where can I find the fee structure?",
    answer:
      "The 2026–27 fee schedule provided here covers Classes I–III, IV–V, and VI–VIII. Fees for Nursery–UKG and Classes IX–XII were not included in the supplied schedule. Contact the school to confirm those fees and applicable payment terms.",
  },
  {
    question: "How are admissions handled for higher classes?",
    answer:
      "Admissions depend on the student's previous academic records, class eligibility, documentation, available seats, and applicable board requirements. Certain restrictions can apply to transfers into Classes X and XII where CBSE rules apply, so please consult the school before applying.",
  },
  {
    question: "How can I confirm the school's current admission requirements?",
    answer:
      "Contact the school office for current vacancies, age eligibility, admission dates, required documents, fee details, and any class-specific procedures before completing the application.",
  },
];

export default function AdmissionsFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="admissions-faq"
      className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40"
    >
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <div>
          <p className="eyebrow text-gold">
            Frequently Asked Questions
          </p>

          <h2 className="h-section mt-2">
            Admissions FAQs
          </h2>

          <span className="mt-4 block h-0.5 w-10 bg-gold" />

          <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
            Find answers to common questions about joining S. R. P.
            Global School, required documents, fee details, and the
            admission process.
          </p>

          <a
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Ask the school
            <FiArrowRight />
          </a>
        </div>

        <div className="min-w-0 border-t border-gray-200">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const questionId = `admission-faq-question-${index}`;
            const answerId = `admission-faq-answer-${index}`;

            return (
              <div
                key={question}
                className="border-b border-gray-200"
              >
                <h3>
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() =>
                      setOpenIndex((current) =>
                        current === index ? null : index
                      )
                    }
                    className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <span
                      className={`text-sm font-semibold leading-relaxed sm:text-base ${
                        isOpen ? "text-gold-600" : "text-navy"
                      }`}
                    >
                      {question}
                    </span>

                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border ${
                        isOpen
                          ? "border-navy bg-navy text-white"
                          : "border-gray-300 text-navy"
                      }`}
                    >
                      {isOpen ? (
                        <FiMinus aria-hidden="true" />
                      ) : (
                        <FiPlus aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </h3>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  hidden={!isOpen}
                  className="pb-5 pr-8"
                >
                  <p className="text-sm leading-7 text-gray-600">
                    {answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}