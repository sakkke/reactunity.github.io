(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9195],{8420:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});Math.pow(10,8);var r=36e5,a=n(3882),i=n(3946);function s(e,t){(0,a.Z)(1,arguments);var n=t||{},r=null==n.additionalDigits?2:(0,i.Z)(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var s,o=u(e);if(o.date){var c=m(o.date,r);s=h(c.restDateString,c.year)}if(!s||isNaN(s.getTime()))return new Date(NaN);var l,d=s.getTime(),p=0;if(o.time&&(p=x(o.time),isNaN(p)))return new Date(NaN);if(!o.timezone){var g=new Date(d+p),w=new Date(0);return w.setFullYear(g.getUTCFullYear(),g.getUTCMonth(),g.getUTCDate()),w.setHours(g.getUTCHours(),g.getUTCMinutes(),g.getUTCSeconds(),g.getUTCMilliseconds()),w}return l=f(o.timezone),isNaN(l)?new Date(NaN):new Date(d+p+l)}var o={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},c=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,l=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,d=/^([+-])(\d{2})(?::?(\d{2}))?$/;function u(e){var t,n={},r=e.split(o.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],o.timeZoneDelimiter.test(n.date)&&(n.date=e.split(o.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=o.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}function m(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:null===i?a:100*i,restDateString:e.slice((r[1]||r[2]).length)}}function h(e,t){if(null===t)return new Date(NaN);var n=e.match(c);if(!n)return new Date(NaN);var r=!!n[4],a=p(n[1]),i=p(n[2])-1,s=p(n[3]),o=p(n[4]),l=p(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,o,l)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=r.getUTCDay()||7,i=7*(t-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}(t,o,l):new Date(NaN);var d=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(w[t]||(j(e)?29:28))}(t,i,s)&&function(e,t){return t>=1&&t<=(j(e)?366:365)}(t,a)?(d.setUTCFullYear(t,i,Math.max(a,s)),d):new Date(NaN)}function p(e){return e?parseInt(e):1}function x(e){var t=e.match(l);if(!t)return NaN;var n=g(t[1]),a=g(t[2]),i=g(t[3]);return function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,a,i)?n*r+6e4*a+1e3*i:NaN}function g(e){return e&&parseFloat(e.replace(",","."))||0}function f(e){if("Z"===e)return 0;var t=e.match(d);if(!t)return 0;var n="+"===t[1]?-1:1,a=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,i)?n*(a*r+6e4*i):NaN}var w=[31,null,31,30,31,30,31,31,30,31,30,31];function j(e){return e%400===0||e%4===0&&e%100!==0}},7801:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(1391)}])},7214:function(e,t,n){"use strict";n.d(t,{o:function(){return s}});var r=n(1799),a=n(9396),i=n(5893);const s=n(7294).memo((function(e){return(0,i.jsxs)("svg",(0,a.Z)((0,r.Z)({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},e),{children:[(0,i.jsx)("path",{d:"M4 11a9 9 0 0 1 9 9"}),(0,i.jsx)("path",{d:"M4 4a16 16 0 0 1 16 16"}),(0,i.jsx)("circle",{cx:5,cy:19,r:1})]}))}));s.displayName="IconLogo"},6875:function(e,t,n){"use strict";n.d(t,{p:function(){return o}});var r=n(5893),a=n(9008),i=n.n(a),s=n(1163);n(7294);const o=(0,s.withRouter)((e=>{let{title:t,description:n="A JavaScript library for building user interfaces",image:a="/logo-og.png",router:s,children:o}=e;return(0,r.jsxs)(i(),{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"}),null!=t&&(0,r.jsx)("title",{children:t},"title"),null!=n&&(0,r.jsx)("meta",{name:"description",content:n},"description"),(0,r.jsx)("meta",{property:"fb:app_id",content:"623268441017527"}),(0,r.jsx)("meta",{property:"og:type",content:"website"},"og:type"),(0,r.jsx)("meta",{property:"og:url",content:"https://beta.reactjs.org".concat(s.pathname)},"og:url"),null!=t&&(0,r.jsx)("meta",{property:"og:title",content:t},"og:title"),null!=n&&(0,r.jsx)("meta",{property:"og:description",content:n},"og:description"),(0,r.jsx)("meta",{property:"og:image",content:"https://beta.reactjs.org".concat(a)},"og:image"),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twitter:card"),(0,r.jsx)("meta",{name:"twitter:site",content:"@reactjs"},"twitter:site"),(0,r.jsx)("meta",{name:"twitter:creator",content:"@reactjs"},"twitter:creator"),null!=t&&(0,r.jsx)("meta",{name:"twitter:title",content:t},"twitter:title"),null!=n&&(0,r.jsx)("meta",{name:"twitter:description",content:n},"twitter:description"),(0,r.jsx)("meta",{name:"twitter:image",content:"https://beta.reactjs.org".concat(a)},"twitter:image"),o]})}))},1391:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(1799),a=n(5893),i=n(3566),s=n(2508),o=n(7214),c=n(6671),l=n(9965),d=n.n(l),u=n(6875),m=n(5313),h=n(8420),p=n(1664),x=n.n(p),g=(n(7294),n(6730)),f=n(1924),w=n(6265);function j(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"w-full px-12",children:(0,a.jsxs)("div",{className:"max-w-4xl mx-auto w-full container pt-10",children:[(0,a.jsxs)("header",{className:"pt-14 pb-8",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)(u.p,{title:"Blog",description:"Offical React.js news, announcements, and release notes."}),(0,a.jsx)("h1",{className:"text-5xl font-bold text-primary dark:text-primary-dark mb-8",children:"Blog"}),(0,a.jsxs)("a",{href:"/feed.xml",className:"p-2 betterhover:hover:bg-gray-20 transition duration-150 ease-in-out rounded-lg inline-flex items-center",children:[(0,a.jsx)(o.o,{className:"w-5 h-5 mr-2"}),"RSS"]})]}),(0,a.jsx)("p",{className:"text-primary dark:text-primary-dark text-xl text-primary dark:text-primary-dark leading-large",children:"Offical React.js news, announcements, and release notes."})]}),(0,a.jsxs)("div",{className:"space-y-12 pb-40",children:[i.routes.map((e=>(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-bold leading-8 text-primary dark:text-primary-dark text-2xl mb-2 hover:underline",children:(0,a.jsx)(x(),{href:(0,f.z)(e.path,"."),children:(0,a.jsx)("a",{children:e.title})})}),(0,a.jsx)("div",{className:d().markdown+" mb-0",dangerouslySetInnerHTML:{__html:e.excerpt.trim()}}),(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{className:"text-sm leading-5 text-gray-80",children:["By"," ",(0,w.Z)(e.author,(e=>(0,a.jsx)(s.d,{href:(0,g.A)(e).url,className:"font-bold betterhover:hover:underline",children:(0,a.jsx)("span",{children:(0,g.A)(e).name})})))]}),(0,a.jsxs)("div",{className:"flex text-sm leading-5 text-gray-50",children:[(0,a.jsx)("time",{dateTime:e.date,children:(0,m.Z)((0,h.Z)(e.date),"MMMM dd, yyyy")}),(0,a.jsx)("span",{className:"mx-1",children:"\xb7"}),(0,a.jsx)("span",{children:e.readingTime})]})]})})]},e.path))),(0,a.jsx)("div",{className:"text-center",children:(0,a.jsx)(x(),{href:"/blog/all",children:(0,a.jsx)("a",{className:"p-2 text-center bg-card dark:bg-card-dark font-bold betterhover:hover:bg-secondary-button dark:bg-secondary-button-dark transition duration-150 ease-in-out rounded-lg inline-flex items-center",children:"View all articles"})})})]})]})}),(0,a.jsx)("div",{className:"pt-20 w-full lg:max-w-xs lg:sticky top-0 h-full hidden xl:block"})]})}j.displayName="Index",j.appShell=function(e){return(0,a.jsx)(c.T,(0,r.Z)({routeTree:i},e))}},6730:function(e,t,n){"use strict";n.d(t,{A:function(){return a}});var r=JSON.parse('{"KurtGokhan":{"name":"Gokhan Kurt","url":"https://github.com/KurtGokhan"}}');function a(e){const t=r[e];return t||(console.warn("Invalid author. Did you add it to authors.json??"),{name:"ReactUnity Dev",url:"https://github.com/ReactUnity"})}},6265:function(e,t,n){"use strict";var r=n(5893);n(7294);const a=(e,t)=>e.push((0,r.jsx)("span",{children:t},"".concat(e.length,"-").concat(t)));t.Z=function(e,t){if(e.length<=1)return e.map(t);const n=[];return e.forEach(((r,i)=>{i===e.length-1?(a(n,2===e.length?" and ":", and "),n.push(t(r,i))):i>0?(a(n,", "),n.push(t(r,i))):n.push(t(r,i))})),n}},9965:function(e){e.exports={markdown:"MDXComponents_markdown__5Fgvx",dark:"MDXComponents_dark___9agN"}},3566:function(e){"use strict";e.exports=JSON.parse('{"title":"Recent Posts","heading":true,"path":"/blog","routes":[{"path":"/blog/2021/11/10/new-docs.md","date":"2021-11-10","title":"ReactUnity New Documentation Website","author":["KurtGokhan"],"excerpt":"<p>Today, I am releasing the new documentation website of ReactUnity. The documentation was forked from the source code of the brilliant beta.reactjs.org.</p>\\n","readingTime":"5 min read"}]}')}},function(e){e.O(0,[9114,5313,6671,9774,2888,179],(function(){return t=7801,e(e.s=t);var t}));var t=e.O();_N_E=t}]);