import { useEffect } from 'react'
import { RefObject } from 'react'
// https://github.com/donavon/use-event-listener/blob/develop/src/index.js

/**
 *
 *
 * @param eventName
 * @param handler
 * @param element
 * @param options
 */
// export const useEventListener = <T extends HTMLElement>(
//   eventName: any,
//   handler: (event) => void,
//   element?: RefObject<T>,
//   options?: boolean | AddEventListenerOptions,
// ) => {}

export const useEventListener = (
  eventName,
  handler,
  element = global,
  options = {},
) => {
  const savedHandler = useRef()
  const { capture, passive, once } = options

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const isSupported = element && element.addEventListener

    if (!isSupported) {
      return
    }

    const eventListener = (event) => savedHandler.current(event)
    const opts = { capture, passive, once }

    element.addEventListener(eventName, eventListener, opts)

    return () => {
      element.removeEventListener(eventName, eventListener, opts)
    }
  }, [element, eventName, capture, passive, once])
}
