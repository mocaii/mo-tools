"use strict";(self.webpackChunkmo_tools_fe=self.webpackChunkmo_tools_fe||[]).push([[554],{85411:function(l,e,n){n.r(e),n.d(e,{demos:function(){return m}});var a=n(17061),u=n.n(a),o=n(17156),s=n.n(o),d=n(67294),m={"src-is-null-value-demo-demo":{component:d.memo(d.lazy(function(){return Promise.all([n.e(593),n.e(953),n.e(433)]).then(n.bind(n,26391))})),asset:{type:"BLOCK",id:"src-is-null-value-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(93181).Z},react:{type:"NPM",value:"18.3.1"},"./index.ts":{type:"FILE",value:n(26574).Z}},entry:"index.tsx"},context:{react:n(67294),"./index.ts":n(86690)},renderOpts:{compile:function(){var I=s()(u()().mark(function c(){var r,f=arguments;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(335).then(n.bind(n,37335));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,f));case 3:case"end":return t.stop()}},c)}));function i(){return I.apply(this,arguments)}return i}()}}}},86690:function(l,e,n){n.r(e);var a=function(o){return o==null||o===""||String(o).trim()===""};e.default=a},11861:function(l,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u4E3A\u7A7A",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:3},{value:"\u8BF4\u660E",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"obj",paraId:1,tocIndex:3},{value:"\u53C2\u6570\u540D\u79F0",paraId:1,tocIndex:3},{value:"any",paraId:1,tocIndex:3},{value:"\u662F",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"\u53C2\u6570",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"value",paraId:2,tocIndex:4},{value:"\u7ED3\u679C",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4}]},93181:function(l,e){e.Z=`import React from "react";
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
`},26574:function(l,e){e.Z=`
const isNullValue = (input: any) => {
  return (
    input === undefined ||
    input === null ||
    input === "" ||
    String(input).trim() === ""
  );
};

export default isNullValue`}}]);
