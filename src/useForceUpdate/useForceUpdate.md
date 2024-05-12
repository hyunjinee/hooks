# useForceUpdate

useForceUpdate 훅은 컴포넌트 강제 리렌더링을 위한 훅입니다.

## type

```ts
const useForceUpdate: () => React.DispatchWithoutAction;
```

## example

```tsx
let renderCount = 0;

const TestComponent = () => {
  const forceUpdate = useForceUpdate();

  renderCount++;
  console.log(renderCount);

  return <button onClick={forceUpdate}>강제 리렌더링 버튼</button>;
};
```
