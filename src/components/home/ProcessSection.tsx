const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "We start with a comprehensive consultation to understand your security needs and assess your property."
  },
  {
    number: "02",
    title: "Site Survey",
    description: "Our expert engineers conduct a thorough site survey to determine the optimal camera placement and system design."
  },
  {
    number: "03",
    title: "Custom Solution",
    description: "We design a tailored security solution that meets your specific requirements and budget."
  },
  {
    number: "04",
    title: "Installation",
    description: "Professional installation by our certified technicians with minimal disruption to your routine."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Our Simple
            <span className="block text-primary">Installation Process</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From initial consultation to final installation, we make securing your property simple and hassle-free.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
              )}
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground text-2xl font-display font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
