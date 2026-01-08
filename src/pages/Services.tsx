import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import homeSecurity from "@/assets/home-security.jpg";
import businessSecurity from "@/assets/business-security.jpg";
import monitoringCenter from "@/assets/monitoring-center.jpg";
import installation from "@/assets/installation.jpg";

const services = [
  {
    id: "home-security",
    title: "Home Security",
    description: "Protect your family and property with our comprehensive home security camera systems. We offer high-resolution cameras with remote monitoring capabilities.",
    image: homeSecurity,
    features: [
      "HD & 4K camera options",
      "Night vision technology",
      "Remote smartphone access",
      "Motion detection alerts",
      "Cloud & local storage"
    ]
  },
  {
    id: "business-systems",
    title: "Business Systems",
    description: "Robust, reliable, and scalable security solutions designed for commercial properties. From small offices to large enterprises, we have you covered.",
    image: businessSecurity,
    features: [
      "Multi-site monitoring",
      "Access control integration",
      "Employee management",
      "Analytics & reporting",
      "Scalable infrastructure"
    ]
  },
  {
    id: "camera-systems",
    title: "Camera Systems",
    description: "State-of-the-art IP and analog camera systems offering high-definition video capture and advanced remote monitoring capabilities.",
    image: installation,
    features: [
      "IP & analog cameras",
      "PTZ functionality",
      "Wide-angle coverage",
      "Weatherproof options",
      "Professional installation"
    ]
  },
  {
    id: "monitoring",
    title: "24/7 Monitoring",
    description: "Our Security Operations Center provides round-the-clock monitoring services, ensuring your property is always protected.",
    image: monitoringCenter,
    features: [
      "24/7 live monitoring",
      "Instant alert response",
      "Emergency dispatch",
      "Video verification",
      "Dedicated support team"
    ]
  }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive security solutions tailored to protect your home and business with cutting-edge technology and expert installation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link 
                key={service.id}
                to={`/services/${service.id}`}
                className="group"
              >
                <div className="bg-card rounded-xl overflow-hidden border border-border card-shadow hover:card-shadow-hover transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
