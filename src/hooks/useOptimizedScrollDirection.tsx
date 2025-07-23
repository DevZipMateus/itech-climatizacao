
import { useState, useEffect, useCallback, useRef } from 'react';

interface UseOptimizedScrollDirectionOptions {
  threshold?: number;
  throttleMs?: number;
}

export const useOptimizedScrollDirection = (options: UseOptimizedScrollDirectionOptions = {}) => {
  const { threshold = 10, throttleMs = 16 } = options; // 16ms ≈ 60fps
  
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const updateScrollDirection = useCallback(() => {
    const scrollY = window.scrollY;
    
    if (Math.abs(scrollY - lastScrollY.current) < threshold) {
      ticking.current = false;
      return;
    }

    const direction = scrollY > lastScrollY.current ? 'down' : 'up';
    
    setScrollDirection(direction);
    setIsScrolled(scrollY > 20);
    lastScrollY.current = scrollY;
    ticking.current = false;
  }, [threshold]);

  const requestTick = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(updateScrollDirection);
      ticking.current = true;
    }
  }, [updateScrollDirection]);

  // Throttled scroll handler
  const throttledScrollHandler = useCallback(() => {
    requestTick();
  }, [requestTick]);

  useEffect(() => {
    // Set initial values
    lastScrollY.current = window.scrollY;
    setIsScrolled(window.scrollY > 20);

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, [throttledScrollHandler]);

  return { scrollDirection, isScrolled };
};
