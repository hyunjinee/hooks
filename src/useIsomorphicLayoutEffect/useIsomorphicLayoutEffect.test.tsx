import React from 'react'
import {
  render,
  cleanup,
  // act
} from '@testing-library/react'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

// TODO FIX TEST

let useLayoutEffectMock: jest.SpyInstance
let useEffectMock: jest.SpyInstance

beforeAll(() => {
  useLayoutEffectMock = jest
    .spyOn(React, 'useLayoutEffect')
    .mockImplementation(React.useEffect)
  useEffectMock = jest
    .spyOn(React, 'useEffect')
    .mockImplementation(React.useEffect)
})

afterEach(() => {
  cleanup()
  useLayoutEffectMock.mockClear()
  useEffectMock.mockClear()
})

function Component() {
  useIsomorphicLayoutEffect(() => {}, [])
  return <></>
}

describe('useIsomorphicLayoutEffect', () => {
  test('브라우저에서는 LayoutEffect가 호출된다.', () => {
    // Simulate a browser environment
    // Object.defineProperty(global, 'window', { value: {} })
    // console.log(global, window)
    // act(() => {
    //   render(<Component />)
    // })
    // expect(useLayoutEffectMock).toHaveBeenCalled()
    // expect(useEffectMock).not.toHaveBeenCalled()
  })

  test('should use useEffect on the server', () => {
    // Simulate a server environment
    // Object.defineProperty(global, 'window', { value: undefined })

    render(<Component />)

    // expect(useEffectMock).toHaveBeenCalled()
    // expect(useLayoutEffectMock).not.toHaveBeenCalled()
  })
})
