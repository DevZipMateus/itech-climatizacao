
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, Send, Clock } from 'lucide-react';

const ItechContact = () => {
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

  const contactMethods = [
    {
      icon: <MessageCircle className="h-8 w-8 text-green-500" />,
      title: 'WhatsApp',
      description: 'Resposta imediata',
      detail: '(86) 99466-6688',
      action: () => window.open('https://wa.me/5586994666688?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20ITECH%20CLIMATIZAÇÃO.', '_blank'),
      bgColor: 'bg-green-50 border-green-200',
      textColor: 'text-green-700'
    },
    {
      icon: <Phone className="h-8 w-8 text-brand-primary" />,
      title: 'Telefone',
      description: 'Ligação direta',
      detail: '(86) 99466-6688',
      action: () => window.open('tel:+5586994666688', '_blank'),
      bgColor: 'bg-blue-50 border-blue-200',
      textColor: 'text-blue-700'
    },
    {
      icon: <Mail className="h-8 w-8 text-brand-secondary" />,
      title: 'Email',
      description: 'Resposta em até 24h',
      detail: 'italocosta.pi.cm@gmail.com',
      action: () => window.open('mailto:italocosta.pi.cm@gmail.com', '_blank'),
      bgColor: 'bg-orange-50 border-orange-200',
      textColor: 'text-orange-700'
    }
  ];

  const services = [
    'Instalação de Ar Condicionado',
    'Manutenção Preventiva',
    'Manutenção Corretiva',
    'Higienização Completa',
    'Orçamento Gratuito',
    'Suporte Técnico'
  ];

  return (
    <section ref={sectionRef} id="contact" className="bg-white py-20">
      <div className="section-container">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="itech-badge mb-6">
            Contato
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Fale <span className="text-transparent bg-clip-text bg-gradient-itech">Conosco</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Estamos prontos para atender você! Entre em contato e receba um 
            atendimento personalizado com qualidade ITECH.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Métodos de Contato */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Como preferir falar conosco?</h3>
              <p className="text-slate-600">
                Escolha o canal que for mais conveniente para você. Estamos sempre prontos para atender!
              </p>
            </div>

            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className={`${method.bgColor} border-2 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                onClick={method.action}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center shadow-md">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-slate-900 mb-1">{method.title}</h4>
                    <p className={`${method.textColor} text-sm font-medium mb-2`}>{method.description}</p>
                    <p className="text-slate-700 font-medium">{method.detail}</p>
                  </div>
                  <Send className="h-5 w-5 text-slate-400" />
                </div>
              </motion.div>
            ))}

            {/* Horário de Atendimento */}
            <motion.div
              className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6" />
                <h4 className="text-xl font-semibold">Horário de Atendimento</h4>
              </div>
              <div className="space-y-2">
                <p><strong>Segunda a Sexta:</strong> 7h às 18h</p>
                <p><strong>Sábado:</strong> 7h às 12h</p>
                <p><strong>Domingo:</strong> Emergências</p>
                <p className="text-sm opacity-90 mt-3">
                  * Atendimento via WhatsApp 24h para emergências
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Serviços e Call to Action */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {/* Serviços Disponíveis */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6">Nossos Serviços</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full" />
                    <span className="text-slate-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp em Destaque */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-3">
                Atendimento pelo WhatsApp
              </h3>
              <p className="text-green-600 mb-6">
                Converse diretamente conosco! Resposta rápida e atendimento personalizado.
              </p>
              <button
                onClick={() => window.open('https://wa.me/5586994666688?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20ITECH%20CLIMATIZAÇÃO.', '_blank')}
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Iniciar Conversa
              </button>
            </div>

            {/* Garantia e Qualidade */}
            <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Garantia ITECH</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full" />
                  <span className="text-slate-700">Garantia de 1 ano em instalações</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full" />
                  <span className="text-slate-700">Atendimento pós-venda</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full" />
                  <span className="text-slate-700">Profissionais qualificados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full" />
                  <span className="text-slate-700">Orçamento gratuito</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ItechContact;
