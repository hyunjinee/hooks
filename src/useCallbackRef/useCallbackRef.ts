import { useRef, useEffect, useMemo } from 'react';

export const useCallbackRef = <T extends (...args: unknown[]) => unknown>(
  callback: T | undefined,
): T => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  return useMemo(() => ((...args) => callbackRef.current?.(...args)) as T, []);
};
