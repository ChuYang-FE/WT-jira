import { useState, useEffect } from 'react';

/* 
当对象的值为空（不包括0），则过滤掉。
Delete those values that are isFalsy(except 0)
*/
const isFalsy = (value: unknown) => (value === 0 ? false : !value);

interface UnknownObj {
  [propName: string]: unknown;
}

export const cleanObject = (object: UnknownObj) => {
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

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
};

export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    removeIndex: (index: number) => {
      const finalValue = [...value];
      finalValue.splice(index, 1);
      setValue(finalValue);
    },
    clear: () => setValue([]),
  };
};
