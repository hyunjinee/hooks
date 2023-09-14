import { useEffect, useRef } from 'react'

type Delay = number | null
type TimerHandler = (...args: unknown[]) => void

/**
 * setInterval을 선언적으로 표현할 수 있는 훅입니다.
 *
 * @param callback - delay마다 실행될 함수
 * @param delay - 함수가 실행되는 간격, null로 설정하면 setInterval이 멈춥니다.
 */
export const useInterval = (callback: TimerHandler, delay: Delay) => {
  const savedCallbackRef = useRef<TimerHandler>()

  useEffect(() => {
    savedCallbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const handler = (...args: unknown[]) => savedCallbackRef.current?.(...args)
    if (delay) {
      const id = setInterval(handler, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
