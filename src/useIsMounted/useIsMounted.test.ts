import { renderHook } from '@testing-library/react';

import { useIsMounted } from './useIsMounted';

describe('useIsMounted', () => {
  test('컴포넌트가 마운트되었을 때 true를 반환한다', () => {
    const {
      result: { current: isMounted },
    } = renderHook(() => useIsMounted());

    expect(isMounted()).toBe(true);
  });

  test('컴포넌트가 언마운트되었을 때 false를 반환한다', () => {
    const {
      result: { current: isMounted },
      unmount,
    } = renderHook(() => useIsMounted());

    unmount();

    expect(isMounted()).toBe(false);
  });
});
