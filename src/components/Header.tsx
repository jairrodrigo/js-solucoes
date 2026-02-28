import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/5515998070993?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20especializado.", "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-primary backdrop-blur-md py-3 shadow-2xl"
        : "bg-transparent py-6"
        }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Branding */}
          <div className="flex items-center gap-3 group cursor-pointer shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-secondary rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/logo.png"
                alt="JC Construções Logo"
                className={`transition-all duration-500 ${isScrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'} object-contain relative`}
              />
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="text-xl font-black text-white tracking-tighter leading-none">
                JC <span className="text-secondary text-shadow-glow">CONSTRUÇÕES</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-secondary-light/80">
                Obras & Acabamentos
              </span>
            </div>
          </div>

          {/* Persistent CTA */}
          <Button
            onClick={openWhatsApp}
            size="lg"
            className="bg-secondary hover:bg-secondary-light text-primary font-black transition-all duration-300 hover:scale-110 shadow-vibrant hidden sm:flex items-center gap-2 group"
          >
            <MessageSquare size={18} className="group-hover:animate-bounce" />
            SOLICITAR MEU ORÇAMENTO
          </Button>

          {/* Mobile CTA (Smaller) */}
          <Button
            onClick={openWhatsApp}
            size="sm"
            className="sm:hidden bg-secondary hover:bg-secondary-light text-primary font-black px-5 py-6 rounded-xl hover:scale-105 active:scale-95 shadow-lg shrink-0"
          >
            ORÇAMENTO
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
