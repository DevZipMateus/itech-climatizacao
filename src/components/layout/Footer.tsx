import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="mb-6">
              <h3 className="text-2xl font-bold font-display">Contabilidade</h3>
              <p className="mt-2 text-slate-300">
                Soluções contábeis personalizadas para o sucesso do seu negócio.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Início</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-200">Sobre Nós</a>
              <a href="#services" className="text-slate-300 hover:text-white transition-colors duration-200">Serviços</a>
              
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-200">Contato</a>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Entre em Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Av. Presidente Vargas, 123<br />Centro, Rio de Janeiro - RJ</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+5521999999999" className="text-slate-300 hover:text-white transition-colors duration-200">
                  (21) 99999-9999
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:contato@contabilidade.com" className="text-slate-300 hover:text-white transition-colors duration-200">
                  contato@contabilidade.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-slate-400 text-sm text-center">
          <p>© {new Date().getFullYear()} Contabilidade. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;