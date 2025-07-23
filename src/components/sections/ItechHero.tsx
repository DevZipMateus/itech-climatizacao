
import { motion } from 'framer-motion';
import { Snowflake, Wrench, Shield, MessageCircle } from 'lucide-react';

const ItechHero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5586994666688?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20ITECH%20CLIMATIZAÇÃO.', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background mantido do design atual */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img 
            src="/lovable-uploads/89c16695-607f-4db1-9560-bb556d3aabe1.png" 
            alt="ITECH CLIMATIZAÇÃO"
            className="h-32 w-auto mx-auto mb-6 drop-shadow-2xl"
          />
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            <span className="block">ITECH</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-yellow-400">
              CLIMATIZAÇÃO
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-brand-secondary font-semibold mb-6">
            Padrão e Qualidade
          </p>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Especialistas em manutenção, instalação e higienização de ar condicionado. 
            Proporcionamos conforto térmico com qualidade e garantia.
          </p>
        </motion.div>

        {/* Serviços em destaque */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Wrench className="h-12 w-12 text-brand-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Instalação</h3>
            <p className="text-slate-300">Instalação profissional de equipamentos de climatização</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Shield className="h-12 w-12 text-brand-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Manutenção</h3>
            <p className="text-slate-300">Manutenção preventiva e corretiva com garantia</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Snowflake className="h-12 w-12 text-brand-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Higienização</h3>
            <p className="text-slate-300">Limpeza e higienização completa dos equipamentos</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
        >
          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-glow-blue transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Solicitar Orçamento</span>
          </button>
          
          <a
            href="#services"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 inline-flex items-center justify-center"
          >
            Conheça Nossos Serviços
          </a>
        </motion.div>

        {/* Informações de contato */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <p className="text-slate-300 mb-2">
            <strong className="text-white">Telefone:</strong> (86) 99466-6688
          </p>
          <p className="text-slate-300 mb-2">
            <strong className="text-white">Email:</strong> italocosta.pi.cm@gmail.com
          </p>
          <p className="text-slate-300">
            <strong className="text-white">Endereço:</strong> Rua Motorista Luciano, 188 - São João, Campo Maior - PI
          </p>
        </motion.div>
      </div>

      {/* Efeitos visuais */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default ItechHero;
