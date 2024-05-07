import React,{ useState } from "react";
import { Input } from "antd";
import floatNumMultiply from "./index";

const Demo = () => {
  const [numbers,setNumbers] = useState({
    a: "",
    b: ""
  })
  return (
    <div>
      a:
      <Input onChange={(e) => setNumbers({
        ...numbers,
        a: e.target.value
      })}/>
      b:
      <Input onChange={(e) => setNumbers({
        ...numbers,
        b: e.target.value
      })}/>
      <p>普通乘法：{Number(numbers.a)+ Number(numbers.b)}</p>
      <p>floatNumMultiply{floatNumMultiply(Number(numbers.a),Number(numbers.b))}</p>
    </div>
  );
};

export default Demo;
