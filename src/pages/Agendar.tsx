import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Users, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Agendar = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    cpf: "",
    data: "",
    horario: "",
    servico: "",
    numPessoas: "1",
  });

  const servicos = [
    "Corte Feminino",
    "Coloração Completa",
    "Escova Progressiva",
    "Hidratação Profunda",
    "Manicure & Pedicure",
    "Maquiagem",
  ];

  const horarios = [
    "09:00", "10:00", "11:00", "12:00", 
    "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Agendamento realizado!",
      description: "Você receberá uma confirmação em breve. Um lembrete será enviado 1 dia antes.",
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Agendar <span className="text-primary">Horário</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Preencha o formulário abaixo para agendar seu horário. Você receberá um lembrete 1 dia antes.
          </p>
        </div>

        <Card className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Dados do Agendamento</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Informações Pessoais */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="nome" className="flex items-center gap-2 mb-2">
                    <FileText size={18} className="text-primary" />
                    Nome Completo *
                  </Label>
                  <Input
                    id="nome"
                    placeholder="Digite seu nome completo"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="telefone" className="mb-2 block">
                      Telefone / WhatsApp *
                    </Label>
                    <Input
                      id="telefone"
                      placeholder="(11) 99999-9999"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="cpf" className="mb-2 block">
                      CPF *
                    </Label>
                    <Input
                      id="cpf"
                      placeholder="000.000.000-00"
                      value={formData.cpf}
                      onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Serviço */}
              <div>
                <Label htmlFor="servico" className="mb-2 block">
                  Tipo de Serviço *
                </Label>
                <select
                  id="servico"
                  className="w-full h-10 px-3 rounded-md border border-input bg-background"
                  value={formData.servico}
                  onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                  required
                >
                  <option value="">Selecione um serviço</option>
                  {servicos.map((servico) => (
                    <option key={servico} value={servico}>
                      {servico}
                    </option>
                  ))}
                </select>
              </div>

              {/* Data e Horário */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="data" className="flex items-center gap-2 mb-2">
                    <Calendar size={18} className="text-primary" />
                    Data *
                  </Label>
                  <Input
                    id="data"
                    type="date"
                    value={formData.data}
                    onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="horario" className="flex items-center gap-2 mb-2">
                    <Clock size={18} className="text-primary" />
                    Horário *
                  </Label>
                  <select
                    id="horario"
                    className="w-full h-10 px-3 rounded-md border border-input bg-background"
                    value={formData.horario}
                    onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                    required
                  >
                    <option value="">Selecione um horário</option>
                    {horarios.map((horario) => (
                      <option key={horario} value={horario}>
                        {horario}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Número de Pessoas */}
              <div>
                <Label htmlFor="numPessoas" className="flex items-center gap-2 mb-2">
                  <Users size={18} className="text-primary" />
                  Número de Pessoas
                </Label>
                <Input
                  id="numPessoas"
                  type="number"
                  min="1"
                  max="5"
                  value={formData.numPessoas}
                  onChange={(e) => setFormData({ ...formData, numPessoas: e.target.value })}
                />
              </div>

              {/* Alert Info */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Importante:</strong> Você receberá uma mensagem de confirmação 
                  e um lembrete será enviado 1 dia antes do seu horário agendado.
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                size="lg"
              >
                Confirmar Agendamento
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Agendar;
