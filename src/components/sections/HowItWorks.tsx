
import { MessageCircle, Search, Wrench, Headphones } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: '01',
      title: 'Contato e Avaliação',
      description: 'Entre em contato via WhatsApp e agendamos uma visita técnica gratuita para avaliar suas necessidades.'
    },
    {
      icon: Search,
      number: '02',
      title: 'Projeto Personalizado',
      description: 'Desenvolvemos um projeto sob medida com as melhores soluções para sua casa e seu orçamento.'
    },
    {
      icon: Wrench,
      number: '03',
      title: 'Instalação e Configuração',
      description: 'Nossa equipe especializada realiza a instalação com total cuidado e configura tudo para você.'
    },
    {
      icon: Headphones,
      number: '04',
      title: 'Suporte Contínuo',
      description: 'Oferecemos treinamento completo e suporte técnico 24/7 para garantir seu total conforto.'
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-slate-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
            Como <span className="text-green-400">Funciona</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
            Um processo simples e transparente para transformar sua casa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="relative mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <step.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-bold text-black">{step.number}</span>
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 px-2">{step.title}</h3>
              <p className="text-sm sm:text-base text-slate-400 px-2">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-green-400 to-blue-400"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
