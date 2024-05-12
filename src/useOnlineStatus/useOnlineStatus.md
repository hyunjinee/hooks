# useOnlineStatus

useOnlineStatus 훅은 사용자의 인터넷 연결 상태를 추적하고 반환하는 훅입니다. 이를 통해 사용자는 인터넷 연결 유무에 따른 UI 업데이트를 쉽게 구현할 수 있습니다.

## type

```ts
const useOnlineStatus: () => boolean;
```

## element

```tsx
import { useOnlineStatus } from '@hyunjin/hooks';

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}
```
