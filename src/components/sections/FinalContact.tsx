
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinalContact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521999999999?text=Olá!%20Estou%20pronto%20para%20transformar%20minha%20casa%20com%20automação%20e%20segurança.%20Gostaria%20de%20agendar%20uma%20visita!', '_blank');
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
            Pronto para <span className="text-green-400">Transformar</span><br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Sua Casa?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            Não perca mais tempo! Transforme sua casa em um lar inteligente e seguro hoje mesmo.
          </p>
          
          <div className="inline-block">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl lg:text-2xl font-bold rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 w-full sm:w-auto"
            >
              <img src="/lovable-uploads/52aa5dee-9efe-404c-9fa0-93461b12f4d6.png" alt="WhatsApp" className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 mr-2 sm:mr-3 md:mr-4" />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl">Fale Conosco Via WhatsApp!</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16">
          {[
            { icon: Phone, title: 'Telefone', info: '(21) 99999-9999' },
            { icon: Mail, title: 'Email', info: 'contato@smartsecure.com' },
            { icon: MapPin, title: 'Localização', info: 'Rio de Janeiro - RJ' },
            { icon: Clock, title: 'Atendimento', info: '24h - Todos os dias' }
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-3 sm:p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
            >
              <item.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-green-400 mx-auto mb-2 sm:mb-3 md:mb-4" />
              <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm break-all">{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalContact;
