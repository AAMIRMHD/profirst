import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const initialState = {
  name: "",
  email: "",
  eventType: "",
  message: ""
};

function Booking() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateField = (name, value) => {
    const trimmed = value.trim();

    if (name === "name") {
      if (!trimmed) return "Full name is required.";
      if (trimmed.length < 3) return "Full name must be at least 3 characters.";
      return "";
    }

    if (name === "email") {
      if (!trimmed) return "Email address is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        return "Please enter a valid email address.";
      }
      return "";
    }

    if (name === "eventType") {
      if (!trimmed) return "Event type is required.";
      if (trimmed.length < 3) return "Event type must be at least 3 characters.";
      return "";
    }

    if (name === "message") {
      if (!trimmed) return "Event requirements are required.";
      if (trimmed.length < 15) {
        return "Please share at least 15 characters for requirements.";
      }
      return "";
    }

    return "";
  };

  const validateForm = (values) => {
    const nextErrors = {};
    Object.keys(values).forEach((key) => {
      const error = validateField(key, values[key]);
      if (error) nextErrors[key] = error;
    });
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      if (touched[name]) {
        const error = validateField(name, value);
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
      }
      return next;
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validateForm(formData);
    setTouched({
      name: true,
      email: true,
      eventType: true,
      message: true
    });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://formspree.io/f/xaqpwnqq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          eventType: formData.eventType.trim(),
          message: formData.message.trim()
        })
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      setFormData(initialState);
      setErrors({});
      setTouched({});
      window.setTimeout(() => setSubmitted(false), 2600);
    } catch (error) {
      setSubmitError("Could not submit right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="booking" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Booking"
          title="Start Planning Your Signature Event"
          description="Share your vision and we will craft a tailored experience that reflects your style and occasion."
        />

        <Reveal>
          <motion.div
            whileHover={{ y: -3 }}
            className="mx-auto max-w-3xl rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft backdrop-blur-xl md:p-10"
          >
            <form onSubmit={handleSubmit} className="grid gap-6">
              {[
                { name: "name", label: "Full Name", type: "text" },
                { name: "email", label: "Email Address", type: "email" },
                { name: "eventType", label: "Event Type", type: "text" }
              ].map((field) => (
                <label key={field.name} className="group relative block">
                  <input
                    required
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(touched[field.name] && errors[field.name])}
                    className={`peer w-full rounded-xl border bg-white/80 px-4 pb-3 pt-6 text-sm text-jet outline-none transition duration-300 placeholder:text-transparent focus:border-gold focus:shadow-goldGlow ${
                      touched[field.name] && errors[field.name]
                        ? "border-red-400"
                        : "border-black/15"
                    }`}
                    placeholder={field.label}
                  />
                  <span className="pointer-events-none absolute left-4 top-2.5 text-xs text-gold transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-ivory/45 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-gold">
                    {field.label}
                  </span>
                  {touched[field.name] && errors[field.name] ? (
                    <p className="mt-2 text-xs text-red-500">{errors[field.name]}</p>
                  ) : null}
                </label>
              ))}

              <label className="group relative block">
                <textarea
                  required
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(touched.message && errors.message)}
                  className={`peer w-full resize-none rounded-xl border bg-white/80 px-4 pb-3 pt-6 text-sm text-jet outline-none transition duration-300 placeholder:text-transparent focus:border-gold focus:shadow-goldGlow ${
                    touched.message && errors.message
                      ? "border-red-400"
                      : "border-black/15"
                  }`}
                  placeholder="Event Requirements"
                />
                <span className="pointer-events-none absolute left-4 top-2.5 text-xs text-gold transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-ivory/45 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-gold">
                  Event Requirements
                </span>
                {touched.message && errors.message ? (
                  <p className="mt-2 text-xs text-red-500">{errors.message}</p>
                ) : null}
              </label>

              <motion.button
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -2 }}
                type="submit"
                disabled={submitting}
                className="inline-flex justify-center rounded-full border border-gold/60 bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-wide text-jet transition hover:shadow-goldGlow disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Inquiry"}
              </motion.button>
            </form>

            <AnimatePresence>
              {submitError ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-5 rounded-xl border border-red-300/40 bg-red-100 px-4 py-3 text-sm text-red-700"
                >
                  {submitError}
                </motion.p>
              ) : null}

              {submitted ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-5 rounded-xl border border-green-300/40 bg-green-100 px-4 py-3 text-sm text-green-800"
                >
                  Thank you. Our team will contact you shortly.
                </motion.p>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

export default Booking;
