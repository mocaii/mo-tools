"use strict";(self.webpackChunkmo_tools_fe=self.webpackChunkmo_tools_fe||[]).push([[175],{55478:function(u,n,e){e.r(n),e.d(n,{demos:function(){return o}});var t=e(17061),d=e.n(t),s=e(17156),c=e.n(s),I=e(67294),o={"src-use-debounce-params-demo-demo":{component:I.memo(I.lazy(function(){return Promise.all([e.e(593),e.e(953),e.e(433)]).then(e.bind(e,74592))})),asset:{type:"BLOCK",id:"src-use-debounce-params-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(44e3).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.17.0"},"./index.ts":{type:"FILE",value:e(1881).Z}},entry:"index.tsx"},context:{react:e(67294),antd:e(46792),"./index.ts":e(28473)},renderOpts:{compile:function(){var l=c()(d()().mark(function r(){var m,v=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(m=a.sent).default.apply(m,v));case 3:case"end":return a.stop()}},r)}));function f(){return l.apply(this,arguments)}return f}()}}}},28473:function(u,n,e){e.r(n);var t=e(27424),d=e.n(t),s=e(67294),c=function(o){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:200,f=(0,s.useState)(o),r=d()(f,2),m=r[0],v=r[1];return(0,s.useEffect)(function(){var _=setTimeout(function(){v(o)},l);return function(){return clearTimeout(_)}},[o,l]),m};n.default=c},45884:function(u,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u5BF9\u503C\u7684\u66F4\u65B0\u8FDB\u884C Debounce",paraId:0,tocIndex:0},{value:`const debounceParams = useDebounceParams(params, delay);
`,paraId:1,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"params",paraId:2,tocIndex:3},{value:"\u503C",paraId:2,tocIndex:3},{value:"any",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"delay",paraId:2,tocIndex:3},{value:"\u5EF6\u8FDF\u65F6\u95F4",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"200",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"\u66F4\u65B0\u540E\u7684\u503C",paraId:3,tocIndex:4},{value:"any",paraId:3,tocIndex:4}]},44e3:function(u,n){n.Z=`import React, { useEffect, useState } from 'react';
import useDebounceParams from './index';
import { Input } from "antd"


const demo = () => {
  const [value,setValue] = useState("");
  const debounceValue = useDebounceParams(value,500);

  useEffect(() => {
    console.log(debounceValue)
    fetch(\`/test/\${debounceValue}\`)
  },[debounceValue])

  return (
    <div>
      <Input onChange={(e) => setValue(e.target.value)} style={{width: "400px"}}/>
      <p>deboce\u540E\u7684\u503C\uFF1A{debounceValue}</p>
    </div>
  );
};

export default demo;`},1881:function(u,n){n.Z=`import { useState, useEffect } from "react";

const useDebounceParams = <V>(value: V, delay = 200) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounceParams;`}}]);
