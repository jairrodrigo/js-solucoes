import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Award } from "lucide-react";

const beneficios = [
  {
    icon: Users,
    title: "Melhora a Experiência do Cliente",
    description:
      "Ambientes bem estruturados e organizados proporcionam uma jornada de compra mais agradável e intuitiva.",
  },
  {
    icon: TrendingUp,
    title: "Aumenta a Eficiência Operacional",
    description:
      "Layout otimizado e instalações adequadas facilitam as operações diárias e reduzem custos operacionais.",
  },
  {
    icon: Award,
    title: "Reforça a Imagem da Marca",
    description:
      "Espaços comerciais profissionais e bem executados transmitem credibilidade e valorizam sua marca.",
  },
];

const BeneficiosSection = () => {
  return (
    <section id="beneficios" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Benefícios para seu{" "}
            <span className="text-primary">Negócio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Investir em instalações profissionais traz resultados concretos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {beneficios.map((beneficio, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary transition-all duration-300 hover-lift bg-card shadow-card"
            >
              <CardContent className="p-8 space-y-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto shadow-lg">
                  <beneficio.icon className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {beneficio.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {beneficio.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSection;
