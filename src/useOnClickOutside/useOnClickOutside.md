# useOnClickOutside

## type

## example

```tsx
import { useOnClickOutside } from '@hyunjin/hooks';

const Component = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = React.useState(false);

  useOnClickOutside(ref, () => {
    setIsClicked(false);
  });

  return (
    <div>
      <div
        ref={ref}
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: isClicked ? 'red' : 'blue',
        }}
        onClick={() => setIsClicked(true)}
      >
        {isClicked ? 'Clicked!' : 'Click me!'}
      </div>
    </div>
  );
};
```
