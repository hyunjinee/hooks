import { renderHook } from '@testing-library/react-hooks';
import { useBodyScrollLock } from './useBodyScrollLock';

describe('useBodyScrollLock', () => {
  it('should lock body scroll when mounted and unlock when unmounted', () => {
    const { unmount } = renderHook(() => useBodyScrollLock());

    expect(document.body.style.overflow).toBe('hidden');
    unmount();
    expect(document.body.style.overflow).not.toBe('hidden');
  });

  it('should not lock body scroll when initial value is false', () => {
    renderHook(() => useBodyScrollLock(false));
    expect(document.body.style.overflow).toBe('');
  });
});
