import { useState } from "react";
import {
  FiUser,
  FiPhone,
  FiMail,
  FiBookOpen,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

const SCHOOL_EMAIL = "plsglobalschool2021@gmail.com";

const classOptions = [
  { value: "Nursery", label: "Nursery" },
  { value: "LKG", label: "LKG" },
  { value: "UKG", label: "UKG" },
  ...Array.from({ length: 12 }, (_, index) => ({
    value: `Class ${index + 1}`,
    label: `Class ${index + 1}`,
  })),
];

const initialForm = {
  studentName: "",
  dateOfBirth: "",
  applyingClass: "",
  academicSession: "2026-27",
  guardianName: "",
  relationship: "",
  phone: "",
  email: "",
  address: "",
  previousSchool: "",
  message: "",
};

const inputClass =
  "mt-2 min-h-11 w-full rounded-sm border border-gray-300 bg-white px-3 py-2.5 text-sm text-navy outline-none transition-colors placeholder:text-gray-400 focus:border-navy focus:ring-1 focus:ring-navy";

export default function ApplicationForm() {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fields = [
      ["Student Name", formData.studentName],
      ["Date of Birth", formData.dateOfBirth || "Not provided"],
      ["Class Applied For", formData.applyingClass],
      ["Academic Session", formData.academicSession],
      ["Parent / Guardian", formData.guardianName],
      ["Relationship", formData.relationship || "Not specified"],
      ["Phone Number", formData.phone],
      ["Email Address", formData.email],
      ["Residential Address", formData.address],
      ["Previous School", formData.previousSchool || "Not provided"],
      ["Additional Message", formData.message || "None"],
    ];

    const subject = encodeURIComponent(
      `Admission Enquiry - ${formData.studentName.trim()}`
    );

    const body = encodeURIComponent(
      [
        "S. R. P. Global School - Admission Enquiry",
        "",
        ...fields.map(([label, value]) => `${label}: ${value.trim()}`),
        "",
        "This enquiry was prepared through the school website.",
      ].join("\n")
    );

    window.location.href =
      `mailto:${SCHOOL_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-w-0 border border-gray-200 bg-white p-5 sm:p-7 lg:p-8">
      <div className="border-b border-gray-200 pb-5">
        <p className="eyebrow text-gold">Admission Enquiry Form</p>

        <h2 className="mt-2 font-serif text-2xl text-navy sm:text-3xl">
          Student Application Details
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          Fields marked with <span className="text-red-600">*</span> are required.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-7">
        {/* Student information */}
        <fieldset>
          <legend className="text-base font-semibold text-navy">
            Student Information
          </legend>

          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            <div className="min-w-0">
              <label
                htmlFor="studentName"
                className="flex items-center gap-2 text-sm font-medium text-navy"
              >
                <FiUser aria-hidden="true" />
                Student's Full Name <span className="text-red-600">*</span>
              </label>

              <input
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter student's full name"
                autoComplete="off"
                maxLength={100}
                required
              />
            </div>

            <div className="min-w-0">
              <label
                htmlFor="dateOfBirth"
                className="text-sm font-medium text-navy"
              >
                Date of Birth
              </label>

              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="min-w-0">
              <label
                htmlFor="applyingClass"
                className="flex items-center gap-2 text-sm font-medium text-navy"
              >
                <FiBookOpen aria-hidden="true" />
                Class Applying For <span className="text-red-600">*</span>
              </label>

              <select
                id="applyingClass"
                name="applyingClass"
                value={formData.applyingClass}
                onChange={handleChange}
                className={inputClass}
                required
              >
                <option value="">Select class</option>

                {classOptions.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div className="min-w-0">
              <label
                htmlFor="academicSession"
                className="text-sm font-medium text-navy"
              >
                Academic Session <span className="text-red-600">*</span>
              </label>

              <select
                id="academicSession"
                name="academicSession"
                value={formData.academicSession}
                onChange={handleChange}
                className={inputClass}
                required
              >
                <option value="2026-27">2026–27</option>
                <option value="2027-28">2027–28</option>
              </select>
            </div>

            <div className="min-w-0 sm:col-span-2">
              <label
                htmlFor="previousSchool"
                className="text-sm font-medium text-navy"
              >
                Previous School (if applicable)
              </label>

              <input
                id="previousSchool"
                name="previousSchool"
                value={formData.previousSchool}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter previous school name"
                maxLength={150}
              />
            </div>
          </div>
        </fieldset>

        {/* Parent / guardian information */}
        <fieldset className="border-t border-gray-200 pt-6">
          <legend className="text-base font-semibold text-navy">
            Parent / Guardian Information
          </legend>

          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            <div className="min-w-0">
              <label
                htmlFor="guardianName"
                className="text-sm font-medium text-navy"
              >
                Parent / Guardian Name <span className="text-red-600">*</span>
              </label>

              <input
                id="guardianName"
                name="guardianName"
                value={formData.guardianName}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter parent or guardian name"
                autoComplete="name"
                maxLength={100}
                required
              />
            </div>

            <div className="min-w-0">
              <label
                htmlFor="relationship"
                className="text-sm font-medium text-navy"
              >
                Relationship to Student
              </label>

              <select
                id="relationship"
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select relationship</option>
                <option value="Mother">Mother</option>
                <option value="Father">Father</option>
                <option value="Guardian">Guardian</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="min-w-0">
              <label
                htmlFor="phone"
                className="flex items-center gap-2 text-sm font-medium text-navy"
              >
                <FiPhone aria-hidden="true" />
                Phone Number <span className="text-red-600">*</span>
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter contact number"
                maxLength={20}
                required
              />
            </div>

            <div className="min-w-0">
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-sm font-medium text-navy"
              >
                <FiMail aria-hidden="true" />
                Email Address <span className="text-red-600">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="you@example.com"
                maxLength={254}
                required
              />
            </div>

            <div className="min-w-0 sm:col-span-2">
              <label
                htmlFor="address"
                className="flex items-center gap-2 text-sm font-medium text-navy"
              >
                <FiMapPin aria-hidden="true" />
                Residential Address <span className="text-red-600">*</span>
              </label>

              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className={`${inputClass} resize-y leading-6`}
                placeholder="Enter your residential address"
                maxLength={500}
                required
              />
            </div>
          </div>
        </fieldset>

        {/* Additional details */}
        <fieldset className="border-t border-gray-200 pt-6">
          <legend className="text-base font-semibold text-navy">
            Additional Information
          </legend>

          <div className="mt-4">
            <label
              htmlFor="message"
              className="text-sm font-medium text-navy"
            >
              Message or Questions
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`${inputClass} resize-y leading-6`}
              placeholder="Tell us about any questions regarding admission..."
              maxLength={2000}
            />

            <p className="mt-1 text-right text-xs text-gray-500">
              {formData.message.length}/2000
            </p>
          </div>
        </fieldset>

        <div className="border-t border-gray-200 pt-5">
          <button
            type="submit"
            className="btn-gold inline-flex min-h-11 w-full items-center justify-center gap-2 sm:w-auto bg-navy rounded-sm px-4 text-white hover:bg-navy-700 transition-colors duration-300 ease-in-out"
          >
            Prepare Admission Enquiry
            <FiSend />
          </button>

          <p className="mt-4 text-xs leading-6 text-gray-500">
            This form prepares an email addressed to the school. Your
            enquiry is not sent automatically: you must review and send
            the email in your email application. Admission is subject
            to the school's current eligibility requirements and seat
            availability.
          </p>
        </div>
      </form>
    </div>
  );
}