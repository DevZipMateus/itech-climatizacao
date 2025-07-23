
import { Home, Shield, Camera, Lightbulb, Thermometer, Speaker, Lock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomeServices = () => {
  const handleWhatsAppClick = (service: string) => {
    window.open(`https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20${service}.`, '_blank');
  };

  const automationServices = [
    {
      icon: Lightbulb,
      title: 'Iluminação Inteligente',
      description: 'Controle total da iluminação, cenários personalizados e economia de energia',
      features: ['Controle por voz', 'Programação automática', 'Economia de até 60%']
    },
    {
      icon: Thermometer,
      title: 'Climatização',
      description: 'Ar condicionado inteligente com controle remoto e programação',
      features: ['Controle remoto', 'Programação por horário', 'Economia de energia']
    },
    {
      icon: Speaker,
      title: 'Entretenimento',
      description: 'Som ambiente, TV e streaming integrados em todos os ambientes',
      features: ['Som multiroom', 'Controle centralizado', 'Streaming integrado']
    }
  ];

  const securityServices = [
    {
      icon: Camera,
      title: 'Monitoramento 24/7',
      description: 'Câmeras de alta definição com visão noturna e acesso remoto',
      features: ['HD 4K', 'Visão noturna', 'Acesso pelo celular']
    },
    {
      icon: Shield,
      title: 'Alarmes Inteligentes',
      description: 'Sensores de movimento, portas e janelas com notificações instantâneas',
      features: ['Sensores inteligentes', 'Notificações em tempo real', 'Backup de energia']
    },
    {
      icon: Lock,
      title: 'Controle de Acesso',
      description: 'Fechaduras digitais, portões automáticos e identificação biométrica',
      features: ['Biometria', 'Cartão de acesso', 'Controle remoto']
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-black/50 backdrop-blur-sm">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-green-400">Serviços</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Soluções completas de automação e segurança residencial personalizadas para você
          </p>
        </div>

        {/* Automação Residencial */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <Home className="h-8 w-8 text-green-400 mr-3" />
            <h3 className="text-3xl font-bold text-white">Automação Residencial</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {automationServices.map((service, index) => (
              <div
                key={index}
                className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 hover:bg-green-500/20 transition-all duration-300"
              >
                <service.icon className="h-12 w-12 text-green-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Saiba Mais
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Segurança Residencial */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <Shield className="h-8 w-8 text-blue-400 mr-3" />
            <h3 className="text-3xl font-bold text-white">Segurança Residencial</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div
                key={index}
                className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 hover:bg-blue-500/20 transition-all duration-300"
              >
                <service.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Saiba Mais
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
