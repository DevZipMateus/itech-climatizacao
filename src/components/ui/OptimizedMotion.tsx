
import React, { memo } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { usePerformanceContext } from '@/contexts/PerformanceContext';

interface OptimizedMotionProps extends MotionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  reduceMotion?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const OptimizedMotion = memo<OptimizedMotionProps>(({ 
  children, 
  fallback, 
  reduceMotion = false,
  initial,
  animate,
  exit,
  transition,
  className,
  style,
  ...props 
}) => {
  const { settings } = usePerformanceContext();

  // If animations should be reduced, render static content
  if (settings.reduceAnimations || settings.prefersReducedMotion || reduceMotion) {
    return <div className={className} style={style} {...(props as any)}>{fallback || children}</div>;
  }

  // Optimized animation properties
  const optimizedTransition = {
    duration: 0.3,
    ease: 'easeOut',
    ...transition
  };

  const optimizedProps = {
    initial: initial || { opacity: 0, y: 10 },
    animate: animate || { opacity: 1, y: 0 },
    exit: exit || { opacity: 0, y: -10 },
    transition: optimizedTransition,
    className,
    style: {
      willChange: 'transform, opacity',
      ...style
    },
    ...props
  };

  return (
    <motion.div {...optimizedProps}>
      {children}
    </motion.div>
  );
});

OptimizedMotion.displayName = 'OptimizedMotion';
