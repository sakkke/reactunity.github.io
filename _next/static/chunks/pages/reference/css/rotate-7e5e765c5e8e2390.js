(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6937],{4292:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/css/rotate",function(){return t(4031)}])},9027:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),l=(t(7294),t(1387)),a=t(9769),i=t(6671);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}function c(e){var n=function(n){return(0,r.jsx)(a.$,o({},n,{meta:e}))};return n.appShell=d,n}function d(e){return(0,r.jsx)(i.T,o({routeTree:l},e))}},9769:function(e,n,t){"use strict";t.d(n,{$:function(){return b}});var r=t(5893),l=t(3905),a=t(7016),i=t(8338),s=t(1178),o=t(1664),c=t(7294);var d=function(){var e=(0,s.e)().breadcrumbs;return e?(0,r.jsx)("div",{className:"flex",children:e.map((function(e,n){return e.path&&(0,r.jsx)("div",{className:"flex mb-3 mt-0.5 items-center",children:(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(o.default,{href:e.path,children:(0,r.jsx)("a",{className:"text-link dark:text-link-dark text-sm tracking-wide font-bold uppercase mr-1 hover:underline",children:e.title})}),(0,r.jsx)("span",{className:"inline-block mr-1 text-link dark:text-link-dark text-lg",children:(0,r.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M6.86612 13.6161C6.37796 14.1043 6.37796 14.8957 6.86612 15.3839C7.35427 15.872 8.14572 15.872 8.63388 15.3839L13.1339 10.8839C13.622 10.3957 13.622 9.60428 13.1339 9.11612L8.63388 4.61612C8.14572 4.12797 7.35427 4.12797 6.86612 4.61612C6.37796 5.10428 6.37796 5.89573 6.86612 6.38388L10.4822 10L6.86612 13.6161Z",fill:"currentColor"})})})]},e.path)},n)}))}):null},p=t(4184),u=t.n(p),m={foundation:{name:"Foundation",classes:"bg-yellow-50 text-white"},intermediate:{name:"Intermediate",classes:"bg-purple-40 text-white"},advanced:{name:"Advanced",classes:"bg-green-40 text-white"},experimental:{name:"Experimental",classes:"bg-ui-orange text-white"},deprecated:{name:"Deprecated",classes:"bg-red-40 text-white"}};var x=function(e){var n=e.text,t=e.variant,l=e.className,a=m[t],i=a.name,s=a.classes;return(0,r.jsx)("span",{className:u()("mr-2",l),children:(0,r.jsx)("span",{className:u()("inline font-bold text-sm uppercase py-1 px-2 rounded",s),children:n||i})})},h=t(2937);var f=function(e){var n=e.title,t=e.status,l=e.description,a=e.tags,i=void 0===a?[]:a;return(0,r.jsx)("div",{className:"px-5 sm:px-12 pt-5",children:(0,r.jsxs)("div",{className:"max-w-4xl ml-0 2xl:mx-auto",children:[i?(0,r.jsx)(d,{}):null,(0,r.jsxs)(h.H1,{className:"mt-0 text-primary dark:text-primary-dark -mx-.5",children:[n,t?(0,r.jsxs)("em",{children:["\u2014",t]}):""]}),l&&(0,r.jsx)("p",{className:"mt-4 mb-6 text-primary dark:text-primary-dark text-xl text-gray-90 leading-large",children:l}),(null===i||void 0===i?void 0:i.length)>0&&(0,r.jsx)("div",{className:"mt-4",children:i.map((function(e){return(0,r.jsx)(x,{variant:e},e)}))})]})})},v=t(6875),g=t(9729);function j(e){var n=e.children;return(0,r.jsx)("div",{className:"max-w-4xl ml-0 2xl:mx-auto",children:n})}function b(e){var n=e.children,t=e.meta,o=function(e){y.length>0&&(N.push((0,r.jsx)(j,{children:y},e)),y=[])},d=(0,s.e)(),p=d.route,u=d.nextRoute,m=d.prevRoute,x=t.title||(null===p||void 0===p?void 0:p.title)||"",h=t.description||(null===p||void 0===p?void 0:p.description)||"",b=c.Children.toArray(n).filter((function(e){var n;return!!(null===(n=e.props)||void 0===n?void 0:n.mdxType)&&["h1","h2","h3","Challenges","Recipes","Recap"].includes(e.props.mdxType)})).map((function(e){var n,t;return"Challenges"===e.props.mdxType?{url:"#challenges",depth:0,text:"Challenges"}:"Recipes"===e.props.mdxType?{url:"#recipes",depth:0,text:"Recipes"}:"Recap"===e.props.mdxType?{url:"#recap",depth:0,text:"Recap"}:{url:"#"+e.props.id,depth:null!==(t=(null===(n=e.props)||void 0===n?void 0:n.mdxType)&&parseInt(e.props.mdxType.replace("h",""),0))&&void 0!==t?t:0,text:e.props.children}}));b.length>0&&b.unshift({depth:1,text:"Overview",url:"#"}),p||console.error("This page was not added to one of the sidebar JSON files.");var w="/"===(null===p||void 0===p?void 0:p.path),k=["Sandpack","APIAnatomy","FullWidth","Illustration","IllustrationBlock","Challenges","Recipes"],y=[],N=[];return c.Children.forEach(n,(function(e,n){null!=e&&("object"===typeof e&&k.includes(e.props.mdxType)?(o(n),N.push(e)):y.push(e))})),o("last"),(0,r.jsxs)("article",{className:"h-full mx-auto relative w-full min-w-0 flex flex-col",children:[(0,r.jsxs)("div",{className:"lg:pt-0 pt-20 pl-0 lg:pl-80 2xl:px-80 flex flex-col flex-grow",children:[(0,r.jsx)(v.p,{title:x}),!w&&(0,r.jsx)(f,{title:x,description:h,tags:null===p||void 0===p?void 0:p.tags}),(0,r.jsx)("div",{className:"px-5 sm:px-12",children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,r.jsx)(l.Zo,{components:i.t,children:N})})}),(0,r.jsx)("div",{className:"px-5 sm:px-12 mt-auto",children:(0,r.jsx)(a.h,{route:p,nextRoute:u,prevRoute:m})})]}),(0,r.jsx)("div",{className:"w-full lg:max-w-xs hidden 2xl:block",children:!w&&b.length>0&&(0,r.jsx)(g.o,{headings:b})})]})}},4031:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});t(7294);var r=t(3905),l=t(9027);function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i,s=(i="Sandpack",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",Object.assign({},e))}),o={},c=(0,l.Z)({title:"Rotate",layout:"API"});function d(e){var n=e.components,t=a(e,["components"]);return(0,r.kt)(c,Object.assign({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rotates the element around its ",(0,r.kt)("inlineCode",{parentName:"p"},"transform-origin"),"."),(0,r.kt)("p",null,"Valid values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Single angle value to rotate around Z-axis: ",(0,r.kt)("inlineCode",{parentName:"li"},"45deg"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1.2rad"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"0.5turn")," etc."),(0,r.kt)("li",{parentName:"ul"},"3-dimensional angles in the form ",(0,r.kt)("inlineCode",{parentName:"li"},"eulerX eulerY eulerZ"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"45deg 60deg 360deg")," etc.")),(0,r.kt)(s,{mdxType:"Sandpack"},(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-js",metastring:"App.js","App.js":!0}),"export default function App() {\n  return <>\n    <view />\n    <hr />\n    <view />\n    <hr />\n    <view />\n    <hr />\n    <view />\n  </>;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-css",metastring:"style.css active","style.css":!0,active:!0}),"hr {\n  border-bottom-width: 5px;\n  z-index: 1;\n  width: 100%;\n}\n\n:root {\n  align-items: center;\n  justify-content: space-around;\n}\n\nview {\n  width: 50px;\n  height: 50px;\n}\n\nview:nth-child(1) {\n  background-color: coral;\n  rotate: 30deg;\n}\n\nview:nth-child(3) {\n  background-color: limegreen;\n  rotate: 1rad;\n}\n\nview:nth-child(5) {\n  background-color: aqua;\n  transform-origin: top left;\n  rotate: 0.125turn;\n}\n\nview:nth-child(7) {\n  background-color: dodgerblue;\n  transform-origin: bottom right;\n  rotate: 45deg 45deg 0;\n}\n"))))}d.isMDXComponent=!0}},function(e){e.O(0,[3033,5762,4051,2874,6671,8617,9774,2888,179],(function(){return n=4292,e(e.s=n);var n}));var n=e.O();_N_E=n}]);