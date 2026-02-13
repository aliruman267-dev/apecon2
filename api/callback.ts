import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

type Body = {
  name?: string;
  mobile?: string;
  website?: string; // honeypot
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  try {
    const { name, mobile, website } = (req.body || {}) as Body;

    // ✅ bot trap
    if (website?.trim()) return res.status(200).json({ ok: true });

    // ✅ required validation
    if (!name?.trim() || !mobile?.trim()) {
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

    const subject = "Callback Request - Apecon";
    const text =
      `Callback Request\n\n` + `Name: ${name}\n` + `Mobile: ${mobile}\n`;

    await transporter.sendMail({
      from: `Apecon Website <${from}>`,
      to,
      subject,
      text,
    });

    return res.status(200).json({ ok: true });
  } catch (e: any) {
    return res
      .status(500)
      .json({ ok: false, message: e?.message || "Failed to submit" });
  }
}
