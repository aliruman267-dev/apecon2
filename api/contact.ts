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

    const subject = "New Contact Enquiry - Apecon";
    const text =
      `New Contact Enquiry\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n\n` +
      `Message:\n${message}\n`;

    await transporter.sendMail({
      from: `Apecon Website <${from}>`,
      to,
      replyTo: email,
      subject,
      text,
    });

    return res.status(200).json({ ok: true });
  } catch (e: any) {
    return res
      .status(500)
      .json({ ok: false, message: e?.message || "Failed to send" });
  }
}
