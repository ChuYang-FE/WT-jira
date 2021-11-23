import { useState, useEffect } from 'react';

/* 
当对象的值为空（不包括0），则过滤掉。
Delete those values that are isFalsy(except 0)
*/
const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const cleanObject = (object: any) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

/* 
export const debounce = (func, delay) => {
  let timer;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => func(), delay);
  };
};
*/

export const useDebounce = (value: unknown, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
};
