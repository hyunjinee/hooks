import { useEffect, useLayoutEffect } from 'react';

/**
 *  React의 코드와 로직 맞춤. shared/ExecutionEnvironment
 *
 *  React currently throws a warning when using useLayoutEffect on the server.
 *  To get around it, we can conditionally useEffect on the server (no-op) and
 *  useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
 *  subscription callback always has the selector from the latest render commit
 *  available, otherwise a store update may happen between render and the effect,
 *  which may cause missed updates; we also must ensure the store subscription
 *  is created synchronously, otherwise a store update may occur before the
 *  subscription is created and an inconsistent state may be observed
 *
 * reference
 * - React Redux 소스코드
 */
export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
);

export const useIsomorphicLayoutEffect = canUseDOM
  ? useLayoutEffect
  : useEffect;
