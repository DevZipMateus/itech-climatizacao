
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const ItechLocation = () => {
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

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-brand-primary" />,
      title: 'Endereço',
      details: 'Rua Motorista Luciano, 188',
      subtitle: 'São João, Campo Maior - PI',
      action: () => window.open('https://maps.google.com/?q=Rua+Motorista+Luciano+188+São+João+Campo+Maior+PI', '_blank')
    },
    {
      icon: <Phone className="h-6 w-6 text-brand-primary" />,
      title: 'Telefone',
      details: '(86) 99466-6688',
      subtitle: 'WhatsApp disponível',
      action: () => window.open('https://wa.me/5586994666688', '_blank')
    },
    {
      icon: <Mail className="h-6 w-6 text-brand-primary" />,
      title: 'Email',
      details: 'italocosta.pi.cm@gmail.com',
      subtitle: 'Resposta em até 24h',
      action: () => window.open('mailto:italocosta.pi.cm@gmail.com', '_blank')
    },
    {
      icon: <Clock className="h-6 w-6 text-brand-primary" />,
      title: 'Horário',
      details: 'Segunda a Sexta: 7h às 18h',
      subtitle: 'Sábado: 7h às 12h',
      action: null
    }
  ];

  return (
    <section ref={sectionRef} id="location" className="bg-slate-50 py-20">
      <div className="section-container">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="itech-badge mb-6">
            Localização
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Onde nos <span className="text-transparent bg-clip-text bg-gradient-itech">encontrar</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Estamos localizados em Campo Maior - PI, prontos para atender você 
            com qualidade e eficiência.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  item.action ? 'cursor-pointer hover:-translate-y-1' : ''
                }`}
                onClick={item.action || undefined}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-light w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-700 font-medium">{item.details}</p>
                    <p className="text-slate-500 text-sm">{item.subtitle}</p>
                  </div>
                  {item.action && (
                    <Navigation className="h-5 w-5 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              </div>
            ))}

            {/* Área de Atendimento */}
            <motion.div
              className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-4">Área de Atendimento</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">Cidades Atendidas:</p>
                  <ul className="space-y-1 opacity-90">
                    <li>• Campo Maior</li>
                    <li>• Teresina</li>
                    <li>• Altos</li>
                    <li>• José de Freitas</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Serviços:</p>
                  <ul className="space-y-1 opacity-90">
                    <li>• Residencial</li>
                    <li>• Comercial</li>
                    <li>• Industrial</li>
                    <li>• Emergência 24h</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="h-96 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.4789567890123!2d-42.1776543!3d-4.6283667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzcnNDIuMSJTIDQywrAxMCczOS42Ilc!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização ITECH CLIMATIZAÇÃO"
              />
              
              {/* Overlay com informações */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <img 
                    src="/lovable-uploads/89c16695-607f-4db1-9560-bb556d3aabe1.png" 
                    alt="ITECH" 
                    className="h-8 w-auto"
                  />
                  <div>
                    <p className="font-semibold text-sm">ITECH CLIMATIZAÇÃO</p>
                    <p className="text-xs text-slate-600">Campo Maior - PI</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Precisa de um orçamento?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Entre em contato conosco e receba um orçamento personalizado para suas necessidades de climatização.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5586994666688?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20da%20ITECH%20CLIMATIZAÇÃO."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Solicitar Orçamento
              </a>
              <a
                href="tel:+5586994666688"
                className="btn-secondary"
              >
                Ligar Agora
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ItechLocation;
