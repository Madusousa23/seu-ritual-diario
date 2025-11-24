import { Calendar, Clock, Scissors, AlertCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const MeusCuidados = () => {
  const { toast } = useToast();

  // Dados mockados - serão substituídos por dados reais do banco de dados
  const agendamentos = [
    {
      id: 1,
      data: "2024-02-15",
      horario: "14:00",
      servico: "Corte Feminino",
      status: "confirmado",
      numPessoas: 1,
    },
    {
      id: 2,
      data: "2024-03-20",
      horario: "10:00",
      servico: "Coloração Completa",
      status: "confirmado",
      numPessoas: 1,
    },
    {
      id: 3,
      data: "2024-01-10",
      horario: "15:00",
      servico: "Hidratação Profunda",
      status: "concluido",
      numPessoas: 1,
    },
  ];

  const handleCancelar = (id: number) => {
    toast({
      title: "Agendamento cancelado",
      description: "O horário foi liberado e está disponível novamente.",
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const agendamentosFuturos = agendamentos.filter(a => a.status === "confirmado");
  const agendamentosPassados = agendamentos.filter(a => a.status === "concluido");

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Meus <span className="text-primary">Cuidados</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Acompanhe seus agendamentos e histórico de serviços.
          </p>
        </div>

        {/* Próximos Agendamentos */}
        <div className="mb-12 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-serif text-3xl font-bold mb-6">Próximos Agendamentos</h2>
          
          {agendamentosFuturos.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <AlertCircle className="mx-auto mb-4 text-muted-foreground" size={48} />
                <p className="text-muted-foreground mb-4">
                  Você não tem agendamentos futuros.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Agendar Novo Horário
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {agendamentosFuturos.map((agendamento) => (
                <Card key={agendamento.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                            Confirmado
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-2 text-foreground">
                          <Scissors className="text-primary" size={20} />
                          <span className="font-semibold text-lg">{agendamento.servico}</span>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-primary" />
                            <span>{formatDate(agendamento.data)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={16} className="text-primary" />
                            <span>{agendamento.horario}</span>
                          </div>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                        onClick={() => handleCancelar(agendamento.id)}
                      >
                        <Trash2 size={16} className="mr-2" />
                        Cancelar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Histórico */}
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-serif text-3xl font-bold mb-6">Histórico</h2>
          
          {agendamentosPassados.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">
                  Seu histórico de serviços aparecerá aqui.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {agendamentosPassados.map((agendamento) => (
                <Card key={agendamento.id} className="opacity-75">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">Concluído</Badge>
                        </div>
                        
                        <div className="flex items-center gap-2 text-foreground">
                          <Scissors className="text-primary" size={20} />
                          <span className="font-semibold">{agendamento.servico}</span>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{formatDate(agendamento.data)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{agendamento.horario}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-primary/5 border border-primary/20 rounded-lg p-6">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Lembrete:</strong> Você receberá uma notificação 
            1 dia antes de cada agendamento. Para cancelar, utilize o botão acima com pelo menos 
            24 horas de antecedência.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeusCuidados;
