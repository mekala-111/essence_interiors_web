"use client";

import { useState, type FormEvent } from "react";
import styles from "./HomeInquiryForm.module.css";

type Status = "idle" | "loading" | "success" | "error";

export default function HomeInquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    const payload = {
      formName: "Homepage Consultation",
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      email: String(data.get("email") || "").trim(),
      fields: {
        "Project Type": String(data.get("projectType") || ""),
        "Property Location": String(data.get("location") || ""),
        "Approximate Budget": String(data.get("budget") || ""),
        Message: String(data.get("message") || ""),
      },
    };

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(result?.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const loading = status === "loading";

  return (
    <>
      {status === "success" ? (
        <div className={styles.successBox}>
          Thank you — we&apos;ve received your request and will reach out within one business day.
        </div>
      ) : (
        <form onSubmit={onSubmit} className={styles.form}>
          <input required name="name" placeholder="Full Name" aria-label="Full Name" className={styles.input} />
          <input
            required
            name="phone"
            placeholder="Phone Number"
            aria-label="Phone Number"
            className={styles.input}
          />
          <input
            required
            name="email"
            type="email"
            placeholder="Email"
            aria-label="Email"
            className={`${styles.input} ${styles.full}`}
          />
          <select name="projectType" aria-label="Project Type" defaultValue="" className={styles.input}>
            <option value="">Project Type</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Turnkey</option>
            <option>Office</option>
            <option>Restaurant</option>
          </select>
          <input name="location" placeholder="Property Location" aria-label="Property Location" className={styles.input} />
          <select
            name="budget"
            aria-label="Approximate Budget"
            defaultValue=""
            className={`${styles.input} ${styles.full}`}
          >
            <option value="">Approximate Budget</option>
            <option>Under ₹10L</option>
            <option>₹10L – ₹25L</option>
            <option>₹25L – ₹50L</option>
            <option>Above ₹50L</option>
          </select>
          <textarea
            name="message"
            placeholder="Message"
            aria-label="Message"
            rows={3}
            className={`${styles.input} ${styles.full} ${styles.textarea}`}
          />

          {status === "error" && <div className={styles.errorBox}>{errorMessage}</div>}

          <button type="submit" disabled={loading} className={styles.submit}>
            {loading ? "SUBMITTING…" : "BOOK MY FREE CONSULTATION"}
          </button>
        </form>
      )}

      <div className={styles.secondaryRow}>
        <a href="https://wa.me/919666199943" className={styles.secondaryCta}>
          WHATSAPP
        </a>
        <a href="tel:+919666199943" className={styles.secondaryCta}>
          CALL
        </a>
      </div>
    </>
  );
}
