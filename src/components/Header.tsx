import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Menu, X } from "lucide-react";

const NAV_BG = "#0a3d62";       // fully solid dark navy - primary dark fallback
const NAV_CARD_BG = "rgba(255,255,255,0.10)";
const NAV_CARD_BORDER = "1px solid rgba(255,255,255,0.20)";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock/unlock body scroll when mobile menu opens
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const openWhatsApp = () => {
    window.open("https://wa.me/5515998070993?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20especializado.", "_blank");
  };

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Projetos", href: "#projetos" },
    { name: "FAQ", href: "#faq" },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* ─────────────────── HEADER BAR ─────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-3 shadow-2xl" : "py-5"
          }`}
        style={{ backgroundColor: isScrolled ? NAV_BG : "transparent" }}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer shrink-0"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src="/logo.png"
                alt="JC Construções"
                className={`object-contain transition-all duration-500 ${isScrolled ? "h-10" : "h-14"}`}
              />
              <div className="hidden lg:flex flex-col">
                <span className="text-xl font-black text-white tracking-tighter leading-none">
                  JC <span className="text-secondary">CONSTRUÇÕES</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-yellow-300/70">
                  Obras & Acabamentos
                </span>
              </div>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white font-black uppercase text-xs tracking-widest hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <Button
                onClick={openWhatsApp}
                size="lg"
                className="bg-secondary hover:bg-secondary-light text-primary font-black transition-all duration-300 hover:scale-105 shadow-vibrant hidden sm:flex items-center gap-2"
              >
                <MessageSquare size={18} />
                ORÇAMENTO
              </Button>

              {/* Hamburger – always white icon on solid pill */}
              <button
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-label="Toggle Menu"
                className="md:hidden flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: isMobileMenuOpen ? "#FFB703" : "rgba(255,255,255,0.18)",
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  color: isMobileMenuOpen ? "#0a3d62" : "#ffffff",
                }}
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ─────────────────── MOBILE FULLSCREEN MENU ─────────────────── */}
      <div
        aria-hidden={!isMobileMenuOpen}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          backgroundColor: NAV_BG,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          gap: "1rem",
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? "visible" : "hidden",
          transition: "opacity 0.35s ease, visibility 0.35s ease",
          overflowY: "auto",
        }}
      >
        {/* Gold accent bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", backgroundColor: "#FFB703" }} />

        {/* Branding inside menu */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
          <img src="/logo.png" alt="JC Construções" style={{ height: "48px", objectFit: "contain" }} />
          <div>
            <p style={{ color: "#ffffff", fontWeight: 900, fontSize: "18px", letterSpacing: "-0.5px", lineHeight: 1, textTransform: "uppercase" }}>
              JC <span style={{ color: "#FFB703" }}>CONSTRUÇÕES</span>
            </p>
            <p style={{ color: "rgba(255,183,3,0.6)", fontWeight: 700, fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Obras & Acabamentos
            </p>
          </div>
        </div>

        <p style={{ color: "#FFB703", fontWeight: 900, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          MENU DE NAVEGAÇÃO
        </p>

        {/* Nav link cards */}
        <div style={{ width: "100%", maxWidth: "360px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 24px",
                backgroundColor: NAV_CARD_BG,
                border: NAV_CARD_BORDER,
                borderRadius: "16px",
                color: "#ffffff",
                fontWeight: 900,
                fontSize: "20px",
                letterSpacing: "-0.5px",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              <span>{link.name}</span>
              <span style={{ color: "#FFB703", fontSize: "24px", lineHeight: 1 }}>→</span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ width: "100%", maxWidth: "360px", marginTop: "12px" }}>
          <button
            onClick={() => { closeMenu(); openWhatsApp(); }}
            style={{
              width: "100%",
              padding: "20px 24px",
              backgroundColor: "#FFB703",
              border: "none",
              borderRadius: "16px",
              color: "#0a3d62",
              fontWeight: 900,
              fontSize: "18px",
              letterSpacing: "-0.5px",
              textTransform: "uppercase",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <MessageSquare size={22} />
            SOLICITAR ORÇAMENTO
          </button>
        </div>

        <p style={{ color: "rgba(255,255,255,0.2)", fontWeight: 700, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", marginTop: "12px" }}>
          CNPJ: 58.445.151/0001-33
        </p>
      </div>
    </>
  );
};

export default Header;
