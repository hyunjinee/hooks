import { useCallback, useRef, type DependencyList } from 'react';

export const useCallbackOnce = <F extends (...args: unknown[]) => void>(
  callback: F,
  deps: DependencyList,
) => {
  const hasFired = useRef(false);
  const memoizedCallback = useCallback((...args: Parameters<F>) => {
    if (hasFired.current) {
      return;
    }

    callback(...args);
    hasFired.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return memoizedCallback;
};
