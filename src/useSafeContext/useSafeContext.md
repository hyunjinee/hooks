# useSafeContext

useSafeContext 훅은 사용하고 싶은 Context를 안전하게 사용할 수 있도록 도와주는 훅입니다. 이 훅은 Context를 사용할 때, Context가 제공하는 Provider가 존재하지 않을 때, 에러를 발생시키고 적절한 에러메시지를 제공합니다.

## type

```ts
const useSafeContext: <T>(
  unsafeContext: Context<T>,
  customMessage?: CustomMessage,
) => NonNullable<T>;
```

## example

```tsx
const AuthContext = React.createContext<User | null>(null);

const useAuth = () =>
  useSafeContext(
    AuthContext,
    'AuthContext는 AuthProvider 내에서만 사용되어야 합니다',
  );
```
