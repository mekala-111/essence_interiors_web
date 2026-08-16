import { saveToBackend } from "@/lib/backend";
import { contactEmail, sendStudioMail } from "@/lib/mail";

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

type LeadPayload = {
  formName: string;
  name: string;
  email: string;
  phone: string;
  fields: Record<string, string>;
};

function validate(body: unknown): { ok: true; data: LeadPayload } | { ok: false; error: string } {
  if (typeof body !== "object" || body === null) {
    return { ok: false, error: "Invalid request body." };
  }
  const b = body as Record<string, unknown>;

  if (!isNonEmptyString(b.formName)) return { ok: false, error: "Missing form name." };
  if (!isNonEmptyString(b.name)) return { ok: false, error: "Full name is required." };
  if (!isNonEmptyString(b.email) || !isValidEmail(b.email.trim())) {
    return { ok: false, error: "A valid email address is required." };
  }
  if (!isNonEmptyString(b.phone)) return { ok: false, error: "Phone number is required." };

  const fields: Record<string, string> = {};
  if (b.fields && typeof b.fields === "object") {
    for (const [k, v] of Object.entries(b.fields as Record<string, unknown>)) {
      if (typeof v === "string") fields[k] = v.trim();
    }
  }

  return {
    ok: true,
    data: {
      formName: b.formName.trim(),
      name: b.name.trim(),
      email: b.email.trim(),
      phone: b.phone.trim(),
      fields,
    },
  };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const result = validate(body);
  if (!result.ok) {
    return Response.json({ error: result.error }, { status: 400 });
  }

  const email = contactEmail(result.data);
  try {
    const sent = await sendStudioMail({ ...email, replyTo: result.data.email });
    if (!sent) throw new Error("SMTP is not configured.");
  } catch (err) {
    console.error("[lead] email failed:", err);
    return Response.json(
      { error: "Failed to send your message. Please try again shortly." },
      { status: 502 }
    );
  }

  try {
    await saveToBackend("/api/user/lead", result.data);
  } catch (err) {
    console.error("[lead] email sent, save skipped:", err);
  }

  return Response.json({ ok: true });
}
