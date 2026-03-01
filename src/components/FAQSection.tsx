import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const faqs = [
    {
        q: "Quanto tempo leva uma obra?",
        a: "O tempo varia conforme a complexidade e metragem, mas trabalhamos com um cronograma técnico rigoroso apresentado logo no início do projeto.",
    },
    {
        q: "Vocês oferecem garantia?",
        a: "Sim, oferecemos garantia total sobre a execução de nossos serviços, assegurando a qualidade do acabamento e da estrutura.",
    },
    {
        q: "Como funciona o orçamento?",
        a: "Após o primeiro contato via WhatsApp, agendamos uma visita técnica (se necessário) ou solicitamos fotos/vídeos para fornecer um orçamento preciso e detalhado.",
    },
    {
        q: "Trabalham com contrato?",
        a: "Sim, todos os nossos serviços são formalizados via contrato, garantindo segurança jurídica e clareza sobre o escopo de trabalho para ambas as partes.",
    },
    {
        q: "Atendem toda Sorocaba?",
        a: "Sim, atendemos todos os bairros de Sorocaba e também cidades vizinhas na região metropolitana.",
    },
    {
        q: "Quais formas de pagamento?",
        a: "Aceitamos diversas formas de pagamento, incluindo PIX, transferência bancária e parcelamento no cartão de crédito. Condições facilitadas conforme o projeto.",
    },
];

const FAQSection = () => {
    const openWhatsApp = () => {
        window.open("https://wa.me/5515998070993?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20especializado.", "_blank");
    };

    return (
        <section id="faq" className="section-padding bg-muted relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl opacity-50"></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
                    <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                        <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase leading-none">
                            PERGUNTAS <span className="text-secondary text-shadow-glow">FREQUENTES</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground font-medium italic max-w-lg mx-auto lg:mx-0">
                            Respondemos suas principais dúvidas para garantir total clareza na sua decisão.
                        </p>
                        <div className="pt-2 md:pt-4">
                            <Button
                                size="lg"
                                onClick={openWhatsApp}
                                className="bg-primary hover:bg-primary-light text-white font-black text-lg md:text-xl px-10 md:px-12 py-8 md:py-10 rounded-2xl md:rounded-full shadow-vibrant flex items-center justify-center gap-4 animate-float-slow w-full sm:w-auto mx-auto lg:mx-0"
                            >
                                <MessageSquare size={24} />
                                AINDA TENHO DÚVIDAS
                            </Button>
                        </div>
                    </div>

                    <div className="bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-vibrant border border-primary/5 mt-10 md:mt-0">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border-b border-primary/5 py-1 md:py-3 last:border-0 group">
                                    <AccordionTrigger className="text-left text-lg md:text-xl font-black text-primary hover:no-underline hover:text-secondary transition-all group-data-[state=open]:text-secondary group-data-[state=open]:pb-6">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed pb-6">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
