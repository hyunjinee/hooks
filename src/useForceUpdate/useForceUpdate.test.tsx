import { renderHook } from '@testing-library/react-hooks'
import { useForceUpdate } from './useForceUpdate'
import { fireEvent, render, screen } from '@testing-library/react'

let renderCount = 0

const TestComponent = () => {
  const forceUpdate = useForceUpdate()

  renderCount++

  return <button onClick={forceUpdate}>버튼</button>
}

describe('useForceUpdate', () => {
  test('forceUpdate 함수를 반환한다', () => {
    const { result } = renderHook(() => useForceUpdate())
    const forceUpdate = result.current

    expect(typeof forceUpdate).toBe('function')
  })

  test('forceUpdate 함수를 호출하면 컴포넌트를 다시 렌더링한다', () => {
    render(<TestComponent />)

    expect(renderCount).toBe(1)
    fireEvent.click(screen.getByText('버튼'))
    expect(renderCount).toBe(2)
  })
})
