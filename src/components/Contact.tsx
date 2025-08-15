import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender sua empresa com soluções personalizadas em contabilidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Fale Conosco
            </h3>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                  <a 
                    href="https://wa.me/5583988329477" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (83) 98832-9477
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                  <a 
                    href="mailto:belcontal@gmail.com" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    belcontal@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                  <p className="text-muted-foreground">
                    Rua Rodrigues de Farias, 160<br />
                    Santa Rosa, Campina Grande - PB
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Instagram</h4>
                  <a 
                    href="https://instagram.com/belcontal" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @belcontal
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Button 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gray w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/5583988329477', '_blank')}
              >
                Iniciar Conversa no WhatsApp
              </Button>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Nossa Localização
            </h3>
            
            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.5901!2d-35.9068219!3d-7.2357714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1e10a9ec006d%3A0x386b92a2a5877f01!2sR.%20Rodrigues%20de%20Farias%2C%20160%20-%20Santa%20Rosa%2C%20Campina%20Grande%20-%20PB%2C%2058416-595!5e0!3m2!1spt-BR!2sbr!4v1645123456789!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização BEL CONTAL CONTABILIDADE"
                className="w-full"
              ></iframe>
            </div>

            {/* Business Hours Note */}
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-5 w-5 text-accent" />
                <h4 className="font-semibold text-foreground">Horário de Atendimento</h4>
              </div>
              <p className="text-muted-foreground">
                Entre em contato para conhecer nossos horários de funcionamento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;