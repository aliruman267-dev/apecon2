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
        ? "Residential Quote Request - Apecon"
        : "Commercial Quote Request - Apecon";

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

    await transporter.sendMail({
      from: `Apecon Website <${from}>`,
      to,
      replyTo: b.email?.trim() ? b.email : undefined,
      subject,
      text: lines.join("\n"),
    });

    return res.status(200).json({ ok: true });
  } catch (e: any) {
    return res
      .status(500)
      .json({ ok: false, message: e?.message || "Failed to submit" });
  }
}
