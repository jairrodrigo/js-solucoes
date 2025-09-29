import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import BeneficiosSection from "@/components/BeneficiosSection";
import SobreSection from "@/components/SobreSection";
import CTASection from "@/components/CTASection";
import ContatoSection from "@/components/ContatoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <DiferenciaisSection />
        <BeneficiosSection />
        <SobreSection />
        <CTASection />
        <ContatoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
