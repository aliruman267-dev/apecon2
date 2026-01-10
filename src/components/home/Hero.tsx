import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Shield, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-cctv-alarm.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-muted">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Trusted Security Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Best Camera
              <span className="block text-primary">Security Systems</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              We provide fast installation with our expert staff. Protect your home and business with state-of-the-art CCTV and surveillance systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="hero" size="xl" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Quick Features */}
            <div className="flex flex-col sm:flex-row gap-6">
              {[
                "Free Site Survey",
                "24/7 Support",
                "Expert Installation"
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image with Overlay Text */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Professional CCTV and Intruder Alarm installation"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
              
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
                  CCTV & Intruder Alarm
                </h2>
                {/* <p className="text-lg md:text-xl font-medium text-white/90">
                  Install Now – Pay Monthly Available
                </p> */}
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-lg border border-border hidden md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Fast Communication</p>
                  <a href="tel:03337724575" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                    0333 772 4575
                  </a>
                </div>
                
              </div>
            </div>
             <p className="text-lg md:text-xl font-medium text-black/90">
                  Install Now – Pay Monthly Available
                </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
