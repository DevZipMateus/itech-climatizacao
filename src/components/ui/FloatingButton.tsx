
import React, { memo, useCallback } from 'react';
import { useOptimizedScrollDirection } from '@/hooks/useOptimizedScrollDirection';
import { cn } from '@/lib/utils';

const FloatingButton = memo(() => {
  const { isScrolled } = useOptimizedScrollDirection({ 
    threshold: window.innerHeight * 0.7 
  });

  const handleClick = useCallback(() => {
    window.open('https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20de%20contabilidade.', '_blank');
  }, []);

  return (
    <a
      href="https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20de%20contabilidade."
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-40 flex items-center justify-center w-16 h-16 rounded-full shadow-elevation transition-all duration-300',
        isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      )}
      style={{ 
        willChange: 'transform, opacity',
        transform: `translateY(${isScrolled ? '0' : '80px'})`,
        opacity: isScrolled ? 1 : 0
      }}
      aria-label="Contato via WhatsApp"
    >
      <img 
        src="/lovable-uploads/52aa5dee-9efe-404c-9fa0-93461b12f4d6.png" 
        alt="WhatsApp" 
        className="w-full h-full"
      />
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
      </span>
    </a>
  );
});

FloatingButton.displayName = 'FloatingButton';

export default FloatingButton;
