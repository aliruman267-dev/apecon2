import aboutHero from "@/assets/about-hero.jpg";

const features = [
  {
    title: "25+ Years Experience",
    description: "Our company has become one of the world's leading companies in the industry with the knowledge and experience gained since establishment."
  },
  {
    title: "Fast Response Time",
    description: "We intervene instantly in danger. Our team is always ready to respond to your security needs promptly and efficiently."
  },
  {
    title: "Professional Installation",
    description: "Expert technicians ensure your security systems are installed correctly the first time, with minimal disruption to your daily routine."
  },
  {
    title: "Certified Engineers",
    description: "All our engineers are fully certified and trained to the highest standards in security system installation and maintenance."
  },
  {
    title: "Lifetime Support",
    description: "We provide ongoing technical support and maintenance services to keep your security systems running optimally."
  },
  {
    title: "Competitive Pricing",
    description: "Quality security solutions at fair prices. We offer flexible payment options to suit your budget."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={aboutHero}
                alt="Security system installation on modern building"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl p-6 hidden md:block">
              <div className="text-4xl font-display font-bold">25+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              We Left A Quarter Century Behind
              <span className="block text-primary">In Camera Security Systems</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              We Intervene Instantly in Danger! Our company has become one of the world's leading companies in the industry with the knowledge and experience it has gained since its establishment.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="group">
                  <h4 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
