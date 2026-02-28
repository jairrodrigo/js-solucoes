import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Ricardo Mendes",
        role: "Corretor de imóveis",
        text: "O nível de acabamento da JC Construções é impressionante. Fizemos todo o porcelanato e a pintura fina com eles. O nivelamento ficou perfeito, sem qualquer ressalto.",
    },
    {
        name: "Carla Silveira",
        role: "Arquiteta",
        text: "É difícil encontrar profissionais que entendem de projeto técnico. A JC entregou a obra limpa e exatamente como planejado. Recomendo para meus clientes mais exigentes.",
    },
    {
        name: "Marcos Oliveira",
        role: "Comércio no Centro",
        text: "Contratei para a reforma da fachada e interior. O compromisso com o prazo foi o diferencial. Execução rápida e sem desperdício de material.",
    },
];

const TestimonialsSection = () => {
    return (
        <section id="depoimentos" className="section-padding bg-primary relative overflow-hidden">
            {/* Animated Light Blobs */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-secondary/10 blur-[150px] rounded-full animate-float-slow opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-full bg-white/10 blur-[150px] rounded-full animate-float-slow opacity-10"></div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-6">
                    <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                        O QUE <span className="text-secondary text-shadow-glow">NOSSOS CLIENTES</span> DIZEM
                    </h2>
                    <div className="flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className="w-6 h-6 md:w-8 md:h-8 fill-secondary text-secondary drop-shadow-[0_0_10px_rgba(255,174,0,0.4)]" />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                    {testimonials.map((t, idx) => (
                        <Card key={idx} className="bg-white/10 backdrop-blur-xl border-white/20 hover:border-secondary/50 transition-all duration-500 hover-lift shadow-2xl group overflow-hidden">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            <CardContent className="p-6 md:p-10 space-y-6 md:space-y-8">
                                <Quote className="w-8 h-8 md:w-12 md:h-12 text-secondary opacity-30 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                                <p className="text-white text-lg md:text-xl italic font-medium leading-relaxed">
                                    "{t.text}"
                                </p>
                                <div className="pt-6 border-t border-white/10">
                                    <p className="font-black text-white text-xl md:text-2xl tracking-tight">{t.name}</p>
                                    <p className="text-secondary-light text-[12px] md:text-sm font-black uppercase tracking-[0.2em] mt-1">{t.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
