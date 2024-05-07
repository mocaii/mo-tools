"use strict";(self.webpackChunkmo_tools_fe=self.webpackChunkmo_tools_fe||[]).push([[703],{33999:function(o,n,e){e.r(n),e.d(n,{demos:function(){return d}});var t=e(90228),u=e.n(t),s=e(87999),l=e.n(s),r=e(75271),d={"src-get-query-param-demo-demo":{component:r.memo(r.lazy(function(){return Promise.all([e.e(90),e.e(293),e.e(433)]).then(e.bind(e,852))})),asset:{type:"BLOCK",id:"src-get-query-param-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(9092).Z},react:{type:"NPM",value:"18.3.1"},"./index.ts":{type:"FILE",value:e(87943).Z}},entry:"index.tsx"},context:{react:e(75271),"./index.ts":e(7976)},renderOpts:{compile:function(){var c=l()(u()().mark(function p(){var m,i=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(563).then(e.bind(e,15563));case 2:return a.abrupt("return",(m=a.sent).default.apply(m,i));case 3:case"end":return a.stop()}},p)}));function I(){return c.apply(this,arguments)}return I}()}}}},7976:function(o,n,e){e.r(n);var t=function(s){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:window.location.search,r=new RegExp("(^|&)"+s+"=([^&]*)(&|$)"),d=l.substr(1).match(r);return d?decodeURIComponent(d[2]):null};n.default=t},62949:function(o,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u83B7\u53D6\u94FE\u63A5\u53C2\u6570",paraId:0,tocIndex:0},{value:`getQueryParam(key, search);
`,paraId:1,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"key",paraId:2,tocIndex:3},{value:"\u53C2\u6570\u540D\u79F0",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"search",paraId:2,tocIndex:3},{value:"\u94FE\u63A5 search",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"\u5426",paraId:2,tocIndex:3},{value:"window.locatoin.href",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"\u53C2\u6570\u503C",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4}]},9092:function(o,n){n.Z=`import React from "react";
import getQueryParam from "./index";

const Demo = () => {
  return (
    <div>
      {getQueryParam('name',"?name=\u8FD9\u662F\u4E00\u4E2A\u53C2\u6570\u7684\u503C")}
    </div>
  );
};

export default Demo;
`},87943:function(o,n){n.Z=`
const getQueryParam = (key: string,search = window.location.search ) => {
  let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
  let result = search.substr(1).match(reg);
  return result ? decodeURIComponent(result[2]) : null;
};

export default getQueryParam`}}]);
