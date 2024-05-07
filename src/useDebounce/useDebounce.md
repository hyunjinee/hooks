# useDebounce

`useDebounce` 훅은 `value`와 `delay(optional)`를 인자로 받아 debounced value를 반환한다.

## type

```ts
const useDebounce: <T>(value: T, delay?: number) => T;
```

## example

```tsx
import React, { useState } from 'react';
import { useDebounce } from '@hyunjin/hooks';

function Component() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // API call or other logic using the debounced search term
  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log(`Searching for ${debouncedSearchTerm}`);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="검색어를 입력해주세요"
    />
  );
}
```
