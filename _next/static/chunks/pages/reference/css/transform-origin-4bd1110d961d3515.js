(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[860],{5481:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/css/transform-origin",function(){return t(5135)}])},9027:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),l=(t(7294),t(1387)),a=t(9769),i=t(6671);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}function c(e){var n=function(n){return(0,r.jsx)(a.$,o({},n,{meta:e}))};return n.appShell=p,n}function p(e){return(0,r.jsx)(i.T,o({routeTree:l},e))}},9769:function(e,n,t){"use strict";t.d(n,{$:function(){return b}});var r=t(5893),l=t(3905),a=t(7016),i=t(8338),s=t(1178),o=t(1664),c=t(7294);var p=function(){var e=(0,s.e)().breadcrumbs;return e?(0,r.jsx)("div",{className:"flex",children:e.map((function(e,n){return e.path&&(0,r.jsx)("div",{className:"flex mb-3 mt-0.5 items-center",children:(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(o.default,{href:e.path,children:(0,r.jsx)("a",{className:"text-link dark:text-link-dark text-sm tracking-wide font-bold uppercase mr-1 hover:underline",children:e.title})}),(0,r.jsx)("span",{className:"inline-block mr-1 text-link dark:text-link-dark text-lg",children:(0,r.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M6.86612 13.6161C6.37796 14.1043 6.37796 14.8957 6.86612 15.3839C7.35427 15.872 8.14572 15.872 8.63388 15.3839L13.1339 10.8839C13.622 10.3957 13.622 9.60428 13.1339 9.11612L8.63388 4.61612C8.14572 4.12797 7.35427 4.12797 6.86612 4.61612C6.37796 5.10428 6.37796 5.89573 6.86612 6.38388L10.4822 10L6.86612 13.6161Z",fill:"currentColor"})})})]},e.path)},n)}))}):null},d=t(4184),u=t.n(d),m={foundation:{name:"Foundation",classes:"bg-yellow-50 text-white"},intermediate:{name:"Intermediate",classes:"bg-purple-40 text-white"},advanced:{name:"Advanced",classes:"bg-green-40 text-white"},experimental:{name:"Experimental",classes:"bg-ui-orange text-white"},deprecated:{name:"Deprecated",classes:"bg-red-40 text-white"}};var x=function(e){var n=e.text,t=e.variant,l=e.className,a=m[t],i=a.name,s=a.classes;return(0,r.jsx)("span",{className:u()("mr-2",l),children:(0,r.jsx)("span",{className:u()("inline font-bold text-sm uppercase py-1 px-2 rounded",s),children:n||i})})},h=t(2937);var f=function(e){var n=e.title,t=e.status,l=e.description,a=e.tags,i=void 0===a?[]:a;return(0,r.jsx)("div",{className:"px-5 sm:px-12 pt-5",children:(0,r.jsxs)("div",{className:"max-w-4xl ml-0 2xl:mx-auto",children:[i?(0,r.jsx)(p,{}):null,(0,r.jsxs)(h.H1,{className:"mt-0 text-primary dark:text-primary-dark -mx-.5",children:[n,t?(0,r.jsxs)("em",{children:["\u2014",t]}):""]}),l&&(0,r.jsx)("p",{className:"mt-4 mb-6 text-primary dark:text-primary-dark text-xl text-gray-90 leading-large",children:l}),(null===i||void 0===i?void 0:i.length)>0&&(0,r.jsx)("div",{className:"mt-4",children:i.map((function(e){return(0,r.jsx)(x,{variant:e},e)}))})]})})},v=t(6875),g=t(9729);function k(e){var n=e.children;return(0,r.jsx)("div",{className:"max-w-4xl ml-0 2xl:mx-auto",children:n})}function b(e){var n=e.children,t=e.meta,o=function(e){N.length>0&&(y.push((0,r.jsx)(k,{children:N},e)),N=[])},p=(0,s.e)(),d=p.route,u=p.nextRoute,m=p.prevRoute,x=t.title||(null===d||void 0===d?void 0:d.title)||"",h=t.description||(null===d||void 0===d?void 0:d.description)||"",b=c.Children.toArray(n).filter((function(e){var n;return!!(null===(n=e.props)||void 0===n?void 0:n.mdxType)&&["h1","h2","h3","Challenges","Recipes","Recap"].includes(e.props.mdxType)})).map((function(e){var n,t;return"Challenges"===e.props.mdxType?{url:"#challenges",depth:0,text:"Challenges"}:"Recipes"===e.props.mdxType?{url:"#recipes",depth:0,text:"Recipes"}:"Recap"===e.props.mdxType?{url:"#recap",depth:0,text:"Recap"}:{url:"#"+e.props.id,depth:null!==(t=(null===(n=e.props)||void 0===n?void 0:n.mdxType)&&parseInt(e.props.mdxType.replace("h",""),0))&&void 0!==t?t:0,text:e.props.children}}));b.length>0&&b.unshift({depth:1,text:"Overview",url:"#"}),d||console.error("This page was not added to one of the sidebar JSON files.");var j="/"===(null===d||void 0===d?void 0:d.path),w=["Sandpack","APIAnatomy","FullWidth","Illustration","IllustrationBlock","Challenges","Recipes"],N=[],y=[];return c.Children.forEach(n,(function(e,n){null!=e&&("object"===typeof e&&w.includes(e.props.mdxType)?(o(n),y.push(e)):N.push(e))})),o("last"),(0,r.jsxs)("article",{className:"h-full mx-auto relative w-full min-w-0 flex flex-col",children:[(0,r.jsxs)("div",{className:"lg:pt-0 pt-20 pl-0 lg:pl-80 2xl:px-80 flex flex-col flex-grow",children:[(0,r.jsx)(v.p,{title:x}),!j&&(0,r.jsx)(f,{title:x,description:h,tags:null===d||void 0===d?void 0:d.tags}),(0,r.jsx)("div",{className:"px-5 sm:px-12",children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,r.jsx)(l.Zo,{components:i.t,children:y})})}),(0,r.jsx)("div",{className:"px-5 sm:px-12 mt-auto",children:(0,r.jsx)(a.h,{route:d,nextRoute:u,prevRoute:m})})]}),(0,r.jsx)("div",{className:"w-full lg:max-w-xs hidden 2xl:block",children:!j&&b.length>0&&(0,r.jsx)(g.o,{headings:b})})]})}},5135:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});t(7294);var r=t(3905),l=t(9027);function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i,s=(i="Sandpack",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",Object.assign({},e))}),o={},c=(0,l.Z)({title:"Transform Origin",layout:"API"});function p(e){var n=e.components,t=a(e,["components"]);return(0,r.kt)(c,Object.assign({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Affects the pivot point for ",(0,r.kt)("inlineCode",{parentName:"p"},"scale")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"rotate"),". By default it is at the center."),(0,r.kt)("p",null,"Valid values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Positional keyword: ",(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"center"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"top left")," etc."),(0,r.kt)("li",{parentName:"ul"},"Pixel value: ",(0,r.kt)("inlineCode",{parentName:"li"},"50px 20px")),(0,r.kt)("li",{parentName:"ul"},"Percentage values: ",(0,r.kt)("inlineCode",{parentName:"li"},"50% 20%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"40px 50%")," etc.")),(0,r.kt)(s,{mdxType:"Sandpack"},(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-js",metastring:"App.js","App.js":!0}),"export default function App() {\n  return <>\n    <view />\n    <hr />\n    <view />\n    <hr />\n    <view />\n    <hr />\n    <view />\n  </>;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-css",metastring:"style.css active","style.css":!0,active:!0}),"hr {\n  border-bottom-width: 5px;\n  z-index: 1;\n}\n\nview {\n  flex-grow: 1;\n}\n\nview:nth-child(1) {\n  background-color: coral;\n  scale: 0.9;\n}\n\nview:nth-child(3) {\n  background-color: limegreen;\n  transform-origin: 30px 30px;\n  scale: 0.8;\n}\n\nview:nth-child(5) {\n  background-color: aqua;\n  transform-origin: top left;\n  scale: 0.9 1.2;\n}\n\nview:nth-child(7) {\n  background-color: dodgerblue;\n  transform-origin: bottom right;\n  scale: 0.5;\n}\n"))))}p.isMDXComponent=!0}},function(e){e.O(0,[3033,5762,4051,2874,6671,8617,9774,2888,179],(function(){return n=5481,e(e.s=n);var n}));var n=e.O();_N_E=n}]);