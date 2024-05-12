# useIsFirstRender

useIsFirstRender 훅은 컴포넌트가 처음 렌더링될 때만 true를 반환하고, 그 이후 렌더링 시에는 false를 반환하는 커스텀 훅입니다. 이를 통해 컴포넌트의 첫 번째 렌더링 여부를 추적할 수 있습니다.

## type

```ts
const useIsFirstRender: () => boolean;
```

## example

```tsx
import React, { useEffect } from 'react';
import { useIsFirstRender } from '@hyunjin/hooks';

function Component() {
  const isFirstRender = useIsFirstRender();

  useEffect(() => {
    if (isFirstRender) {
      console.log('This runs only on the first render.');
    } else {
      console.log('This runs on subsequent renders.');
    }
  });

  return <></>;
}
```
