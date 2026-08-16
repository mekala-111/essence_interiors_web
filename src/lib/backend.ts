export const API_URL = process.env.API_URL || "http://localhost:4000";

export async function getSettings() {
  try {
    const res = await fetch(`${API_URL}/api/user/settings`, { cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as { portfolio_pdf_url?: string } | null;
  } catch {
    return null;
  }
}

export async function saveToBackend(path: string, body: unknown) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = (await res.json().catch(() => ({}))) as { error?: string };
  if (!res.ok) {
    throw new Error(data.error || "Failed to save your request.");
  }
}
