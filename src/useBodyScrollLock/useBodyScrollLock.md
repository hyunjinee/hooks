# useBodyScrollLock

`useBodyScrollLock` 훅은 활성화되면 body 스크롤을 잠그는 훅입니다.

주로 Overlay를 띄울 때 사용합니다.

## type

```ts
const useBodyScrollLock: (enable?: boolean) => void;
```

## example

```tsx
import React from 'react';
import { useBodyScrollLock } from '@hyunjin/hooks';

const App = () => {
  const [lock, setLock] = React.useState(false);
  useBodyScrollLock(lock);

  return (
    <div>
      <button onClick={() => setLock(!lock)}>toggle lock</button>
      <div style={{ height: '200vh' }}>scroll me</div>
    </div>
  );
};
```
