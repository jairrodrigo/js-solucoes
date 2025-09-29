import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuLinks = [
    { label: "Início", id: "inicio" },
    { label: "Serviços", id: "servicos" },
    { label: "Sobre", id: "sobre" },
    { label: "Benefícios", id: "beneficios" },
    { label: "Contato", id: "contato" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              JC <span className="text-secondary">Soluções</span>
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              Especialistas em instalações e montagens comerciais com qualidade e
              eficiência.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Links Rápidos</h4>
            <ul className="space-y-2">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Serviços</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li>Montagem de Mobiliário</li>
              <li>Infraestrutura Elétrica</li>
              <li>Comunicação Visual</li>
              <li>Consultoria e Planejamento</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:+5511987654321"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>(11) 98765-4321</span>
              </a>
              <a
                href="mailto:contato@jcsolucoes.com.br"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>contato@jcsolucoes.com.br</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} JC Soluções - Todos os direitos
              reservados.
            </p>
            <div className="flex space-x-6 text-primary-foreground/60 text-sm">
              <button className="hover:text-secondary transition-colors">
                Política de Privacidade
              </button>
              <button className="hover:text-secondary transition-colors">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
