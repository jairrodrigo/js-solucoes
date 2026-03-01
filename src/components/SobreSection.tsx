import { Button } from "@/components/ui/button";
import { MessageSquare, Target, UserCheck, ShieldCheck } from "lucide-react";

const SobreSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5515998070993?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20especializado.", "_blank");
  };

  return (
    <div id="sobre">
      {/* About Us */}
      <section className="section-padding bg-muted/40 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-[radial-gradient(circle,rgba(255,174,0,0.03)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="container-custom relative z-10 max-w-5xl mx-auto text-center px-6">
          <div className="space-y-12 md:space-y-20">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-4 md:space-y-6">
                <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] md:text-sm drop-shadow-sm block animate-fade-in">Nossa Trajetória</span>
                <h2 className="text-4xl md:text-7xl font-black text-primary tracking-tighter uppercase leading-[0.95] animate-fade-in-up">
                  PROFISSIONALISMO E <br className="hidden md:block" />
                  <span className="text-secondary text-shadow-glow">COMPROMISSO</span>
                </h2>
                <div className="h-2 w-32 bg-secondary rounded-full mx-auto animate-scale-in"></div>
              </div>

              <p className="text-xl md:text-3xl text-muted-foreground leading-relaxed font-medium italic max-w-3xl mx-auto animate-fade-in-up delay-200">
                Atuamos em Sorocaba e região com foco total em obras e acabamentos de alto padrão.
                Nosso diferencial é o compromisso inabalável com a precisão técnica e o detalhe que faz a diferença.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 pt-10 md:pt-16 max-w-4xl mx-auto">
                {[
                  { icon: Target, text: "FOCO TOTAL", desc: "Resultados Impecáveis" },
                  { icon: UserCheck, text: "EQUIPE ELITE", desc: "Mão de obra própria" },
                  { icon: ShieldCheck, text: "QUALIDADE", desc: "Garantia Técnica" },
                ].map((item, i) => (
                  <div key={i} className="space-y-4 group animate-fade-in-up" style={{ animationDelay: `${(i + 3) * 100}ms` }}>
                    <div className="p-6 md:p-8 bg-white shadow-vibrant rounded-[2rem] md:rounded-[2.5rem] w-fit mx-auto border border-primary/5 group-hover:bg-primary transition-all duration-500 hover:scale-110">
                      <item.icon className="text-secondary w-10 h-10 md:w-14 md:h-14 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <h4 className="font-black text-primary uppercase text-xs md:text-base tracking-[0.2em]">{item.text}</h4>
                      <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1 group-hover:text-secondary-light transition-colors">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-16 md:pt-20">
                <Button
                  size="lg"
                  onClick={openWhatsApp}
                  className="bg-primary hover:bg-primary-light text-white font-black text-xl md:text-2xl px-12 md:px-16 py-8 md:py-12 shadow-vibrant transition-all duration-500 hover:scale-105 flex items-center justify-center gap-4 mx-auto rounded-2xl md:rounded-full animate-float-slow w-full sm:w-auto"
                >
                  <MessageSquare size={28} className="md:w-10 md:h-10" />
                  FALAR COM JC CONSTRUÇÕES
                </Button>
                <p className="mt-6 text-[10px] md:text-xs text-muted-foreground font-black uppercase tracking-[0.3em]">Atendimento Personalizado via WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreSection;
