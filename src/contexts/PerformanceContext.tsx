
import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { usePerformance } from '@/hooks/usePerformance';

interface IntersectionObserverEntry {
  target: Element;
  isIntersecting: boolean;
  intersectionRatio: number;
}

interface PerformanceContextType {
  settings: {
    reduceAnimations: boolean;
    enableLazyLoading: boolean;
    prefersReducedMotion: boolean;
  };
  observeElement: (element: Element, callback: (entry: IntersectionObserverEntry) => void, options?: IntersectionObserverInit) => () => void;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

export const PerformanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const settings = usePerformance();
  const observersRef = useRef<Map<Element, { callback: (entry: IntersectionObserverEntry) => void; observer: IntersectionObserver }>>(new Map());
  
  // Debounced callback execution
  const debounce = useCallback((func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }, []);

  const observeElement = useCallback((
    element: Element, 
    callback: (entry: IntersectionObserverEntry) => void, 
    options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '50px' }
  ) => {
    // Create debounced callback to prevent excessive updates
    const debouncedCallback = debounce(callback, 16); // ~60fps

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          debouncedCallback({
            target: entry.target,
            isIntersecting: entry.isIntersecting,
            intersectionRatio: entry.intersectionRatio
          });
        });
      },
      options
    );

    observer.observe(element);
    observersRef.current.set(element, { callback, observer });

    // Return cleanup function
    return () => {
      observer.unobserve(element);
      observer.disconnect();
      observersRef.current.delete(element);
    };
  }, [debounce]);

  // Cleanup all observers on unmount
  useEffect(() => {
    return () => {
      observersRef.current.forEach(({ observer }) => {
        observer.disconnect();
      });
      observersRef.current.clear();
    };
  }, []);

  return (
    <PerformanceContext.Provider value={{ settings, observeElement }}>
      {children}
    </PerformanceContext.Provider>
  );
};

export const usePerformanceContext = () => {
  const context = useContext(PerformanceContext);
  if (!context) {
    throw new Error('usePerformanceContext must be used within a PerformanceProvider');
  }
  return context;
};
