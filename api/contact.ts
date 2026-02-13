import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  website?: string; // honeypot
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  try {
    const { name, email, phone, message, website } = (req.body || {}) as Body;

    // ✅ bot trap
    if (website?.trim()) return res.status(200).json({ ok: true });

    // ✅ required validation
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return res
        .status(400)
        .json({ ok: false, message: "Missing required fields" });
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

    const subject = "New Contact Enquiry — Apecon";

    const text =
      `New Contact Enquiry\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n\n` +
      `Message:\n${message}\n`;

    const safeName = String(name).replace(/[<>]/g, "");
    const safeEmail = String(email).replace(/[<>]/g, "");
    const safePhone = String(phone).replace(/[<>]/g, "");
    const safeMessage = String(message).replace(/[<>]/g, "");

    const now = new Date().toLocaleString("en-GB", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

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
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(15,23,42,0.08);">
            <!-- Header -->
            <tr>
              <td style="padding:18px 22px;background:linear-gradient(135deg,#0ea5e9,#2563eb);color:#fff;">
                <div style="font-size:14px;opacity:0.9;letter-spacing:0.3px;">Apecon Website</div>
                <div style="font-size:20px;font-weight:700;line-height:1.2;margin-top:4px;">Contact Enquiry</div>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:22px;">
                <p style="margin:0 0 14px 0;color:#0f172a;font-size:15px;line-height:1.6;">
                  A new contact enquiry was submitted from your website.
                </p>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;">
                  <tr>
                    <td style="padding:14px 16px;">
                      <div style="display:flex;gap:12px;flex-wrap:wrap;">
                        <div style="min-width:220px;flex:1;">
                          <div style="font-size:12px;color:#64748b;margin-bottom:6px;">NAME</div>
                          <div style="font-size:16px;color:#0f172a;font-weight:600;">${safeName}</div>
                        </div>
                        <div style="min-width:220px;flex:1;">
                          <div style="font-size:12px;color:#64748b;margin-bottom:6px;">EMAIL</div>
                          <div style="font-size:16px;color:#0f172a;font-weight:600;">${safeEmail}</div>
                        </div>
                        <div style="min-width:220px;flex:1;">
                          <div style="font-size:12px;color:#64748b;margin-bottom:6px;">PHONE</div>
                          <div style="font-size:16px;color:#0f172a;font-weight:600;">${safePhone}</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:14px;background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;">
                  <tr>
                    <td style="padding:14px 16px;">
                      <div style="font-size:12px;color:#64748b;margin-bottom:8px;">MESSAGE</div>
                      <div style="white-space:pre-wrap;font-size:14px;color:#0f172a;line-height:1.7;">${safeMessage}</div>
                    </td>
                  </tr>
                </table>

                <div style="margin-top:16px;">
                  <a href="mailto:${safeEmail}"
                    style="display:inline-block;background:#0f172a;color:#ffffff;text-decoration:none;padding:10px 14px;border-radius:10px;font-weight:600;font-size:14px;">
                    Reply to ${safeEmail}
                  </a>
                  <a href="tel:${safePhone}"
                    style="display:inline-block;background:#ffffff;color:#0f172a;text-decoration:none;padding:10px 14px;border-radius:10px;font-weight:600;font-size:14px;border:1px solid #e2e8f0;margin-left:10px;">
                    Call ${safePhone}
                  </a>
                  <span style="display:inline-block;margin-left:10px;color:#64748b;font-size:13px;vertical-align:middle;">
                    Submitted: ${now}
                  </span>
                </div>

                <hr style="border:none;border-top:1px solid #e2e8f0;margin:18px 0;" />

                <p style="margin:0;color:#64748b;font-size:12px;line-height:1.6;">
                  This email was generated automatically from your website contact form.
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

          <div style="max-width:680px;color:#94a3b8;font-size:11px;line-height:1.6;margin-top:14px;text-align:center;">
            If the buttons don’t work, reply to: ${safeEmail} or call: ${safePhone}
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
      replyTo: safeEmail, // real replies go to customer
      subject,
      text, // fallback
      html, // modern
    });

    return res.status(200).json({ ok: true });
  } catch (e: any) {
    return res
      .status(500)
      .json({ ok: false, message: e?.message || "Failed to send" });
  }
}
