import React, { useEffect, useState } from 'react';
import useDebounceParams from './index';
import { Input } from "antd"


const demo = () => {
  const [value,setValue] = useState("");
  const debounceValue = useDebounceParams(value,500);

  useEffect(() => {
    console.log(debounceValue)
    fetch(`/test/${debounceValue}`)
  },[debounceValue])

  return (
    <div>
      <Input onChange={(e) => setValue(e.target.value)} style={{width: "400px"}}/>
      <p>deboce后的值：{debounceValue}</p>
    </div>
  );
};

export default demo;