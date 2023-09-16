import { type EffectCallback, useEffect } from 'react'

export const useMount = (callback: EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, [])
}
