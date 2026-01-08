import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <ProcessSection />
      <CTABanner />
    </Layout>
  );
};

export default Index;
