import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of security systems do you install?",
    answer: "We install a comprehensive range of security systems including CCTV cameras (IP and analog), access control systems, intruder alarms, video intercoms, and 24/7 monitoring solutions. We work with both residential and commercial properties."
  },
  {
    question: "How long does a typical installation take?",
    answer: "Installation time varies depending on the complexity of the system. A basic home CCTV system can typically be installed in 4-6 hours, while larger commercial installations may take several days. We'll provide a detailed timeline during your consultation."
  },
  {
    question: "Do you offer a free site survey?",
    answer: "Yes, we offer a completely free, no-obligation site survey for all potential customers. Our expert engineers will visit your property, assess your security needs, and provide recommendations along with a detailed quote."
  },
  {
    question: "What warranty do you offer on installations?",
    answer: "All our installations come with a minimum 2-year warranty on both parts and labour. We also offer extended warranty options and annual maintenance contracts for complete peace of mind."
  },
  {
    question: "Can I view my cameras remotely?",
    answer: "Absolutely! All our modern camera systems come with smartphone and tablet apps that allow you to view live and recorded footage from anywhere in the world. We'll set everything up and show you how to use it."
  },
  {
    question: "Do you offer 24/7 monitoring services?",
    answer: "Yes, we have a dedicated Security Operations Center that provides round-the-clock monitoring. Our trained operators will respond immediately to any alerts and can dispatch emergency services when necessary."
  },
  {
    question: "What happens if my system develops a fault?",
    answer: "We offer comprehensive support packages that include fault response. Simply call our support line and we'll arrange for an engineer to visit and resolve the issue. Emergency callouts are available 24/7."
  },
  {
    question: "How do I maintain my security system?",
    answer: "We recommend annual maintenance checks to ensure your system continues to operate optimally. We offer maintenance contracts that include regular servicing, software updates, and priority support."
  },
  {
    question: "Do you work with businesses as well as homes?",
    answer: "Yes, we work with properties of all sizes - from small flats to large commercial complexes. We have extensive experience in retail, office, warehouse, and industrial security installations."
  },
  {
    question: "What payment options do you offer?",
    answer: "We offer flexible payment options including upfront payment, staged payments for larger projects, and monthly payment plans. We'll discuss the options that work best for you during the quotation process."
  }
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our security services, installations, and support.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-display font-bold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Get in touch and we'll be happy to answer any queries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:03337724575">Call 0333 772 3292</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
