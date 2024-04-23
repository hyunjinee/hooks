import { renderHook } from '@testing-library/react';
import { useMount } from './useMount';

describe('useMount', () => {
  test('compounentDidMount 시점에 한 번만 실행된다', () => {
    const effect = jest.fn();
    const { rerender } = renderHook(() => useMount(effect));

    expect(effect).toHaveBeenCalledTimes(1);
    rerender();
    expect(effect).toHaveBeenCalledTimes(1);
  });
});
