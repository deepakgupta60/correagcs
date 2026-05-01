type FormProps = {
  ctaLabel: string;
};

const inputClassName =
  "w-full rounded-xl border border-[#d1d5db] bg-white px-4 py-3 text-sm text-[#1f2a30] outline-none transition focus:border-[#C2A57A] focus:ring-2 focus:ring-[#C2A57A]/20";

function SectionTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-3">
      <h2 className="text-3xl text-[#1F2A30] md:text-5xl">{title}</h2>
      <p className="max-w-3xl leading-8 text-[#6B7280]">{description}</p>
    </div>
  );
}

export function ContactInquiryForm({ ctaLabel }: FormProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <SectionTitle
          title="Request a Project Consultation"
          description="Tell us your project type, location, and timeline. Our team will respond quickly with a tailored plan and next steps."
        />
        <form className="reveal-up mt-8 grid gap-4 rounded-3xl border border-[#e5e7eb] bg-[#fafafa] p-6 md:grid-cols-2">
          <input className={inputClassName} name="fullName" placeholder="Full Name" required />
          <input className={inputClassName} name="phone" placeholder="Phone Number" required />
          <input className={inputClassName} type="email" name="email" placeholder="Email Address" required />
          <input className={inputClassName} name="city" placeholder="Project City" required />
          <input className={inputClassName} name="projectType" placeholder="Project Type (Residential/Commercial)" />
          <input className={inputClassName} name="budget" placeholder="Estimated Budget" />
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
              className="inline-flex items-center justify-center rounded-full bg-[#C2A57A] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#ad9169]"
            >
              {ctaLabel}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export function SubcontractorRegistrationForm({ ctaLabel }: FormProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <SectionTitle
          title="Subcontractor Registration Form"
          description="Register your trade specialization and company credentials to be considered for upcoming Correa General Contractors projects."
        />
        <form className="reveal-up mt-8 grid gap-4 rounded-3xl border border-[#e5e7eb] bg-[#fafafa] p-6 md:grid-cols-2">
          <input className={inputClassName} name="companyName" placeholder="Company Name" required />
          <input className={inputClassName} name="contactPerson" placeholder="Primary Contact Name" required />
          <input className={inputClassName} type="email" name="email" placeholder="Business Email" required />
          <input className={inputClassName} name="phone" placeholder="Phone Number" required />
          <input className={inputClassName} name="trade" placeholder="Primary Trade/Specialty" required />
          <input className={inputClassName} name="coverageArea" placeholder="Service Area (Cities)" required />
          <input className={inputClassName} name="licenseNumber" placeholder="License Number" />
          <input className={inputClassName} name="insurance" placeholder="Insurance Carrier / Policy Info" />
          <input className={inputClassName} name="crewSize" placeholder="Crew Size / Team Capacity" />
          <input className={inputClassName} name="yearsInBusiness" placeholder="Years in Business" />
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
              className="inline-flex items-center justify-center rounded-full bg-[#1F2A30] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#11181d]"
            >
              {ctaLabel}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export function CareerApplicationForm({ ctaLabel }: FormProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <SectionTitle
          title="Career Application Form"
          description="Apply for current and upcoming roles in project management, field operations, safety, and support teams."
        />
        <form className="reveal-up mt-8 grid gap-4 rounded-3xl border border-[#e5e7eb] bg-[#fafafa] p-6 md:grid-cols-2">
          <input className={inputClassName} name="fullName" placeholder="Full Name" required />
          <input className={inputClassName} name="phone" placeholder="Phone Number" required />
          <input className={inputClassName} type="email" name="email" placeholder="Email Address" required />
          <input className={inputClassName} name="location" placeholder="Current City" required />
          <input className={inputClassName} name="position" placeholder="Role You're Applying For" required />
          <input className={inputClassName} name="experienceYears" placeholder="Years of Experience" />
          <input className={inputClassName} name="availability" placeholder="Availability (Immediate/Notice Period)" />
          <input className={inputClassName} name="linkedin" placeholder="LinkedIn Profile (Optional)" />
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
              className="inline-flex items-center justify-center rounded-full bg-[#C2A57A] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#ad9169]"
            >
              {ctaLabel}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export function BuildWithUsForm({ ctaLabel }: FormProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <SectionTitle
          title="Build With Us - Partnership Form"
          description="Share your company profile or project requirement. Our team will connect with you for the right collaboration path."
        />
        <form className="reveal-up mt-8 grid gap-4 rounded-3xl border border-[#d9e2ee] bg-gradient-to-br from-[#f8fafc] to-[#eef3f8] p-6 md:grid-cols-2">
          <input className={inputClassName} name="fullName" placeholder="Full Name" required />
          <input className={inputClassName} name="companyName" placeholder="Company / Organization" required />
          <input className={inputClassName} type="email" name="email" placeholder="Email Address" required />
          <input className={inputClassName} name="phone" placeholder="Phone Number" required />
          <input className={inputClassName} name="city" placeholder="City / Service Area" required />
          <input className={inputClassName} name="partnershipType" placeholder="Partnership Type (Client / Vendor / Investor / Trade)" required />
          <input className={inputClassName} name="budgetRange" placeholder="Budget Range (Optional)" />
          <input className={inputClassName} name="timeline" placeholder="Expected Start Timeline" />
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
              className="inline-flex items-center justify-center rounded-full bg-[#1F2A30] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#11181d]"
            >
              {ctaLabel}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
