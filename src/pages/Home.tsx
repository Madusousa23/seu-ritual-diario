import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-up">
            Seu Espaço de <span className="text-primary">Autocuidado</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Descubra a beleza que existe em você. Cuidamos de cada detalhe para que você se sinta especial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/agendar">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8">
                Agendar Horário
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/servicos">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 font-medium px-8">
                Nossos Serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-primary" size={28} />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3">Qualidade Premium</h3>
              <p className="text-muted-foreground">
                Produtos de alta qualidade e profissionais experientes para cuidar de você.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={28} />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3">Atendimento Personalizado</h3>
              <p className="text-muted-foreground">
                Cada cliente é único. Personalizamos nossos serviços para suas necessidades.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={28} />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3">Horários Flexíveis</h3>
              <p className="text-muted-foreground">
                Agende online com facilidade e escolha o melhor horário para você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Pronta para se cuidar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Agende seu horário agora e descubra como podemos realçar sua beleza natural.
          </p>
          <Link to="/agendar">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8">
              Agendar Agora
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
