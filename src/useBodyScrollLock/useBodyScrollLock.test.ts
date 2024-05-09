import { renderHook } from '@testing-library/react-hooks';
import { useBodyScrollLock } from './useBodyScrollLock';

describe('useBodyScrollLock', () => {
  test('마운트되면 body 태그의 스크롤이 막히고 언마운트되면 스크롤이 풀린다', () => {
    const { unmount } = renderHook(() => useBodyScrollLock());

    expect(document.body.style.overflow).toBe('hidden');
    unmount();
    expect(document.body.style.overflow).not.toBe('hidden');
  });

  test('초기값으로 false를 전달하면 body scroll을 막지 않아야한다', () => {
    renderHook(() => useBodyScrollLock(false));
    expect(document.body.style.overflow).toBe('');
  });
});
