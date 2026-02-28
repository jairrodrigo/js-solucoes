import { ShieldCheck, CalendarCheck2, HardHat, BadgePercent, ChevronRight } from "lucide-react";

const ObjectionsSection = () => {
    const objections = [
        {
            q: "Já teve problema com obra antes?",
            a: "Trabalhamos com planejamento e organização técnica para evitar surpresas.",
        },
        {
            q: "Medo de retrabalho?",
            a: "Execução precisa e acabamento revisado em cada etapa do processo.",
        },
        {
            q: "Obra costuma atrasar?",
            a: "Compromisso inabalável com o prazo e cronograma acordado.",
        },
        {
            q: "Preço é uma preocupação?",
            a: "Investimento inteligente que evita desperdícios e valoriza seu imóvel.",
        },
    ];

    return (
        <section className="section-padding bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl opacity-50"></div>
            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Warranty Card */}
                    <div className="relative animate-float-slow">
                        <div className="absolute -inset-4 bg-secondary/20 rounded-[3rem] blur-2xl opacity-30"></div>
                        <div className="bg-primary p-6 md:p-12 rounded-3xl md:rounded-[2.5rem] shadow-vibrant text-white relative z-10 border border-white/10 group overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <ShieldCheck size={120} className="md:w-[160px] md:h-[160px]" />
                            </div>
                            <ShieldCheck className="w-14 h-14 md:w-20 md:h-20 text-secondary mb-6 md:mb-8 drop-shadow-[0_0_15px_rgba(255,174,0,0.5)]" />
                            <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 uppercase tracking-tighter leading-none">
                                GARANTIA DE EXECUÇÃO <span className="text-secondary">PROFISSIONAL</span>
                            </h2>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 md:mb-10 font-medium">
                                Trabalhamos com compromisso absoluto, qualidade técnica superior e garantia total em cada centímetro da obra.
                            </p>
                            <div className="space-y-4 md:space-y-6">
                                {[
                                    { icon: CalendarCheck2, text: "CRONOGRAMA RIGOROSO" },
                                    { icon: HardHat, text: "MÃO DE OBRA ESPECIALIZADA" },
                                    { icon: BadgePercent, text: "ECONOMIA E ZERO DESPERDÍCIO" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 md:gap-4 text-white font-black text-[12px] md:text-sm tracking-widest italic">
                                        <item.icon size={24} className="text-secondary md:w-7 md:h-7" />
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Objections List */}
                    <div className="space-y-10 md:space-y-12">
                        <div>
                            <h2 className="text-3xl md:text-6xl font-black text-primary tracking-tighter mb-4 uppercase leading-none">
                                AINDA TEM <span className="text-secondary text-shadow-glow">DÚVIDAS</span>?
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground font-medium italic">Eliminamos qualquer incerteza para você focar no resultado final.</p>
                        </div>

                        <div className="space-y-4 md:space-y-6">
                            {objections.map((obj, i) => (
                                <div key={i} className="group p-5 md:p-8 bg-muted/50 rounded-2xl border-l-[6px] border-secondary transition-all duration-300 hover:bg-white hover:shadow-vibrant">
                                    <h3 className="text-xl md:text-2xl font-black text-primary mb-2 md:mb-3 flex items-center gap-2 md:gap-3">
                                        <ChevronRight className="text-secondary group-hover:translate-x-2 transition-transform shrink-0" size={20} />
                                        {obj.q}
                                    </h3>
                                    <p className="text-muted-foreground text-base md:text-lg pl-8 md:pl-10 font-medium">{obj.a}</p>
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
