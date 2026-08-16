"use client";

import { useState, type FormEvent } from "react";
import styles from "./ConsultationForm.module.css";

type Status = "idle" | "loading" | "success" | "error";

export default function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      email: String(data.get("email") || "").trim(),
      city: String(data.get("city") || "").trim(),
      propertyType: String(data.get("propertyType") || ""),
      message: String(data.get("message") || "").trim(),
      date: String(data.get("date") || ""),
      time: String(data.get("time") || ""),
    };

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/consultation", {
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
    return (
      <div className={styles.successBox}>
        Thank you — your consultation request has been received. Our team will call you within one
        business day.
      </div>
    );
  }

  const loading = status === "loading";

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <input required name="name" placeholder="Full Name *" aria-label="Full Name" className={styles.input} />
        <input
          required
          name="phone"
          placeholder="Phone Number *"
          aria-label="Phone Number"
          className={styles.input}
        />
        <input
          required
          name="email"
          type="email"
          placeholder="Email Address *"
          aria-label="Email Address"
          className={styles.input}
        />
        <input required name="city" placeholder="City *" aria-label="City" className={styles.input} />
        <select
          name="propertyType"
          aria-label="What type of project are you planning?"
          defaultValue=""
          className={`${styles.input} ${styles.full}`}
        >
          <option value="">What type of project are you planning?</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>Office</option>
          <option>Commercial</option>
        </select>
        <textarea
          name="message"
          placeholder="Tell us about your project"
          aria-label="Tell us about your project"
          rows={3}
          className={`${styles.input} ${styles.full} ${styles.textarea}`}
        />
        <input name="date" type="date" aria-label="Preferred Date" className={styles.input} />
        <select
          name="time"
          aria-label="Preferred Time"
          defaultValue=""
          className={styles.input}
        >
          <option value="">Preferred Time</option>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>

        {status === "error" && <div className={styles.errorBox}>{errorMessage}</div>}

        <button type="submit" disabled={loading} className={styles.submit}>
          {loading ? "SUBMITTING…" : "BOOK MY CONSULTATION"} <span>→</span>
        </button>
      </form>
      <p className={styles.privacy}>
        <span className="ei-icon">lock</span> Your information is safe with us. We respect your
        privacy.
      </p>
    </>
  );
}
