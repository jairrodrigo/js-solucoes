import { Card, CardContent } from "@/components/ui/card";
import { Building2, Shield, Clock } from "lucide-react";

const SobreSection = () => {
  const valores = [
    {
      icon: Building2,
      title: "Experiência",
      description: "Anos de expertise em instalações comerciais",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Cumprimento rigoroso de normas técnicas",
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Compromisso com prazos estabelecidos",
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Sobre a{" "}
                <span className="text-primary">JC Soluções</span>
              </h2>
              <div className="h-1 w-24 bg-secondary rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos especialistas em instalações e montagens comerciais,
              garantindo <span className="font-semibold text-foreground">segurança</span>,{" "}
              <span className="font-semibold text-foreground">funcionalidade</span> e{" "}
              <span className="font-semibold text-foreground">design</span> em cada projeto.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa equipe alia conhecimento técnico e compromisso com prazos
              para entregar os melhores resultados. Cada projeto é tratado com
              atenção aos detalhes, desde o planejamento até a execução final.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6">
              {valores.map((valor, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <valor.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground text-sm">
                    {valor.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {valor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Card with Stats */}
          <div className="space-y-6">
            <Card className="border-primary/20 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Missão
                      </h4>
                      <p className="text-muted-foreground">
                        Transformar espaços comerciais em ambientes funcionais e
                        atrativos, superando expectativas com qualidade e
                        pontualidade.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 rounded-full bg-secondary mt-2"></div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Visão
                      </h4>
                      <p className="text-muted-foreground">
                        Ser referência em instalações comerciais, reconhecida
                        pela excelência técnica e compromisso com resultados.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Valores
                      </h4>
                      <p className="text-muted-foreground">
                        Qualidade, Segurança, Pontualidade, Transparência e
                        Compromisso com o cliente.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
