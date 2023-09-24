import { useReducer } from 'react'

const updater = (num: number) => (num + 1) % 1_000_000

export const useForceUpdate = () => {
  const [, forceUpdate] = useReducer(updater, 0)

  return forceUpdate
}
