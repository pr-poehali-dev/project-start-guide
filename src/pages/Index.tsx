import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    { type: '1D', price: '1600', description: 'Классический объём' },
    { type: '1,5D', price: '1700', description: 'Лёгкий объём' },
    { type: '2D', price: '1800', description: 'Двойной объём' },
    { type: '2,5D', price: '1900', description: 'Усиленный объём' },
    { type: '3D', price: '2000', description: 'Тройной объём' },
    { type: '4D', price: '2200', description: 'Голливудский объём' },
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/254bf089-d813-4712-9542-da1da5fc2341/files/c76c519e-a6ba-4a32-8917-4ae4f018942e.jpg',
      title: '1D Классика',
      description: 'Естественный и элегантный взгляд'
    },
    {
      image: 'https://cdn.poehali.dev/projects/254bf089-d813-4712-9542-da1da5fc2341/files/1987a5a3-2586-4bdd-9838-42dfeba15e99.jpg',
      title: '3D Объём',
      description: 'Роскошный драматический эффект'
    },
    {
      image: 'https://cdn.poehali.dev/projects/254bf089-d813-4712-9542-da1da5fc2341/files/20ae7298-3caa-448a-85f8-6d7559d4e426.jpg',
      title: '4D Голливуд',
      description: 'Максимальный объём и выразительность'
    }
  ];

  const reviews = [
    { name: 'Анна М.', rating: 5, text: 'Прекрасная работа! Ресницы держатся отлично, выглядят естественно. Обязательно вернусь!' },
    { name: 'Елена К.', rating: 5, text: 'Очень довольна результатом! Мастер профессионал, всё объяснила и подобрала идеальный объём.' },
    { name: 'Мария С.', rating: 5, text: 'Лучший салон в Самаре! Уютная атмосфера, приятные цены и отличный результат.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary/20 to-muted/30">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Альбина | Lash Studio
            </h1>
            <div className="hidden md:flex gap-6">
              {['home', 'services', 'portfolio', 'reviews', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-medium transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-foreground/70 hover:text-primary'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-primary to-accent">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Профессиональное наращивание ресниц
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Взгляд, который{' '}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  завораживает
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Привет! Я Альбина, уже 5 лет создаю безупречную красоту с помощью премиальных материалов и авторских техник наращивания
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform">
                  Записаться на процедуру
                </Button>
                <Button onClick={() => scrollToSection('portfolio')} variant="outline" size="lg">
                  Смотреть работы
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5 лет</div>
                  <div className="text-sm text-muted-foreground">Опыта работы</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Качество</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/254bf089-d813-4712-9542-da1da5fc2341/files/1987a5a3-2586-4bdd-9838-42dfeba15e99.jpg"
                alt="Наращивание ресниц"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-secondary/50 text-primary border-primary/20">Прайс-лист</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий объём наращивания ресниц
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{service.type}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <Icon name="Sparkles" className="text-primary" size={24} />
                  </div>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {service.price}
                    </span>
                    <span className="text-muted-foreground">₽</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent" onClick={() => scrollToSection('contact')}>
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Icon name="Scissors" className="text-primary" size={20} />
                    Снятие ресниц
                  </h3>
                  <p className="text-3xl font-bold text-primary">200 ₽</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Icon name="Gift" className="text-accent" size={20} />
                    Снятие + Наращивание
                  </h3>
                  <p className="text-3xl font-bold text-accent">Бесплатно</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Наши работы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры наших работ – каждый взгляд уникален
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-secondary/30 to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Наша команда</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Обо мне</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Меня зовут Альбина, я занимаюсь наращиванием ресниц уже 5 лет. Моя квалификация подтверждена дипломами и сертификатами
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://cdn.poehali.dev/projects/254bf089-d813-4712-9542-da1da5fc2341/files/6be956e2-2411-41d3-bf34-ace155830644.jpg"
                alt="Сертификаты"
                className="w-full h-96 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="Award" className="text-primary" size={32} />
                  <div>
                    <h3 className="text-2xl font-bold">Сертифицированный мастер Альбина</h3>
                    <p className="text-muted-foreground">Опыт 5 лет • Регулярное обучение и повышение квалификации</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <Icon name="CheckCircle2" className="text-primary mx-auto mb-2" size={24} />
                    <p className="font-semibold">Международные стандарты</p>
                  </div>
                  <div className="text-center">
                    <Icon name="CheckCircle2" className="text-primary mx-auto mb-2" size={24} />
                    <p className="font-semibold">Премиум материалы</p>
                  </div>
                  <div className="text-center">
                    <Icon name="CheckCircle2" className="text-primary mx-auto mb-2" size={24} />
                    <p className="font-semibold">Опыт 5 лет</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-secondary/50 text-primary border-primary/20">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят клиенты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные отзывы от довольных клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">Клиент</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-white/80 text-primary border-primary/20">Свяжитесь с нами</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Записаться на процедуру</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Заполните форму, и мы свяжемся с вами в ближайшее время
              </p>
              <div className="space-y-6">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Адрес</h3>
                        <p className="text-muted-foreground">г. Самара, ул. Примерная, д. 123</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">График работы</h3>
                        <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
                        <p className="text-sm text-muted-foreground mt-1">Работаем без выходных</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Телефон</h3>
                        <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <Card className="border-none shadow-2xl animate-scale-in">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input placeholder="Анна" className="border-2 focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (XXX) XXX-XX-XX" className="border-2 focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Выберите услугу</label>
                    <select className="w-full border-2 rounded-lg px-3 py-2 focus:border-primary focus:outline-none">
                      <option>1D - 1600 ₽</option>
                      <option>1,5D - 1700 ₽</option>
                      <option>2D - 1800 ₽</option>
                      <option>2,5D - 1900 ₽</option>
                      <option>3D - 2000 ₽</option>
                      <option>4D - 2200 ₽</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий</label>
                    <Textarea placeholder="Опишите ваши пожелания..." className="border-2 focus:border-primary" rows={4} />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Альбина | Lash Studio
              </h3>
              <p className="text-white/70">Профессиональное наращивание ресниц в Самаре • Опыт 5 лет</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <p>г. Самара</p>
                <p>+7 (XXX) XXX-XX-XX</p>
                <p>Пн-Вс: 9:00 - 21:00</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <div className="space-y-2 text-white/70">
                <p>Наращивание ресниц</p>
                <p>Снятие ресниц</p>
                <p>Коррекция</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>© 2024 Lash Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;