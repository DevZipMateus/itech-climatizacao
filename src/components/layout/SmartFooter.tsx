
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

const SmartFooter = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20automação%20e%20segurança%20residencial.', '_blank');
  };

  return (
    <footer className="relative bg-black/90 backdrop-blur-sm text-white border-t border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="mb-6">
              <h3 className="text-2xl font-bold font-display bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                SmartSecure
              </h3>
              <p className="mt-2 text-slate-300">
                Transformando lares em ambientes inteligentes e seguros com tecnologia de ponta.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 transition-colors duration-200" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 transition-colors duration-200" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Nossos Serviços</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#services" className="text-slate-300 hover:text-green-400 transition-colors duration-200">Automação Residencial</a>
              <a href="#services" className="text-slate-300 hover:text-green-400 transition-colors duration-200">Segurança 24/7</a>
              <a href="#services" className="text-slate-300 hover:text-green-400 transition-colors duration-200">Controle de Acesso</a>
              <a href="#services" className="text-slate-300 hover:text-green-400 transition-colors duration-200">Monitoramento</a>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Entre em Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Rio de Janeiro - RJ<br />Atendemos toda a região metropolitana</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="tel:+5521999999999" className="text-slate-300 hover:text-green-400 transition-colors duration-200">
                  (21) 99999-9999
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="mailto:contato@smartsecure.com" className="text-slate-300 hover:text-green-400 transition-colors duration-200">
                  contato@smartsecure.com
                </a>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <img src="/lovable-uploads/5a46be1b-4445-4178-8d9f-a7e8edfd42d5.png" alt="WhatsApp" className="h-4 w-4" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-green-500/20 text-slate-400 text-sm text-center">
          <p>© {new Date().getFullYear()} SmartSecure. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default SmartFooter;
