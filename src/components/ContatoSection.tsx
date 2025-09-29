import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContatoSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contatoInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 98765-4321",
      action: "tel:+5511987654321",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "(11) 98765-4321",
      action: "https://wa.me/5511987654321",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@jcsolucoes.com.br",
      action: "mailto:contato@jcsolucoes.com.br",
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "São Paulo, SP",
      action: "#",
    },
  ];

  return (
    <section id="contato" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender você e transformar seu projeto em
            realidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Fale Conosco
              </h3>
              <p className="text-muted-foreground">
                Nossa equipe está disponível para esclarecer dúvidas e apresentar
                a melhor solução para seu negócio.
              </p>
            </div>

            <div className="space-y-4">
              {contatoInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.action}
                  target={item.action.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="border-border hover:border-primary transition-all duration-300 hover-lift cursor-pointer">
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {item.title}
                        </div>
                        <div className="text-muted-foreground">{item.info}</div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-4">
                  Horário de Atendimento
                </h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span className="font-semibold">8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span className="font-semibold">8h às 12h</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="nome"
                    className="text-sm font-medium text-foreground"
                  >
                    Nome Completo
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="border-input focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="border-input focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="telefone"
                    className="text-sm font-medium text-foreground"
                  >
                    Telefone
                  </label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(11) 98765-4321"
                    required
                    className="border-input focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="mensagem"
                    className="text-sm font-medium text-foreground"
                  >
                    Mensagem
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Conte-nos sobre seu projeto..."
                    rows={5}
                    required
                    className="border-input focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
