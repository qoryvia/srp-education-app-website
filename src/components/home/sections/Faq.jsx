import { useState } from "react";
import {
  FiPlus,
  FiMinus,
  FiArrowRight,
  FiHelpCircle,
} from "react-icons/fi";

const faqs = [
  {
    question: "Which classes are offered at S.R.P. School?",
    answer:
      "S.R.P. School caters to students from Nursery to Class XII, supporting their educational journey from early childhood through senior secondary education.",
  },
  {
    question: "Does S.R.P. School follow the CBSE curriculum?",
    answer:
      "The school follows a CBSE-focused academic approach designed to build strong subject knowledge, conceptual understanding, critical thinking, and practical learning skills. Please contact the school for details about its current affiliation and curriculum.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "Parents can contact the school or visit the admissions section to enquire about eligibility, available seats, required documents, and the admission process for their child's class.",
  },
  {
    question: "What facilities are available for students?",
    answer:
      "The school's learning environment includes facilities such as a library, computer room, and science laboratory, alongside opportunities for academic and extracurricular development. Contact the school to confirm the availability of specific facilities.",
  },
  {
    question: "How does the school support overall student development?",
    answer:
      "Along with academic learning, the school aims to encourage sports, arts, creativity, teamwork, leadership, critical thinking, and value-based education to support students' all-round development.",
  },
  {
    question: "How does S.R.P. School promote student safety?",
    answer:
      "The school prioritizes a safe, supportive, and respectful learning environment. CCTV surveillance and appropriate school safety procedures can help support campus supervision. Parents can contact the school for details about its safety policies.",
  },
  {
    question: "Are sports and arts part of school life?",
    answer:
      "Sports and creative activities provide opportunities for students to develop fitness, discipline, confidence, teamwork, and self-expression alongside their academic studies.",
  },
  {
    question: "How can parents get more information about the school?",
    answer:
      "Parents can use the school's contact or admissions section to ask questions about academics, facilities, admission requirements, and other school-related matters.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-40"
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        {/* Introduction */}
        <div>
          <p className="eyebrow text-gold">Frequently Asked Questions</p>

          <h2 className="h-section mt-2">
            Everything You
            <br className="hidden sm:block" /> Need to Know
          </h2>

          <span className="mt-3 block h-0.5 w-10 bg-gold" />

          <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
            Find answers to common questions about S.R.P. School,
            our Nursery to Class XII academic journey, admissions,
            facilities, and student development.
          </p>

          <div className="mt-6 flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy/5 text-navy">
              <FiHelpCircle className="text-xl" aria-hidden="true" />
            </span>

            <div>
              <h3 className="text-sm font-semibold text-navy">
                Still have questions?
              </h3>

              <p className="mt-1 text-xs leading-relaxed text-gray-600">
                Get in touch with our school team for more information.
              </p>

              <a
                href="#contact"
                className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-navy transition-colors hover:text-gold-600"
              >
                Contact the school
                <FiArrowRight />
              </a>
            </div>
          </div>
        </div>

        {/* FAQ accordion */}
        <div className="min-w-0">
          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {faqs.map(({ question, answer }, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;
              const questionId = `faq-question-${index}`;

              return (
                <div key={question} className="py-1">
                  <h3>
                    <button
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                    >
                      <span
                        className={`text-sm font-semibold leading-relaxed transition-colors sm:text-[15px] ${
                          isOpen ? "text-gold-600" : "text-navy"
                        }`}
                      >
                        {question}
                      </span>

                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-colors ${
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
                    className="pb-4 pr-8"
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
      </div>
    </section>
  );
}