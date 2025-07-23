
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Shield, 
  Snowflake, 
  CheckCircle, 
  Clock, 
  Award,
  MessageCircle 
} from 'lucide-react';

const ItechServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Wrench className="h-12 w-12 text-brand-primary" />,
      title: 'Instalação de Ar Condicionado',
      description: 'Instalação profissional de equipamentos de climatização com garantia e qualidade.',
      features: [
        'Equipamentos de última geração',
        'Instalação certificada',
        'Garantia de 1 ano',
        'Suporte técnico especializado'
      ],
      color: 'from-brand-primary to-blue-600'
    },
    {
      icon: <Shield className="h-12 w-12 text-brand-secondary" />,
      title: 'Manutenção Preventiva',
      description: 'Manutenção regular para garantir o funcionamento perfeito do seu equipamento.',
      features: [
        'Inspeção completa',
        'Limpeza dos filtros',
        'Verificação do gás refrigerante',
        'Relatório detalhado'
      ],
      color: 'from-brand-secondary to-orange-600'
    },
    {
      icon: <Snowflake className="h-12 w-12 text-brand-primary" />,
      title: 'Higienização Completa',
      description: 'Limpeza e higienização profunda para um ar mais puro e saudável.',
      features: [
        'Limpeza interna e externa',
        'Sanitização do sistema',
        'Eliminação de bactérias',
        'Melhoria da qualidade do ar'
      ],
      color: 'from-brand-primary to-cyan-600'
    }
  ];

  const differentials = [
    {
      icon: <Award className="h-6 w-6 text-brand-primary" />,
      title: 'Profissionais Qualificados',
      description: 'Equipe técnica especializada e certificada'
    },
    {
      icon: <Clock className="h-6 w-6 text-brand-primary" />,
      title: 'Atendimento Rápido',
      description: 'Resposta rápida e agendamento flexível'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-brand-primary" />,
      title: 'Garantia Total',
      description: 'Garantia em todos os serviços prestados'
    }
  ];

  const handleWhatsAppClick = (service: string) => {
    window.open(`https://wa.me/5586994666688?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20${service}%20da%20ITECH%20CLIMATIZAÇÃO.`, '_blank');
  };

  return (
    <section ref={sectionRef} id="services" className="bg-slate-50 py-20">
      <div className="section-container">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="itech-badge mb-6">
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluções Completas em <span className="text-transparent bg-clip-text bg-gradient-itech">Climatização</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Oferecemos serviços especializados em climatização com foco na qualidade, 
            confiabilidade e satisfação do cliente.
          </p>
        </motion.div>

        {/* Serviços Principais */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
            >
              <div className={`bg-gradient-to-r ${service.color} w-20 h-20 rounded-xl flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => handleWhatsAppClick(service.title)}
                className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Solicitar Orçamento</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Diferenciais */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Por que escolher a <span className="text-transparent bg-clip-text bg-gradient-itech">ITECH</span>?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {differentials.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ItechServices;
