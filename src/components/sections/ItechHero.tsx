
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Snowflake, Wrench, Shield, MessageCircle } from 'lucide-react';

const ItechHero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5586994666688?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20ITECH%20CLIMATIZAÇÃO.', '_blank');
  };

  useEffect(() => {
    if (sectionRef.current && (window as any).VANTA) {
      vantaEffect.current = (window as any).VANTA.NET({
        el: sectionRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x2563eb,
        backgroundColor: 0x1a0b34,
        points: 8.00,
        maxDistance: 25.00,
        spacing: 16.00
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 lg:pt-32"
    >
      <div className="relative z-30 max-w-7xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            <span className="block">ITECH</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-yellow-400">
              CLIMATIZAÇÃO
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-brand-secondary font-semibold mb-4 sm:mb-6">
            Padrão e Qualidade
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-2 leading-relaxed">
            Especialistas em manutenção, instalação e higienização de ar condicionado. 
            Proporcionamos conforto térmico com qualidade e garantia.
          </p>
        </motion.div>

        {/* Serviços em destaque - Improved mobile layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 px-2"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Wrench className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 text-brand-secondary mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Instalação</h3>
            <p className="text-sm sm:text-base text-slate-300">Instalação profissional de equipamentos de climatização</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Shield className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 text-brand-secondary mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Manutenção</h3>
            <p className="text-sm sm:text-base text-slate-300">Manutenção preventiva e corretiva com garantia</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 sm:col-span-2 lg:col-span-1 hover:bg-white/15 transition-all duration-300">
            <Snowflake className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 text-brand-secondary mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Higienização</h3>
            <p className="text-sm sm:text-base text-slate-300">Limpeza e higienização completa dos equipamentos</p>
          </div>
        </motion.div>

        {/* Call to Action - Enhanced mobile experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-2"
        >
          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 sm:px-8 py-4 rounded-lg font-semibold text-base sm:text-lg hover:shadow-glow-blue transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 min-h-[48px] touch-manipulation"
          >
            <MessageCircle className="h-5 w-5 flex-shrink-0" />
            <span>Solicitar Orçamento</span>
          </button>
          
          <a
            href="#services"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 inline-flex items-center justify-center min-h-[48px] touch-manipulation"
          >
            <span className="text-center">Conheça Nossos Serviços</span>
          </a>
        </motion.div>

        {/* Informações de contato - Better mobile layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20 px-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm sm:text-base">
            <div className="text-slate-300 md:text-center lg:text-left">
              <strong className="text-white block">Telefone:</strong> 
              <a href="tel:+5586994666688" className="hover:text-brand-secondary transition-colors">
                (86) 99466-6688
              </a>
            </div>
            <div className="text-slate-300 md:text-center">
              <strong className="text-white block">Email:</strong> 
              <a href="mailto:italocosta.pi.cm@gmail.com" className="break-words hover:text-brand-secondary transition-colors">
                italocosta.pi.cm@gmail.com
              </a>
            </div>
            <div className="text-slate-300 md:col-span-2 lg:col-span-1 md:text-center lg:text-left">
              <strong className="text-white block">Endereço:</strong> 
              <span className="block">Rua Motorista Luciano, 188 - São João, Campo Maior - PI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ItechHero;
