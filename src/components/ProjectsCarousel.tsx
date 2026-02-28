import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const projects = [
    {
        title: "Residência Alto Padrão",
        description: "Execução arquitetônica com foco em design e sofisticação.",
        image: "/projects/real-p1.jpeg",
    },
    {
        title: "Nivelamento Técnico",
        description: "Precisão absoluta com tecnologia laser para acabamento fino.",
        image: "/projects/real-p2.jpeg",
    },
    {
        title: "Revestimentos Especiais",
        description: "Pedras naturais e texturas que valorizam o ambiente.",
        image: "/projects/real-p3.jpeg",
    },
    {
        title: "Áreas de Lazer Premium",
        description: "Integração total entre interior e exterior com esquadrias finas.",
        image: "/projects/real-p4.jpeg",
    },
    {
        title: "Interiores de Luxo",
        description: "Acabamentos impecáveis para ambientes de convívio.",
        image: "/projects/real-p5.jpeg",
    },
];

const ProjectsCarousel = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <section id="projetos" className="section-padding bg-muted/20 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-6">
                    <span className="text-secondary font-black tracking-[0.4em] uppercase text-xs md:text-sm drop-shadow-sm">Nosso Portfolio</span>
                    <h2 className="text-3xl md:text-6xl font-black text-primary tracking-tighter uppercase leading-[0.9]">
                        PROJETOS QUE <span className="text-secondary text-shadow-glow">INSPIRAM</span>
                    </h2>
                    <div className="h-2 w-24 bg-secondary mx-auto rounded-full"></div>
                </div>

                <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-5xl mx-auto"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent className="-ml-4">
                        {projects.map((project, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                                <Card className="border-none bg-transparent group cursor-grab active:cursor-grabbing">
                                    <CardContent className="p-0 relative overflow-hidden rounded-[2rem] shadow-vibrant border border-primary/5">
                                        {/* Image with hover effect */}
                                        <div className="aspect-[4/3] overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Text Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
                                            <h3 className="text-white font-black text-xl md:text-3xl uppercase tracking-tighter leading-none mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                {project.title}
                                            </h3>
                                            <p className="text-secondary-light font-medium text-sm md:text-lg italic transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Badge for Always visible title in mobile if needed, but let's stick to premium hover */}
                                        <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 md:hidden">
                                            <h3 className="text-white font-black text-sm uppercase tracking-tighter leading-none">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious className="left-[-50px] bg-white border-primary/10 text-primary hover:bg-primary hover:text-white transition-all size-12" />
                        <CarouselNext className="right-[-50px] bg-white border-primary/10 text-primary hover:bg-primary hover:text-white transition-all size-12" />
                    </div>
                </Carousel>

                {/* Call to action below carousel */}
                <div className="mt-16 text-center">
                    <p className="text-muted-foreground font-medium italic text-lg mb-8">
                        Cada obra é tratada como uma obra de arte única.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectsCarousel;
