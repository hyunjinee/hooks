# useBoolean

`useBoolean` 훅은 `defaultValue?(기본값=false)`를 인자로 받아 boolean 값을 쉽게 다루는 인터페이스를 제공한다.

## type

```ts
const useBoolean: (defaultValue?: boolean) => {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
};
```

## example

```tsx
import { useBoolean } from '@hyunjin/hooks';

const Component = () => {
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);

  return (
    <>
      <div>
        값: <code>{value.toString()}</code>
      </div>
      <button onClick={setTrue}>set true</button>
      <button onClick={setFalse}>set false</button>
      <button onClick={toggle}>토글</button>
    </>
  );
};
```
