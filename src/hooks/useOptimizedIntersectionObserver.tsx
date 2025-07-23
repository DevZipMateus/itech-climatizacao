
import { useEffect, useState, useRef } from 'react';
import { usePerformanceContext } from '@/contexts/PerformanceContext';

interface UseOptimizedIntersectionObserverOptions extends IntersectionObserverInit {
  enabled?: boolean;
  once?: boolean;
}

export const useOptimizedIntersectionObserver = (
  options: UseOptimizedIntersectionObserverOptions = {}
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const { observeElement, settings } = usePerformanceContext();
  
  const {
    enabled = true,
    once = false,
    threshold = 0.1,
    rootMargin = '50px',
    ...observerOptions
  } = options;

  useEffect(() => {
    if (!enabled || !elementRef.current || (once && hasTriggered)) {
      return;
    }

    const element = elementRef.current;
    
    const cleanup = observeElement(
      element,
      (entry) => {
        const shouldSetVisible = entry.isIntersecting;
        
        if (shouldSetVisible !== isVisible) {
          setIsVisible(shouldSetVisible);
          
          if (shouldSetVisible && once) {
            setHasTriggered(true);
          }
        }
      },
      {
        threshold,
        rootMargin,
        ...observerOptions
      }
    );

    return cleanup;
  }, [enabled, once, hasTriggered, threshold, rootMargin, observeElement, isVisible]);

  return {
    elementRef,
    isVisible: once ? (hasTriggered || isVisible) : isVisible,
    settings
  };
};
