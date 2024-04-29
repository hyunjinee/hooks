import { useEffect, useState } from 'react';

type WindowSize = {
  width: number;
  height: number;
};
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize | undefined>();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
};
// import { useState } from 'react';
// import { useIsomorphicEffect } from '../useIsomorphicEffect/useIsomorphicEffect';

// type WindowSize = {
//   width: number;
//   height: number;
// };

// export const useWindowSize = () => {
//   const [windowSize, setWindowSize] = useState<WindowSize>({
//     width: 0,
//     height: 0,
//   });

//   const handleSize = () => {
//     setWindowSize({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//   };

//   useIsomorphicEffect(() => {
//     handleSize();
//   }, []);

//   return windowSize;
// };
