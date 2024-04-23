import { renderHook } from '@testing-library/react';
import { createContext, type Context, type PropsWithChildren } from 'react';

import { useSafeContext } from './useSafeContext';

type TestContext = {
  name: string;
  age: number;
};

let TestContext: Context<TestContext | null>;

describe('useSafeContext', () => {
  beforeEach(() => {
    TestContext = createContext<TestContext | null>(null);
  });

  it('컨텍스트 Provider 하위에서 값을 가져온다', () => {
    const wrapper = ({ children }: PropsWithChildren) => {
      return (
        <TestContext.Provider value={{ name: 'hyunjin', age: 25 }}>
          {children}
        </TestContext.Provider>
      );
    };

    const { result } = renderHook(() => useSafeContext(TestContext), {
      wrapper,
    });

    expect(result.current.name).toBe('hyunjin');
    expect(result.current.age).toBe(25);
  });

  it('컨텍스트 Provider 없이 렌더링했을 때 DisplayName이 없는 경우 기본에러를 던진다', () => {
    expect(() => {
      renderHook(() => useSafeContext(TestContext));
    }).toThrowError('You are trying to use a context outside of the provider');
  });

  it('컨텍스트 Provider 없이 렌더링했을 때 DisplayName이 있는 경우 DisplayName을 던진다', () => {
    TestContext.displayName = 'TestContext';

    expect(() => {
      renderHook(() => useSafeContext(TestContext));
    }).toThrowError(
      'You are trying to use TestContext outside of the provider',
    );
  });

  it('컨텍스트 Provider 없이 렌더링했을 때 DisplayName이 있고 이를 포맷해서 display하는 함수를 전달한 경우 그 함수를 실행한다.', () => {
    TestContext.displayName = 'TestContext';

    expect(() => {
      renderHook(() =>
        useSafeContext(
          TestContext,
          (displayName) => `Missing Context Provider -> ${displayName}`,
        ),
      );
    }).toThrowError('Missing Context Provider -> TestContext');
  });
});
