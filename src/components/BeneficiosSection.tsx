import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Ruler, Clock, Sparkles, Construction, MessageSquare } from "lucide-react";

const beneficios = [
  {
    icon: Ruler,
    title: "Acabamento técnico nivelado",
    description: "Precisão em cada milímetro para um resultado estético superior.",
  },
  {
    icon: Sparkles,
    title: "Execução limpa e organizada",
    description: "Sua obra tratada com respeito, organização e mínima interferência.",
  },
  {
    icon: Clock,
    title: "Cumprimento de prazos",
    description: "Pontualidade e cronograma rigoroso em todas as etapas da obra.",
  },
  {
    icon: Construction,
    title: "Técnicas e materiais profissionais",
    description: "Uso das melhores práticas e materiais de primeira linha.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia no serviço",
    description: "Segurança e suporte pós-entrega para sua total tranquilidade.",
  },
];

const BeneficiosSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5515998070993?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20especializado.", "_blank");
  };

  return (
    <section id="beneficios" className="section-padding bg-muted/50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight uppercase leading-[0.9]">
            POR QUE ESCOLHER UM <span className="text-secondary text-shadow-glow">ESPECIALISTA</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Qualidade técnica que valoriza seu imóvel e elimina preocupações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-16 md:mb-20">
          {beneficios.map((beneficio, index) => (
            <Card
              key={index}
              className="border-none transition-all duration-500 hover-lift bg-white shadow-card group"
            >
              <CardContent className="p-6 md:p-8 space-y-4 md:space-y-6 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-vibrant">
                  <beneficio.icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base md:text-lg font-black text-primary leading-tight uppercase tracking-tighter">
                  {beneficio.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={openWhatsApp}
            className="bg-primary hover:bg-primary-light text-white font-black text-lg md:text-xl px-10 md:px-14 py-7 md:py-9 rounded-full shadow-vibrant transition-all duration-300 hover:scale-110 flex items-center gap-4 mx-auto animate-float-slow w-full sm:w-auto justify-center"
          >
            <MessageSquare size={24} className="md:w-7 md:h-7" />
            <span className="hidden sm:inline">QUERO MEU ORÇAMENTO AGORA</span>
            <span className="sm:hidden">SOLICITAR ORÇAMENTO</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSection;
