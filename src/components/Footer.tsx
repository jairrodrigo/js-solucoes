import { Button } from "@/components/ui/button";
import { MessageSquare, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5515998070993?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20especializado.", "_blank");
  };

  return (
    <footer className="bg-primary pt-12 md:pt-28 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] opacity-30"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">
          {/* Brand & CNPJ */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <div className="flex flex-col gap-4">
              <img src="/logo.png" alt="JC Construções" className="h-14 md:h-20 object-contain w-fit mx-auto md:mx-0" />
              <div>
                <span className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-none">
                  JC <span className="text-secondary">CONSTRUÇÕES</span>
                </span>
                <span className="block text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-black text-secondary-light/60 mt-1">
                  Obras & Acabamentos
                </span>
              </div>
            </div>
            <p className="text-white/60 text-base md:text-lg font-medium italic leading-relaxed max-w-xs mx-auto md:mx-0">
              Excelência técnica e compromisso absoluto com o alto padrão em Sorocaba.
            </p>
            <div className="text-white/40 text-[10px] md:text-xs font-black tracking-widest uppercase">
              CNPJ: 58.445.151/0001-33
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <h4 className="text-white font-black text-lg md:text-xl uppercase tracking-[0.2em]">Contato</h4>
            <ul className="space-y-5 md:space-y-6">
              <li className="flex items-center gap-4 md:gap-5 text-white/90 justify-center md:justify-start group cursor-pointer" onClick={openWhatsApp}>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-secondary group-hover:scale-110 group-hover:shadow-vibrant">
                  <Phone size={20} className="text-secondary group-hover:text-primary transition-colors md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-secondary-light uppercase tracking-widest font-black">WhatsApp Direto</p>
                  <p className="text-xl md:text-2xl font-black tracking-tighter">(15) 99807-0993</p>
                </div>
              </li>
              <li className="flex items-center gap-4 md:gap-5 text-white/90 justify-center md:justify-start group cursor-pointer">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-secondary group-hover:scale-110 group-hover:shadow-vibrant">
                  <MapPin size={20} className="text-secondary group-hover:text-primary transition-colors md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-secondary-light uppercase tracking-widest font-black">Área de Atuação</p>
                  <p className="text-lg md:text-2xl font-black tracking-tighter uppercase">Sorocaba e Região</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Final CTA */}
          <div className="lg:col-span-2 space-y-6 md:space-y-10 text-center md:text-left bg-white/5 p-8 md:p-12 rounded-3xl md:rounded-[2.5rem] border border-white/10 backdrop-blur-sm shadow-2xl">
            <h4 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              PRONTO PARA <span className="text-secondary text-shadow-glow">VALORIZAR</span> SEU IMÓVEL?
            </h4>
            <Button
              size="lg"
              onClick={openWhatsApp}
              className="bg-secondary hover:bg-secondary-light text-primary-dark font-black text-lg md:text-2xl px-10 md:px-16 py-8 md:py-10 rounded-2xl md:rounded-full shadow-vibrant transition-all duration-500 hover:scale-105 flex items-center gap-4 w-full sm:w-auto mx-auto md:mx-0 justify-center"
            >
              <MessageSquare size={28} className="md:w-8 md:h-8" />
              SOLICITAR ORÇAMENTO AGORA
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[10px] md:text-xs font-black uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} JC Construções - Todos os direitos reservados.
          </p>
          <div className="flex gap-6 md:gap-8">
            <span className="text-white/30 text-[9px] font-black uppercase tracking-[0.2em] border-b border-white/5 pb-1">Alta Performance</span>
            <span className="text-white/30 text-[9px] font-black uppercase tracking-[0.2em] border-b border-white/5 pb-1">Alto Padrão Técnico</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
