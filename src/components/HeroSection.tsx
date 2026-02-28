import { Button } from "@/components/ui/button";
import { MessageSquare, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5515998070993?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20especializado.", "_blank");
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 scale-105 animate-grow">
        <img
          src="/hero-bg.png"
          alt="Obra de alto padrão em Sorocaba"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center md:text-left text-white mt-24">
        <div className="max-w-4xl space-y-6 md:space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/30 backdrop-blur-md border border-secondary/50 rounded-full text-white text-[10px] md:text-sm font-bold tracking-widest uppercase">
            <ShieldCheck size={14} className="text-white md:w-4 md:h-4" />
            Sorocaba e Região Metropolitana
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter uppercase">
            EXECUÇÃO PROFISSIONAL EM{" "}
            <span className="text-secondary text-shadow-glow">OBRAS E ACABAMENTOS</span> DE ALTO PADRÃO
          </h1>

          <p className="text-base md:text-2xl text-white/90 max-w-2xl leading-relaxed font-medium italic">
            "Transformando sonhos em realidade com precisão técnica e acabamento impecável." Do rústico ao fino, garantimos a excelência que seu projeto merece.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-2">
            <Button
              size="lg"
              onClick={openWhatsApp}
              className="bg-secondary hover:bg-secondary-light text-primary-dark font-black text-lg md:text-xl px-8 md:px-10 py-7 md:py-9 rounded-full shadow-vibrant transition-all duration-300 hover:scale-110 flex items-center gap-3 animate-float-slow w-full sm:w-auto"
            >
              <MessageSquare size={24} className="md:w-7 md:h-7" />
              SOLICITAR ORÇAMENTO AGORA
            </Button>
          </div>

          <div className="pt-6 md:pt-8 flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8 text-white/80 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">
            <span className="flex items-center gap-2 drop-shadow-md">✓ NIVELAMENTO TÉCNICO</span>
            <span className="flex items-center gap-2 drop-shadow-md">✓ PINTURA PREMIUM</span>
            <span className="flex items-center gap-2 drop-shadow-md">✓ GARANTIA TOTAL</span>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
