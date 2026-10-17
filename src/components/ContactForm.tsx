import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { COMPANY } from "../data/company";

type EnquiryType =
  | "Product enquiry"
  | "Bulk / distributor enquiry"
  | "Packaging enquiry"
  | "General enquiry";

interface FormState {
  name: string;
  phone: string;
  enquiryType: EnquiryType | "";
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const ENQUIRY_TYPES: EnquiryType[] = [
  "Product enquiry",
  "Bulk / distributor enquiry",
  "Packaging enquiry",
  "General enquiry",
];

const initialForm: FormState = {
  name: "",
  phone: "",
  enquiryType: "",
  message: "",
};

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  const digits = form.phone.replace(/\D/g, "");
  if (!digits) {
    errors.phone = "Please enter your phone number.";
  } else if (digits.length < 10 || digits.length > 13) {
    errors.phone = "Please enter a valid phone number (10–13 digits).";
  }
  if (!form.enquiryType) errors.enquiryType = "Please select an enquiry type.";
  if (form.message.trim().length < 10) {
    errors.message = "Please add a short message (at least 10 characters).";
  }
  return errors;
}

export default function ContactForm() {
  const [params] = useSearchParams();
  const productParam = params.get("product") ?? "";

  const initialMessage = useMemo(
    () =>
      productParam
        ? `Hello Netron Lighting Industries, I would like to enquire about the product: ${productParam}.`
        : "",
    [productParam],
  );

  const [form, setForm] = useState<FormState>(() => ({
    ...initialForm,
    message: initialMessage,
  }));
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "opened">("idle");
  const [waHref, setWaHref] = useState<string>("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      document.getElementById(`field-${firstError}`)?.focus();
      return;
    }

    const lines = [
      "Hello Netron Lighting Industries, I would like to submit an enquiry.",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Enquiry type: ${form.enquiryType}`,
      `Message: ${form.message.trim()}`,
    ];
    const href = `${COMPANY.whatsappBase}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
    setWaHref(href);
    setStatus("opened");
    window.open(href, "_blank", "noopener,noreferrer");
  }

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-midnight placeholder:text-muted/60 transition focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="soft-card p-6 sm:p-8"
      aria-describedby="contact-form-note"
    >
      <h2 className="text-xl font-semibold text-midnight">Send an enquiry</h2>
      <p
        id="contact-form-note"
        className="mt-2 rounded-lg bg-mist px-3 py-2 text-xs leading-relaxed text-muted"
      >
        This website has no enquiry database. Submitting this form prepares your
        message and opens it in WhatsApp so it reaches us directly — nothing is
        stored on this site.
      </p>

      <div className="mt-6 grid gap-5">
        <div>
          <label
            htmlFor="field-name"
            className="mb-1.5 block text-sm font-medium text-midnight"
          >
            Name
          </label>
          <input
            id="field-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "error-name" : undefined}
            className={`${inputBase} ${
              errors.name ? "border-red-400" : "border-midnight/15"
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p id="error-name" className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
              <span aria-hidden="true">⚠</span> {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="field-phone"
            className="mb-1.5 block text-sm font-medium text-midnight"
          >
            Phone
          </label>
          <input
            id="field-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "error-phone" : undefined}
            className={`${inputBase} ${
              errors.phone ? "border-red-400" : "border-midnight/15"
            }`}
            placeholder="e.g. 96213 46653"
          />
          {errors.phone && (
            <p id="error-phone" className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
              <span aria-hidden="true">⚠</span> {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="field-enquiryType"
            className="mb-1.5 block text-sm font-medium text-midnight"
          >
            Enquiry type
          </label>
          <select
            id="field-enquiryType"
            name="enquiryType"
            value={form.enquiryType}
            onChange={(e) => update("enquiryType", e.target.value as EnquiryType)}
            aria-invalid={Boolean(errors.enquiryType)}
            aria-describedby={errors.enquiryType ? "error-enquiryType" : undefined}
            className={`${inputBase} ${
              errors.enquiryType ? "border-red-400" : "border-midnight/15"
            }`}
          >
            <option value="" disabled>
              Select an option
            </option>
            {ENQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.enquiryType && (
            <p id="error-enquiryType" className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
              <span aria-hidden="true">⚠</span> {errors.enquiryType}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="field-message"
            className="mb-1.5 block text-sm font-medium text-midnight"
          >
            Message
          </label>
          <textarea
            id="field-message"
            name="message"
            rows={5}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "error-message" : undefined}
            className={`${inputBase} resize-y ${
              errors.message ? "border-red-400" : "border-midnight/15"
            }`}
            placeholder="Tell us what you are looking for — product type, quantity, location."
          />
          {errors.message && (
            <p id="error-message" className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
              <span aria-hidden="true">⚠</span> {errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-ice hover:text-midnight"
      >
        Send enquiry via WhatsApp
      </button>

      <div aria-live="polite" className="mt-4">
        {status === "opened" && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            <p className="font-semibold">Your enquiry is ready in WhatsApp.</p>
            <p className="mt-1">
              If WhatsApp did not open automatically,{" "}
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2"
              >
                tap here to send it
              </a>{" "}
              or call{" "}
              <a
                href={COMPANY.phoneDial}
                className="font-semibold underline underline-offset-2"
              >
                {COMPANY.phoneDisplay}
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
