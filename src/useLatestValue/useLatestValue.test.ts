import { renderHook } from '@testing-library/react'
import { useLatestValue } from './useLatestValue'

describe('useLatestValue', () => {
  test('인자로 전달한 값을 렌더링간에 기억한다', () => {
    const { result, rerender } = renderHook(() => useLatestValue('test value'))

    expect(result.current.current).toBe('test value')
    rerender()
    expect(result.current.current).toBe('test value')
  })
})
