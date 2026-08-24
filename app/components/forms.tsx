"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

type FormProps = {
  ctaLabel: string;
};

/* =========================================
   EMAILJS CONFIGURATION
========================================= */

const EMAILJS_SERVICE_ID = "service_e8ixcdf";
const EMAILJS_TEMPLATE_ID = "template_3zllz1h";
const EMAILJS_PUBLIC_KEY = "oe7_UJfA6kas5bDmH";

/* =========================================
   STYLES
========================================= */

const inputClassName =
  "w-full rounded-xl border border-[#d1d5db] bg-white px-4 py-3 text-sm text-[#1f2a30] outline-none transition focus:border-[#C2A57A] focus:ring-2 focus:ring-[#C2A57A]/20";

/* =========================================
   SECTION TITLE
========================================= */

function SectionTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-3">
      <h2 className="text-3xl text-[#1F2A30] md:text-5xl">
        {title}
      </h2>

      <p className="max-w-3xl leading-8 text-[#6B7280]">
        {description}
      </p>
    </div>
  );
}

/* =========================================
   REUSABLE EMAILJS FORM HANDLER
========================================= */

function useEmailForm(formType: string) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("");
    setIsSuccess(false);

    const form = event.currentTarget;

    const formData = new FormData(form);

    const data = Object.fromEntries(
      formData.entries()
    ) as Record<string, string>;

    const formattedData = Object.entries(data)
      .map(([key, value]) => {
        const label = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase());

        return `${label}: ${value || "Not provided"}`;
      })
      .join("\n");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          form_type: formType,

          full_name:
            data.fullName ||
            data.contactPerson ||
            "Not provided",

          company_name:
            data.companyName ||
            "Not provided",

          email:
            data.email ||
            "Not provided",

          phone:
            data.phone ||
            "Not provided",

          message:
            data.message ||
            data.summary ||
            data.experience ||
            "No additional details",

          form_data: formattedData,
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);

      setStatus(
        "Thank you! Your submission has been received successfully."
      );

      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setIsSuccess(false);

      setStatus(
        "Something went wrong. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    handleSubmit,
    isSubmitting,
    status,
    isSuccess,
  };
}

/* =========================================
   CONTACT / PROJECT CONSULTATION FORM
========================================= */

export function ContactInquiryForm({
  ctaLabel,
}: FormProps) {
  const {
    handleSubmit,
    isSubmitting,
    status,
    isSuccess,
  } = useEmailForm("Project Consultation");

  return (
    <section className="py-16 md:py-20">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <SectionTitle
          title="Request a Project Consultation"
          description="Tell us your project type, location, and timeline. Our team will respond quickly with a tailored plan and next steps."
        />

        <form
          onSubmit={handleSubmit}
          className="reveal-up mt-8 grid gap-4 rounded-3xl border border-[#e5e7eb] bg-[#fafafa] p-6 md:grid-cols-2"
        >
          <input
            className={inputClassName}
            name="fullName"
            placeholder="Full Name"
            required
          />

          <input
            className={inputClassName}
            name="phone"
            placeholder="Phone Number"
            required
          />

          <input
            className={inputClassName}
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <input
            className={inputClassName}
            name="city"
            placeholder="Project City"
            required
          />

          <input
            className={inputClassName}
            name="projectType"
            placeholder="Project Type (Residential/Commercial)"
          />

          <input
            className={inputClassName}
            name="budget"
            placeholder="Estimated Budget"
          />

          <textarea
            className={`${inputClassName} md:col-span-2`}
            rows={5}
            name="message"
            placeholder="Project details, timeline expectations, and preferred callback time"
            required
          />

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-[#C2A57A] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#ad9169] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : ctaLabel}
            </button>

            {status && (
              <p
                className={`mt-4 text-sm ${
                  isSuccess
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

/* =========================================
   SUBCONTRACTOR REGISTRATION FORM
========================================= */

export function SubcontractorRegistrationForm({
  ctaLabel,
}: FormProps) {
  const {
    handleSubmit,
    isSubmitting,
    status,
    isSuccess,
  } = useEmailForm("Subcontractor Registration");

  return (
    <section className="py-16 md:py-20">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <SectionTitle
          title="Subcontractor Registration Form"
          description="Register your trade specialization and company credentials to be considered for upcoming Correa General Contractors projects."
        />

        <form
          onSubmit={handleSubmit}
          className="reveal-up mt-8 grid gap-4 rounded-3xl border border-[#e5e7eb] bg-[#fafafa] p-6 md:grid-cols-2"
        >
          <input
            className={inputClassName}
            name="companyName"
            placeholder="Company Name"
            required
          />

          <input
            className={inputClassName}
            name="contactPerson"
            placeholder="Primary Contact Name"
            required
          />

          <input
            className={inputClassName}
            type="email"
            name="email"
            placeholder="Business Email"
            required
          />

          <input
            className={inputClassName}
            name="phone"
            placeholder="Phone Number"
            required
          />

          <input
            className={inputClassName}
            name="trade"
            placeholder="Primary Trade/Specialty"
            required
          />

          <input
            className={inputClassName}
            name="coverageArea"
            placeholder="Service Area (Cities)"
            required
          />

          <input
            className={inputClassName}
            name="licenseNumber"
            placeholder="License Number"
          />

          <input
            className={inputClassName}
            name="insurance"
            placeholder="Insurance Carrier / Policy Info"
          />

          <input
            className={inputClassName}
            name="crewSize"
            placeholder="Crew Size / Team Capacity"
          />

          <input
            className={inputClassName}
            name="yearsInBusiness"
            placeholder="Years in Business"
          />

          <textarea
            className={`${inputClassName} md:col-span-2`}
            rows={5}
            name="experience"
            placeholder="Relevant project experience and crew capacity"
            required
          />

          <textarea
            className={`${inputClassName} md:col-span-2`}
            rows={4}
            name="address"
            placeholder="Office Address"
            required
          />

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-[#1F2A30] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#11181d] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : ctaLabel}
            </button>

            {status && (
              <p
                className={`mt-4 text-sm ${
                  isSuccess
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

/* =========================================
   CAREER APPLICATION FORM
========================================= */

export function CareerApplicationForm({
  ctaLabel,
}: FormProps) {
  const {
    handleSubmit,
    isSubmitting,
    status,
    isSuccess,
  } = useEmailForm("Career Application");

  return (
    <section className="py-16 md:py-20">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <SectionTitle
          title="Career Application Form"
          description="Apply for current and upcoming roles in project management, field operations, safety, and support teams."
        />

        <form
          onSubmit={handleSubmit}
          className="reveal-up mt-8 grid gap-4 rounded-3xl border border-[#e5e7eb] bg-[#fafafa] p-6 md:grid-cols-2"
        >
          <input
            className={inputClassName}
            name="fullName"
            placeholder="Full Name"
            required
          />

          <input
            className={inputClassName}
            name="phone"
            placeholder="Phone Number"
            required
          />

          <input
            className={inputClassName}
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <input
            className={inputClassName}
            name="location"
            placeholder="Current City"
            required
          />

          <input
            className={inputClassName}
            name="position"
            placeholder="Role You're Applying For"
            required
          />

          <input
            className={inputClassName}
            name="experienceYears"
            placeholder="Years of Experience"
          />

          <input
            className={inputClassName}
            name="availability"
            placeholder="Availability (Immediate/Notice Period)"
          />

          <input
            className={inputClassName}
            name="linkedin"
            placeholder="LinkedIn Profile (Optional)"
          />

          <textarea
            className={`${inputClassName} md:col-span-2`}
            rows={5}
            name="summary"
            placeholder="Briefly describe your relevant construction experience"
            required
          />

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-[#C2A57A] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#ad9169] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : ctaLabel}
            </button>

            {status && (
              <p
                className={`mt-4 text-sm ${
                  isSuccess
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

/* =========================================
   BUILD WITH US / PARTNERSHIP FORM
========================================= */

export function BuildWithUsForm({
  ctaLabel,
}: FormProps) {
  const {
    handleSubmit,
    isSubmitting,
    status,
    isSuccess,
  } = useEmailForm("Build With Us Partnership");

  return (
    <section className="py-16 md:py-20">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <SectionTitle
          title="Build With Us - Partnership Form"
          description="Share your company profile or project requirement. Our team will connect with you for the right collaboration path."
        />

        <form
          onSubmit={handleSubmit}
          className="reveal-up mt-8 grid gap-4 rounded-3xl border border-[#d9e2ee] bg-gradient-to-br from-[#f8fafc] to-[#eef3f8] p-6 md:grid-cols-2"
        >
          <input
            className={inputClassName}
            name="fullName"
            placeholder="Full Name"
            required
          />

          <input
            className={inputClassName}
            name="companyName"
            placeholder="Company / Organization"
            required
          />

          <input
            className={inputClassName}
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <input
            className={inputClassName}
            name="phone"
            placeholder="Phone Number"
            required
          />

          <input
            className={inputClassName}
            name="city"
            placeholder="City / Service Area"
            required
          />

          <input
            className={inputClassName}
            name="partnershipType"
            placeholder="Partnership Type (Client / Vendor / Investor / Trade)"
            required
          />

          <input
            className={inputClassName}
            name="budgetRange"
            placeholder="Budget Range (Optional)"
          />

          <input
            className={inputClassName}
            name="timeline"
            placeholder="Expected Start Timeline"
          />

          <textarea
            className={`${inputClassName} md:col-span-2`}
            rows={4}
            name="address"
            placeholder="Address / Office Location"
            required
          />

          <textarea
            className={`${inputClassName} md:col-span-2`}
            rows={5}
            name="message"
            placeholder="Tell us about your project, capabilities, or collaboration goals"
            required
          />

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-[#1F2A30] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#11181d] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : ctaLabel}
            </button>

            {status && (
              <p
                className={`mt-4 text-sm ${
                  isSuccess
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}