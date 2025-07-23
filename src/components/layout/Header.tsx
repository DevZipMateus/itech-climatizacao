
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollDirection } from '@/hooks/useScrollDirection';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  const { scrollDirection, isScrolled } = useScrollDirection({ threshold: 10 });

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.9;
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
    { name: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Handle "Início" link specially to scroll to top
    if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      const element = document.querySelector(href);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth',
        });
      }
    }
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Determine header visibility based on scroll direction and hero section
  const shouldHideHeader = !isInHeroSection && scrollDirection === 'down';

  return (
    <header
      className={cn(
        'fixed w-full z-50 transition-all duration-500 ease-in-out py-4',
        shouldHideHeader
          ? 'opacity-0 -translate-y-full pointer-events-none'
          : 'opacity-100 translate-y-0 pointer-events-auto',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-subtle'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="block">
              <span className="font-display text-2xl font-bold text-blue-600">Contabilidade</span>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-2 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="ml-4 btn-primary">
              Agende uma Consulta
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-blue-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Abrir menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden transition-all duration-300 ease-bounce-ease overflow-hidden',
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 py-3 space-y-1 bg-white/95 backdrop-blur-sm border-t">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-500 hover:bg-slate-50"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              className="block w-full text-center px-4 py-3 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              Agende uma Consulta
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
