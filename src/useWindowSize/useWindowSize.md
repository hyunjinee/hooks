# useWindowSize

window 창의 크기를 반환하는 훅입니다.

## type

```ts
const useWindowSize: () => WindowSize | undefined;
```

## example

```tsx
import { useWindowSize } from '@hyunjin/hooks';

function Component() {
  const { width, height } = useWindowSize();

  return (
    <div>
      {windowSize && (
        <div>
          <div>width: {width}</div>
          <div>height: {height}</div>
        </div>
      )}
    </div>
  );
}
```
