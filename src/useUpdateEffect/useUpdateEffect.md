# useUpdateEffect

useUpdateEffect 훅은 React 컴포넌트의 라이프사이클에서 첫 번째 렌더링 때는 실행되지 않고, 이후 의존성 배열(deps)에 명시된 값들이 변경될 때만 실행되도록 설계된 커스텀 훅입니다. 이는 useEffect 훅과 유사하지만, 첫 번째 렌더링을 제외하는 주요 차이점이 있습니다.

## type

```ts
const useUpdateEffect: (effect: EffectCallback, deps: DependencyList) => void;
```

## example

```tsx
import { useUpdateEffect } from '@hyunjin/hooks';

function Component({ value }) {
  useUpdateEffect(() => {
    console.log('value가 변경되었습니다.', value);
  }, [value]);

  return <></>;
}
```
