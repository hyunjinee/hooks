# useCallbackOnce

전달한 콜백함수를 처음 한번만 실행되는 함수로 만든다.

## type

```ts
const useCallbackOnce: <F extends (...args: unknown[]) => void>(
  callback: F,
  deps: DependencyList,
) => (...args: Parameters<F>) => void;
```

## example

```tsx
const Component = () => {
  const handleClick = useCallbackOnce(() => {
    alert('오직 한번만 실행된다');
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>
        You can click this button as many times as you want, but the alert will
        only show up on the first click.
      </p>
    </div>
  );
};
```
