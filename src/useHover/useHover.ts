import { useState, type RefObject } from 'react'

export const useHover = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
) => {
  const [value, setValue] = useState(false)

  ref

  const handleMouseEnter = () => setValue(true)
  const handleMouseLeave = () => setValue(false)

  handleMouseEnter
  handleMouseLeave

  return value
}
