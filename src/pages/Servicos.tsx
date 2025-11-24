import { Check, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Servicos = () => {
  const servicos = [
    {
      nome: "Corte Feminino",
      descricao: "Corte personalizado de acordo com seu estilo e formato de rosto",
      preco: "R$ 80,00",
      duracao: "45 min",
      produtos: ["Shampoo Professional", "Condicionador Nutritivo", "Finalizador"],
      destaque: true,
    },
    {
      nome: "Coloração Completa",
      descricao: "Coloração profissional com produtos de alta qualidade e proteção dos fios",
      preco: "R$ 180,00",
      duracao: "2h 30min",
      produtos: ["Tintura Premium", "Protetor Capilar", "Máscara Hidratante"],
      destaque: true,
    },
    {
      nome: "Escova Progressiva",
      descricao: "Tratamento de alisamento com redução de volume e frizz",
      preco: "R$ 250,00",
      duracao: "3h",
      produtos: ["Queratina Brasileira", "Óleo de Argan", "Protetor Térmico"],
      destaque: false,
    },
    {
      nome: "Hidratação Profunda",
      descricao: "Tratamento intensivo para cabelos danificados e ressecados",
      preco: "R$ 120,00",
      duracao: "1h 30min",
      produtos: ["Máscara Ultra Nutritiva", "Ampola de Reconstrução", "Óleo Finalizador"],
      destaque: false,
    },
    {
      nome: "Manicure & Pedicure",
      descricao: "Cuidado completo para unhas das mãos e pés",
      preco: "R$ 60,00",
      duracao: "1h",
      produtos: ["Esmaltes Premium", "Hidratante para Cutículas", "Base Fortalecedora"],
      destaque: false,
    },
    {
      nome: "Maquiagem",
      descricao: "Maquiagem profissional para eventos especiais ou dia a dia",
      preco: "R$ 150,00",
      duracao: "1h 30min",
      produtos: ["Make Premium", "Primers de Fixação", "Produtos Hipoalergênicos"],
      destaque: true,
    },
  ];

  const feedbacks = [
    {
      nome: "Maria Silva",
      comentario: "Melhor salão que já frequentei! O atendimento é impecável e sempre saio de lá me sentindo renovada.",
      rating: 5,
    },
    {
      nome: "Ana Carolina",
      comentario: "Profissionais super qualificados e ambiente acolhedor. Recomendo de olhos fechados!",
      rating: 5,
    },
    {
      nome: "Juliana Costa",
      comentario: "A coloração ficou perfeita! Eles realmente se preocupam com a saúde dos cabelos.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma variedade de serviços para realçar sua beleza natural e cuidar de você.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {servicos.map((servico, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {servico.destaque && (
                  <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                    Popular
                  </Badge>
                )}
                <h3 className="font-serif text-2xl font-bold mb-2">{servico.nome}</h3>
                <p className="text-muted-foreground text-sm mb-4">{servico.descricao}</p>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-primary">{servico.preco}</span>
                  <span className="text-muted-foreground text-sm">• {servico.duracao}</span>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold mb-2">Produtos usados:</p>
                  <ul className="space-y-1">
                    {servico.produtos.map((produto, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check size={16} className="text-primary" />
                        {produto}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feedbacks Section */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            O que nossas clientes dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {feedbacks.map((feedback, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{feedback.comentario}"</p>
                <p className="font-semibold">{feedback.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
