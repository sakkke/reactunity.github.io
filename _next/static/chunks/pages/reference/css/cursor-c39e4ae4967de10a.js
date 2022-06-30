(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6610],{8279:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/css/cursor",function(){return t(6819)}])},9027:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(1799),l=t(9396),s=t(5893),a=(t(7294),t(1387)),i=t(9769),o=t(6671);function c(e){function n(n){return(0,s.jsx)(i.$,(0,l.Z)((0,r.Z)({},n),{meta:e}))}return n.appShell=d,n}function d(e){return(0,s.jsx)(o.T,(0,r.Z)({routeTree:a},e))}},9769:function(e,n,t){"use strict";t.d(n,{$:function(){return j}});var r=t(5893),l=t(7294),s=t(3905),a=t(7016),i=t(8338),o=t(1178),c=t(1664),d=t.n(c);var p=function(){const{breadcrumbs:e}=(0,o.e)();return e?(0,r.jsx)("div",{className:"flex",children:e.map(((e,n)=>e.path&&(0,r.jsx)("div",{className:"flex mb-3 mt-0.5 items-center",children:(0,r.jsxs)(l.Fragment,{children:[(0,r.jsx)(d(),{href:e.path,children:(0,r.jsx)("a",{className:"text-link dark:text-link-dark text-sm tracking-wide font-bold uppercase mr-1 hover:underline",children:e.title})}),(0,r.jsx)("span",{className:"inline-block mr-1 text-link dark:text-link-dark text-lg",children:(0,r.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M6.86612 13.6161C6.37796 14.1043 6.37796 14.8957 6.86612 15.3839C7.35427 15.872 8.14572 15.872 8.63388 15.3839L13.1339 10.8839C13.622 10.3957 13.622 9.60428 13.1339 9.11612L8.63388 4.61612C8.14572 4.12797 7.35427 4.12797 6.86612 4.61612C6.37796 5.10428 6.37796 5.89573 6.86612 6.38388L10.4822 10L6.86612 13.6161Z",fill:"currentColor"})})})]},e.path)},n)))}):null},u=t(4184),m=t.n(u);const x={foundation:{name:"Foundation",classes:"bg-yellow-50 text-white"},intermediate:{name:"Intermediate",classes:"bg-purple-40 text-white"},advanced:{name:"Advanced",classes:"bg-green-40 text-white"},experimental:{name:"Experimental",classes:"bg-ui-orange text-white"},deprecated:{name:"Deprecated",classes:"bg-red-40 text-white"}};var h=function(e){let{text:n,variant:t,className:l}=e;const{name:s,classes:a}=x[t];return(0,r.jsx)("span",{className:m()("mr-2",l),children:(0,r.jsx)("span",{className:m()("inline font-bold text-sm uppercase py-1 px-2 rounded",a),children:n||s})})},v=t(2937);var g=function(e){let{title:n,status:t,description:l,tags:s=[]}=e;return(0,r.jsx)("div",{className:"px-5 sm:px-12 pt-5",children:(0,r.jsxs)("div",{className:"max-w-4xl ml-0 2xl:mx-auto",children:[s?(0,r.jsx)(p,{}):null,(0,r.jsxs)(v.H1,{className:"mt-0 text-primary dark:text-primary-dark -mx-.5",children:[n,t?(0,r.jsxs)("em",{children:["\u2014",t]}):""]}),l&&(0,r.jsx)("p",{className:"mt-4 mb-6 text-primary dark:text-primary-dark text-xl text-gray-90 leading-large",children:l}),(null===s||void 0===s?void 0:s.length)>0&&(0,r.jsx)("div",{className:"mt-4",children:s.map((e=>(0,r.jsx)(h,{variant:e},e)))})]})})},f=t(6875),k=t(9729);function w(e){let{children:n}=e;return(0,r.jsx)("div",{className:"max-w-4xl ml-0 2xl:mx-auto",children:n})}function j(e){let{children:n,meta:t}=e;const{route:c,nextRoute:d,prevRoute:p}=(0,o.e)(),u=t.title||(null===c||void 0===c?void 0:c.title)||"",m=t.description||(null===c||void 0===c?void 0:c.description)||"";let x=l.Children.toArray(n).filter((e=>{var n;return!!(null===(n=e.props)||void 0===n?void 0:n.mdxType)&&["h1","h2","h3","Challenges","Recap"].includes(e.props.mdxType)})).map((e=>{var n,t;return"Challenges"===e.props.mdxType?{url:"#challenges",depth:0,text:"Challenges"}:"Recap"===e.props.mdxType?{url:"#recap",depth:0,text:"Recap"}:{url:"#"+e.props.id,depth:null!==(t=(null===(n=e.props)||void 0===n?void 0:n.mdxType)&&parseInt(e.props.mdxType.replace("h",""),0))&&void 0!==t?t:0,text:e.props.children}}));x.length>0&&x.unshift({depth:1,text:"Overview",url:"#"}),null==c&&console.error("This page was not added to one of the sidebar JSON files.");const h="/"===(null===c||void 0===c?void 0:c.path);let v=["Sandpack","FullWidth","Illustration","IllustrationBlock","Challenges","Recipes"],j=[],N=[];function b(e){j.length>0&&(N.push((0,r.jsx)(w,{children:j},e)),j=[])}return l.Children.forEach(n,(function(e,n){null!=e&&("object"===typeof e&&v.includes(e.props.mdxType)?(b(n),N.push(e)):j.push(e))})),b("last"),(0,r.jsxs)("article",{className:"h-full mx-auto relative w-full min-w-0",children:[(0,r.jsxs)("div",{className:"lg:pt-0 pt-20 pl-0 lg:pl-80 2xl:px-80 ",children:[(0,r.jsx)(f.p,{title:u}),!h&&(0,r.jsx)(g,{title:u,description:m,tags:null===c||void 0===c?void 0:c.tags}),(0,r.jsxs)("div",{className:"px-5 sm:px-12",children:[(0,r.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,r.jsx)(s.pC.Provider,{value:i.t,children:N})}),(0,r.jsx)(a.h,{route:c,nextRoute:d,prevRoute:p})]})]}),(0,r.jsx)("div",{className:"w-full lg:max-w-xs hidden 2xl:block",children:!h&&x.length>0&&(0,r.jsx)(k.o,{headings:x})})]})}},6819:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(9534),l=(t(7294),t(3905)),s=t(9027);const a=(i="Sandpack",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",Object.assign({},e))});var i;const o={},c=(0,s.Z)({title:"Cursor",layout:"API"});function d(e){var{components:n}=e,t=(0,r.Z)(e,["components"]);return(0,l.kt)(c,Object.assign({},o,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Sets the mouse cursor texture when an element is hovered. Compatible with ",(0,l.kt)("a",Object.assign({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/cursor",target:"_blank",rel:"nofollow noopener noreferrer"}),"CSS syntax"),"."),(0,l.kt)("p",null,"Valid values are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A named cursor: ",(0,l.kt)("inlineCode",{parentName:"li"},"default"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"pointer")," etc."),(0,l.kt)("li",{parentName:"ul"},"An image with hotspot offset: ",(0,l.kt)("inlineCode",{parentName:"li"},"url(res:myCursorImage) 12 6"))),(0,l.kt)(a,{mdxType:"Sandpack"},(0,l.kt)("pre",null,(0,l.kt)("code",Object.assign({parentName:"pre"},{className:"language-js",metastring:"App.js","App.js":!0}),"export default function App() {\n  return <>\n    <view />\n    <view />\n    <view />\n    <view />\n  </>;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",Object.assign({parentName:"pre"},{className:"language-css",metastring:"style.css active","style.css":!0,active:!0}),"view {\n  flex-grow: 1;\n}\n\nview:nth-child(1) {\n  background-color: coral;\n  cursor: pointer;\n}\n\nview:nth-child(2) {\n  background-color: limegreen;\n  cursor: none;\n}\n\nview:nth-child(3) {\n  background-color: aqua;\n  cursor: move;\n}\n\nview:nth-child(4) {\n  background-color: dodgerblue;\n  cursor: url(res:ReactUnity/sprites/check) 5 5;\n}\n"))))}d.isMDXComponent=!0}},function(e){e.O(0,[3033,5762,9114,9624,6671,8617,9774,2888,179],(function(){return n=8279,e(e.s=n);var n}));var n=e.O();_N_E=n}]);