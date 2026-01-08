import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.jpg";
import installation from "@/assets/installation.jpg";

const values = [
  {
    title: "Integrity",
    description: "We operate with complete transparency and honesty in all our dealings with customers and partners."
  },
  {
    title: "Excellence",
    description: "We strive for the highest standards in every installation and service we provide."
  },
  {
    title: "Innovation",
    description: "We stay at the forefront of security technology to offer you the best solutions available."
  },
  {
    title: "Customer Focus",
    description: "Your security and satisfaction are at the heart of everything we do."
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img 
          src={aboutHero}
          alt="Modern office building with security cameras"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              About Apecon
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl">
              Your trusted partner in professional security solutions for over 25 years.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded with a vision to provide comprehensive security solutions, Apecon has grown to become one of the UK's most trusted security system providers. Our journey began over 25 years ago when we recognized the growing need for professional, reliable security installations.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Today, we serve thousands of homes and businesses across the United Kingdom, offering state-of-the-art CCTV systems, access control solutions, and 24/7 monitoring services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of certified engineers and security experts work tirelessly to ensure that every installation meets our exacting standards, providing you with the peace of mind you deserve.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={installation}
                alt="Professional security installation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            To deliver exceptional security solutions that protect what matters most. We combine cutting-edge technology with expert installation and unparalleled customer service to create safer environments for families and businesses across the UK.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Get in touch today to discuss your security requirements and receive a free, no-obligation quote.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
