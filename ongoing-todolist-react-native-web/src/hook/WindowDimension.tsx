import { useState, useEffect } from 'react';

export function useWindowDimension() {
  const measure = () => ({ width: window.innerWidth, height: window.innerHeight });
  const [dimension, setDimension] = useState(() => measure());

  useEffect(() => {
    const onResize = () => {
      setDimension(measure());
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return dimension;
}
