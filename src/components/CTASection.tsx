import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-r from-primary via-primary to-primary-light text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Pronto para Transformar seu{" "}
            <span className="text-secondary">Espaço Comercial?</span>
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Entre em contato conosco e receba uma proposta personalizada para
            seu projeto. Nossa equipe está pronta para atender você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-6 shadow-xl hover-lift"
            >
              Solicite seu Orçamento Agora
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-semibold text-lg px-8 py-6"
            >
              <Phone className="mr-2" size={20} />
              Falar com Especialista
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">100+</div>
              <div className="text-white/80">Projetos Realizados</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">24h</div>
              <div className="text-white/80">Resposta Garantida</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">98%</div>
              <div className="text-white/80">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
