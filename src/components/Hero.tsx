import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/20"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-accent/10"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-accent/15"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-accent">Contabilidade</span>
              <br />
              Empresarial é na
              <br />
              <span className="text-accent">BelContal!</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Empresa familiar especializada em contabilidade empresarial desde 2015. 
              Oferecemos serviços personalizados e humanizados para sua empresa crescer com segurança.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-orange group"
                onClick={() => window.open('https://wa.me/5583988329477', '_blank')}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-white/60 text-white hover:bg-white/10 hover:text-white hover:border-white"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-gray-300">Atendimento Personalizado</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-gray-300">Empresa Familiar</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-gray-300">9 Anos de Experiência</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-gray-300">Consultoria Especializada</span>
              </div>
            </div>
          </div>

          {/* Logo/Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-110"></div>
              <img 
                src="/lovable-uploads/3e133b37-46ac-4a6f-a515-925e7e50a4c4.png" 
                alt="BEL CONTAL CONTABILIDADE - Logotipo" 
                className="relative z-10 h-64 w-auto filter drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;