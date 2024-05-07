(self.webpackChunkmo_tools_fe=self.webpackChunkmo_tools_fe||[]).push([[903],{64045:function(x,i,s){"use strict";s.r(i),s.d(i,{demos:function(){return O}});var M=s(17061),u=s.n(M),I=s(17156),p=s.n(I),g=s(67294),O={"src-get-time-duration-demo-demo":{component:g.memo(g.lazy(function(){return Promise.all([s.e(593),s.e(953),s.e(433)]).then(s.bind(s,9207))})),asset:{type:"BLOCK",id:"src-get-time-duration-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:s(31972).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.17.0"},dayjs:{type:"NPM",value:"1.11.11"},"./index.ts":{type:"FILE",value:s(80094).Z}},entry:"index.tsx"},context:{react:s(67294),antd:s(46792),dayjs:s(27484),"./index.ts":s(99091),"dayjs/plugin/duration":s(1646)},renderOpts:{compile:function(){var $=p()(u()().mark(function h(){var c,v=arguments;return u()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,s.e(335).then(s.bind(s,37335));case 2:return f.abrupt("return",(c=f.sent).default.apply(c,v));case 3:case"end":return f.stop()}},h)}));function P(){return $.apply(this,arguments)}return P}()}}}},99091:function(x,i,s){"use strict";s.r(i),s.d(i,{getDuration:function(){return g}});var M=s(27484),u=s.n(M),I=s(1646),p=s.n(I);u().extend(p());var g=function($){if(!$)return"";var P=u()().valueOf(),h=P-u()($).valueOf(),c=Math.abs(u().duration(h).asDays()),v=Math.abs(u().duration(h).asHours()),D=Math.abs(u().duration(h).asMinutes()),f=u().duration(h).asSeconds(),m=f<0?"\u540E":"\u524D";return c>7?u()($).format("YYYY-MM-DD"):c>=1&&c<=7?"".concat(Math.floor(c),"\u5929").concat(m):c<1&&v>=1?"".concat(Math.floor(v),"\u5C0F\u65F6").concat(m):v<1&&D>=1?"".concat(Math.floor(D),"\u5206\u949F").concat(m):"".concat(Math.floor(Math.abs(f)),"\u79D2").concat(m)};i.default=g},1646:function(x){(function(i,s){x.exports=s()})(this,function(){"use strict";var i,s,M=1e3,u=6e4,I=36e5,p=864e5,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,O=31536e6,$=2628e6,P=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,h={years:O,months:$,days:p,hours:I,minutes:u,seconds:M,milliseconds:1,weeks:6048e5},c=function(e){return e instanceof T},v=function(e,n,t){return new T(e,t,n.$l)},D=function(e){return s.p(e)+"s"},f=function(e){return e<0},m=function(e){return f(e)?Math.ceil(e):Math.floor(e)},H=function(e){return Math.abs(e)},E=function(e,n){return e?f(e)?{negative:!0,format:""+H(e)+n}:{negative:!1,format:""+e+n}:{negative:!1,format:""}},T=function(){function e(t,o,r){var a=this;if(this.$d={},this.$l=r,t===void 0&&(this.$ms=0,this.parseFromMilliseconds()),o)return v(t*h[D(o)],this);if(typeof t=="number")return this.$ms=t,this.parseFromMilliseconds(),this;if(typeof t=="object")return Object.keys(t).forEach(function(y){a.$d[D(y)]=t[y]}),this.calMilliseconds(),this;if(typeof t=="string"){var d=t.match(P);if(d){var l=d.slice(2).map(function(y){return y!=null?Number(y):0});return this.$d.years=l[0],this.$d.months=l[1],this.$d.weeks=l[2],this.$d.days=l[3],this.$d.hours=l[4],this.$d.minutes=l[5],this.$d.seconds=l[6],this.calMilliseconds(),this}}return this}var n=e.prototype;return n.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(o,r){return o+(t.$d[r]||0)*h[r]},0)},n.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/O),t%=O,this.$d.months=m(t/$),t%=$,this.$d.days=m(t/p),t%=p,this.$d.hours=m(t/I),t%=I,this.$d.minutes=m(t/u),t%=u,this.$d.seconds=m(t/M),t%=M,this.$d.milliseconds=t},n.toISOString=function(){var t=E(this.$d.years,"Y"),o=E(this.$d.months,"M"),r=+this.$d.days||0;this.$d.weeks&&(r+=7*this.$d.weeks);var a=E(r,"D"),d=E(this.$d.hours,"H"),l=E(this.$d.minutes,"M"),y=this.$d.seconds||0;this.$d.milliseconds&&(y+=this.$d.milliseconds/1e3,y=Math.round(1e3*y)/1e3);var j=E(y,"S"),C=t.negative||o.negative||a.negative||d.negative||l.negative||j.negative,L=d.format||l.format||j.format?"T":"",Y=(C?"-":"")+"P"+t.format+o.format+a.format+L+d.format+l.format+j.format;return Y==="P"||Y==="-P"?"P0D":Y},n.toJSON=function(){return this.toISOString()},n.format=function(t){var o=t||"YYYY-MM-DDTHH:mm:ss",r={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return o.replace(g,function(a,d){return d||String(r[a])})},n.as=function(t){return this.$ms/h[D(t)]},n.get=function(t){var o=this.$ms,r=D(t);return r==="milliseconds"?o%=1e3:o=r==="weeks"?m(o/h[r]):this.$d[r],o||0},n.add=function(t,o,r){var a;return a=o?t*h[D(o)]:c(t)?t.$ms:v(t,this).$ms,v(this.$ms+a*(r?-1:1),this)},n.subtract=function(t,o){return this.add(t,o,!0)},n.locale=function(t){var o=this.clone();return o.$l=t,o},n.clone=function(){return v(this.$ms,this)},n.humanize=function(t){return i().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},n.valueOf=function(){return this.asMilliseconds()},n.milliseconds=function(){return this.get("milliseconds")},n.asMilliseconds=function(){return this.as("milliseconds")},n.seconds=function(){return this.get("seconds")},n.asSeconds=function(){return this.as("seconds")},n.minutes=function(){return this.get("minutes")},n.asMinutes=function(){return this.as("minutes")},n.hours=function(){return this.get("hours")},n.asHours=function(){return this.as("hours")},n.days=function(){return this.get("days")},n.asDays=function(){return this.as("days")},n.weeks=function(){return this.get("weeks")},n.asWeeks=function(){return this.as("weeks")},n.months=function(){return this.get("months")},n.asMonths=function(){return this.as("months")},n.years=function(){return this.get("years")},n.asYears=function(){return this.as("years")},e}(),S=function(e,n,t){return e.add(n.years()*t,"y").add(n.months()*t,"M").add(n.days()*t,"d").add(n.hours()*t,"h").add(n.minutes()*t,"m").add(n.seconds()*t,"s").add(n.milliseconds()*t,"ms")};return function(e,n,t){i=t,s=t().$utils(),t.duration=function(a,d){var l=t.locale();return v(a,{$l:l},d)},t.isDuration=c;var o=n.prototype.add,r=n.prototype.subtract;n.prototype.add=function(a,d){return c(a)?S(this,a,1):o.bind(this)(a,d)},n.prototype.subtract=function(a,d){return c(a)?S(this,a,-1):r.bind(this)(a,d)}}})},63121:function(x,i,s){"use strict";s.r(i),s.d(i,{texts:function(){return M}});const M=[{value:"\u83B7\u53D6\u67D0\u4E2A\u65F6\u95F4\u548C\u5F53\u524D\u65F6\u95F4\u7684\u65F6\u957F",paraId:0,tocIndex:0},{value:"\u5927\u4E8E 7 \u5929\u663E\u793A\u65E5\u671F",paraId:1,tocIndex:0},{value:"\u5927\u4E8E 1 \u5929\u5C0F\u4E8E 7 \u5929\u663E\u793A N \u5929\u524D/\u540E",paraId:1,tocIndex:0},{value:"\u5C0F\u4E8E 1 \u5929\u5927\u4E8E 1 \u4E2A\u5C0F\u65F6\u663E\u793A N \u5C0F\u65F6\u524D/\u540E",paraId:1,tocIndex:0},{value:"\u5C0F\u4E8E 1 \u4E2A\u5C0F\u65F6\u5927\u4E8E 1 \u5206\u949F\u663E\u793A\u5206\u949F\u524D/\u540E",paraId:1,tocIndex:0},{value:"\u5C0F\u4E8E 1 \u5206\u949F\u663E\u793A N \u79D2\u524D/\u540E",paraId:1,tocIndex:0},{value:`getTimeDuration(time);
`,paraId:2,tocIndex:2},{value:"\u53C2\u6570",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"time",paraId:3,tocIndex:3},{value:"\u65F6\u95F4\u6233",paraId:3,tocIndex:3},{value:"string number",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u53C2\u6570",paraId:4,tocIndex:4},{value:"\u8BF4\u660E",paraId:4,tocIndex:4},{value:"\u7C7B\u578B",paraId:4,tocIndex:4},{value:"value",paraId:4,tocIndex:4},{value:"\u8FD4\u56DE\u65F6\u957F\u6587\u5B57",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4}]},31972:function(x,i){"use strict";i.Z=`import React,{ useState } from "react";
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
`},80094:function(x,i){"use strict";i.Z=`import dayjs from "dayjs"
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
