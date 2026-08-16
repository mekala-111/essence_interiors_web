import nodemailer from "nodemailer";

export const STUDIO_EMAIL = process.env.STUDIO_EMAIL || "essenceinteriors2026@gmail.com";

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !port || !user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port: Number(port),
    secure: process.env.SMTP_SECURE === "true" || Number(port) === 465,
    auth: { user, pass },
  });
}

export async function sendStudioMail(opts: {
  subject: string;
  text: string;
  html: string;
  replyTo: string;
}) {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn("[mail] SMTP is not configured; skipped:", opts.subject);
    return false;
  }

  const smtpUser = process.env.SMTP_USER!;
  const from =
    process.env.MAIL_FROM || "Essence Interiors <info@essenceinteriors.co.in>";

  await transporter.sendMail({
    from,
    to: STUDIO_EMAIL,
    replyTo: opts.replyTo,
    envelope: { from: smtpUser, to: STUDIO_EMAIL },
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
  });
  return true;
}

function fieldRows(rows: [string, string][]) {
  return rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #ede4d0;color:#8a8272;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;width:140px;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #ede4d0;color:#20231F;font-size:15px;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");
}

export function contactEmail(data: {
  formName: string;
  name: string;
  email: string;
  phone: string;
  fields: Record<string, string>;
}) {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone],
    ...Object.entries(data.fields)
      .filter(([, v]) => v)
      .map(([k, v]) => [k, v] as [string, string]),
  ];

  const text = [`Get In Touch — ${data.formName}`, "", ...rows.map(([k, v]) => `${k}: ${v}`)].join("\n");

  const html = `
  <div style="background:#f4efe6;padding:28px 12px;font-family:Georgia,'Times New Roman',serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #ede4d0;">
      <tr>
        <td style="background:#082B1D;padding:28px 32px;">
          <p style="margin:0 0 6px;color:#d2aa68;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;">Essence Interiors</p>
          <h1 style="margin:0;color:#faf8f3;font-size:26px;font-weight:500;">Get In Touch</h1>
          <p style="margin:10px 0 0;color:#cfc6b4;font-family:Arial,sans-serif;font-size:13px;">A new message from the website contact form.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 0 0;background:#b8863b;height:4px;font-size:0;line-height:0;">&nbsp;</td>
      </tr>
      <tr>
        <td style="padding:8px 24px 24px;">
          <table width="100%" cellpadding="0" cellspacing="0">${fieldRows(rows)}</table>
          <p style="margin:22px 0 0;color:#8a8272;font-family:Arial,sans-serif;font-size:12px;">Reply to this email to write back to ${escapeHtml(data.name)}.</p>
        </td>
      </tr>
    </table>
  </div>`;

  return { subject: `Get In Touch — ${data.name}`, text, html };
}

export function consultationEmail(data: {
  name: string;
  phone: string;
  email: string;
  city: string;
  propertyType: string;
  message: string;
  date: string;
  time: string;
}) {
  const when = [data.date, data.time].filter(Boolean).join(" · ") || "Not specified";
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email],
    ["City", data.city],
    ["Project type", data.propertyType || "—"],
    ["Message", data.message || "—"],
  ];

  const text = [
    "Book A Consultation",
    "",
    `Preferred slot: ${when}`,
    ...rows.map(([k, v]) => `${k}: ${v}`),
  ].join("\n");

  const html = `
  <div style="background:#082B1D;padding:28px 12px;font-family:Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#faf8f3;border:1px solid #d2aa68;">
      <tr>
        <td style="background:#b8863b;padding:22px 32px;">
          <p style="margin:0 0 4px;color:#082B1D;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;font-weight:700;">New booking</p>
          <h1 style="margin:0;color:#082B1D;font-size:24px;font-weight:700;font-family:Georgia,serif;">Book A Consultation</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:24px 32px 8px;">
          <div style="background:#082B1D;color:#faf8f3;padding:16px 18px;">
            <p style="margin:0;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#d2aa68;">Preferred slot</p>
            <p style="margin:6px 0 0;font-size:20px;font-family:Georgia,serif;">${escapeHtml(when)}</p>
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 24px 24px;">
          <table width="100%" cellpadding="0" cellspacing="0">${fieldRows(rows)}</table>
          <p style="margin:22px 0 0;color:#5a5f57;font-size:12px;">Reply to this email or call +91 9666199943 to confirm the appointment.</p>
        </td>
      </tr>
    </table>
  </div>`;

  return { subject: `Consultation booking — ${data.name}`, text, html };
}
