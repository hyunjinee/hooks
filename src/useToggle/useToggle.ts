import { useCallback, useState } from 'react'

export const useToggle = (defaultValue?: boolean) => {
  const [value, setValue] = useState(!!defaultValue)
  const toggle = useCallback(() => setValue((prev) => !prev), [])

  return [value, toggle, setValue] as [boolean, () => void, typeof setValue]
}
