(self.webpackChunkmo_tools_fe=self.webpackChunkmo_tools_fe||[]).push([[499],{1091:function(n,a,e){"use strict";e.r(a),e.d(a,{demos:function(){return d}});var o=e(90228),t=e.n(o),s=e(87999),l=e.n(s),u=e(75271),d={"src-use-array-demo-demo":{component:u.memo(u.lazy(function(){return Promise.all([e.e(90),e.e(293),e.e(433)]).then(e.bind(e,23174))})),asset:{type:"BLOCK",id:"src-use-array-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(9146).Z},antd:{type:"NPM",value:"5.17.0"},react:{type:"NPM",value:"18.3.1"},"./index.ts":{type:"FILE",value:e(58318).Z}},entry:"index.tsx"},context:{antd:e(81009),react:e(75271),"./index.ts":e(21739)},renderOpts:{compile:function(){var I=l()(t()().mark(function p(){var _,m=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(563).then(e.bind(e,15563));case 2:return r.abrupt("return",(_=r.sent).default.apply(_,m));case 3:case"end":return r.stop()}},p)}));function c(){return I.apply(this,arguments)}return c}()}}}},21739:function(n,a,e){"use strict";e.r(a);var o=e(15558),t=e.n(o),s=e(48305),l=e.n(s),u=e(75271),d=function(c){var p=(0,u.useState)(c),_=l()(p,2),m=_[0],i=_[1];return{value:m,setValue:i,add:function(v){return i([].concat(t()(m),[v]))},clear:function(){return i([])},removeIndex:function(v){var x=t()(m);x.splice(v,1),i(t()(x))}}};a.default=d},81751:function(n,a,e){"use strict";e.r(a),e.d(a,{texts:function(){return o}});const o=[{value:"\u4E00\u4E2A\u64CD\u4F5C\u6570\u7EC4\u589E\u5220\u6E05\u9664\u7684 hooks\u3002",paraId:0,tocIndex:0},{value:`const { value, clear, removeIndex, add } = useArray(array);
`,paraId:1,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"array",paraId:2,tocIndex:3},{value:"\u9700\u8981\u64CD\u4F5C\u7684\u6570\u7EC4",paraId:2,tocIndex:3},{value:"Array",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"\u8FD4\u56DE\u7684\u64CD\u4F5C\u7ED3\u679C",paraId:3,tocIndex:4},{value:"Array",paraId:3,tocIndex:4},{value:"clear",paraId:3,tocIndex:4},{value:"\u6E05\u9664\u6570\u7EC4",paraId:3,tocIndex:4},{value:"() => void",paraId:3,tocIndex:4},{value:"removeIndex",paraId:3,tocIndex:4},{value:"\u5220\u9664\u6570\u7EC4\u6307\u5B9A\u4E0B\u6807\u503C",paraId:3,tocIndex:4},{value:"(index:number) => void",paraId:3,tocIndex:4},{value:"add",paraId:3,tocIndex:4},{value:"\u65B0\u589E\u4E00\u9879",paraId:3,tocIndex:4},{value:"(item: T) => void",paraId:3,tocIndex:4}]},9146:function(n,a){"use strict";a.Z=`import { Button } from 'antd';
import React from 'react';
import useArray from './index';

//\u5199\u4E00\u4E2A\u7BA1\u7406\u6570\u7EC4\u7684hooks
const UseArrayDemo = () => {
  const persons: { name: string; age: number }[] = [
    { name: 'rose', age: 18 },
    { name: 'rose', age: 18 },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);
  return (
    <div>
      <Button onClick={() => add({ name: 'jack', age: 19 })}>add</Button>
      <Button onClick={() => removeIndex(0)}>removeIndex0</Button>
      <Button onClick={() => clear()}>clear</Button>
      {value.map((item, index) => (
        <div key={index}>
          \u59D3\u540D\uFF1A{item.name}&nbsp;&nbsp;\u5E74\u9F84\uFF1A{item.age}
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default UseArrayDemo;
`},58318:function(n,a){"use strict";a.Z=`import { useState } from 'react';

//hooks \u7BA1\u7406\u4E00\u4E2A\u6570\u7EC4
//add\u65B0\u589E\uFF0Cclear\u6E05\u9664\uFF0CremoveIndex\u5220\u9664\u6307\u5B9A\u4E0B\u6807\u5143\u7D20
const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue([...copy]);
    },
  };
};

export default useArray;
`},38498:function(n,a,e){var o=e(78770);function t(s){if(Array.isArray(s))return o(s)}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports},20698:function(n){function a(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}n.exports=a,n.exports.__esModule=!0,n.exports.default=n.exports},91162:function(n){function a(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}n.exports=a,n.exports.__esModule=!0,n.exports.default=n.exports},15558:function(n,a,e){var o=e(38498),t=e(20698),s=e(31479),l=e(91162);function u(d){return o(d)||t(d)||s(d)||l()}n.exports=u,n.exports.__esModule=!0,n.exports.default=n.exports}}]);
