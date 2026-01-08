import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import homeSecurity from "@/assets/home-security.jpg";
import businessSecurity from "@/assets/business-security.jpg";
import monitoringCenter from "@/assets/monitoring-center.jpg";
import installation from "@/assets/installation.jpg";

const servicesData: Record<string, {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
}> = {
  "home-security": {
    title: "Home Security",
    description: "Protect your family and property with our comprehensive home security camera systems. Our professional-grade solutions provide 24/7 surveillance with crystal-clear video quality, ensuring you always have eyes on what matters most.",
    image: homeSecurity,
    features: [
      "High-definition 4K camera resolution for crystal-clear footage",
      "Advanced night vision technology for 24/7 monitoring",
      "Remote access via smartphone app from anywhere in the world",
      "Intelligent motion detection with customizable alerts",
      "Flexible cloud and local storage options",
      "Weather-resistant cameras for outdoor installation",
      "Two-way audio communication",
      "Integration with smart home systems"
    ],
    benefits: [
      "Peace of mind knowing your family is protected",
      "Deter potential intruders with visible cameras",
      "Monitor your property remotely while away",
      "Reduce insurance premiums with security systems",
      "Evidence collection in case of incidents"
    ]
  },
  "business-systems": {
    title: "Business Systems",
    description: "Robust, reliable, and scalable security solutions designed for commercial properties of all sizes. From small retail shops to large corporate offices, our business security systems are tailored to meet your specific operational needs.",
    image: businessSecurity,
    features: [
      "Multi-site centralized monitoring capabilities",
      "Access control integration for secure entry management",
      "Employee activity monitoring and management",
      "Advanced analytics and reporting dashboards",
      "Scalable infrastructure that grows with your business",
      "Integration with existing IT infrastructure",
      "Point-of-sale monitoring for retail environments",
      "License plate recognition systems"
    ],
    benefits: [
      "Reduce theft and shrinkage in retail environments",
      "Improve employee productivity and accountability",
      "Ensure compliance with security regulations",
      "Protect valuable assets and intellectual property",
      "Enhanced customer and employee safety"
    ]
  },
  "camera-systems": {
    title: "Camera Systems",
    description: "State-of-the-art IP and analog camera systems offering high-definition video capture and advanced remote monitoring capabilities. We supply and install the latest technology from leading manufacturers.",
    image: installation,
    features: [
      "Wide range of IP and analog camera options",
      "Pan-Tilt-Zoom (PTZ) camera functionality",
      "Ultra-wide angle coverage options",
      "Vandal-proof and weatherproof housings",
      "Professional installation by certified engineers",
      "Regular maintenance and support packages",
      "Thermal imaging cameras for specialist applications",
      "Facial recognition capabilities"
    ],
    benefits: [
      "Maximum coverage with fewer cameras",
      "Reliable operation in all weather conditions",
      "Long-lasting equipment with warranty protection",
      "Future-proof technology investments",
      "Expert guidance on optimal camera placement"
    ]
  },
  "monitoring": {
    title: "24/7 Monitoring",
    description: "Our Security Operations Center provides round-the-clock monitoring services, ensuring your property is always protected. Our trained operators respond immediately to alerts, providing you with complete peace of mind.",
    image: monitoringCenter,
    features: [
      "24 hours a day, 7 days a week live monitoring",
      "Instant alert response and assessment",
      "Emergency services dispatch when required",
      "Video verification of all alarm events",
      "Dedicated support team assigned to your account",
      "Regular security reports and analytics",
      "Mobile app alerts and notifications",
      "Integration with police and emergency services"
    ],
    benefits: [
      "Never worry about missed security events",
      "Professional response to every alert",
      "Reduced false alarm fines with video verification",
      "Faster emergency response times",
      "Regular security assessments and recommendations"
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  if (!serviceId || !servicesData[serviceId]) {
    return <Navigate to="/services" replace />;
  }

  const service = servicesData[serviceId];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img 
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              {service.title}
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Professional security solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>

              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Key Features
              </h3>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Benefits
              </h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-muted rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Get Started Today
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Contact us for a free consultation and quote. Our experts will assess your needs and recommend the best solution.
                </p>
                <Button variant="hero" className="w-full mb-3" asChild>
                  <Link to="/contact">Request a Quote</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:03337723292">Call 0333 772 3292</a>
                </Button>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-3">Other Services</h4>
                  <ul className="space-y-2">
                    {Object.entries(servicesData)
                      .filter(([id]) => id !== serviceId)
                      .map(([id, svc]) => (
                        <li key={id}>
                          <Link 
                            to={`/services/${id}`}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {svc.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
