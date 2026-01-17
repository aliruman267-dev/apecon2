import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import monitoringCenter from "@/assets/monitoring-center.jpg";

const WEB3FORMS_KEY = "f7711d56-154a-42ad-b411-1b675254972f";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    // ✅ honeypot (bots fill this)
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ simple bot protection: if honeypot filled, silently stop
    if (formData.website?.trim()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: "New Contact Enquiry - Apecon",
        from_name: "Apecon Website",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Failed to send. Please try again.");
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your enquiry. We'll be in touch shortly.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        website: "",
      });
    } catch (err) {
      toast({
        title: "Sending failed",
        description:
          err?.message ||
          "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to secure your property? Get in touch for a free consultation
            and quote.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* ✅ Honeypot field (hidden) */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="07123 456789"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your security requirements..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {/* Optional helper text */}
                <p className="text-sm text-muted-foreground">
                  By submitting this form, you agree to be contacted about your
                  enquiry.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="rounded-2xl overflow-hidden mb-8">
                <img
                  src={monitoringCenter}
                  alt="Security monitoring center"
                  className="w-full h-64 object-cover"
                />
              </div>

              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Phone
                    </h4>
                    <a
                      href="tel:03337724575"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      0333 772 4575
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:info@apecon.co.uk"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@apecon.co.uk
                    </a>
                  </div>
                </div>

                {/* ✅ Social Media (replaces Address) */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Social Media
                    </h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      <a
                        href="https://www.instagram.com/apeconltd?utm_source=qr&igsh=NWt2Nm40ZGJydm5m"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2"
                      >
                        <Instagram className="h-4 w-4" />
                        Instagram
                      </a>
                      <a
                        href="https://www.facebook.com/share/1A9672H9bM/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2"
                      >
                        <Facebook className="h-4 w-4" />
                        Facebook
                      </a>
                      <a
                        href="https://www.linkedin.com/posts/apecon-ltd_cctvcamera-cctvinstallation-securityalert-activity-7418304648987676672-gQPV?utm_source=share&utm_medium=member_android&rcm=ACoAAAM5g_gBqzRNsZdJDKnAfYJzggVRbcYIFp8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Working Hours
                    </h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      <span className="text-accent font-medium">
                        24/7 Emergency Support
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
