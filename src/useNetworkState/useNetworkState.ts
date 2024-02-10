import { useSyncExternalStore } from 'react'

const getNetworkState = () => {
  return navigator.onLine
}

// subscribe 함수 수정필요
const subscribe = (callback: () => void) => {
  window.addEventListener('online', callback)
  window.addEventListener('offline', callback)

  return () => {
    window.removeEventListener('online', callback)
    window.removeEventListener('offline', callback)
  }
}

const getServerSnapshot = () => {
  return true
}

/**
 * https://react.dev/reference/react/useSyncExternalStore
 */
export const useNetworkState = () => {
  const state = useSyncExternalStore(
    subscribe,
    getNetworkState,
    getServerSnapshot,
  )

  return state
}
