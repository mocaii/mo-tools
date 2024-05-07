"use strict";(self.webpackChunkmo_tools_fe=self.webpackChunkmo_tools_fe||[]).push([[554],{78143:function(l,n,e){e.r(n),e.d(n,{demos:function(){return m}});var o=e(90228),u=e.n(o),t=e(87999),r=e.n(t),d=e(75271),m={"src-is-null-value-demo-demo":{component:d.memo(d.lazy(function(){return Promise.all([e.e(90),e.e(293),e.e(433)]).then(e.bind(e,62305))})),asset:{type:"BLOCK",id:"src-is-null-value-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(81780).Z},react:{type:"NPM",value:"18.3.1"},"./index.ts":{type:"FILE",value:e(4045).Z}},entry:"index.tsx"},context:{react:e(75271),"./index.ts":e(19196)},renderOpts:{compile:function(){var i=r()(u()().mark(function p(){var s,I=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(563).then(e.bind(e,15563));case 2:return a.abrupt("return",(s=a.sent).default.apply(s,I));case 3:case"end":return a.stop()}},p)}));function c(){return i.apply(this,arguments)}return c}()}}}},19196:function(l,n,e){e.r(n);var o=function(t){return t==null||t===""||String(t).trim()===""};n.default=o},46098:function(l,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u4E3A\u7A7A",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:3},{value:"\u8BF4\u660E",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"obj",paraId:1,tocIndex:3},{value:"\u53C2\u6570\u540D\u79F0",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"\u662F",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"\u53C2\u6570",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"value",paraId:2,tocIndex:4},{value:"\u7ED3\u679C",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4}]},81780:function(l,n){n.Z=`import React from "react";
import isNullValue from "./index";

const Demo = () => {
  return (
    <div>
      \u6CA1\u6709\u4F8B\u5B50\uFF0C\u5927\u5BB6\u90FD\u61C2
      {isNullValue('')}
    </div>
  );
};

export default Demo;
`},4045:function(l,n){n.Z=`
const isNullValue = (input: any) => {
  return (
    input === undefined ||
    input === null ||
    input === "" ||
    String(input).trim() === ""
  );
};

export default isNullValue`}}]);
