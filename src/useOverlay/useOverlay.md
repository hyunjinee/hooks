# useOverlay

useOverlay 훅은 오버레이(overlay)를 관리하는 커스텀 훅입니다. 이 훅을 사용하여 React 애플리케이션 내에서 오버레이를 쉽게 열고 닫을 수 있습니다. 오버레이를 열 때는 open 메서드를, 닫을 때는 close 메서드를 사용합니다. 각 오버레이는 고유한 ID를 가지며, 이 ID는 내부적으로 자동 생성됩니다.

## type

## example

```tsx
import { OverlayProvider } from '@hyunjin/hooks';
import OverlayExample from './OverlayExample';

const App = () => {
  return (
    <OverlayProvider>
      <OverlayExample />
    </OverlayProvider>
  );
};
```

```tsx
import { useState } from 'react';
import useOverlay from '@hyunjin/hooks';

const OverlayExample = () => {
  const { open, close } = useOverlay();

  const handleOpenOverlay = () => {
    open(
      <div className="overlay">
        <div className="overlay-content">
          <h2>Hello from the Overlay!</h2>
          <button
            onClick={() => {
              close();
            }}
          >
            Close Overlay
          </button>
        </div>
      </div>,
    );
  };

  return (
    <div>
      <button onClick={handleOpenOverlay}>Open Overlay</button>
    </div>
  );
};
```

```css
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button {
  margin-top: 10px;
}
```
