import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/3e133b37-46ac-4a6f-a515-925e7e50a4c4.png" 
                alt="BEL CONTAL CONTABILIDADE" 
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Empresa familiar especializada em contabilidade empresarial, 
              oferecendo serviços personalizados desde 2015.
            </p>
            <p className="text-sm text-primary-foreground/60">
              CNPJ: 009.142.724-03
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5583988329477" 
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-4 w-4" />
                <span>(83) 98832-9477</span>
              </a>
              
              <a 
                href="mailto:belcontal@gmail.com" 
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>belcontal@gmail.com</span>
              </a>
              
              <div className="flex items-start space-x-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">
                  Rua Rodrigues de Farias, 160<br />
                  Santa Rosa, Campina Grande - PB
                </span>
              </div>
              
              <a 
                href="https://instagram.com/belcontal" 
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" />
                <span>@belcontal</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Principais Serviços</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>• Abertura de Empresas</li>
              <li>• Folha de Pagamento</li>
              <li>• Planejamento Tributário</li>
              <li>• Consultoria Financeira</li>
              <li>• Obrigações Acessórias</li>
              <li>• Certificado Digital</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} BEL CONTAL CONTABILIDADE. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm mt-2 md:mt-0">
              Contabilidade empresarial é na BelContal!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;