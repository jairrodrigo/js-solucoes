import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Calendar, AlertCircle, Package } from "lucide-react";

const diferenciais = [
  {
    icon: Wrench,
    title: "Habilidade Técnica",
    description:
      "Equipe especializada com expertise em diversas técnicas de montagem e instalação.",
  },
  {
    icon: Calendar,
    title: "Gestão de Cronogramas",
    description:
      "Cumprimento rigoroso de prazos e coordenação eficiente de equipes para entregas pontuais.",
  },
  {
    icon: AlertCircle,
    title: "Resolução de Problemas",
    description:
      "Capacidade de identificar e solucionar rapidamente desafios técnicos durante a execução.",
  },
  {
    icon: Package,
    title: "Conhecimento em Materiais",
    description:
      "Domínio em trabalhar com diversos materiais: MDF, vidro, alumínio, aço e mais.",
  },
];

const DiferenciaisSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Nossos <span className="text-secondary">Diferenciais</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Características que tornam nossos montadores únicos no mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((item, index) => (
            <Card
              key={index}
              className="border-border hover:border-secondary transition-all duration-300 hover-lift bg-card shadow-card text-center group"
            >
              <CardContent className="p-8 space-y-4 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                  <item.icon className="w-10 h-10 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
