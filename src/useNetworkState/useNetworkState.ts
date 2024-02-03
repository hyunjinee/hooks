import { useSyncExternalStore } from 'react'

const getNetworkState = () => {
  return navigator.onLine
}

// subscribe 함수 수정필요
const subscribe = (onChange: () => void) => {
  window.addEventListener('online', onChange)
  window.addEventListener('offline', onChange)

  return () => {
    window.removeEventListener('online', onChange)
    window.removeEventListener('offline', onChange)
  }
}

export const useNetworkState = () => {
  const state = useSyncExternalStore(subscribe, getNetworkState)

  return state
}
