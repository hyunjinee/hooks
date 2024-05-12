## useIsClient

이 훅은 window나 document 객체에 접근해야 하는 등, 특정 코드가 브라우저에서만 실행되도록 보장해야 하는 경우에
사용합니다.

## type

```ts
const useIsClient: () => boolean;
```

## example

```tsx
const Component = () => {
  const isClient = useIsClient();

  if (isClient) {
    // 이 코드는 클라이언트에서만 실행됩니다.
    return <div>클라이언트 사이드 렌더링</div>;
  }

  // 이 코드는 서버 사이드 렌더링 중에 실행됩니다.
  return <div>서버 사이드 렌더링</div>;
};
```
