
import React, { memo } from 'react';
import { useOptimizedIntersectionObserver } from '@/hooks/useOptimizedIntersectionObserver';
import { usePerformanceContext } from '@/contexts/PerformanceContext';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  threshold?: number;
  once?: boolean;
  enabled?: boolean;
}

const LazySection = memo<LazySectionProps>(({ 
  children, 
  fallback, 
  threshold = 0.1,
  once = false,
  enabled = true
}) => {
  const { settings } = usePerformanceContext();
  const { elementRef, isVisible } = useOptimizedIntersectionObserver({
    threshold,
    rootMargin: '100px',
    once,
    enabled: enabled && settings.enableLazyLoading
  });

  const defaultFallback = (
    <div className="h-32 animate-pulse bg-slate-200 rounded" 
         style={{ minHeight: '200px' }} />
  );

  return (
    <div 
      ref={elementRef as React.RefObject<HTMLDivElement>}
      style={{ 
        minHeight: isVisible ? 'auto' : '200px',
        contentVisibility: 'auto',
        containIntrinsicSize: '200px'
      }}
    >
      {isVisible ? children : (fallback || defaultFallback)}
    </div>
  );
});

LazySection.displayName = 'LazySection';

export default LazySection;
