import { NextResponse } from "next/server";
import { Resend } from "resend";

/** Required fields for a valid quote request */
const REQUIRED = ["name", "phone", "email", "location"] as const;

type QuotePayload = {
  name: string;
  phone: string;
  email: string;
  vehicle?: string;
  service?: string;
  condition?: string;
  location: string;
  preferred_date?: string;
  location_type?: string;
  message?: string;
};

function validate(body: unknown): body is QuotePayload {
  if (!body || typeof body !== "object") return false;
  const o = body as Record<string, unknown>;
  return REQUIRED.every((key) => typeof o[key] === "string" && (o[key] as string).trim().length > 0);
}

function buildHtml(p: QuotePayload): string {
  const row = (label: string, value: string | undefined) =>
    value ? `<tr><td style="padding:6px 12px 6px 0;vertical-align:top;color:#94a3b8;">${label}</td><td style="padding:6px 0;color:#e2e8f0;">${escapeHtml(value)}</td></tr>` : "";
  return `
    <h2 style="margin:0 0 16px;font-size:18px;color:#e2e8f0;">New quote request</h2>
    <table style="border-collapse:collapse;">
      ${row("Name", p.name)}
      ${row("Phone", p.phone)}
      ${row("Email", p.email)}
      ${row("Vehicle", p.vehicle)}
      ${row("Service", p.service)}
      ${row("Condition", p.condition)}
      ${row("Location", p.location)}
      ${row("Preferred date", p.preferred_date)}
      ${row("Work location", p.location_type)}
      ${row("Notes", p.message)}
    </table>
    ${p.message ? `<p style="margin-top:12px;color:#94a3b8;">Notes: ${escapeHtml(p.message)}</p>` : ""}
  `;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email is not configured. Please try calling (647) 823-7338." },
      { status: 503 }
    );
  }

  const to = process.env.QUOTE_NOTIFY_EMAIL?.trim();
  if (!to) {
    console.error("QUOTE_NOTIFY_EMAIL is not set");
    return NextResponse.json(
      { error: "Quote delivery is not configured." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!validate(body)) {
    return NextResponse.json(
      { error: "Missing required fields: name, phone, email, location." },
      { status: 400 }
    );
  }

  const payload = body as QuotePayload;
  const from = process.env.QUOTE_FROM_EMAIL?.trim() || "PitStop Polish <onboarding@resend.dev>";
  const subject = `Quote request: ${payload.name} — ${payload.service || "Not specified"}`;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: [payload.email],
    subject,
    html: buildHtml(payload),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send your request. Please call (647) 823-7338." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, id: data?.id });
}
