import { renderHook as renderHookCsr } from '@testing-library/react-hooks/dom';
import { renderHook as renderHookSsr } from '@testing-library/react-hooks/server';

describe('useIsClient', () => {
  it('브라우저 환경에서 true를 반환한다', () => {
    // TODO
  });

  it('should return false on the server', () => {
    // TODO
  });
});
