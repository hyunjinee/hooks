import { useCallback, useState } from 'react'

/**
 * @description toggle을 위한 훅입니다.
 * @param {T | undefined} [defaultValue] toggle하고 싶은 초기값입니다.
//  * @returns {[T, () => void, typeof setValue]} [value, toggle, setValue]를 반환합니다.
 */
export const useToggle = <T>(
  defaultValue?: T,
): [boolean, () => void, typeof setValue] => {
  const [value, setValue] = useState(!!defaultValue)
  const toggle = useCallback(() => setValue((prev) => !prev), [])

  return [value, toggle, setValue]
}
