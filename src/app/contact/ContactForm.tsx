"use client";

import { useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    const payload = {
      formName: "Get In Touch",
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim() || "Not provided",
      email: String(data.get("email") || "").trim(),
      fields: {
        City: String(data.get("city") || ""),
        Service: String(data.get("service") || ""),
        "Project Details": String(data.get("message") || ""),
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

  if (status === "success") {
    return <div className={styles.successBox}>Thank you — we&apos;ll get back to you shortly.</div>;
  }

  const loading = status === "loading";

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.row2}>
        <input required name="name" placeholder="Full Name" aria-label="Full Name" className={styles.input} />
        <input name="phone" placeholder="Phone Number" aria-label="Phone Number" className={styles.input} />
      </div>
      <div className={styles.row2}>
        <input
          required
          name="email"
          type="email"
          placeholder="Email Address"
          aria-label="Email Address"
          className={styles.input}
        />
        <input name="city" placeholder="City" aria-label="City" className={styles.input} />
      </div>
      <select
        name="service"
        aria-label="Service You're Interested In"
        defaultValue=""
        className={styles.input}
      >
        <option value="">Service You&apos;re Interested In</option>
        <option>Residential Interiors</option>
        <option>Luxury Villas</option>
        <option>Modular Kitchens</option>
        <option>Commercial Interiors</option>
        <option>3D Visualization</option>
      </select>
      <textarea
        name="message"
        placeholder="Project Details"
        aria-label="Project Details"
        rows={4}
        className={`${styles.input} ${styles.textarea}`}
      />

      {status === "error" && <div className={styles.errorBox}>{errorMessage}</div>}

      <button type="submit" disabled={loading} className={styles.submit}>
        {loading ? "SENDING…" : "SEND MESSAGE"} <span>→</span>
      </button>
    </form>
  );
}
