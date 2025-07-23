import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const ItechWhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

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

    // Show tooltip after 3 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }, 3000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(animationInterval);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/5586994666688?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20ITECH%20CLIMATIZAÇÃO.', '_blank');
  };

  const closeTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <>
      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-24 right-6 z-40 bg-white border border-slate-200 rounded-xl p-4 shadow-lg max-w-xs animate-slide-up">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">IT</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">ITECH CLIMATIZAÇÃO</p>
                <p className="text-slate-600 text-xs mt-1">
                  Olá! 👋 Precisa de ajuda com climatização? Estamos aqui para te atender!
                </p>
              </div>
            </div>
            <button
              onClick={closeTooltip}
              className="text-slate-400 hover:text-slate-600 ml-2"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-3 flex justify-end">
            <button
              onClick={handleClick}
              className="bg-green-500 text-white px-3 py-1 rounded-lg text-xs font-medium hover:bg-green-600 transition-colors"
            >
              Conversar
            </button>
          </div>
          {/* Arrow */}
          <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-slate-200"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className={cn(
          'fixed bottom-6 right-6 z-40 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0',
          isAnimating ? 'animate-bounce' : ''
        )}
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-8 w-8 text-white" />
        
        {/* Pulse Animation */}
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-400"></span>
        </span>
      </button>
    </>
  );
};

export default ItechWhatsAppFloat;
