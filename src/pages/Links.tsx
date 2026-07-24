import { MapPin, ChevronRight } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5515998070993?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20especializado.";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 448 512" className="w-6 h-6" fill="currentColor">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 448 512" className="w-6 h-6">
    <defs>
      <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#feda75" />
        <stop offset="30%" stopColor="#fa7e1e" />
        <stop offset="60%" stopColor="#d62976" />
        <stop offset="100%" stopColor="#962fbf" />
      </linearGradient>
    </defs>
    <path
      fill="url(#ig-gradient)"
      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
    />
  </svg>
);

const SiteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="url(#site-gradient)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="site-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFB703" />
        <stop offset="100%" stopColor="#FFD060" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="9.5" />
    <ellipse cx="12" cy="12" rx="4" ry="9.5" />
    <path d="M2.5 12h19" />
  </svg>
);

const links = [
  {
    label: "WhatsApp",
    sublabel: "Fale direto com a gente",
    href: WHATSAPP_LINK,
    icon: WhatsAppIcon,
    iconBg: "bg-[#25D366]",
    glow: "hover:shadow-[0_10px_40px_-8px_rgba(37,211,102,0.55)] hover:border-[#25D366]/50",
  },
  {
    label: "Instagram",
    sublabel: "Confira nossas obras",
    href: "https://www.instagram.com/jc.cosntrocoes.obra/",
    icon: InstagramIcon,
    iconBg: "bg-white/10",
    glow: "hover:shadow-[0_10px_40px_-8px_rgba(214,41,118,0.55)] hover:border-[#d62976]/50",
  },
  {
    label: "Site",
    sublabel: "Conheça nossos serviços",
    href: "/",
    icon: SiteIcon,
    iconBg: "bg-white/10",
    glow: "hover:shadow-vibrant hover:border-secondary/50",
    internal: true,
  },
];

const Links = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-5 py-16">
      {/* Background photo, same treatment as the homepage hero */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt=""
          className="w-full h-full object-cover scale-110 blur-[2px]"
        />
        <div className="absolute inset-0 hero-overlay opacity-95" />
        <div className="absolute inset-0 bg-primary-dark/50" />
      </div>

      {/* Decorative ambient glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-secondary/25 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-0 -left-24 w-80 h-80 bg-white/10 rounded-full blur-[100px] opacity-60" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Avatar / Logo */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-secondary/40 blur-2xl" />
          <div className="relative w-28 h-28 rounded-full bg-white/10 backdrop-blur-md border-2 border-secondary/60 shadow-vibrant flex items-center justify-center overflow-hidden">
            <img src="/logo.png" alt="JC Construções" className="w-full h-full object-contain" />
          </div>
        </div>

        <span className="text-3xl font-black text-white tracking-tighter uppercase leading-none">
          JC <span className="text-secondary">CONSTRUÇÕES</span>
        </span>
        <span className="block text-[10px] uppercase tracking-[0.4em] font-black text-secondary-light/70 mt-1.5 mb-5">
          Obras & Acabamentos
        </span>

        <div className="flex items-center gap-1.5 text-white/60 text-[10px] font-bold uppercase tracking-widest mb-10 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
          <MapPin size={11} className="text-secondary" />
          Sorocaba e Região
        </div>

        <div className="w-full flex flex-col gap-4">
          {links.map(({ label, sublabel, href, icon: Icon, iconBg, glow, internal }, i) => (
            <a
              key={label}
              href={href}
              {...(!internal && { target: "_blank", rel: "noopener noreferrer" })}
              className={`group flex items-center gap-4 w-full bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.14] animate-in fade-in slide-in-from-bottom-4 ${glow}`}
              style={{ animationDuration: "700ms", animationDelay: `${150 + i * 100}ms`, animationFillMode: "backwards" }}
            >
              <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center shrink-0 text-white transition-transform duration-300 group-hover:scale-110`}>
                <Icon />
              </div>
              <div className="flex-1 text-left">
                <p className="text-white font-black text-base uppercase tracking-tight leading-tight">{label}</p>
                <p className="text-white/50 text-xs font-medium">{sublabel}</p>
              </div>
              <ChevronRight
                size={18}
                className="text-white/30 shrink-0 transition-all duration-300 group-hover:text-secondary group-hover:translate-x-1"
              />
            </a>
          ))}
        </div>

        <div className="mt-16 text-white/40 text-[10px] font-black tracking-widest uppercase">
          CNPJ: 58.445.151/0001-33
        </div>

        {/* Assinatura BotNeural */}
        <a
          href="https://botneural.com.br"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            textDecoration: 'none',
            padding: '20px',
            marginTop: '10px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            opacity: 0.6,
            transition: 'opacity 0.3s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
        >
          <span style={{ fontSize: '12px', fontWeight: 500, color: '#e5e7eb', letterSpacing: '0.5px' }}>ESTRUTURADO POR</span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 8V4H8"></path>
              <rect width="16" height="12" x="4" y="8" rx="2"></rect>
              <path d="M2 14h2"></path>
              <path d="M20 14h2"></path>
              <path d="M15 13v2"></path>
              <path d="M9 13v2"></path>
            </svg>

            <span style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.5px' }}>
              Bot<span style={{ color: '#3b82f6' }}>Neural</span>
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Links;
