import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">A</span>
              </div>
              <span className="text-2xl font-display font-bold text-foreground">apecon</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional security camera systems and monitoring solutions for homes and businesses across the UK.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Quick Links</h4>
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
            <h4 className="font-display font-bold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <a href="tel:03337723292" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    0333 772 3292
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <a href="mailto:contact@apecon.co.uk" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    contact@apecon.co.uk
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  London, United Kingdom
                </span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Working Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>Monday - Friday</p>
                  <p className="font-medium text-foreground">9:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>Saturday</p>
                  <p className="font-medium text-foreground">10:00 AM - 4:00 PM</p>
                </div>
              </li>
              <li className="text-sm text-muted-foreground mt-4">
                <span className="text-accent font-medium">24/7 Emergency Support Available</span>
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
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
