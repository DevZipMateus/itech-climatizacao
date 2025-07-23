
import { Phone, Mail, MapPin, Instagram, Clock, Award } from 'lucide-react';

const ItechFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <img 
              src="/lovable-uploads/6eab3671-32f8-4cb5-a319-d1e2ebd2b185.png" 
              alt="ITECH CLIMATIZAÇÃO"
              className="h-16 w-auto mb-4"
            />
            <p className="text-slate-300 mb-4">
              Especialistas em climatização com foco na qualidade, confiabilidade e satisfação do cliente.
            </p>
            <div className="flex items-center space-x-2 text-brand-secondary">
              <Award className="h-5 w-5" />
              <span className="font-semibold">Padrão e Qualidade</span>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#services" className="hover:text-brand-secondary transition-colors">
                  Instalação de Ar Condicionado
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-secondary transition-colors">
                  Manutenção Preventiva
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-secondary transition-colors">
                  Manutenção Corretiva
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-secondary transition-colors">
                  Higienização Completa
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-secondary transition-colors">
                  Orçamento Gratuito
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-brand-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p>(86) 99466-6688</p>
                  <p className="text-sm text-slate-400">WhatsApp disponível</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-brand-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p>italocosta.pi.cm@gmail.com</p>
                  <p className="text-sm text-slate-400">Resposta em até 24h</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p>Rua Motorista Luciano, 188</p>
                  <p className="text-sm text-slate-400">São João, Campo Maior - PI</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Horário e Redes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário de Atendimento</h3>
            <div className="space-y-2 text-slate-300 mb-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-brand-secondary" />
                <span className="text-sm">Segunda a Sexta: 7h às 18h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-brand-secondary" />
                <span className="text-sm">Sábado: 7h às 12h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-brand-secondary" />
                <span className="text-sm">Domingo: Emergências</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Siga-nos</h4>
              <a 
                href="https://instagram.com/itechclimatizacao" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-slate-300 hover:text-brand-secondary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>@itechclimatizacao</span>
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} ITECH CLIMATIZAÇÃO. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm text-slate-400">
              <span>Desenvolvido com ❤️ para oferecer o melhor em climatização</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ItechFooter;
