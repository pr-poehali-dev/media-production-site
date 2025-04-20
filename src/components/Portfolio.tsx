import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Portfolio = () => {
  const categories = ["Все", "Фото", "Видео", "Прямые эфиры", "Подкасты"];
  const [activeCategory, setActiveCategory] = useState("Все");

  // Портфолио проектов
  const portfolioItems = [
    {
      id: 1,
      title: "Корпоративная фотосессия",
      category: "Фото",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Рекламный ролик",
      category: "Видео",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Трансляция конференции",
      category: "Прямые эфиры",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Бизнес-подкаст",
      category: "Подкасты",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      title: "Свадебная фотосессия",
      category: "Фото",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      title: "Документальный фильм",
      category: "Видео",
      image: "/placeholder.svg",
    },
  ];

  // Фильтрация элементов по категории
  const filteredItems = activeCategory === "Все" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наше портфолио</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ознакомьтесь с нашими лучшими проектами и работами в различных медиа-форматах
          </p>
        </div>

        <Tabs defaultValue="Все" className="mb-8">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(item => (
                <div key={item.id} className="group overflow-hidden rounded-lg border bg-card">
                  <AspectRatio ratio={16/9} className="bg-muted">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                  </AspectRatio>
                  <div className="p-4">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button size="lg">Смотреть все работы</Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;