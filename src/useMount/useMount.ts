import { useEffect } from 'react'

type Fn = () => void

export const useMount = (callback: Fn) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, [])
}
