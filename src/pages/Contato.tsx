import { MapPin, Phone, Mail, Clock, Car, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contato = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos aqui para cuidar de você. Entre em contato para agendar ou tirar dúvidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="font-serif text-3xl font-bold mb-8">Informações de Contato</h2>

            <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Endereço</h3>
                <p className="text-muted-foreground">Rua das Flores, 123</p>
                <p className="text-muted-foreground">Jardim Paulista - São Paulo, SP</p>
                <p className="text-muted-foreground">CEP: 01234-567</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Telefone</h3>
                <p className="text-muted-foreground">(11) 99999-9999</p>
                <p className="text-sm text-muted-foreground mt-1">WhatsApp disponível</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">E-mail</h3>
                <p className="text-muted-foreground">contato@essence.com.br</p>
                <p className="text-muted-foreground">atendimento@essence.com.br</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Horário de Funcionamento</h3>
                <p className="text-muted-foreground">Segunda a Sexta: 9h às 20h</p>
                <p className="text-muted-foreground">Sábado: 9h às 18h</p>
                <p className="text-muted-foreground">Domingo: Fechado</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Car className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Estacionamento</h3>
                <p className="text-muted-foreground">Estacionamento conveniado disponível</p>
                <p className="text-sm text-muted-foreground mt-1">2 horas gratuitas para clientes</p>
              </div>
            </div>

            <Button
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium"
              size="lg"
            >
              <MessageCircle className="mr-2" size={20} />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Map */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-serif text-3xl font-bold mb-8">Localização</h2>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976123077393!2d-46.6648158!3d-23.5613991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Essence Salon"
              ></iframe>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Fácil acesso por transporte público e carro. Próximo ao metrô.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
