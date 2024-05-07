(self.webpackChunkmo_tools_fe=self.webpackChunkmo_tools_fe||[]).push([[903],{20537:function(x,i,s){"use strict";s.r(i),s.d(i,{demos:function(){return O}});var M=s(90228),u=s.n(M),D=s(87999),I=s.n(D),g=s(75271),O={"src-get-time-duration-demo-demo":{component:g.memo(g.lazy(function(){return Promise.all([s.e(90),s.e(293),s.e(433)]).then(s.bind(s,11206))})),asset:{type:"BLOCK",id:"src-get-time-duration-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:s(69116).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.17.0"},dayjs:{type:"NPM",value:"1.11.11"},"./index.ts":{type:"FILE",value:s(40030).Z}},entry:"index.tsx"},context:{react:s(75271),antd:s(81009),dayjs:s(7672),"./index.ts":s(13661),"dayjs/plugin/duration":s(49301)},renderOpts:{compile:function(){var $=I()(u()().mark(function m(){var c,v=arguments;return u()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,s.e(563).then(s.bind(s,15563));case 2:return h.abrupt("return",(c=h.sent).default.apply(c,v));case 3:case"end":return h.stop()}},m)}));function P(){return $.apply(this,arguments)}return P}()}}}},13661:function(x,i,s){"use strict";s.r(i),s.d(i,{getDuration:function(){return g}});var M=s(7672),u=s.n(M),D=s(49301),I=s.n(D);u().extend(I());var g=function($){if(!$)return"";var P=u()().valueOf(),m=P-u()($).valueOf(),c=Math.abs(u().duration(m).asDays()),v=Math.abs(u().duration(m).asHours()),p=Math.abs(u().duration(m).asMinutes()),h=u().duration(m).asSeconds(),f=h<0?"\u540E":"\u524D";return c>7?u()($).format("YYYY-MM-DD"):c>=1&&c<=7?"".concat(Math.floor(c),"\u5929").concat(f):c<1&&v>=1?"".concat(Math.floor(v),"\u5C0F\u65F6").concat(f):v<1&&p>=1?"".concat(Math.floor(p),"\u5206\u949F").concat(f):"".concat(Math.floor(Math.abs(h)),"\u79D2").concat(f)};i.default=g},49301:function(x){(function(i,s){x.exports=s()})(this,function(){"use strict";var i,s,M=1e3,u=6e4,D=36e5,I=864e5,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,O=31536e6,$=2628e6,P=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,m={years:O,months:$,days:I,hours:D,minutes:u,seconds:M,milliseconds:1,weeks:6048e5},c=function(e){return e instanceof Y},v=function(e,n,t){return new Y(e,t,n.$l)},p=function(e){return s.p(e)+"s"},h=function(e){return e<0},f=function(e){return h(e)?Math.ceil(e):Math.floor(e)},S=function(e){return Math.abs(e)},E=function(e,n){return e?h(e)?{negative:!0,format:""+S(e)+n}:{negative:!1,format:""+e+n}:{negative:!1,format:""}},Y=function(){function e(t,a,r){var o=this;if(this.$d={},this.$l=r,t===void 0&&(this.$ms=0,this.parseFromMilliseconds()),a)return v(t*m[p(a)],this);if(typeof t=="number")return this.$ms=t,this.parseFromMilliseconds(),this;if(typeof t=="object")return Object.keys(t).forEach(function(y){o.$d[p(y)]=t[y]}),this.calMilliseconds(),this;if(typeof t=="string"){var d=t.match(P);if(d){var l=d.slice(2).map(function(y){return y!=null?Number(y):0});return this.$d.years=l[0],this.$d.months=l[1],this.$d.weeks=l[2],this.$d.days=l[3],this.$d.hours=l[4],this.$d.minutes=l[5],this.$d.seconds=l[6],this.calMilliseconds(),this}}return this}var n=e.prototype;return n.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(a,r){return a+(t.$d[r]||0)*m[r]},0)},n.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=f(t/O),t%=O,this.$d.months=f(t/$),t%=$,this.$d.days=f(t/I),t%=I,this.$d.hours=f(t/D),t%=D,this.$d.minutes=f(t/u),t%=u,this.$d.seconds=f(t/M),t%=M,this.$d.milliseconds=t},n.toISOString=function(){var t=E(this.$d.years,"Y"),a=E(this.$d.months,"M"),r=+this.$d.days||0;this.$d.weeks&&(r+=7*this.$d.weeks);var o=E(r,"D"),d=E(this.$d.hours,"H"),l=E(this.$d.minutes,"M"),y=this.$d.seconds||0;this.$d.milliseconds&&(y+=this.$d.milliseconds/1e3,y=Math.round(1e3*y)/1e3);var j=E(y,"S"),H=t.negative||a.negative||o.negative||d.negative||l.negative||j.negative,b=d.format||l.format||j.format?"T":"",_=(H?"-":"")+"P"+t.format+a.format+o.format+b+d.format+l.format+j.format;return _==="P"||_==="-P"?"P0D":_},n.toJSON=function(){return this.toISOString()},n.format=function(t){var a=t||"YYYY-MM-DDTHH:mm:ss",r={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return a.replace(g,function(o,d){return d||String(r[o])})},n.as=function(t){return this.$ms/m[p(t)]},n.get=function(t){var a=this.$ms,r=p(t);return r==="milliseconds"?a%=1e3:a=r==="weeks"?f(a/m[r]):this.$d[r],a||0},n.add=function(t,a,r){var o;return o=a?t*m[p(a)]:c(t)?t.$ms:v(t,this).$ms,v(this.$ms+o*(r?-1:1),this)},n.subtract=function(t,a){return this.add(t,a,!0)},n.locale=function(t){var a=this.clone();return a.$l=t,a},n.clone=function(){return v(this.$ms,this)},n.humanize=function(t){return i().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},n.valueOf=function(){return this.asMilliseconds()},n.milliseconds=function(){return this.get("milliseconds")},n.asMilliseconds=function(){return this.as("milliseconds")},n.seconds=function(){return this.get("seconds")},n.asSeconds=function(){return this.as("seconds")},n.minutes=function(){return this.get("minutes")},n.asMinutes=function(){return this.as("minutes")},n.hours=function(){return this.get("hours")},n.asHours=function(){return this.as("hours")},n.days=function(){return this.get("days")},n.asDays=function(){return this.as("days")},n.weeks=function(){return this.get("weeks")},n.asWeeks=function(){return this.as("weeks")},n.months=function(){return this.get("months")},n.asMonths=function(){return this.as("months")},n.years=function(){return this.get("years")},n.asYears=function(){return this.as("years")},e}(),T=function(e,n,t){return e.add(n.years()*t,"y").add(n.months()*t,"M").add(n.days()*t,"d").add(n.hours()*t,"h").add(n.minutes()*t,"m").add(n.seconds()*t,"s").add(n.milliseconds()*t,"ms")};return function(e,n,t){i=t,s=t().$utils(),t.duration=function(o,d){var l=t.locale();return v(o,{$l:l},d)},t.isDuration=c;var a=n.prototype.add,r=n.prototype.subtract;n.prototype.add=function(o,d){return c(o)?T(this,o,1):a.bind(this)(o,d)},n.prototype.subtract=function(o,d){return c(o)?T(this,o,-1):r.bind(this)(o,d)}}})},5723:function(x,i,s){"use strict";s.r(i),s.d(i,{texts:function(){return M}});const M=[{value:"\u83B7\u53D6\u67D0\u4E2A\u65F6\u95F4\u548C\u5F53\u524D\u65F6\u95F4\u7684\u65F6\u957F",paraId:0,tocIndex:0},{value:"\u5927\u4E8E 7 \u5929\u663E\u793A\u65E5\u671F",paraId:1,tocIndex:0},{value:"\u5927\u4E8E 1 \u5929\u5C0F\u4E8E 7 \u5929\u663E\u793A N \u5929\u524D/\u540E",paraId:1,tocIndex:0},{value:"\u5C0F\u4E8E 1 \u5929\u5927\u4E8E 1 \u4E2A\u5C0F\u65F6\u663E\u793A N \u5C0F\u65F6\u524D/\u540E",paraId:1,tocIndex:0},{value:"\u5C0F\u4E8E 1 \u4E2A\u5C0F\u65F6\u5927\u4E8E 1 \u5206\u949F\u663E\u793A\u5206\u949F\u524D/\u540E",paraId:1,tocIndex:0},{value:"\u5C0F\u4E8E 1 \u5206\u949F\u663E\u793A N \u79D2\u524D/\u540E",paraId:1,tocIndex:0},{value:`getTimeDuration(time);
`,paraId:2,tocIndex:2},{value:"\u53C2\u6570",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"time",paraId:3,tocIndex:3},{value:"\u65F6\u95F4\u6233",paraId:3,tocIndex:3},{value:"string number",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u53C2\u6570",paraId:4,tocIndex:4},{value:"\u8BF4\u660E",paraId:4,tocIndex:4},{value:"\u7C7B\u578B",paraId:4,tocIndex:4},{value:"value",paraId:4,tocIndex:4},{value:"\u8FD4\u56DE\u65F6\u957F\u6587\u5B57",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4}]},69116:function(x,i){"use strict";i.Z=`import React,{ useState } from "react";
import {  DatePicker } from "antd";
import getDuration from "./index";
import dayjs from "dayjs"

const Demo = () => {
  const [time,setTime] = useState<any>(dayjs().valueOf())
  return (
    <div>
       <DatePicker
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        onChange={(value) => setTime(value)}
    />
      {getDuration(time)}
    </div>
  );
};

export default Demo;
`},40030:function(x,i){"use strict";i.Z=`import dayjs from "dayjs"
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)
export const getDuration = (date:any) => {
  if(!date) return ''
  const nowDate = dayjs().valueOf();
  const resultTime = nowDate - dayjs(date).valueOf();
  const countDays = Math.abs(dayjs.duration(resultTime).asDays());
  const countHour = Math.abs(dayjs.duration(resultTime).asHours());
  const countMins = Math.abs(dayjs.duration(resultTime).asMinutes());
  const seconds = dayjs.duration(resultTime).asSeconds();

  let suffix = seconds < 0 ? '\u540E' : '\u524D';
  if (countDays > 7) {
    return dayjs(date).format("YYYY-MM-DD");
  } else if (countDays >= 1 && countDays <= 7) {
    return \`\${Math.floor(countDays)}\u5929\${suffix}\`;
  } else if (countDays < 1 && countHour >= 1) {
    return \`\${Math.floor(countHour)}\u5C0F\u65F6\${suffix}\`;
  } else if (countHour < 1 && countMins >= 1) {
    return \`\${Math.floor(countMins)}\u5206\u949F\${suffix}\`;
  } else{
    return \`\${Math.floor( Math.abs(seconds))}\u79D2\${suffix}\`;
  }
};

export default getDuration`}}]);
