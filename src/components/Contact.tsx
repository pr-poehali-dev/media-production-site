import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Заполните форму, и мы свяжемся с вами в ближайшее время
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg mb-2">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Медийная, д. 42</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 flex items-start gap-4">
                    <Phone className="h-6 w-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg mb-2">Телефон</h3>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 flex items-start gap-4">
                    <Mail className="h-6 w-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground">info@mediagroup.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Имя
                    </label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Ваш email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Телефон
                  </label>
                  <Input id="phone" placeholder="Ваш телефон" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем проекте"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full gap-2">
                  Отправить заявку <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;