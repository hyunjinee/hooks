import { render } from '@testing-library/react';
import { useEffect, type DependencyList } from 'react';
import { useCallbackOnce } from './useCallbackOnce';

const TestComponent = <F extends (...args: unknown[]) => void>({
  callback,
  deps,
}: {
  callback: F;
  deps: DependencyList;
}) => {
  const onceCallback = useCallbackOnce(
    (...args: unknown[]) => callback(...args),
    deps,
  );

  useEffect(
    (...args: Parameters<F>) => {
      onceCallback(...args);
    },
    [onceCallback],
  );

  return <div />;
};

describe('useCallbackOnce', () => {
  test('마운트 되었을 때 callback이 실행된다', () => {
    const callback = jest.fn();

    render(<TestComponent callback={callback} deps={[]} />);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('리렌더링 되었을 때는 실행되지 않아야한다', () => {
    const callback = jest.fn();
    const { rerender } = render(
      <TestComponent callback={callback} deps={[1]} />,
    );

    expect(callback).toHaveBeenCalledTimes(1);

    rerender(<TestComponent callback={callback} deps={[2]} />);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).not.toHaveBeenCalledTimes(2);
  });
});
