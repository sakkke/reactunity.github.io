(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5773],{5658:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/css/appearance",function(){return n(4540)}])},9027:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var l=n(1799),s=n(9396),a=n(5893),r=(n(7294),n(1387)),i=n(9769),o=n(6671);function c(e){function t(t){return(0,a.jsx)(i.$,(0,s.Z)((0,l.Z)({},t),{meta:e}))}return t.appShell=d,t}function d(e){return(0,a.jsx)(o.T,(0,l.Z)({routeTree:r},e))}},9769:function(e,t,n){"use strict";n.d(t,{$:function(){return k}});var l=n(5893),s=n(7294),a=n(3905),r=n(7016),i=n(8338),o=n(1178),c=n(1664),d=n.n(c);var p=function(){const{breadcrumbs:e}=(0,o.e)();return e?(0,l.jsx)("div",{className:"flex",children:e.map(((e,t)=>e.path&&(0,l.jsx)("div",{className:"flex mb-3 mt-0.5 items-center",children:(0,l.jsxs)(s.Fragment,{children:[(0,l.jsx)(d(),{href:e.path,children:(0,l.jsx)("a",{className:"text-link dark:text-link-dark text-sm tracking-wide font-bold uppercase mr-1 hover:underline",children:e.title})}),(0,l.jsx)("span",{className:"inline-block mr-1 text-link dark:text-link-dark text-lg",children:(0,l.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M6.86612 13.6161C6.37796 14.1043 6.37796 14.8957 6.86612 15.3839C7.35427 15.872 8.14572 15.872 8.63388 15.3839L13.1339 10.8839C13.622 10.3957 13.622 9.60428 13.1339 9.11612L8.63388 4.61612C8.14572 4.12797 7.35427 4.12797 6.86612 4.61612C6.37796 5.10428 6.37796 5.89573 6.86612 6.38388L10.4822 10L6.86612 13.6161Z",fill:"currentColor"})})})]},e.path)},t)))}):null},u=n(4184),x=n.n(u);const m={foundation:{name:"Foundation",classes:"bg-yellow-50 text-white"},intermediate:{name:"Intermediate",classes:"bg-purple-40 text-white"},advanced:{name:"Advanced",classes:"bg-green-40 text-white"},experimental:{name:"Experimental",classes:"bg-ui-orange text-white"},deprecated:{name:"Deprecated",classes:"bg-red-40 text-white"}};var h=function(e){let{text:t,variant:n,className:s}=e;const{name:a,classes:r}=m[n];return(0,l.jsx)("span",{className:x()("mr-2",s),children:(0,l.jsx)("span",{className:x()("inline font-bold text-sm uppercase py-1 px-2 rounded",r),children:t||a})})},v=n(2937);var g=function(e){let{title:t,status:n,description:s,tags:a=[]}=e;return(0,l.jsx)("div",{className:"px-5 sm:px-12 pt-5",children:(0,l.jsxs)("div",{className:"max-w-4xl ml-0 2xl:mx-auto",children:[a?(0,l.jsx)(p,{}):null,(0,l.jsxs)(v.H1,{className:"mt-0 text-primary dark:text-primary-dark -mx-.5",children:[t,n?(0,l.jsxs)("em",{children:["\u2014",n]}):""]}),s&&(0,l.jsx)("p",{className:"mt-4 mb-6 text-primary dark:text-primary-dark text-xl text-gray-90 leading-large",children:s}),(null===a||void 0===a?void 0:a.length)>0&&(0,l.jsx)("div",{className:"mt-4",children:a.map((e=>(0,l.jsx)(h,{variant:e},e)))})]})})},f=n(6875),j=n(9729);function b(e){let{children:t}=e;return(0,l.jsx)("div",{className:"max-w-4xl ml-0 2xl:mx-auto",children:t})}function k(e){let{children:t,meta:n}=e;const{route:c,nextRoute:d,prevRoute:p}=(0,o.e)(),u=n.title||(null===c||void 0===c?void 0:c.title)||"",x=n.description||(null===c||void 0===c?void 0:c.description)||"";let m=s.Children.toArray(t).filter((e=>{var t;return!!(null===(t=e.props)||void 0===t?void 0:t.mdxType)&&["h1","h2","h3","Challenges","Recap"].includes(e.props.mdxType)})).map((e=>{var t,n;return"Challenges"===e.props.mdxType?{url:"#challenges",depth:0,text:"Challenges"}:"Recap"===e.props.mdxType?{url:"#recap",depth:0,text:"Recap"}:{url:"#"+e.props.id,depth:null!==(n=(null===(t=e.props)||void 0===t?void 0:t.mdxType)&&parseInt(e.props.mdxType.replace("h",""),0))&&void 0!==n?n:0,text:e.props.children}}));m.length>0&&m.unshift({depth:1,text:"Overview",url:"#"}),null==c&&console.error("This page was not added to one of the sidebar JSON files.");const h="/"===(null===c||void 0===c?void 0:c.path);let v=["Sandpack","FullWidth","Illustration","IllustrationBlock","Challenges","Recipes"],k=[],w=[];function N(e){k.length>0&&(w.push((0,l.jsx)(b,{children:k},e)),k=[])}return s.Children.forEach(t,(function(e,t){null!=e&&("object"===typeof e&&v.includes(e.props.mdxType)?(N(t),w.push(e)):k.push(e))})),N("last"),(0,l.jsxs)("article",{className:"h-full mx-auto relative w-full min-w-0",children:[(0,l.jsxs)("div",{className:"lg:pt-0 pt-20 pl-0 lg:pl-80 2xl:px-80 ",children:[(0,l.jsx)(f.p,{title:u}),!h&&(0,l.jsx)(g,{title:u,description:x,tags:null===c||void 0===c?void 0:c.tags}),(0,l.jsxs)("div",{className:"px-5 sm:px-12",children:[(0,l.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,l.jsx)(a.pC.Provider,{value:i.t,children:w})}),(0,l.jsx)(r.h,{route:c,nextRoute:d,prevRoute:p})]})]}),(0,l.jsx)("div",{className:"w-full lg:max-w-xs hidden 2xl:block",children:!h&&m.length>0&&(0,l.jsx)(j.o,{headings:m})})]})}},4540:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var l=n(9534),s=(n(7294),n(3905)),a=n(9027);const r=(i="Sandpack",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",Object.assign({},e))});var i;const o={},c=(0,a.Z)({title:"Appearance",layout:"API"});function d(e){var{components:t}=e,n=(0,l.Z)(e,["components"]);return(0,s.kt)(c,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Remove native styling from elements which have it, such as button, input and toggle. This allows styling those element more accurately if desired."),(0,s.kt)("p",null,"Valid values are ",(0,s.kt)("inlineCode",{parentName:"p"},"none")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"button"),"."),(0,s.kt)(r,{mdxType:"Sandpack"},(0,s.kt)("pre",null,(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-js",metastring:"App.js","App.js":!0}),"export default function App() {\n  return <>\n    <button>Appearance: button</button>\n    <button>Appearance: none</button>\n    Click the buttons to see style differences\n  </>;\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-css",metastring:"style.css active","style.css":!0,active:!0}),":root {\n  justify-content: space-around;\n  align-items: center;\n  background-color: white;\n}\n\nbutton {\n  background-color: cornflowerblue;\n  color: white;\n}\n\nbutton:nth-child(1) {\n  appearance: button;\n}\n\nbutton:nth-child(2) {\n  appearance: none;\n}\n"))))}d.isMDXComponent=!0}},function(e){e.O(0,[3033,5762,9114,9624,6671,8617,9774,2888,179],(function(){return t=5658,e(e.s=t);var t}));var t=e.O();_N_E=t}]);