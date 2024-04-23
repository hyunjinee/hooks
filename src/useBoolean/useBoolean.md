# useBoolean

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
