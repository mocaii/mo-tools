"use strict";(self.webpackChunkmo_tools_fe=self.webpackChunkmo_tools_fe||[]).push([[476],{58785:function(u,e,n){n.r(e),n.d(e,{demos:function(){return l}});var o=n(17061),d=n.n(o),m=n(17156),s=n.n(m),t=n(67294),l={"src-float-num-multiply-demo-demo":{component:t.memo(t.lazy(function(){return Promise.all([n.e(593),n.e(953),n.e(433)]).then(n.bind(n,89708))})),asset:{type:"BLOCK",id:"src-float-num-multiply-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(55646).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.17.0"},"./index.ts":{type:"FILE",value:n(68342).Z}},entry:"index.tsx"},context:{react:n(67294),antd:n(46792),"./index.ts":n(94483)},renderOpts:{compile:function(){var r=s()(d()().mark(function I(){var c,v=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(335).then(n.bind(n,37335));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,v));case 3:case"end":return a.stop()}},I)}));function p(){return r.apply(this,arguments)}return p}()}}}},94483:function(u,e,n){n.r(e);var o=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=0,l=m.toString(),r=s.toString();try{t+=l.split(".")[1].length}catch(p){}try{t+=r.split(".")[1].length}catch(p){}return Number(l.replace(".",""))*Number(r.replace(".",""))/Math.pow(10,t)};e.default=o},69515:function(u,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[{value:"\u6D6E\u70B9\u6570\u4E58/\u9664\u8FD0\u7B97",paraId:0,tocIndex:0},{value:`floatNumMultiply(a, b);
`,paraId:1,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"a",paraId:2,tocIndex:3},{value:"\u7B2C\u4E00\u4E2A\u6570",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"b",paraId:2,tocIndex:3},{value:"\u7B2C\u4E8C\u4E2A\u6570",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"\u7ED3\u679C",paraId:3,tocIndex:4},{value:"number",paraId:3,tocIndex:4}]},55646:function(u,e){e.Z=`import React,{ useState } from "react";
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
`},68342:function(u,e){e.Z=`
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
