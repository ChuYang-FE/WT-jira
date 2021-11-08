const isFalsy = value => value === 0 ? false : !!value;

// 当对象的值为空（不包括0），则过滤掉。
export const cleanObject = object => {
  const result = {...object};
  Object.keys(object).forEach(key => {
    const value = object[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
};