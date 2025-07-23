
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const animationInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(animationInterval);
    };
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20transformar%20minha%20casa%20com%20automação%20e%20segurança.%20Podem%20me%20ajudar?', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'fixed bottom-6 right-6 z-40 flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl transition-all duration-300 hover:scale-110',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0',
        isAnimating ? 'animate-bounce' : ''
      )}
      aria-label="Contato via WhatsApp"
    >
      <img src="/lovable-uploads/14f546d1-e53b-4723-8898-edcd792ddf7d.png" alt="WhatsApp" className="h-8 w-8" />
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-300"></span>
      </span>
    </button>
  );
};

export default WhatsAppFloat;
