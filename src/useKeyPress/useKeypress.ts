import { DependencyList, useEffect } from 'react';

/**
 * 수정 필요
 * @param param0
 */
export const useKeyPress = ({
  useAltKey = true,
  active = true,
  targetCode,
  onPress,
  dep = [],
}: {
  useAltKey?: boolean;
  targetCode: string | string[];
  onPress: () => void;
  dep?: DependencyList;
  active?: boolean;
}) => {
  useEffect(() => {
    // Ensure targetCode is always an array to simplify checking
    const targetCodesArray = Array.isArray(targetCode)
      ? targetCode
      : [targetCode];

    const downHandler = ({ code, altKey }: KeyboardEvent) => {
      if (altKey === useAltKey && targetCodesArray.includes(code) && active) {
        onPress();
      }
    };

    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, [active, useAltKey, onPress, targetCode, ...dep]);
};
