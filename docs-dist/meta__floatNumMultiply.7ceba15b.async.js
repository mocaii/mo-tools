"use strict";(self.webpackChunkmo_tools_fe=self.webpackChunkmo_tools_fe||[]).push([[476],{31107:function(o,n,e){e.r(n),e.d(n,{demos:function(){return l}});var u=e(90228),d=e.n(u),m=e(87999),s=e.n(m),t=e(75271),l={"src-float-num-multiply-demo-demo":{component:t.memo(t.lazy(function(){return Promise.all([e.e(90),e.e(293),e.e(433)]).then(e.bind(e,5779))})),asset:{type:"BLOCK",id:"src-float-num-multiply-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(36641).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.17.0"},"./index.ts":{type:"FILE",value:e(69191).Z}},entry:"index.tsx"},context:{react:e(75271),antd:e(81009),"./index.ts":e(86368)},renderOpts:{compile:function(){var r=s()(d()().mark(function i(){var c,I=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(563).then(e.bind(e,15563));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,I));case 3:case"end":return a.stop()}},i)}));function p(){return r.apply(this,arguments)}return p}()}}}},86368:function(o,n,e){e.r(n);var u=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=0,l=m.toString(),r=s.toString();try{t+=l.split(".")[1].length}catch(p){}try{t+=r.split(".")[1].length}catch(p){}return Number(l.replace(".",""))*Number(r.replace(".",""))/Math.pow(10,t)};n.default=u},92076:function(o,n,e){e.r(n),e.d(n,{texts:function(){return u}});const u=[{value:"\u6D6E\u70B9\u6570\u4E58/\u9664\u8FD0\u7B97",paraId:0,tocIndex:0},{value:`floatNumMultiply(a, b);
`,paraId:1,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"a",paraId:2,tocIndex:3},{value:"\u7B2C\u4E00\u4E2A\u6570",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"b",paraId:2,tocIndex:3},{value:"\u7B2C\u4E8C\u4E2A\u6570",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"\u7ED3\u679C",paraId:3,tocIndex:4},{value:"number",paraId:3,tocIndex:4}]},36641:function(o,n){n.Z=`import React,{ useState } from "react";
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
      <p>\u666E\u901A\u4E58\u6CD5\uFF1A{Number(numbers.a)+ Number(numbers.b)}</p>
      <p>floatNumMultiply{floatNumMultiply(Number(numbers.a),Number(numbers.b))}</p>
    </div>
  );
};

export default Demo;
`},69191:function(o,n){n.Z=`
const floatNumMultiply = (a = 0, b = 0) => {
  let m = 0;
  const c = a.toString();
  const d = b.toString();

  try {
    m += c.split(".")[1].length;
  } catch (e) {}

  try {
    m += d.split(".")[1].length;
  } catch (e) {}

  return (
    (Number(c.replace(".", "")) * Number(d.replace(".", ""))) / Math.pow(10, m)
  );
};

export default floatNumMultiply`}}]);
