import { useState } from "react";
import {
  FiSend,
  FiUser,
  FiPhone,
  FiMail,
  FiMessageSquare,
} from "react-icons/fi";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export default function ContactForm() {
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

    const subject = encodeURIComponent(
      `Website Enquiry - ${formData.name.trim()}`
    );

    const body = encodeURIComponent(
      [
        "Contact Enquiry - S. R. P. Global School",
        "",
        `Name: ${formData.name.trim()}`,
        `Phone: ${formData.phone.trim()}`,
        `Email: ${formData.email.trim()}`,
        "",
        "Message:",
        formData.message.trim(),
      ].join("\n")
    );

    const mailtoUrl =
      `mailto:plsglobalschool2021@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
  };

  const fieldClass =
    "mt-2 min-h-11 w-full rounded-sm border border-gray-300 bg-white px-3 py-2.5 text-sm text-navy outline-none transition-colors placeholder:text-gray-400 focus:border-navy focus:ring-1 focus:ring-navy";

  return (
    <div className="min-w-0 border border-gray-200 bg-white p-5 sm:p-7 lg:p-8">
      <p className="eyebrow text-gold">
        Send Us a Message
      </p>

      <h2 className="h-section mt-2">
        How Can We Help You?
      </h2>

      <p className="mt-3 text-sm leading-7 text-gray-600">
        Complete the form below to prepare your enquiry for our school.
        All fields are required.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="flex items-center gap-2 text-sm font-semibold text-navy"
          >
            <FiUser className="text-gray-500" aria-hidden="true" />
            Full Name
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={fieldClass}
            maxLength={100}
            required
          />
        </div>

        {/* Phone and email */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="min-w-0">
            <label
              htmlFor="contact-phone"
              className="flex items-center gap-2 text-sm font-semibold text-navy"
            >
              <FiPhone className="text-gray-500" aria-hidden="true" />
              Phone Number
            </label>

            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 00000 00000"
              className={fieldClass}
              maxLength={20}
              required
            />
          </div>

          <div className="min-w-0">
            <label
              htmlFor="contact-email"
              className="flex items-center gap-2 text-sm font-semibold text-navy"
            >
              <FiMail className="text-gray-500" aria-hidden="true" />
              Email Address
            </label>

            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={fieldClass}
              maxLength={254}
              required
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="flex items-center gap-2 text-sm font-semibold text-navy"
          >
            <FiMessageSquare
              className="text-gray-500"
              aria-hidden="true"
            />
            Your Message
          </label>

          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can our school help you?"
            rows={5}
            maxLength={3000}
            className={`${fieldClass} min-h-[140px] resize-y leading-6`}
            required
          />

          <p className="mt-1 text-right text-xs text-gray-500">
            {formData.message.length}/3000
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn-gold inline-flex min-h-11 w-full items-center justify-center gap-2 sm:w-auto bg-navy rounded-sm px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          Submit Enquiry
          <FiSend />
        </button>

        <p className="text-xs leading-6 text-gray-500">
          Submitting opens your default email application with your
          message prepared. You must send the email from that application
          for the school to receive it.
        </p>
      </form>
    </div>
  );
}