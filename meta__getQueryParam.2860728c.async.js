"use strict";(self.webpackChunkmo_tools_fe=self.webpackChunkmo_tools_fe||[]).push([[703],{97433:function(o,n,e){e.r(n),e.d(n,{demos:function(){return d}});var t=e(17061),u=e.n(t),l=e(17156),s=e.n(l),r=e(67294),d={"src-get-query-param-demo-demo":{component:r.memo(r.lazy(function(){return Promise.all([e.e(593),e.e(953),e.e(433)]).then(e.bind(e,81790))})),asset:{type:"BLOCK",id:"src-get-query-param-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(92926).Z},react:{type:"NPM",value:"18.3.1"},"./index.ts":{type:"FILE",value:e(68040).Z}},entry:"index.tsx"},context:{react:e(67294),"./index.ts":e(91149)},renderOpts:{compile:function(){var c=s()(u()().mark(function v(){var m,p=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(m=a.sent).default.apply(m,p));case 3:case"end":return a.stop()}},v)}));function I(){return c.apply(this,arguments)}return I}()}}}},91149:function(o,n,e){e.r(n);var t=function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:window.location.search,r=new RegExp("(^|&)"+l+"=([^&]*)(&|$)"),d=s.substr(1).match(r);return d?decodeURIComponent(d[2]):null};n.default=t},12558:function(o,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u83B7\u53D6\u94FE\u63A5\u53C2\u6570",paraId:0,tocIndex:0},{value:`getQueryParam(key, search);
`,paraId:1,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"key",paraId:2,tocIndex:3},{value:"\u53C2\u6570\u540D\u79F0",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"search",paraId:2,tocIndex:3},{value:"\u94FE\u63A5 search",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"\u5426",paraId:2,tocIndex:3},{value:"window.locatoin.href",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"\u53C2\u6570\u503C",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4}]},92926:function(o,n){n.Z=`import React from "react";
import getQueryParam from "./index";

const Demo = () => {
  return (
    <div>
      {getQueryParam('name',"?name=\u8FD9\u662F\u4E00\u4E2A\u53C2\u6570\u7684\u503C")}
    </div>
  );
};

export default Demo;
`},68040:function(o,n){n.Z=`
const getQueryParam = (key: string,search = window.location.search ) => {
  let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
  let result = search.substr(1).match(reg);
  return result ? decodeURIComponent(result[2]) : null;
};

export default getQueryParam`}}]);
