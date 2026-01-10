import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import PropertyTypeSection from "@/components/home/PropertyTypeSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import CTABanner from "@/components/home/CTABanner";
import QuoteModal from "@/components/quote/QuoteModal";

const Index = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteType, setQuoteType] = useState<"residential" | "commercial" | null>(null);

  const handlePropertySelect = (type: "residential" | "commercial") => {
    setQuoteType(type);
    setQuoteModalOpen(true);
  };

  return (
    <Layout>
      <Hero />
      <ServicesPreview />
      {/* <PropertyTypeSection onSelectProperty={handlePropertySelect} /> */}
      <WhyChooseUs />
      <ProcessSection />
      <CTABanner />
      
      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => {
          setQuoteModalOpen(false);
          setQuoteType(null);
        }}
        initialType={quoteType}
      />
    </Layout>
  );
};

export default Index;
