import { Users, Award, Clock, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Clock, label: "Anos de Experiência", value: "9+" },
    { icon: Users, label: "Clientes Atendidos", value: "500+" },
    { icon: Award, label: "Serviços Oferecidos", value: "15+" },
    { icon: Heart, label: "Empresa Familiar", value: "100%" }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa História
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma trajetória de dedicação e crescimento na contabilidade empresarial
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              De Casa para o Nosso Próprio Espaço
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-accent">Bel Contal Contabilidade</strong> nasceu em casa, em dezembro de 2015. 
                Inicialmente eram apenas clientes pessoa física. Depois de alguns meses fomos para um local, 
                imóvel da família do meu esposo, no ano de 2016.
              </p>
              
              <p>
                Passamos lá 8 anos, e há mais ou menos um ano, estamos no nosso imóvel, 
                ampliamos o espaço. Mas antes disso tudo acontecer, vamos para o ano de 2009, 
                quando terminei minha graduação na UEPB.
              </p>
              
              <p>
                Passei por escritórios e empresas, sempre trabalhando na área de contabilidade, 
                até conseguir caminhar sozinha. Hoje somos uma <strong className="text-accent">empresa familiar</strong>, 
                composta pelo meu esposo, eu e meu filho.
              </p>
              
              <p className="text-lg font-medium text-accent">
                Estamos aqui para proporcionar o melhor à sua empresa, de forma direcionada, 
                humanizada e personalizada.
              </p>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/3e133b37-46ac-4a6f-a515-925e7e50a4c4.png" 
                  alt="BEL CONTAL CONTABILIDADE" 
                  className="h-24 w-auto mx-auto"
                />
              </div>
              <h4 className="text-2xl font-bold mb-2 text-foreground">Nossa Missão</h4>
              <p className="text-muted-foreground">
                Proporcionar soluções contábeis de excelência com atendimento 
                humanizado e personalizado para o crescimento sustentável das empresas.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-elegant transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                <stat.icon className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;