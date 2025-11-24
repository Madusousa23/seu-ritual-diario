import { Heart, Star, Users, Award } from "lucide-react";

const QuemSomos = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Quem <span className="text-primary">Somos</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mais do que um salão, somos um espaço dedicado ao seu bem-estar e autoestima.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
              <Heart className="text-primary" size={120} strokeWidth={1} />
            </div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-serif text-4xl font-bold mb-6">Nossa Missão</h2>
            <p className="text-muted-foreground text-lg mb-4">
              No Essence, acreditamos que o autocuidado é essencial para o bem-estar físico e emocional. 
              Nossa missão é proporcionar uma experiência transformadora, onde cada cliente se sinta 
              valorizada e especial.
            </p>
            <p className="text-muted-foreground text-lg">
              Cuidamos não apenas da sua beleza exterior, mas também da sua autoestima e confiança, 
              criando um ambiente acolhedor e relaxante onde você pode ser você mesma.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-primary" size={28} />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Excelência</h3>
            <p className="text-sm text-muted-foreground">
              Buscamos a perfeição em cada detalhe do nosso atendimento.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-primary" size={28} />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Cuidado</h3>
            <p className="text-sm text-muted-foreground">
              Tratamos cada cliente com carinho e atenção personalizada.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-primary" size={28} />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Comunidade</h3>
            <p className="text-sm text-muted-foreground">
              Criamos um espaço de conexão e apoio entre mulheres.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-primary" size={28} />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Qualidade</h3>
            <p className="text-sm text-muted-foreground">
              Usamos apenas os melhores produtos e técnicas.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-8">Nossa História</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-lg mb-6">
              Fundado em 2018, o Essence nasceu do sonho de criar um espaço onde as mulheres 
              pudessem se reconectar consigo mesmas. Com uma equipe apaixonada e dedicada, 
              crescemos junto com nossas clientes, celebrando suas transformações e conquistas.
            </p>
            <p className="text-muted-foreground text-lg">
              Hoje, somos muito mais do que um salão de beleza. Somos uma comunidade que 
              valoriza o autocuidado, a autoestima e o empoderamento feminino. Cada serviço 
              é realizado com amor e profissionalismo, porque acreditamos que você merece o melhor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;
