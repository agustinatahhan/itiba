"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const t = useTranslations("contact.form");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = t("errors.nameRequired");
    if (!formData.email.trim()) {
      newErrors.email = t("errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("errors.emailInvalid");
    }
    if (!formData.message.trim()) newErrors.message = t("errors.messageRequired");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate async submission
    await new Promise((res) => setTimeout(res, 800));
    console.log("Form submitted:", formData);
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-gold/40 py-3 text-green-deep placeholder-green-deep/40 focus:outline-none focus:border-gold transition-colors";
  const labelClass = "section-tag block mb-2";

  if (submitted) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center text-center py-16 px-8 border border-gold/30"
        >
          <HiCheckCircle className="text-gold mb-4" size={48} />
          <h3 className="heading-md mb-3">{t("success")}</h3>
          <p className="body-text text-sm">{t("success")}</p>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-8"
      aria-label="Contact form"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className={labelClass}
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t("name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder={t("namePlaceholder")}
          className={`${inputClass} ${errors.name ? "border-red-400" : ""}`}
          style={{ fontFamily: "var(--font-body)" }}
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p
            id="name-error"
            className="mt-1 text-xs text-red-500"
            role="alert"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className={labelClass}
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t("email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t("emailPlaceholder")}
          className={`${inputClass} ${errors.email ? "border-red-400" : ""}`}
          style={{ fontFamily: "var(--font-body)" }}
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p
            id="email-error"
            className="mt-1 text-xs text-red-500"
            role="alert"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {errors.email}
          </p>
        )}
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className={labelClass}
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t("company")}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder={t("companyPlaceholder")}
          className={inputClass}
          style={{ fontFamily: "var(--font-body)" }}
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className={labelClass}
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder={t("messagePlaceholder")}
          className={`${inputClass} resize-none ${errors.message ? "border-red-400" : ""}`}
          style={{ fontFamily: "var(--font-body)" }}
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p
            id="message-error"
            className="mt-1 text-xs text-red-500"
            role="alert"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className={`btn-primary w-full justify-center ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
        aria-label={t("submit")}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            {t("submit")}
          </span>
        ) : (
          t("submit")
        )}
      </button>
    </form>
  );
}
