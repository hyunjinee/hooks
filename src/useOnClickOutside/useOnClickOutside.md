# useOnClickOutside

`useOnClickOutside` 훅은 사용자가 특정 요소 외부를 클릭할 때 실행할 핸들러 함수를 설정하기 위해 사용됩니다. 이 훅은 주어진 요소를 가리키는 ref와 외부 클릭이 감지될 때 실행할 함수 handler를 인수로 받습니다.

## type

```ts
const useOnClickOutside: <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
) => void;
```

## example

```tsx
import { useOnClickOutside } from '@hyunjin/hooks';

const Component = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = React.useState(false);

  useOnClickOutside(ref, () => {
    setIsClicked(false);
  });

  return (
    <div>
      <div
        ref={ref}
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: isClicked ? 'red' : 'blue',
        }}
        onClick={() => setIsClicked(true)}
      >
        {isClicked ? 'Clicked!' : 'Click me!'}
      </div>
    </div>
  );
};
```
