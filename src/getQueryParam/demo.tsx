import React from "react";
import getQueryParam from "./index";

const Demo = () => {
  return (
    <div>
      {getQueryParam('name',"?name=这是一个参数的值")}
    </div>
  );
};

export default Demo;
