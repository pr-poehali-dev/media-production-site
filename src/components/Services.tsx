import { Camera, Video, Tv, Mic, Scissors, Radio } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const servicesList = [
    {
      icon: <Camera className="h-10 w-10 text-accent" />,
      title: "Фотосъемка",
      description: "Профессиональная съемка для всех типов проектов: от корпоративных портретов до рекламных кампаний."
    },
    {
      icon: <Video className="h-10 w-10 text-accent" />,
      title: "Видеосъемка",
      description: "Создание высококачественного видеоконтента для бизнеса, рекламы, мероприятий и личных проектов."
    },
    {
      icon: <Scissors className="h-10 w-10 text-accent" />,
      title: "Монтаж видео",
      description: "Профессиональный монтаж, цветокоррекция, добавление спецэффектов и звуковое оформление."
    },
    {
      icon: <Tv className="h-10 w-10 text-accent" />,
      title: "Прямые эфиры",
      description: "Организация и техническое обеспечение трансляций мероприятий, презентаций и вебинаров."
    },
    {
      icon: <Mic className="h-10 w-10 text-accent" />,
      title: "Подкасты",
      description: "Запись, монтаж и продвижение подкастов с профессиональным звуковым оборудованием."
    },
    {
      icon: <Radio className="h-10 w-10 text-accent" />,
      title: "Аэросъемка",
      description: "Захватывающие кадры с высоты птичьего полета с использованием современных дронов."
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем полный спектр медиа-услуг для создания качественного контента
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <Card key={index} className="border transition-all hover:shadow-md">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;