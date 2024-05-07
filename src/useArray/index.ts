import { useState } from 'react';

//hooks 管理一个数组
//add新增，clear清除，removeIndex删除指定下标元素
const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue([...copy]);
    },
  };
};

export default useArray;
