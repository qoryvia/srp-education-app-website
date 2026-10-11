import ApplyHero from "../../components/apply/ApplyHero.jsx";
import ApplicationGuidelines from "../../components/apply/ApplicationGuidelines.jsx";
import ApplicationForm from "../../components/apply/ApplicationForm.jsx";
import ApplyContact from "../../components/apply/ApplyContact.jsx";

export default function Apply() {
  return (
    <main>
      <ApplyHero />
      <ApplicationGuidelines />

      <section
        id="application-form"
        className="scroll-mt-20 px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40"
      >
        <div className="grid items-start gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          <div>
            <p className="eyebrow text-gold">Admission Enquiry</p>

            <h2 className="h-section mt-2">
              Take the First Step
            </h2>

            <span className="mt-4 block h-0.5 w-10 bg-gold" />

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Share your child's details and the class you are interested
              in. The information will help the school understand your
              enquiry and guide you through the admission process.
            </p>

            <div className="mt-6 border-l-2 border-gold pl-4">
              <p className="text-sm font-semibold text-navy">
                S. R. P. Global School
              </p>

              <p className="mt-1 text-xs leading-6 text-gray-600">
                Nursery to Class XII
                <br />
                CBSE-pattern education
              </p>
            </div>
          </div>

          <ApplicationForm />
        </div>
      </section>

      <ApplyContact />
    </main>
  );
}