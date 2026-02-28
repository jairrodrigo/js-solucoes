import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BeneficiosSection from "@/components/BeneficiosSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import SobreSection from "@/components/SobreSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ProjectsCarousel from "@/components/ProjectsCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-secondary selection:text-primary">
      <Header />
      <main>
        <HeroSection />
        <BeneficiosSection />
        <ServicesSection />
        <ProjectsCarousel />
        <TestimonialsSection />
        <ObjectionsSection />
        <SobreSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
