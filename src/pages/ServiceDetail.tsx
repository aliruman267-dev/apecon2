import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { getServiceById, services } from "@/data/services";

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  if (!serviceId) {
    return <Navigate to="/services" replace />;
  }

  const service = getServiceById(serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = services.filter(s => s.id !== serviceId);

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
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Use Cases
              </h3>
              <ul className="space-y-3 mb-8">
                {service.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{useCase}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-muted rounded-xl p-6 mt-8">
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  Why Choose Apecon?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.whyApecon}
                </p>
              </div>
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
                  <Link to="/contact">Get a Quote</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:03337724575">Call 0333 772 3292</a>
                </Button>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-3">Other Services</h4>
                  <ul className="space-y-2">
                    {otherServices.slice(0, 5).map((svc) => (
                      <li key={svc.id}>
                        <Link 
                          to={`/services/${svc.id}`}
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
