import { 
  Building, 
  FileText, 
  Users, 
  Calculator, 
  PiggyBank, 
  UserCheck, 
  FileCheck, 
  Shield,
  Smartphone,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Abertura de Empresas",
      description: "Processo completo para abertura da sua empresa com toda documentação necessária e orientação jurídica.",
      features: ["Escolha do tipo societário", "Registro na Junta Comercial", "Inscrições municipais e estaduais"]
    },
    {
      icon: FileText,
      title: "Obrigações Acessórias",
      description: "Envio mensal de todas as obrigações fiscais e trabalhistas para manter sua empresa em dia.",
      features: ["SPED Fiscal", "SPED Contábil", "ECF e ECD", "DIRF e RAIS"]
    },
    {
      icon: Users,
      title: "Folha de Pagamento",
      description: "Gestão completa da folha de pagamento com cálculos precisos e cumprimento das obrigações trabalhistas.",
      features: ["Cálculo de salários", "Encargos sociais", "Rescisões", "eSocial"]
    },
    {
      icon: Calculator,
      title: "Fiscal e Contábil",
      description: "Serviços contábeis e fiscais completos para manter sua empresa organizada e em conformidade.",
      features: ["Escrituração contábil", "Apuração de impostos", "Balancetes", "Demonstrações contábeis"]
    },
    {
      icon: PiggyBank,
      title: "Planejamento Tributário",
      description: "Estratégias para redução legal da carga tributária e otimização fiscal da sua empresa.",
      features: ["Análise tributária", "Escolha do regime", "Redução de impostos", "Elisão fiscal"]
    },
    {
      icon: UserCheck,
      title: "Consultoria Financeira",
      description: "Orientação especializada para tomada de decisões financeiras estratégicas.",
      features: ["Análise financeira", "Fluxo de caixa", "Indicadores", "Relatórios gerenciais"]
    },
    {
      icon: FileCheck,
      title: "Assessoria para MEI",
      description: "Suporte completo para Microempreendedores Individuais com serviços especializados.",
      features: ["Declaração anual", "Orientações fiscais", "Migração para ME", "Consultoria MEI"]
    },
    {
      icon: Shield,
      title: "Recuperação de Créditos",
      description: "Identificação e recuperação de créditos tributários para sua empresa.",
      features: ["Análise de créditos", "PER/DCOMP", "Compensações", "Restituições"]
    },
    {
      icon: Smartphone,
      title: "Sistema Emissor de NFe",
      description: "Fornecimento e suporte de sistema para emissão de notas fiscais eletrônicas.",
      features: ["Sistema completo", "Suporte técnico", "Treinamento", "Certificado digital"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos serviços completos para empresas, desde a abertura ao fechamento, 
            com qualidade e atendimento personalizado
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-xl border border-border hover:shadow-elegant transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mr-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-gray rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Precisa de Ajuda com sua Contabilidade?
          </h3>
          <p className="text-xl mb-6 text-accent-foreground/90">
            Entre em contato conosco e receba um atendimento personalizado para sua empresa
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-white/60 text-white hover:bg-white/10 hover:text-white hover:border-white group"
            onClick={() => window.open('https://wa.me/5583988329477', '_blank')}
          >
            Solicitar Consultoria
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;