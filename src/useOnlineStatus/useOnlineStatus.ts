import { useSyncExternalStore } from 'react';

const getNetworkState = () => {
  return navigator.onLine;
};

const subscribe = (callback: () => void) => {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);

  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
};

const getServerSnapshot = () => {
  return true;
};

/**
 * https://react.dev/reference/react/useSyncExternalStore
 */
export const useOnlineStatus = () => {
  const isOnline = useSyncExternalStore(
    subscribe,
    getNetworkState,
    getServerSnapshot,
  );

  return isOnline;
};
