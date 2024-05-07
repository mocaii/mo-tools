"use strict";(self.webpackChunkmo_tools_fe=self.webpackChunkmo_tools_fe||[]).push([[465],{43147:function(l,n,e){e.r(n),e.d(n,{demos:function(){return o}});var u=e(90228),m=e.n(u),r=e(87999),s=e.n(r),t=e(75271),o={"src-float-num-plus-demo-demo":{component:t.memo(t.lazy(function(){return Promise.all([e.e(90),e.e(293),e.e(433)]).then(e.bind(e,81020))})),asset:{type:"BLOCK",id:"src-float-num-plus-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(29828).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.17.0"},"./index.ts":{type:"FILE",value:e(64239).Z}},entry:"index.tsx"},context:{react:e(75271),antd:e(81009),"./index.ts":e(2408)},renderOpts:{compile:function(){var d=s()(m()().mark(function I(){var p,i=arguments;return m()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(563).then(e.bind(e,15563));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,i));case 3:case"end":return a.stop()}},I)}));function c(){return d.apply(this,arguments)}return c}()}}}},2408:function(l,n,e){e.r(n);var u=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t,o;try{t=r.toString().split(".")[1].length}catch(c){t=0}try{o=s.toString().split(".")[1].length}catch(c){o=0}var d=Math.pow(10,Math.max(t,o));return(r*d+s*d)/d};n.default=u},16144:function(l,n,e){e.r(n),e.d(n,{texts:function(){return u}});const u=[{value:"\u6D6E\u70B9\u6570\u52A0/\u51CF\u8FD0\u7B97",paraId:0,tocIndex:0},{value:`floatNumPlus(a, b);
`,paraId:1,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"a",paraId:2,tocIndex:3},{value:"\u7B2C\u4E00\u4E2A\u6570",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"b",paraId:2,tocIndex:3},{value:"\u7B2C\u4E8C\u4E2A\u6570",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"\u7ED3\u679C",paraId:3,tocIndex:4},{value:"number",paraId:3,tocIndex:4}]},29828:function(l,n){n.Z=`import React,{ useState } from "react";
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
      <p>\u666E\u901A\u52A0\u6CD5\uFF1A{Number(numbers.a)+ Number(numbers.b)}</p>
      <p>floatNumPlus\uFF1A{floatNumPlus(Number(numbers.a),Number(numbers.b))}</p>
    </div>
  );
};

export default Demo;
`},64239:function(l,n){n.Z=`
const floatNumPlus = (a = 0, b = 0) => {
  let c, d;
  try {
    c = a.toString().split(".")[1].length;
  } catch (e) {
    c = 0;
  }
  try {
    d = b.toString().split(".")[1].length;
  } catch (e) {
    d = 0;
  }
  const m = Math.pow(10, Math.max(c, d));
  return (a * m + b * m) / m;
};

export default floatNumPlus`}}]);
