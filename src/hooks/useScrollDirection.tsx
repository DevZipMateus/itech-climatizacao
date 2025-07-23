
import { useState, useEffect } from 'react';

interface UseScrollDirectionOptions {
  threshold?: number;
}

export const useScrollDirection = (options: UseScrollDirectionOptions = {}) => {
  const { threshold = 10 } = options;
  
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      if (scrollY !== lastScrollY && Math.abs(scrollY - lastScrollY) >= threshold) {
        setScrollDirection(direction);
        setLastScrollY(scrollY);
      }
      
      setIsScrolled(scrollY > 20);
    };

    const onScroll = () => updateScrollDirection();

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY, threshold]);

  return { scrollDirection, isScrolled };
};
