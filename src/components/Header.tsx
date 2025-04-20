import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Film, Camera } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Главная", href: "/" },
    { name: "Услуги", href: "/#services" },
    { name: "Портфолио", href: "/#portfolio" },
    { name: "О нас", href: "/#about" },
    { name: "Контакты", href: "/#contact" },
  ];

  return (
    <header className="fixed w-full bg-background/90 backdrop-blur-sm z-50 border-b">
      <div className="container flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2">
          <Film className="h-6 w-6 text-accent" />
          <span className="font-bold text-xl">МедиаГруп</span>
        </Link>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-foreground/80 hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button>Связаться</Button>
        </nav>

        {/* Мобильное меню кнопка */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Мобильное меню выпадающее */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground/80 hover:text-accent transition-colors py-2"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full">Связаться</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;