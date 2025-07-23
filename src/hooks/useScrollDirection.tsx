
import { useOptimizedScrollDirection } from './useOptimizedScrollDirection';

interface UseScrollDirectionOptions {
  threshold?: number;
}

export const useScrollDirection = (options: UseScrollDirectionOptions = {}) => {
  return useOptimizedScrollDirection({
    threshold: options.threshold || 10,
    throttleMs: 16
  });
};
