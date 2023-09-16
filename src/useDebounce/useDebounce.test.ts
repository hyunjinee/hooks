import { renderHook } from '@testing-library/react'
import { useDebounce } from './useDebounce'

const mockSetTimeout = () => {
  jest.useFakeTimers()
  jest.spyOn(global, 'setTimeout')
}
const mockClearTimeout = () => {
  jest.useFakeTimers()
  jest.spyOn(global, 'clearTimeout')
}

describe('useDebounce', () => {
  afterEach(() => {
    jest.useRealTimers()
  })

  test('디바운스된 값을 반환한다', () => {
    const value = 'test'
    const {
      result: { current: debouncedValue },
    } = renderHook(() => useDebounce(value))

    expect(value).toBe(debouncedValue)
  })

  test('기본 디바운스 시간은 500ms이다', () => {
    mockSetTimeout()

    renderHook(() => useDebounce('test'))

    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500)
  })

  test('디바운스 시간을 임의로 설정할 수 있다', () => {
    mockSetTimeout()

    renderHook(() => useDebounce('test', 1234))

    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1234)
  })

  test('컴포넌트가 언마운트되면 디바운스 타이머를 제거한다', () => {
    mockClearTimeout()
    const { unmount } = renderHook(() => useDebounce('test'))

    unmount()

    expect(clearTimeout).toHaveBeenCalledTimes(1)
  })
})
