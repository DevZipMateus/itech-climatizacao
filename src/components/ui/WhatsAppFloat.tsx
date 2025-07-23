
import React, { memo, useCallback } from 'react';
import { useOptimizedIntersectionObserver } from '@/hooks/useOptimizedIntersectionObserver';
import { useOptimizedScrollDirection } from '@/hooks/useOptimizedScrollDirection';
import { cn } from '@/lib/utils';

const WhatsAppFloat = memo(() => {
  const { isScrolled } = useOptimizedScrollDirection({ threshold: 300 });
  
  const handleClick = useCallback(() => {
    window.open('https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20transformar%20minha%20casa%20com%20automação%20e%20segurança.%20Podem%20me%20ajudar?', '_blank');
  }, []);

  return (
    <button
      onClick={handleClick}
      className={cn(
        'fixed bottom-6 right-6 z-40 flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl transition-all duration-300',
        isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      )}
      style={{ 
        willChange: 'transform, opacity',
        transform: `translateY(${isScrolled ? '0' : '80px'})`,
        opacity: isScrolled ? 1 : 0
      }}
      aria-label="Contato via WhatsApp"
    >
      <img src="/lovable-uploads/52aa5dee-9efe-404c-9fa0-93461b12f4d6.png" alt="WhatsApp" className="h-8 w-8" />
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-300"></span>
      </span>
    </button>
  );
});

WhatsAppFloat.displayName = 'WhatsAppFloat';

export default WhatsAppFloat;
