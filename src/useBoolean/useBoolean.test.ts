import { act, renderHook } from '@testing-library/react';
import { useBoolean } from './useBoolean';

describe('useBoolean', () => {
  test('기본값을 설정하지 않으면 false를 반환한다', () => {
    const { result } = renderHook(() => useBoolean());
    expect(result.current.value).toBe(false);
  });

  test('기본값을 설정하면 해당 값을 반환한다', () => {
    const { result } = renderHook(() => useBoolean(true));
    expect(result.current.value).toBe(true);
  });

  test('setTrue 호출 시 상태를 true로 설정해야 한다', () => {
    const { result } = renderHook(() => useBoolean(false));
    act(() => {
      result.current.setTrue();
    });
    expect(result.current.value).toBe(true);
  });

  test('setFalse 호출 시 상태를 false로 설정해야 한다', () => {
    const { result } = renderHook(() => useBoolean(true));
    act(() => {
      result.current.setFalse();
    });
    expect(result.current.value).toBe(false);
  });

  test('toggle 호출 시 값이 반전되어야 한다', () => {
    const { result } = renderHook(() => useBoolean(false));
    act(() => {
      result.current.toggle();
    });
    expect(result.current.value).toBe(true);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.value).toBe(false);
  });
});
