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

    if (formData.get("website_hp")) {
      // Spam bot filled the hidden field: pretend success, send nothing.
      setIsSuccess(true);
      setStatus("Thank you! Your submission has been received successfully.");
      setIsSubmitting(false);
      form.reset();
      return;
    }
    formData.delete("website_hp");

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

          // Alias for templates that use {{name}} (e.g. EmailJS "From Name").
          name:
            data.fullName ||
            data.contactPerson ||
            "Website visitor",

          // Ready-made subject, usable as {{subject}} in the EmailJS template.
          subject: `New ${formType} – ${data.fullName || data.companyName || "website"}`,

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
   COMPACT FORM BUILDER
   Short forms convert better: only ask what we need to call back.
========================================= */

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "select" | "textarea";
  options?: string[];
  required?: boolean;
  autoComplete?: string;
  wide?: boolean;
};

const nameField: Field = { name: "fullName", label: "Full Name", required: true, autoComplete: "name" };
const phoneField: Field = { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel" };
const emailField: Field = { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" };

function CompactForm({
  formType,
  title,
  description,
  fields,
  ctaLabel,
}: {
  formType: string;
  title: string;
  description: string;
  fields: Field[];
  ctaLabel: string;
}) {
  const { handleSubmit, isSubmitting, status, isSuccess } = useEmailForm(formType);

  return (
    <section className="py-12 md:py-16">
      <div className="grid w-full gap-8 px-6 md:px-10 lg:grid-cols-12 lg:gap-12 lg:px-14">
        <div className="lg:col-span-4">
          <SectionTitle title={title} description={description} />
        </div>

        <form
          onSubmit={handleSubmit}
          className="reveal-up relative grid gap-4 rounded-3xl border border-[#e5e7eb] bg-[#fafafa] p-6 sm:grid-cols-2 lg:col-span-8"
        >
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>
              Leave this field empty
              <input type="text" name="website_hp" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          {fields.map((field) => {
            const id = `${formType.replace(/\W+/g, "-").toLowerCase()}-${field.name}`;
            const span = field.wide || field.type === "textarea" ? "sm:col-span-2" : "";
            const label = (
              <label htmlFor={id} className="mb-1 block text-xs font-semibold tracking-wide text-[#475569]">
                {field.label}
                {field.required ? <span className="text-[#b45309]"> *</span> : <span className="font-normal"> (optional)</span>}
              </label>
            );

            if (field.type === "select") {
              return (
                <div key={field.name} className={span}>
                  {label}
                  <select id={id} name={field.name} required={field.required} defaultValue="" className={inputClassName}>
                    <option value="" disabled>
                      Select…
                    </option>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              );
            }

            if (field.type === "textarea") {
              return (
                <div key={field.name} className={span}>
                  {label}
                  <textarea id={id} name={field.name} rows={3} required={field.required} className={inputClassName} />
                </div>
              );
            }

            return (
              <div key={field.name} className={span}>
                {label}
                <input
                  id={id}
                  name={field.name}
                  type={field.type ?? "text"}
                  required={field.required}
                  autoComplete={field.autoComplete}
                  inputMode={field.type === "email" ? "email" : field.type === "tel" ? "tel" : undefined}
                  className={inputClassName}
                />
              </div>
            );
          })}

          <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-[#C2A57A] px-7 py-3 text-sm font-semibold text-[#1F2A30] transition hover:bg-[#d5ba92] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : ctaLabel}
            </button>
            {status ? (
              <p role="status" aria-live="polite" className={`text-sm ${isSuccess ? "text-green-700" : "text-red-600"}`}>
                {status}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}

/* =========================================
   CONTACT / PROJECT CONSULTATION FORM
========================================= */

export function ContactInquiryForm({ ctaLabel }: FormProps) {
  return (
    <CompactForm
      formType="Project Consultation"
      title="Request a Free Estimate"
      description="Share a few details and our team will call you back to discuss your project."
      ctaLabel={ctaLabel}
      fields={[
        nameField,
        phoneField,
        emailField,
        {
          name: "projectType",
          label: "Project Type",
          type: "select",
          required: true,
          options: ["Commercial / Tenant Improvement", "Residential / Custom Home", "Renovation & Remodeling", "Design-Build", "Other"],
        },
        { name: "message", label: "Project details", type: "textarea" },
      ]}
    />
  );
}

/* =========================================
   SUBCONTRACTOR REGISTRATION FORM
========================================= */

export function SubcontractorRegistrationForm({ ctaLabel }: FormProps) {
  return (
    <CompactForm
      formType="Subcontractor Registration"
      title="Register as a Subcontractor"
      description="Send us your company and trade. We'll follow up when we have a matching bid package."
      ctaLabel={ctaLabel}
      fields={[
        { name: "companyName", label: "Company Name", required: true, autoComplete: "organization" },
        { ...nameField, label: "Contact Name" },
        phoneField,
        emailField,
        { name: "trade", label: "Trade / Specialty", required: true, wide: true },
        { name: "message", label: "Service area & notes", type: "textarea" },
      ]}
    />
  );
}

/* =========================================
   CAREER APPLICATION FORM
========================================= */

export function CareerApplicationForm({ ctaLabel }: FormProps) {
  return (
    <CompactForm
      formType="Career Application"
      title="Apply to Join Our Team"
      description="Tell us who you are and which role interests you. We'll reach out if there's a fit."
      ctaLabel={ctaLabel}
      fields={[
        nameField,
        phoneField,
        emailField,
        {
          name: "role",
          label: "Role",
          type: "select",
          required: true,
          options: ["Project Engineer", "Site Supervisor", "Estimator", "Construction Coordinator", "Other"],
        },
        { name: "experience", label: "Experience (brief)", type: "textarea" },
      ]}
    />
  );
}

/* =========================================
   BUILD WITH US / PARTNERSHIP FORM
========================================= */

export function BuildWithUsForm({ ctaLabel }: FormProps) {
  return (
    <CompactForm
      formType="Partnership Request"
      title="Start a Partnership"
      description="A few quick details are all we need to start the conversation."
      ctaLabel={ctaLabel}
      fields={[
        nameField,
        { name: "companyName", label: "Company", autoComplete: "organization" },
        phoneField,
        emailField,
        {
          name: "partnershipType",
          label: "I am a…",
          type: "select",
          required: true,
          wide: true,
          options: ["Project Owner / Client", "Vendor / Supplier", "Design or Engineering Professional", "Investor / Developer", "Other"],
        },
        { name: "message", label: "How would you like to work together?", type: "textarea" },
      ]}
    />
  );
}
