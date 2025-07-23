
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollDirection } from '@/hooks/useScrollDirection';

const ItechHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  const { scrollDirection, isScrolled } = useScrollDirection({ threshold: 10 });

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.9; // 90% da altura da viewport
      setIsInHeroSection(window.scrollY < heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Localização', href: '#location' },
    { name: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = window.innerWidth < 768 ? 100 : 120;
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - offset,
          behavior: 'smooth',
        });
      }
    }
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Determine header visibility
  const shouldHideHeader = !isInHeroSection && scrollDirection === 'down';

  return (
    <>
      {/* Top Bar - Only visible in hero section */}
      <div 
        className={cn(
          'hidden lg:block bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-2 transition-all duration-500 ease-in-out',
          isInHeroSection 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4 xl:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="whitespace-nowrap">(86) 99466-6688</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">italocosta.pi.cm@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="hidden xl:inline">Siga-nos:</span>
              <a 
                href="https://instagram.com/itechclimatizacao" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-secondary transition-colors"
              >
                @itechclimatizacao
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Now with scroll direction control */}
      <header
        className={cn(
          'fixed w-full z-50 transition-all duration-500 ease-in-out bg-[#0f2345] shadow-lg',
          shouldHideHeader 
            ? 'opacity-0 -translate-y-full pointer-events-none' 
            : 'opacity-100 translate-y-0 pointer-events-auto'
        )}
        style={{
          top: isInHeroSection ? '40px' : '0px' // Compensate for top bar space when in hero
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 sm:py-3 lg:py-4">
            {/* Logo - Tamanho responsivo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#home" className="block">
                <img 
                  src="/lovable-uploads/6eab3671-32f8-4cb5-a319-d1e2ebd2b185.png" 
                  alt="ITECH CLIMATIZAÇÃO - Padrão e Qualidade"
                  className="h-12 sm:h-16 md:h-18 lg:h-20 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-3 py-2 text-white hover:text-brand-secondary transition-colors duration-300 font-medium text-sm xl:text-base"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/5586994666688?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20ITECH%20CLIMATIZAÇÃO."
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 btn-primary text-sm xl:text-base px-4 xl:px-6"
              >
                <span className="hidden xl:inline">Solicitar Orçamento</span>
                <span className="xl:hidden">Orçamento</span>
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-brand-secondary hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu principal"
              >
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - Melhorado */}
        <div
          className={cn(
            'lg:hidden transition-all duration-300 ease-in-out overflow-hidden',
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="px-4 py-3 space-y-1 bg-[#0f2345] border-t border-white/20 shadow-lg">
            {/* Contact info mobile */}
            <div className="border-b border-white/20 pb-3 mb-3">
              <div className="flex flex-col space-y-2 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(86) 99466-6688</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">italocosta.pi.cm@gmail.com</span>
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-white hover:text-brand-secondary hover:bg-white/10 transition-colors"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="https://wa.me/5586994666688?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20ITECH%20CLIMATIZAÇÃO."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 font-medium rounded-md text-white bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-90 transition-opacity"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default ItechHeader;
