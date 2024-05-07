import { Button } from 'antd';
import React from 'react';
import useArray from './index';

//写一个管理数组的hooks
const UseArrayDemo = () => {
  const persons: { name: string; age: number }[] = [
    { name: 'rose', age: 18 },
    { name: 'rose', age: 18 },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);
  return (
    <div>
      <Button onClick={() => add({ name: 'jack', age: 19 })}>add</Button>
      <Button onClick={() => removeIndex(0)}>removeIndex0</Button>
      <Button onClick={() => clear()}>clear</Button>
      {value.map((item, index) => (
        <div key={index}>
          姓名：{item.name}&nbsp;&nbsp;年龄：{item.age}
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default UseArrayDemo;
