(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7878],{9535:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/css/animation",function(){return t(7317)}])},9027:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var a=t(1799),r=t(9396),l=t(5893),s=(t(7294),t(1387)),i=t(9769),o=t(6671);function c(e){function n(n){return(0,l.jsx)(i.$,(0,r.Z)((0,a.Z)({},n),{meta:e}))}return n.appShell=d,n}function d(e){return(0,l.jsx)(o.T,(0,a.Z)({routeTree:s},e))}},9769:function(e,n,t){"use strict";t.d(n,{$:function(){return w}});var a=t(5893),r=t(7294),l=t(3905),s=t(7016),i=t(8338),o=t(1178),c=t(1664),d=t.n(c);var p=function(){const{breadcrumbs:e}=(0,o.e)();return e?(0,a.jsx)("div",{className:"flex",children:e.map(((e,n)=>e.path&&(0,a.jsx)("div",{className:"flex mb-3 mt-0.5 items-center",children:(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(d(),{href:e.path,children:(0,a.jsx)("a",{className:"text-link dark:text-link-dark text-sm tracking-wide font-bold uppercase mr-1 hover:underline",children:e.title})}),(0,a.jsx)("span",{className:"inline-block mr-1 text-link dark:text-link-dark text-lg",children:(0,a.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M6.86612 13.6161C6.37796 14.1043 6.37796 14.8957 6.86612 15.3839C7.35427 15.872 8.14572 15.872 8.63388 15.3839L13.1339 10.8839C13.622 10.3957 13.622 9.60428 13.1339 9.11612L8.63388 4.61612C8.14572 4.12797 7.35427 4.12797 6.86612 4.61612C6.37796 5.10428 6.37796 5.89573 6.86612 6.38388L10.4822 10L6.86612 13.6161Z",fill:"currentColor"})})})]},e.path)},n)))}):null},u=t(4184),m=t.n(u);const x={foundation:{name:"Foundation",classes:"bg-yellow-50 text-white"},intermediate:{name:"Intermediate",classes:"bg-purple-40 text-white"},advanced:{name:"Advanced",classes:"bg-green-40 text-white"},experimental:{name:"Experimental",classes:"bg-ui-orange text-white"},deprecated:{name:"Deprecated",classes:"bg-red-40 text-white"}};var h=function(e){let{text:n,variant:t,className:r}=e;const{name:l,classes:s}=x[t];return(0,a.jsx)("span",{className:m()("mr-2",r),children:(0,a.jsx)("span",{className:m()("inline font-bold text-sm uppercase py-1 px-2 rounded",s),children:n||l})})},v=t(2937);var f=function(e){let{title:n,status:t,description:r,tags:l=[]}=e;return(0,a.jsx)("div",{className:"px-5 sm:px-12 pt-5",children:(0,a.jsxs)("div",{className:"max-w-4xl ml-0 2xl:mx-auto",children:[l?(0,a.jsx)(p,{}):null,(0,a.jsxs)(v.H1,{className:"mt-0 text-primary dark:text-primary-dark -mx-.5",children:[n,t?(0,a.jsxs)("em",{children:["\u2014",t]}):""]}),r&&(0,a.jsx)("p",{className:"mt-4 mb-6 text-primary dark:text-primary-dark text-xl text-gray-90 leading-large",children:r}),(null===l||void 0===l?void 0:l.length)>0&&(0,a.jsx)("div",{className:"mt-4",children:l.map((e=>(0,a.jsx)(h,{variant:e},e)))})]})})},g=t(6875),j=t(9729);function k(e){let{children:n}=e;return(0,a.jsx)("div",{className:"max-w-4xl ml-0 2xl:mx-auto",children:n})}function w(e){let{children:n,meta:t}=e;const{route:c,nextRoute:d,prevRoute:p}=(0,o.e)(),u=t.title||(null===c||void 0===c?void 0:c.title)||"",m=t.description||(null===c||void 0===c?void 0:c.description)||"";let x=r.Children.toArray(n).filter((e=>{var n;return!!(null===(n=e.props)||void 0===n?void 0:n.mdxType)&&["h1","h2","h3","Challenges","Recap"].includes(e.props.mdxType)})).map((e=>{var n,t;return"Challenges"===e.props.mdxType?{url:"#challenges",depth:0,text:"Challenges"}:"Recap"===e.props.mdxType?{url:"#recap",depth:0,text:"Recap"}:{url:"#"+e.props.id,depth:null!==(t=(null===(n=e.props)||void 0===n?void 0:n.mdxType)&&parseInt(e.props.mdxType.replace("h",""),0))&&void 0!==t?t:0,text:e.props.children}}));x.length>0&&x.unshift({depth:1,text:"Overview",url:"#"}),null==c&&console.error("This page was not added to one of the sidebar JSON files.");const h="/"===(null===c||void 0===c?void 0:c.path);let v=["Sandpack","FullWidth","Illustration","IllustrationBlock","Challenges","Recipes"],w=[],b=[];function y(e){w.length>0&&(b.push((0,a.jsx)(k,{children:w},e)),w=[])}return r.Children.forEach(n,(function(e,n){null!=e&&("object"===typeof e&&v.includes(e.props.mdxType)?(y(n),b.push(e)):w.push(e))})),y("last"),(0,a.jsxs)("article",{className:"h-full mx-auto relative w-full min-w-0",children:[(0,a.jsxs)("div",{className:"lg:pt-0 pt-20 pl-0 lg:pl-80 2xl:px-80 ",children:[(0,a.jsx)(g.p,{title:u}),!h&&(0,a.jsx)(f,{title:u,description:m,tags:null===c||void 0===c?void 0:c.tags}),(0,a.jsxs)("div",{className:"px-5 sm:px-12",children:[(0,a.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,a.jsx)(l.pC.Provider,{value:i.t,children:b})}),(0,a.jsx)(s.h,{route:c,nextRoute:d,prevRoute:p})]})]}),(0,a.jsx)("div",{className:"w-full lg:max-w-xs hidden 2xl:block",children:!h&&x.length>0&&(0,a.jsx)(j.o,{headings:x})})]})}},7317:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var a=t(9534),r=(t(7294),t(3905)),l=t(9027);const s=(i="Sandpack",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",Object.assign({},e))});var i;const o={},c=(0,l.Z)({title:"Animation",layout:"API"});function d(e){var{components:n}=e,t=(0,a.Z)(e,["components"]);return(0,r.kt)(c,Object.assign({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Applies a keyframe animation to an element."),(0,r.kt)("p",null,"This property is completely compatible with ",(0,r.kt)("a",Object.assign({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation",target:"_blank",rel:"nofollow noopener noreferrer"}),"CSS animation"),"."),(0,r.kt)(s,{mdxType:"Sandpack"},(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-js",metastring:"App.js","App.js":!0}),"export default function App() {\n  return <>\n    Click and hold the box to see a different animation\n    <view />\n  </>;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-css",metastring:"style.css active","style.css":!0,active:!0}),":root {\n  justify-content: space-around;\n  text-align: center;\n  background-color: #a9b2ba;\n}\n\nview {\n  align-self: center;\n  width: 100px;\n  height: 100px;\n  background-color: coral;\n  cursor: pointer;\n\n  animation: rotateAnim 2s ease-in-out alternate infinite;\n}\n\nview:active {\n  animation: scaleAnim 2s linear both;\n}\n\n@keyframes rotateAnim {\n  from {\n    rotate: -60deg;\n  }\n  to {\n    rotate: 60deg;\n  }\n}\n\n@keyframes scaleAnim {\n  from {\n    scale: 1;\n  }\n  40% {\n    scale: 2.2;\n  }\n  to {\n    scale: 1.6;\n  }\n}\n"))))}d.isMDXComponent=!0}},function(e){e.O(0,[3033,5762,9114,9624,6671,8617,9774,2888,179],(function(){return n=9535,e(e.s=n);var n}));var n=e.O();_N_E=n}]);