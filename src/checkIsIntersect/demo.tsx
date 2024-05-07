import React from "react";
import checkIsIntersect from "./index";

const Demo = () => {
  (window as any).checkIsIntersect = checkIsIntersect;
  return (
    <div>
      例子：checkIsIntersect([[1, 10], [11, 20], [11, 20]])=
      {`${checkIsIntersect([
        [1, 10],
        [11, 20],
        [11, 20],
      ])}`}
      <p>可通过window.checkIsIntersect验证下</p>
    </div>
  );
};

export default Demo;
