import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import homeSecurity from "@/assets/home-security.jpg";
import businessSecurity from "@/assets/business-security.jpg";
import monitoringCenter from "@/assets/monitoring-center.jpg";
import installation from "@/assets/installation.jpg";

const services = [
  {
    title: "Home Security",
    description: "Our home camera systems have high resolution and remote monitoring features for complete peace of mind.",
    image: homeSecurity,
    link: "/services/home-security"
  },
  {
    title: "Business Systems",
    description: "Robust, reliable, and scalable technology solutions to power and protect your enterprise.",
    image: businessSecurity,
    link: "/services/business-systems"
  },
  {
    title: "Camera Systems",
    description: "Network-enabled cameras offering high-definition video and advanced remote monitoring capabilities.",
    image: installation,
    link: "/services/camera-systems"
  },
  {
    title: "24/7 Monitoring",
    description: "Our Security Operations Center provides round-the-clock monitoring for your complete peace of mind.",
    image: monitoringCenter,
    link: "/services/monitoring"
  }
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Check Out Our High Security
            <span className="block text-primary">Camera Systems Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We produce professional solutions in camera systems. From residential to commercial, we have the expertise to keep you protected.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link 
              key={service.title} 
              to={service.link}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-xl overflow-hidden border border-border card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-primary font-medium text-sm">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
