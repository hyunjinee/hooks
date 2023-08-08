import { renderHook, act } from '@testing-library/react'
import { useOnClickOutside } from './useOnClickOutside'

const triggerRef = (value = false) => {
  const ref = { current: null }

  Object.defineProperty(ref, 'current', {
    get: jest.fn(() => (value ? document.createElement('div') : null)),
    set: jest.fn(() => null),
  })

  return ref
}

describe('useOnClickOutside', () => {
  test('document에 이벤트 리스너를 달아야한다.', () => {
    const ref = triggerRef(true)
    const handler = jest.fn()

    renderHook(() => useOnClickOutside(ref, handler))

    act(() => {
      document.dispatchEvent(new Event('mousedown'))
      document.dispatchEvent(new Event('touchstart'))
    })

    expect(handler).toHaveBeenCalledTimes(2) // mousedown, touchstart
  })

  // TODO: Component 외부 및 내부 클릭 테스트
})
