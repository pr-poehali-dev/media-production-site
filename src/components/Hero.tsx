import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Превращаем идеи в <span className="text-gradient">визуальные истории</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Профессиональная фото и видео съемка, монтаж видео, проведение прямых эфиров и подкастов для вашего бизнеса и личного бренда.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2">
              Наши услуги <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Посмотреть портфолио
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;