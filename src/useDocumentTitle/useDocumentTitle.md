# useDocumentTitle

`useDocumentTitle` 훅은 현재 문서의 제목을 설정하는 커스텀 훅이다.

## type

```ts
const useDocumentTitle: (title: string) => void;
```

## example

```tsx
import { useDocumentTitle } from '@hyunjin/hooks';

function Component() {
  useDocumentTitle('새로운 제목');
  return <></>;
}
```
