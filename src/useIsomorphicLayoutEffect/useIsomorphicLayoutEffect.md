# useIsomorphicLayoutEffect

클라이언트 사이드 또는 서버 사이드 환경에 따라 useLayoutEffect 또는 useEffect를 사용하는 커스텀 훅.

## type

```ts
const useIsomorphicLayoutEffect: (
  effect: EffectCallback,
  deps?: DependencyList,
) => void;
```

## example

```tsx
import { useIsomorphicLayoutEffect } from '@hyunjin/hooks';

function Component() {
  useIsomorphicLayoutEffect(() => {
    console.log(
      '브라우저에서는 `useLayoutEffect`이고, SSR에서는 `useEffect`로 동작합니다.',
    );
  }, []);

  return <></>;
}
```
