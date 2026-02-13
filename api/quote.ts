import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

type QuoteType = "residential" | "commercial";

type Body = {
  quoteType?: QuoteType | null;

  fullName?: string;
  mobile?: string;
  email?: string;
  service?: string;
  message?: string;
  postcode?: string;

  // residential
  propertyType?: string;
  bedrooms?: string;

  // commercial
  businessName?: string;
  premisesType?: string;
  numberOfSites?: string;

  website?: string; // honeypot
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  try {
    const b = (req.body || {}) as Body;

    // ✅ bot trap
    if (b.website?.trim()) return res.status(200).json({ ok: true });

    const quoteType =
      b.quoteType === "commercial"
        ? "commercial"
        : b.quoteType === "residential"
          ? "residential"
          : null;

    // ✅ common required fields
    if (
      !quoteType ||
      !b.fullName?.trim() ||
      !b.mobile?.trim() ||
      !b.service?.trim() ||
      !b.postcode?.trim()
    ) {
      return res
        .status(400)
        .json({ ok: false, message: "Missing required fields" });
    }

    // ✅ type-specific required fields
    if (quoteType === "residential") {
      if (!b.propertyType?.trim() || !b.bedrooms?.trim()) {
        return res
          .status(400)
          .json({ ok: false, message: "Missing residential fields" });
      }
    }

    if (quoteType === "commercial") {
      if (
        !b.businessName?.trim() ||
        !b.premisesType?.trim() ||
        !b.numberOfSites?.trim()
      ) {
        return res
          .status(400)
          .json({ ok: false, message: "Missing commercial fields" });
      }
    }

    const user = process.env.ZOHO_SMTP_USER;
    const pass = process.env.ZOHO_SMTP_PASS;
    const to = process.env.MAIL_TO || user;
    const from = process.env.MAIL_FROM || user;

    if (!user || !pass || !to || !from) {
      return res
        .status(500)
        .json({ ok: false, message: "Server email not configured" });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    });

    const subject =
      quoteType === "residential"
        ? "Residential Quote Request — Apecon"
        : "Commercial Quote Request — Apecon";

    const safe = (v: unknown) => String(v ?? "").replace(/[<>]/g, "");

    const safeType = safe(quoteType);
    const safeService = safe(b.service);
    const safeName = safe(b.fullName);
    const safeMobile = safe(b.mobile);
    const safeEmail = b.email?.trim() ? safe(b.email) : "";
    const safePostcode = safe(b.postcode);

    const safePropertyType = safe(b.propertyType);
    const safeBedrooms = safe(b.bedrooms);

    const safeBusinessName = safe(b.businessName);
    const safePremisesType = safe(b.premisesType);
    const safeNumberOfSites = safe(b.numberOfSites);

    const safeMessage = b.message?.trim() ? safe(b.message) : "";

    // ✅ text fallback (plain)
    const lines: string[] = [];
    lines.push("New Quote Request");
    lines.push("");
    lines.push(`Quote Type: ${quoteType}`);
    lines.push(`Service: ${b.service}`);
    lines.push("");
    lines.push(`Full Name: ${b.fullName}`);
    lines.push(`Mobile: ${b.mobile}`);
    lines.push(`Email: ${b.email?.trim() ? b.email : "(not provided)"}`);
    lines.push(`Postcode: ${b.postcode}`);
    lines.push("");

    if (quoteType === "residential") {
      lines.push("Residential Details");
      lines.push(`Property Type: ${b.propertyType}`);
      lines.push(`Bedrooms: ${b.bedrooms}`);
      lines.push("");
    }

    if (quoteType === "commercial") {
      lines.push("Commercial Details");
      lines.push(`Business Name: ${b.businessName}`);
      lines.push(`Premises Type: ${b.premisesType}`);
      lines.push(`Number of Sites: ${b.numberOfSites}`);
      lines.push("");
    }

    if (b.message?.trim()) {
      lines.push("Message");
      lines.push(b.message);
      lines.push("");
    }

    const now = new Date().toLocaleString("en-GB", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    const badgeBg = quoteType === "residential" ? "#0f172a" : "#7c3aed";

    const detailRows =
      quoteType === "residential"
        ? `
          <tr>
            <td style="padding:12px 0;border-top:1px solid #e2e8f0;">
              <div style="font-size:12px;color:#64748b;margin-bottom:6px;">PROPERTY TYPE</div>
              <div style="font-size:15px;color:#0f172a;font-weight:600;">${safePropertyType}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-top:1px solid #e2e8f0;">
              <div style="font-size:12px;color:#64748b;margin-bottom:6px;">BEDROOMS</div>
              <div style="font-size:15px;color:#0f172a;font-weight:600;">${safeBedrooms}</div>
            </td>
          </tr>
        `
        : `
          <tr>
            <td style="padding:12px 0;border-top:1px solid #e2e8f0;">
              <div style="font-size:12px;color:#64748b;margin-bottom:6px;">BUSINESS NAME</div>
              <div style="font-size:15px;color:#0f172a;font-weight:600;">${safeBusinessName}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-top:1px solid #e2e8f0;">
              <div style="font-size:12px;color:#64748b;margin-bottom:6px;">PREMISES TYPE</div>
              <div style="font-size:15px;color:#0f172a;font-weight:600;">${safePremisesType}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-top:1px solid #e2e8f0;">
              <div style="font-size:12px;color:#64748b;margin-bottom:6px;">NUMBER OF SITES</div>
              <div style="font-size:15px;color:#0f172a;font-weight:600;">${safeNumberOfSites}</div>
            </td>
          </tr>
        `;

    const messageBlock = safeMessage
      ? `
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:14px;background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;">
          <tr>
            <td style="padding:14px 16px;">
              <div style="font-size:12px;color:#64748b;margin-bottom:8px;">MESSAGE</div>
              <div style="white-space:pre-wrap;font-size:14px;color:#0f172a;line-height:1.7;">${safeMessage}</div>
            </td>
          </tr>
        </table>
      `
      : "";

    const replyBtn = safeEmail
      ? `<a href="mailto:${safeEmail}"
            style="display:inline-block;background:#0f172a;color:#ffffff;text-decoration:none;padding:10px 14px;border-radius:10px;font-weight:600;font-size:14px;">
            Reply to ${safeEmail}
         </a>`
      : "";

    const html = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>${subject}</title>
  </head>
  <body style="margin:0;padding:0;background:#f6f7fb;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f6f7fb;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:720px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(15,23,42,0.08);">

            <!-- Header -->
            <tr>
              <td style="padding:18px 22px;background:linear-gradient(135deg,#0ea5e9,#2563eb);color:#fff;">
                <div style="font-size:14px;opacity:0.9;letter-spacing:0.3px;">Apecon Website</div>
                <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:6px;">
                  <div style="font-size:20px;font-weight:700;line-height:1.2;">Quote Request</div>
                  <span style="display:inline-block;padding:6px 10px;border-radius:999px;background:${badgeBg};font-size:12px;font-weight:700;letter-spacing:0.2px;">
                    ${safeType.toUpperCase()}
                  </span>
                </div>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:22px;">
                <p style="margin:0 0 14px 0;color:#0f172a;font-size:15px;line-height:1.6;">
                  A new quote request was submitted from your website.
                </p>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;">
                  <tr>
                    <td style="padding:14px 16px;">
                      <div style="display:flex;gap:12px;flex-wrap:wrap;">
                        <div style="min-width:220px;flex:1;">
                          <div style="font-size:12px;color:#64748b;margin-bottom:6px;">SERVICE</div>
                          <div style="font-size:16px;color:#0f172a;font-weight:700;">${safeService}</div>
                        </div>
                        <div style="min-width:220px;flex:1;">
                          <div style="font-size:12px;color:#64748b;margin-bottom:6px;">POSTCODE</div>
                          <div style="font-size:16px;color:#0f172a;font-weight:700;">${safePostcode}</div>
                        </div>
                      </div>

                      <div style="height:1px;background:#e2e8f0;margin:14px 0;"></div>

                      <div style="display:flex;gap:12px;flex-wrap:wrap;">
                        <div style="min-width:220px;flex:1;">
                          <div style="font-size:12px;color:#64748b;margin-bottom:6px;">FULL NAME</div>
                          <div style="font-size:15px;color:#0f172a;font-weight:600;">${safeName}</div>
                        </div>
                        <div style="min-width:220px;flex:1;">
                          <div style="font-size:12px;color:#64748b;margin-bottom:6px;">MOBILE</div>
                          <div style="font-size:15px;color:#0f172a;font-weight:600;">${safeMobile}</div>
                        </div>
                        <div style="min-width:220px;flex:1;">
                          <div style="font-size:12px;color:#64748b;margin-bottom:6px;">EMAIL</div>
                          <div style="font-size:15px;color:#0f172a;font-weight:600;">${safeEmail || "(not provided)"}</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:14px;background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;">
                  <tr>
                    <td style="padding:14px 16px;">
                      <div style="font-size:12px;color:#64748b;margin-bottom:10px;">${quoteType === "residential" ? "RESIDENTIAL DETAILS" : "COMMERCIAL DETAILS"}</div>
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                        ${detailRows}
                      </table>
                    </td>
                  </tr>
                </table>

                ${messageBlock}

                <div style="margin-top:16px;">
                  ${replyBtn}
                  <a href="tel:${safeMobile}"
                    style="display:inline-block;background:#ffffff;color:#0f172a;text-decoration:none;padding:10px 14px;border-radius:10px;font-weight:600;font-size:14px;border:1px solid #e2e8f0;margin-left:${replyBtn ? "10px" : "0"};">
                    Call ${safeMobile}
                  </a>
                  <span style="display:inline-block;margin-left:10px;color:#64748b;font-size:13px;vertical-align:middle;">
                    Submitted: ${now}
                  </span>
                </div>

                <hr style="border:none;border-top:1px solid #e2e8f0;margin:18px 0;" />

                <p style="margin:0;color:#64748b;font-size:12px;line-height:1.6;">
                  This email was generated automatically from your website quote form.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:16px 22px;background:#0b1220;color:#94a3b8;">
                <div style="font-size:12px;line-height:1.6;">
                  Apecon • Website Notifications
                </div>
              </td>
            </tr>
          </table>

          <div style="max-width:720px;color:#94a3b8;font-size:11px;line-height:1.6;margin-top:14px;text-align:center;">
            If the buttons don’t work, call: ${safeMobile}${safeEmail ? ` or reply to: ${safeEmail}` : ""}.
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>
    `.trim();

    await transporter.sendMail({
      from: `Apecon Website <${from}>`,
      to,
      replyTo: safeEmail || undefined,
      subject,
      text: lines.join("\n"), // fallback
      html, // modern
    });

    return res.status(200).json({ ok: true });
  } catch (e: any) {
    return res
      .status(500)
      .json({ ok: false, message: e?.message || "Failed to submit" });
  }
}
