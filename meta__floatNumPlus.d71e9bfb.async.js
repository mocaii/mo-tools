"use strict";(self.webpackChunkmo_tools_fe=self.webpackChunkmo_tools_fe||[]).push([[465],{19943:function(l,e,n){n.r(e),n.d(e,{demos:function(){return u}});var o=n(17061),m=n.n(o),d=n(17156),s=n.n(d),t=n(67294),u={"src-float-num-plus-demo-demo":{component:t.memo(t.lazy(function(){return Promise.all([n.e(593),n.e(953),n.e(433)]).then(n.bind(n,45825))})),asset:{type:"BLOCK",id:"src-float-num-plus-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(16998).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.17.0"},"./index.ts":{type:"FILE",value:n(72723).Z}},entry:"index.tsx"},context:{react:n(67294),antd:n(46792),"./index.ts":n(50850)},renderOpts:{compile:function(){var r=s()(m()().mark(function p(){var c,f=arguments;return m()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(335).then(n.bind(n,37335));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,f));case 3:case"end":return a.stop()}},p)}));function I(){return r.apply(this,arguments)}return I}()}}}},50850:function(l,e,n){n.r(e);var o=function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t,u;try{t=d.toString().split(".")[1].length}catch(I){t=0}try{u=s.toString().split(".")[1].length}catch(I){u=0}var r=Math.pow(10,Math.max(t,u));return(d*r+s*r)/r};e.default=o},31734:function(l,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[{value:"\u6D6E\u70B9\u6570\u52A0/\u51CF\u8FD0\u7B97",paraId:0,tocIndex:0},{value:`floatNumPlus(a, b);
`,paraId:1,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"a",paraId:2,tocIndex:3},{value:"\u7B2C\u4E00\u4E2A\u6570",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"b",paraId:2,tocIndex:3},{value:"\u7B2C\u4E8C\u4E2A\u6570",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"\u7ED3\u679C",paraId:3,tocIndex:4},{value:"number",paraId:3,tocIndex:4}]},16998:function(l,e){e.Z=`import React,{ useState } from "react";
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
`},72723:function(l,e){e.Z=`
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
