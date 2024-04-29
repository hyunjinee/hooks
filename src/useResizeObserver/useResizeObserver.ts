import { useRef, useState, type RefObject } from 'react';
import { useIsMounted } from '../useIsMounted/useIsMounted';

type Size = {
  width: number | undefined;
  height: number | undefined;
};

type UseResizeObserverOptions<T extends HTMLElement = HTMLElement> = {
  ref: RefObject<T>;
  /**
   * When using `onResize`, the hook doesn't re-render on element size changes; it delegates handling to the provided callback.
   * @default undefined
   */
  onResize?: (size: Size) => void;
  /**
   * The box model to use for the ResizeObserver.
   * @default 'content-box'
   */
  box?: 'border-box' | 'content-box' | 'device-pixel-content-box';
};

const initialSize: Size = {
  width: undefined,
  height: undefined,
};

export const useResizeObserver = <T extends HTMLElement = HTMLElement>(
  options: UseResizeObserverOptions<T>,
): Size => {
  const { ref, box = 'content-box' } = options;
  const [size, setSize] = useState<Size>(initialSize);

  const isMounted = useIsMounted();

  const previousSize = useRef<Size>(initialSize);

  const onResize = useRef<() => void | undefined>(undefined);

  return size;
};
