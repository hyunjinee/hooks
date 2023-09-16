import { useIsomorphicEffect } from '..'

/**
 * 현재 문서에 title을 설정합니다.
 *
 * @param title
 */
export const useDocumentTitle = (title: string) => {
  useIsomorphicEffect(() => {
    window.document.title = title
  }, [title])
}
