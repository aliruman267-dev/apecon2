import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import apeconLogo from "@/assets/apecon-logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src={apeconLogo}
                alt="Apecon Security"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-success font-medium mb-4">
              Your Technology Partner
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional security camera systems and monitoring solutions for
              homes and businesses across the UK.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <a
                  href="tel:03337724575"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  0333 772 4575
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <a
                  href="mailto:info@apecon.co.uk"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@apecon.co.uk
                </a>
              </li>
            </ul>

            {/* ✅ Social Media */}
            <div className="mt-6">
              <h5 className="font-display font-bold text-foreground mb-6">
                Follow Us
              </h5>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/apeconltd?utm_source=qr&igsh=NWt2Nm40ZGJydm5m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/1A9672H9bM/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/posts/apecon-ltd_cctvcamera-cctvinstallation-securityalert-activity-7418304648987676672-gQPV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">
              Working Hours
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>Monday - Friday</p>
                  <p className="font-medium text-foreground">
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>Saturday</p>
                  <p className="font-medium text-foreground">
                    10:00 AM - 4:00 PM
                  </p>
                </div>
              </li>
              <li className="text-sm text-muted-foreground mt-4">
                <span className="text-accent font-medium">
                  24/7 Emergency Support Available
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Apecon Security. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
