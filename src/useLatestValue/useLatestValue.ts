import { useRef } from 'react';
import { useIsomorphicEffect } from '../useIsomorphicEffect/useIsomorphicEffect';

export const useLatestValue = <T>(value: T) => {
  const cache = useRef(value);

  useIsomorphicEffect(() => {
    cache.current = value;
  }, [value]);

  return cache;
};
