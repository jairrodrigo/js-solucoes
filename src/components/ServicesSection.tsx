import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hammer, Paintbrush, CheckCircle2, MessageSquare } from "lucide-react";

const ServicesSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5515998070993?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20especializado.", "_blank");
  };

  return (
    <section id="servicos" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-[100px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 space-y-4 md:space-y-6">
          <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] md:text-sm">Nossas Especialidades</span>
          <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase leading-[0.9]">
            SOLUÇÕES <span className="text-secondary text-shadow-glow">ESPECIALIZADAS</span>
          </h2>
          <div className="w-24 h-2 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto mb-16 md:mb-24">
          {/* PEDREIRO */}
          <Card className="border-none shadow-vibrant bg-primary text-white overflow-hidden group rounded-[2rem] md:rounded-[3rem]">
            <div className="h-3 bg-secondary w-full transition-all duration-700 group-hover:h-6"></div>
            <CardContent className="p-8 md:p-14 space-y-8 md:space-y-12">
              <div className="flex items-center gap-5 md:gap-8">
                <div className="p-5 md:p-6 bg-white/10 backdrop-blur-md rounded-2xl md:rounded-[2.5rem] shadow-inner transform group-hover:rotate-6 transition-transform duration-500">
                  <Hammer className="w-10 h-10 md:w-14 md:h-14 text-secondary" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">PEDREIRO</h3>
              </div>
              <ul className="space-y-5 md:space-y-7 text-white/90">
                {[
                  "Alvenaria estrutural e convencional",
                  "Reboco técnico e nivelamento a laser",
                  "Assentamento de porcelanato e revestimentos",
                  "Pisos industriais e decorativos",
                  "Execução completa do rústico ao fino"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 md:gap-5 group/li">
                    <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-secondary shrink-0 transition-all duration-300 group-hover/li:scale-110" />
                    <span className="text-xl md:text-2xl font-bold italic tracking-tight leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* PINTOR */}
          <Card className="border-none shadow-vibrant bg-muted/40 border border-primary/5 overflow-hidden group rounded-[2rem] md:rounded-[3rem]">
            <div className="h-3 bg-primary w-full transition-all duration-700 group-hover:h-6"></div>
            <CardContent className="p-8 md:p-14 space-y-8 md:space-y-12">
              <div className="flex items-center gap-5 md:gap-8 text-primary">
                <div className="p-5 md:p-6 bg-primary/5 rounded-2xl md:rounded-[2.5rem] shadow-inner transform group-hover:-rotate-6 transition-transform duration-500">
                  <Paintbrush className="w-10 h-10 md:w-14 md:h-14 text-primary" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">PINTOR</h3>
              </div>
              <ul className="space-y-5 md:space-y-7 text-muted-foreground">
                {[
                  "Preparação técnica de superfícies",
                  "Aplicação de massa corrida e lixamento sem pó",
                  "Pintura acrílica e vinílica premium",
                  "Texturas projetadas e cimento queimado",
                  "Acabamento extra fino com brilho controlado"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 md:gap-5 group/li">
                    <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0 transition-all duration-300 group-hover/li:scale-110" />
                    <span className="text-xl md:text-2xl font-bold italic tracking-tight text-primary/80 leading-tight">{item}</span>
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
            className="bg-secondary hover:bg-secondary-light text-primary-dark font-black text-xl md:text-3xl px-12 md:px-20 py-8 md:py-12 rounded-2xl md:rounded-full shadow-vibrant transition-all duration-500 hover:scale-105 flex items-center gap-4 mx-auto w-full sm:w-auto justify-center animate-float-slow"
          >
            <MessageSquare size={28} className="md:w-10 md:h-10" />
            <span className="uppercase tracking-tighter">SOLICITAR ORÇAMENTO AGORA</span>
          </Button>
          <p className="mt-8 text-muted-foreground font-black text-xs md:text-sm uppercase tracking-[0.3em] opacity-50">Equipe Própria • Equipamentos Modernos • Garantia Técnica</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
