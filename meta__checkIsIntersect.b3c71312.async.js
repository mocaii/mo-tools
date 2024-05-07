(self.webpackChunkmo_tools_fe=self.webpackChunkmo_tools_fe||[]).push([[429],{64595:function(t,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return a}});var l=e(17061),u=e.n(l),r=e(17156),_=e.n(r),o=e(67294),a={"src-check-is-intersect-demo-demo":{component:o.memo(o.lazy(function(){return Promise.all([e.e(593),e.e(953),e.e(433)]).then(e.bind(e,22734))})),asset:{type:"BLOCK",id:"src-check-is-intersect-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(18744).Z},react:{type:"NPM",value:"18.3.1"},"./index.ts":{type:"FILE",value:e(60152).Z}},entry:"index.tsx"},context:{react:e(67294),"./index.ts":e(51819)},renderOpts:{compile:function(){var I=_()(u()().mark(function f(){var m,s=arguments;return u()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(335).then(e.bind(e,37335));case 2:return c.abrupt("return",(m=c.sent).default.apply(m,s));case 3:case"end":return c.stop()}},f)}));function i(){return I.apply(this,arguments)}return i}()}}}},51819:function(t,n,e){"use strict";e.r(n),e.d(n,{checkItemFn:function(){return I}});var l=e(74704),u=e.n(l),r=e(51589),_=e.n(r),o=e(861),a=e.n(o),I=function(m,s){var d=[Math.min.apply(Math,a()(m)),Math.min.apply(Math,a()(s))],c=[Math.max.apply(Math,a()(m)),Math.max.apply(Math,a()(s))];return Math.max.apply(Math,d)<=Math.min.apply(Math,c)},i=function f(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[[],[]],s=_()(m),d=s[0],c=s.slice(1),p=!1,h=u()(c),v;try{for(h.s();!(v=h.n()).done;){var x=v.value;if(I(d,x)){p=!0;break}}}catch(y){h.e(y)}finally{h.f()}return c.length>1&&!p&&(p=f(c)),p};n.default=i},18773:function(t,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return l}});const l=[{value:"\u5224\u65AD\u591A\u4E2A\u533A\u95F4\u7684\u6570\u5B57\u662F\u5426\u76F8\u4EA4",paraId:0,tocIndex:0},{value:`checkIsIntersect([
  [number, number],
  [number, number],
  [number, number],
]);
`,paraId:1,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"a",paraId:2,tocIndex:3},{value:"\u7B2C\u4E00\u4E2A\u6570",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"b",paraId:2,tocIndex:3},{value:"\u7B2C\u4E8C\u4E2A\u6570",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"\u7ED3\u679C",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4}]},18744:function(t,n){"use strict";n.Z=`import React from "react";
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
`},60152:function(t,n){"use strict";n.Z=`export const checkItemFn = (a: number[], b: number[]) => {
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
`},63405:function(t,n,e){var l=e(73897);function u(r){if(Array.isArray(r))return l(r)}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},74704:function(t,n,e){var l=e(86116);function u(r,_){var o=typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!o){if(Array.isArray(r)||(o=l(r))||_&&r&&typeof r.length=="number"){o&&(r=o);var a=0,I=function(){};return{s:I,n:function(){return a>=r.length?{done:!0}:{done:!1,value:r[a++]}},e:function(d){throw d},f:I}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,f=!1,m;return{s:function(){o=o.call(r)},n:function(){var d=o.next();return i=d.done,d},e:function(d){f=!0,m=d},f:function(){try{!i&&o.return!=null&&o.return()}finally{if(f)throw m}}}}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},79498:function(t){function n(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},42281:function(t){function n(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},51589:function(t,n,e){var l=e(85372),u=e(79498),r=e(86116),_=e(12218);function o(a){return l(a)||u(a)||r(a)||_()}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},861:function(t,n,e){var l=e(63405),u=e(79498),r=e(86116),_=e(42281);function o(a){return l(a)||u(a)||r(a)||_()}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
