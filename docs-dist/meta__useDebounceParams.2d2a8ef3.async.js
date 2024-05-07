"use strict";(self.webpackChunkmo_tools_fe=self.webpackChunkmo_tools_fe||[]).push([[175],{92424:function(u,n,e){e.r(n),e.d(n,{demos:function(){return o}});var t=e(90228),d=e.n(t),s=e(87999),c=e.n(s),_=e(75271),o={"src-use-debounce-params-demo-demo":{component:_.memo(_.lazy(function(){return Promise.all([e.e(90),e.e(293),e.e(433)]).then(e.bind(e,2119))})),asset:{type:"BLOCK",id:"src-use-debounce-params-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(91357).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.17.0"},"./index.ts":{type:"FILE",value:e(36347).Z}},entry:"index.tsx"},context:{react:e(75271),antd:e(81009),"./index.ts":e(74215)},renderOpts:{compile:function(){var l=c()(d()().mark(function r(){var m,i=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(563).then(e.bind(e,15563));case 2:return a.abrupt("return",(m=a.sent).default.apply(m,i));case 3:case"end":return a.stop()}},r)}));function p(){return l.apply(this,arguments)}return p}()}}}},74215:function(u,n,e){e.r(n);var t=e(48305),d=e.n(t),s=e(75271),c=function(o){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:200,p=(0,s.useState)(o),r=d()(p,2),m=r[0],i=r[1];return(0,s.useEffect)(function(){var I=setTimeout(function(){i(o)},l);return function(){return clearTimeout(I)}},[o,l]),m};n.default=c},27402:function(u,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u5BF9\u503C\u7684\u66F4\u65B0\u8FDB\u884C Debounce",paraId:0,tocIndex:0},{value:`const debounceParams = useDebounceParams(params, delay);
`,paraId:1,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"params",paraId:2,tocIndex:3},{value:"\u503C",paraId:2,tocIndex:3},{value:"any",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"delay",paraId:2,tocIndex:3},{value:"\u5EF6\u8FDF\u65F6\u95F4",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"200",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"\u66F4\u65B0\u540E\u7684\u503C",paraId:3,tocIndex:4},{value:"any",paraId:3,tocIndex:4}]},91357:function(u,n){n.Z=`import React, { useEffect, useState } from 'react';
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

export default demo;`},36347:function(u,n){n.Z=`import { useState, useEffect } from "react";

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
