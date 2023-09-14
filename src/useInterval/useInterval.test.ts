import { renderHook, cleanup } from '@testing-library/react-hooks'
import { useInterval } from './useInterval'

afterEach(cleanup)
jest.useFakeTimers()

describe('useInterval', () => {
  test('delay동한 함수를 반복해서 실행한다', () => {
    const handler = jest.fn()

    renderHook(() => useInterval(handler, 1000))

    expect(handler).toHaveBeenCalledTimes(0)
    jest.advanceTimersByTime(5000)
    expect(handler).toHaveBeenCalledTimes(5)
  })

  test('delay가 null이면 setInterval을 멈춘다', () => {
    const handler = jest.fn()

    renderHook(() => {
      useInterval(handler, null)
    })

    jest.advanceTimersByTime(5000)
    expect(handler).toHaveBeenCalledTimes(0)
  })

  test('새로운 handler를 전달하면 타이머는 재시작되지 않는다', () => {
    const handler1 = jest.fn()
    const handler2 = jest.fn()

    const { rerender } = renderHook(
      ({ handler, delay }) => useInterval(handler, delay),
      {
        initialProps: {
          handler: handler1,
          delay: 1000,
        },
      },
    )

    jest.advanceTimersByTime(5000)
    expect(handler1).toHaveBeenCalledTimes(5)

    rerender({
      handler: handler2,
      delay: 1000,
    })

    jest.advanceTimersByTime(5000)
    expect(handler1).toHaveBeenCalledTimes(5)
    expect(handler2).toHaveBeenCalledTimes(5)
  })

  test('새로운 delay를 전달하면 현재 타이머를 중지하고 새로운 타이머를 시작한다', () => {
    const handler = jest.fn()

    const { rerender } = renderHook(
      ({ handler, delay }) => useInterval(handler, delay),
      {
        initialProps: {
          handler,
          delay: 1000,
        },
      },
    )

    jest.advanceTimersByTime(5000)
    expect(handler).toHaveBeenCalledTimes(5)

    rerender({
      handler,
      delay: 2000,
    })

    jest.advanceTimersByTime(4000)
    expect(handler).toHaveBeenCalledTimes(7)
  })

  test('delay를 null로 변경하면 현재 실행중인 타이머를 중지한다', () => {
    const handler = jest.fn()
    let delay: number | null = 500

    const { rerender } = renderHook(() => {
      useInterval(handler, delay)
    })

    jest.advanceTimersByTime(1000)
    expect(handler).toHaveBeenCalledTimes(2)

    delay = null
    rerender()
    jest.advanceTimersByTime(5000)
    expect(handler).toHaveBeenCalledTimes(2)
  })

  test('같은 handler와 같은 delay를 전달하면 타이머는 아무 변화 없이 계속 실행된다', () => {
    const handler = jest.fn()

    const { rerender } = renderHook(() => {
      useInterval(handler, 1000)
    })

    jest.advanceTimersByTime(5000)
    expect(handler).toHaveBeenCalledTimes(5)

    rerender()

    jest.advanceTimersByTime(5000)
    expect(handler).toHaveBeenCalledTimes(10)
  })
})
