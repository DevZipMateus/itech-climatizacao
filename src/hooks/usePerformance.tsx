
import { useState, useEffect, useMemo } from 'react';

interface PerformanceSettings {
  reduceAnimations: boolean;
  enableLazyLoading: boolean;
  prefersReducedMotion: boolean;
}

export const usePerformance = () => {
  const [settings, setSettings] = useState<PerformanceSettings>({
    reduceAnimations: false,
    enableLazyLoading: true,
    prefersReducedMotion: false
  });

  useEffect(() => {
    // Check for user's motion preference only once
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const updateSettings = (matches: boolean) => {
      setSettings(prev => ({
        ...prev,
        prefersReducedMotion: matches,
        reduceAnimations: matches
      }));
    };

    // Set initial value
    updateSettings(mediaQuery.matches);

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      updateSettings(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Check for slow connection only once
  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        const isSlowConnection = connection.effectiveType === 'slow-2g' || 
                                connection.effectiveType === '2g' ||
                                connection.downlink < 1;
        
        if (isSlowConnection) {
          setSettings(prev => ({
            ...prev,
            reduceAnimations: true,
            enableLazyLoading: true
          }));
        }
      }
    }
  }, []);

  // Memoize settings to prevent unnecessary re-renders
  return useMemo(() => settings, [settings]);
};
