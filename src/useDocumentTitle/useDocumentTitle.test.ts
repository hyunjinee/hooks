import { renderHook } from '@testing-library/react';

import { useDocumentTitle } from './useDocumentTitle';

describe('useDocumentTitle()', () => {
  test('문서의 제목을 설정한다.', () => {
    renderHook(() => useDocumentTitle('TITLE'));
    expect(window.document.title).toEqual('TITLE');
  });
});
