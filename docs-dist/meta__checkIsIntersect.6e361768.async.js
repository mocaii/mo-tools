(self.webpackChunkmo_tools_fe=self.webpackChunkmo_tools_fe||[]).push([[429],{34580:function(t,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return o}});var l=e(90228),_=e.n(l),r=e(87999),m=e.n(r),a=e(75271),o={"src-check-is-intersect-demo-demo":{component:a.memo(a.lazy(function(){return Promise.all([e.e(90),e.e(293),e.e(433)]).then(e.bind(e,10315))})),asset:{type:"BLOCK",id:"src-check-is-intersect-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(73799).Z},react:{type:"NPM",value:"18.3.1"},"./index.ts":{type:"FILE",value:e(14120).Z}},entry:"index.tsx"},context:{react:e(75271),"./index.ts":e(52523)},renderOpts:{compile:function(){var i=m()(_()().mark(function p(){var d,s=arguments;return _()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(563).then(e.bind(e,15563));case 2:return u.abrupt("return",(d=u.sent).default.apply(d,s));case 3:case"end":return u.stop()}},p)}));function I(){return i.apply(this,arguments)}return I}()}}}},52523:function(t,n,e){"use strict";e.r(n),e.d(n,{checkItemFn:function(){return i}});var l=e(335),_=e.n(l),r=e(57724),m=e.n(r),a=e(15558),o=e.n(a),i=function(d,s){var c=[Math.min.apply(Math,o()(d)),Math.min.apply(Math,o()(s))],u=[Math.max.apply(Math,o()(d)),Math.max.apply(Math,o()(s))];return Math.max.apply(Math,c)<=Math.min.apply(Math,u)},I=function p(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[[],[]],s=m()(d),c=s[0],u=s.slice(1),f=!1,h=_()(u),v;try{for(h.s();!(v=h.n()).done;){var x=v.value;if(i(c,x)){f=!0;break}}}catch(b){h.e(b)}finally{h.f()}return u.length>1&&!f&&(f=p(u)),f};n.default=I},41026:function(t,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return l}});const l=[{value:"\u5224\u65AD\u591A\u4E2A\u533A\u95F4\u7684\u6570\u5B57\u662F\u5426\u76F8\u4EA4",paraId:0,tocIndex:0},{value:`checkIsIntersect([
  [number, number],
  [number, number],
  [number, number],
]);
`,paraId:1,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"a",paraId:2,tocIndex:3},{value:"\u7B2C\u4E00\u4E2A\u6570",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"b",paraId:2,tocIndex:3},{value:"\u7B2C\u4E8C\u4E2A\u6570",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"\u7ED3\u679C",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4}]},73799:function(t,n){"use strict";n.Z=`import React from "react";
import checkIsIntersect from "./index";

const Demo = () => {
  (window as any).checkIsIntersect = checkIsIntersect;
  return (
    <div>
      \u4F8B\u5B50\uFF1AcheckIsIntersect([[1, 10], [11, 20], [11, 20]])=
      {\`\${checkIsIntersect([
        [1, 10],
        [11, 20],
        [11, 20],
      ])}\`}
      <p>\u53EF\u901A\u8FC7window.checkIsIntersect\u9A8C\u8BC1\u4E0B</p>
    </div>
  );
};

export default Demo;
`},14120:function(t,n){"use strict";n.Z=`export const checkItemFn = (a: number[], b: number[]) => {
  const start = [Math.min(...a), Math.min(...b)]; //\u4E24\u4E2A\u533A\u95F4\u7684\u6700\u5C0F\u503C
  const end = [Math.max(...a), Math.max(...b)]; //\u4E24\u4E2A\u533A\u95F4\u7684\u6700\u5927\u503C
  return Math.max(...start) <= Math.min(...end);
};

/**
 * \u6BD4\u8F83\u591A\u4E2A\u533A\u95F4
 * @param list  \u591A\u4E2A\u533A\u95F4\u7EC4\u6210\u7684\u6570\u7EC4
 * @returns \u8FD4\u56DE\u662F\u5426\u76F8\u4EA4\u7684\u7ED3\u679C
 */
type checIsIntersectType = (list: any[]) => boolean;
const checkIsIntersect: checIsIntersectType = (list = [[], []]) => {
  const [checkItem, ...resItem] = list;
  let isIntersect = false;
  for (const item of resItem) {
    if (checkItemFn(checkItem, item)) {
      isIntersect = true;
      break;
    }
  }
  if (resItem.length > 1 && !isIntersect) {
    isIntersect = checkIsIntersect(resItem);
  }
  return isIntersect;
};

export default checkIsIntersect;
`},38498:function(t,n,e){var l=e(78770);function _(r){if(Array.isArray(r))return l(r)}t.exports=_,t.exports.__esModule=!0,t.exports.default=t.exports},335:function(t,n,e){var l=e(31479);function _(r,m){var a=typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!a){if(Array.isArray(r)||(a=l(r))||m&&r&&typeof r.length=="number"){a&&(r=a);var o=0,i=function(){};return{s:i,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var I=!0,p=!1,d;return{s:function(){a=a.call(r)},n:function(){var c=a.next();return I=c.done,c},e:function(c){p=!0,d=c},f:function(){try{!I&&a.return!=null&&a.return()}finally{if(p)throw d}}}}t.exports=_,t.exports.__esModule=!0,t.exports.default=t.exports},20698:function(t){function n(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},91162:function(t){function n(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},57724:function(t,n,e){var l=e(50040),_=e(20698),r=e(31479),m=e(44804);function a(o){return l(o)||_(o)||r(o)||m()}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},15558:function(t,n,e){var l=e(38498),_=e(20698),r=e(31479),m=e(91162);function a(o){return l(o)||_(o)||r(o)||m()}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
