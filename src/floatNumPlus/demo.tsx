import React,{ useState } from "react";
import { Input } from "antd";
import floatNumPlus from "./index";

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
      <p>普通加法：{Number(numbers.a)+ Number(numbers.b)}</p>
      <p>floatNumPlus：{floatNumPlus(Number(numbers.a),Number(numbers.b))}</p>
    </div>
  );
};

export default Demo;
