import { useEffect, useRef } from 'react';

type EventListenerOptions = {
  capture?: boolean;
  passive?: boolean;
  once?: boolean;
};

export const useEventListener = <T extends Event>(
  eventName: string,
  handler: (event: T) => void,
  element: EventTarget = globalThis,
  options: EventListenerOptions = {},
) => {
  const savedHandler = useRef<(event: T) => void>(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && 'addEventListener' in element;

    if (!isSupported) {
      return;
    }

    const eventListener = (event: Event) => {
      if (savedHandler.current) {
        savedHandler.current(event as T);
      }
    };

    const { capture, passive, once } = options;
    // const opts: AddEventListenerOptions = { capture, passive, once };
    const opts = { capture, passive, once };

    element.addEventListener(eventName, eventListener, opts);

    return () => {
      element.removeEventListener(eventName, eventListener, opts);
    };
  }, [eventName, element, options.capture, options.passive, options.once]);
};
