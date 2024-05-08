import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect/useIsomorphicLayoutEffect';

export const useBodyScrollLock = (enable = true) => {
  useIsomorphicLayoutEffect(() => {
    if (enable === false) {
      return;
    }

    const originalStyle = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [enable]);
};
