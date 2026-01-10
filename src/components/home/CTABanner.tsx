import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-2">
              Ready to Secure Your Property?
            </h2>
            <p className="text-primary-foreground/80">
              Get in touch today for a free consultation and quote.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a 
              href="tel:03337723292" 
              className="flex items-center gap-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors rounded-lg px-6 py-4"
            >
              <Phone className="h-6 w-6 text-primary-foreground" />
              <div className="text-left">
                <div className="text-xs text-primary-foreground/70">Fast Communication</div>
                <div className="text-lg font-bold text-primary-foreground">0333 772 3292</div>
              </div>
            </a>

            <a 
              href="mailto:info@apecon.co.uk" 
              className="flex items-center gap-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors rounded-lg px-6 py-4"
            >
              <Mail className="h-6 w-6 text-primary-foreground" />
              <div className="text-left">
                <div className="text-xs text-primary-foreground/70">Get A Quick Quote</div>
                <div className="text-lg font-bold text-primary-foreground">info@apecon.co.uk</div>
              </div>
            </a>

            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
              asChild
            >
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
