import { Button } from "@/components/ui/button";
import { MessageSquare, Target, UserCheck, ShieldCheck } from "lucide-react";

const SobreSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5515998070993?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20especializado.", "_blank");
  };

  return (
    <div id="sobre">
      {/* About Us */}
      <section className="section-padding bg-muted/30 relative">
        <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="text-secondary font-black tracking-[0.4em] uppercase text-xs md:text-sm drop-shadow-sm">Nossa Trajetória</span>
                <h2 className="text-3xl md:text-7xl font-black text-primary tracking-tighter uppercase leading-[0.9]">
                  PROFISSIONALISMO E <span className="text-secondary text-shadow-glow">COMPROMISSO</span>
                </h2>
                <div className="h-2 w-32 bg-secondary rounded-full mx-auto"></div>
              </div>

              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-medium italic max-w-2xl mx-auto">
                Atuamos em Sorocaba e região com foco total em obras e acabamentos de alto padrão.
                Compromisso inabalável com a perfeição técnica.
              </p>

              <div className="flex justify-center gap-8 md:gap-16 pt-8">
                {[
                  { icon: Target, text: "FOCO TOTAL" },
                  { icon: UserCheck, text: "EQUIPE ELITE" },
                  { icon: ShieldCheck, text: "QUALIDADE" },
                ].map((item, i) => (
                  <div key={i} className="space-y-4 group">
                    <div className="p-4 md:p-6 bg-primary/5 rounded-2xl md:rounded-3xl w-fit mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-500 hover:scale-110">
                      <item.icon className="text-secondary w-8 h-8 md:w-12 md:h-12 group-hover:text-white" />
                    </div>
                    <h4 className="font-black text-primary uppercase text-[10px] md:text-sm tracking-widest">{item.text}</h4>
                  </div>
                ))}
              </div>

              <div className="pt-12">
                <Button
                  size="lg"
                  onClick={openWhatsApp}
                  className="bg-primary hover:bg-primary-light text-white font-black text-xl md:text-2xl px-12 py-10 shadow-vibrant transition-all duration-500 hover:scale-105 flex items-center justify-center gap-4 mx-auto rounded-2xl"
                >
                  <MessageSquare size={24} className="md:w-8 md:h-8" />
                  ENTRAR EM CONTATO AGORA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreSection;
