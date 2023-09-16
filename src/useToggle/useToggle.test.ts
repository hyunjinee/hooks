import { renderHook } from '@testing-library/react'
import { useToggle } from './useToggle'

describe('useToggle', () => {
  test('타입 체크', () => {
    const { result } = renderHook(() => useToggle())
    const [value, toggle, setValue] = result.current

    expect(typeof value).toBe('boolean')
    expect(typeof toggle).toBe('function')
    expect(typeof setValue).toBe('function')
  })
})
