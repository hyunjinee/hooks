# useLockScroll

## example

```tsx
import React from 'react';
import { useLockScroll } from '@hyunjin/useLockScroll';

const App = () => {
  const [lock, setLock] = React.useState(false);
  useLockScroll(lock);

  return (
    <div>
      <button onClick={() => setLock(!lock)}>toggle lock</button>
      <div style={{ height: '200vh' }}>scroll me</div>
    </div>
  );
};
```
