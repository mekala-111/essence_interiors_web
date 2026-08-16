import { saveToBackend } from "@/lib/backend";
import { consultationEmail, sendStudioMail } from "@/lib/mail";

type ConsultationPayload = {
  name: string;
  phone: string;
  email: string;
  city: string;
  propertyType: string;
  message: string;
  date: string;
  time: string;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function validate(body: unknown): { ok: true; data: ConsultationPayload } | { ok: false; error: string } {
  if (typeof body !== "object" || body === null) {
    return { ok: false, error: "Invalid request body." };
  }
  const b = body as Record<string, unknown>;

  if (!isNonEmptyString(b.name)) return { ok: false, error: "Full name is required." };
  if (!isNonEmptyString(b.phone)) return { ok: false, error: "Phone number is required." };
  if (!isNonEmptyString(b.email) || !isValidEmail(b.email.trim())) {
    return { ok: false, error: "A valid email address is required." };
  }
  if (!isNonEmptyString(b.city)) return { ok: false, error: "City is required." };

  return {
    ok: true,
    data: {
      name: b.name.trim(),
      phone: b.phone.trim(),
      email: b.email.trim(),
      city: b.city.trim(),
      propertyType: typeof b.propertyType === "string" ? b.propertyType.trim() : "",
      message: typeof b.message === "string" ? b.message.trim() : "",
      date: typeof b.date === "string" ? b.date.trim() : "",
      time: typeof b.time === "string" ? b.time.trim() : "",
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

  const email = consultationEmail(result.data);
  try {
    const sent = await sendStudioMail({ ...email, replyTo: result.data.email });
    if (!sent) throw new Error("SMTP is not configured.");
  } catch (err) {
    console.error("[consultation] email failed:", err);
    return Response.json(
      { error: "Failed to send your request. Please try again shortly." },
      { status: 502 }
    );
  }

  try {
    await saveToBackend("/api/user/consultation", result.data);
  } catch (err) {
    console.error("[consultation] email sent, save skipped:", err);
  }

  return Response.json({ ok: true });
}
