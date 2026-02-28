import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hammer, Paintbrush, CheckCircle2, MessageSquare } from "lucide-react";

const ServicesSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5515998070993?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20especializado.", "_blank");
  };

  return (
    <section id="servicos" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight uppercase leading-none">
            SOLUÇÕES <span className="text-secondary text-shadow-glow">ESPECIALIZADAS</span>
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto mb-16 md:mb-20">
          {/* PEDREIRO */}
          <Card className="border-none shadow-2xl bg-primary text-white overflow-hidden group">
            <div className="h-2.5 bg-secondary w-full transition-all duration-700 group-hover:h-5"></div>
            <CardContent className="p-6 md:p-12 space-y-8 md:space-y-10">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="p-4 md:p-5 bg-white/15 rounded-2xl md:rounded-[2rem] shadow-inner transform group-hover:rotate-6 transition-transform">
                  <Hammer className="w-8 h-8 md:w-12 md:h-12 text-secondary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none">PEDREIRO</h3>
              </div>
              <ul className="space-y-4 md:space-y-5 text-white/95">
                {[
                  "Alvenaria estrutural e convencional",
                  "Reboco técnico e nivelamento a laser",
                  "Assentamento de porcelanato e revestimentos",
                  "Pisos industriais e decorativos",
                  "Execução completa do rústico ao fino"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 md:gap-4 group/li">
                    <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7 text-secondary shrink-0 transition-transform group-hover/li:scale-125" />
                    <span className="text-lg md:text-xl font-bold italic tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* PINTOR */}
          <Card className="border-none shadow-2xl bg-muted/30 border border-primary/5 overflow-hidden group">
            <div className="h-2.5 bg-primary w-full transition-all duration-700 group-hover:h-5"></div>
            <CardContent className="p-6 md:p-12 space-y-8 md:space-y-10">
              <div className="flex items-center gap-4 md:gap-6 text-primary">
                <div className="p-4 md:p-5 bg-primary/5 rounded-2xl md:rounded-[2rem] shadow-inner transform group-hover:-rotate-6 transition-transform">
                  <Paintbrush className="w-8 h-8 md:w-12 md:h-12 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none">PINTOR</h3>
              </div>
              <ul className="space-y-4 md:space-y-5 text-muted-foreground">
                {[
                  "Preparação técnica de superfícies",
                  "Aplicação de massa corrida e lixamento sem pó",
                  "Pintura acrílica e vinílica premium",
                  "Texturas projetadas e cimento queimado",
                  "Acabamento extra fino com brilho controlado"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 md:gap-4 group/li">
                    <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7 text-primary shrink-0 transition-transform group-hover/li:scale-125" />
                    <span className="text-lg md:text-xl font-bold italic tracking-tight text-primary/80">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={openWhatsApp}
            className="bg-secondary hover:bg-secondary-light text-primary-dark font-black text-xl md:text-2xl px-10 md:px-16 py-7 md:py-10 rounded-full shadow-vibrant transition-all duration-500 hover:scale-110 flex items-center gap-4 mx-auto w-full sm:w-auto justify-center"
          >
            <MessageSquare size={24} className="md:w-8 md:h-8" />
            <span className="hidden sm:inline">FALAR COM ESPECIALISTA AGORA</span>
            <span className="sm:hidden">SOLICITAR ORÇAMENTO</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
