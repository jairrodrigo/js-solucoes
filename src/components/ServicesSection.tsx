import { Card, CardContent } from "@/components/ui/card";
import { Store, Zap, PenTool, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Montagem de Mobiliário e Expositores",
    description:
      "Instalação profissional de gôndolas, check-outs, balcões e displays para maximizar a apresentação dos produtos.",
  },
  {
    icon: Zap,
    title: "Infraestrutura Elétrica",
    description:
      "Instalação completa de iluminação e sistemas de energia para equipamentos comerciais com segurança e eficiência.",
  },
  {
    icon: PenTool,
    title: "Comunicação Visual",
    description:
      "Montagem de elementos visuais que fortalecem a identidade da sua marca e melhoram a experiência do cliente.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria e Planejamento",
    description:
      "Definição estratégica de layout para otimizar o fluxo de clientes e maximizar o potencial do espaço comercial.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            O Que <span className="text-primary">Oferecemos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções completas para instalação e montagem do seu espaço comercial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary transition-all duration-300 hover-lift bg-card shadow-card group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
