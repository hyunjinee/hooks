import { useState } from 'react'
import { useIsomorphicEffect } from '../useIsomorphicEffect/useIsomorphicEffect'

type WindowSize = {
  width: number
  height: number
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  })

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useIsomorphicEffect(() => {
    handleSize()
  }, [])

  return windowSize
}
