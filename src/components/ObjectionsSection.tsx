import { ShieldCheck, CalendarCheck2, HardHat, BadgePercent, ChevronRight } from "lucide-react";

const ObjectionsSection = () => {
    const objections = [
        {
            q: "Já teve problema com obra antes?",
            a: "Trabalhamos com planejamento rigoroso e organização técnica para eliminar imprevistos.",
        },
        {
            q: "Medo de retrabalho?",
            a: "Nossa execução é milimétrica, com revisão de acabamento em cada etapa concluída.",
        },
        {
            q: "Obra costuma atrasar?",
            a: "Honramos prazos com transparência total através de cronogramas atualizados.",
        },
        {
            q: "Preço é uma preocupação?",
            a: "Valorizamos seu investimento com zero desperdício e durabilidade de alto padrão.",
        },
    ];

    return (
        <section className="section-padding bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/2"></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
                    {/* Warranty Card */}
                    <div className="relative animate-fade-in-up">
                        <div className="absolute -inset-4 bg-secondary/10 rounded-[3rem] blur-3xl opacity-20"></div>
                        <div className="bg-primary p-8 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] shadow-vibrant text-white relative z-10 border border-white/5 group overflow-hidden">
                            {/* Decorative background icon */}
                            <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                                <ShieldCheck size={240} />
                            </div>

                            <div className="relative z-20">
                                <ShieldCheck className="w-16 h-16 md:w-24 md:h-24 text-secondary mb-8 md:mb-12 drop-shadow-[0_0_20px_rgba(255,174,0,0.4)] animate-float-slow" />
                                <h2 className="text-4xl md:text-6xl font-black mb-6 md:mb-10 uppercase tracking-tighter leading-none">
                                    GARANTIA DE <br className="hidden md:block" />
                                    EXECUÇÃO <span className="text-secondary text-shadow-glow">PROFISSIONAL</span>
                                </h2>
                                <p className="text-lg md:text-2xl text-white/80 leading-relaxed mb-10 md:mb-14 font-medium italic">
                                    Compromisso inabalável com a perfeição técnica e o alto padrão em Sorocaba.
                                </p>
                                <div className="space-y-6 md:space-y-8">
                                    {[
                                        { icon: CalendarCheck2, text: "CRONOGRAMA RIGOROSO" },
                                        { icon: HardHat, text: "EXECUÇÃO DE ELITE" },
                                        { icon: BadgePercent, text: "ZERO DESPERDÍCIO" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-5 text-white font-black text-xs md:text-base tracking-[0.2em] italic group/item">
                                            <div className="p-3 bg-white/5 rounded-xl group-hover/item:bg-secondary group-hover/item:text-primary transition-colors duration-300">
                                                <item.icon size={24} className="text-secondary group-hover/item:text-primary transition-colors duration-300" />
                                            </div>
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Objections List */}
                    <div className="space-y-12 md:space-y-16 mt-12 md:mt-0">
                        <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                            <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] md:text-sm">Incertezas Zero</span>
                            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase leading-none">
                                ELIMINAMOS SUAS <br className="hidden md:block" />
                                <span className="text-secondary text-shadow-glow">INSEGURANÇAS</span>
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground font-medium italic max-w-lg mx-auto lg:mx-0">
                                Transparência e precisão em cada etapa para que você foque apenas no resultado.
                            </p>
                        </div>

                        <div className="space-y-5 md:space-y-8">
                            {objections.map((obj, i) => (
                                <div
                                    key={i}
                                    className="group p-6 md:p-10 bg-muted/30 rounded-[2rem] border-l-[8px] border-secondary/30 hover:border-secondary transition-all duration-500 hover:bg-white hover:shadow-vibrant animate-fade-in-up"
                                    style={{ animationDelay: `${i * 150}ms` }}
                                >
                                    <h3 className="text-xl md:text-3xl font-black text-primary mb-3 md:mb-4 flex items-center gap-3 md:gap-4 leading-tight group-hover:text-secondary-dark transition-colors">
                                        <ChevronRight className="text-secondary group-hover:translate-x-3 transition-transform shrink-0" size={24} />
                                        {obj.q}
                                    </h3>
                                    <p className="text-muted-foreground text-base md:text-xl pl-9 md:pl-11 font-medium leading-relaxed italic border-l border-primary/5 ml-3 md:ml-4">
                                        {obj.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ObjectionsSection;
