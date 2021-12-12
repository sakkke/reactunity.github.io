(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5584],{8205:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/material/slider",function(){return r(4684)}])},9027:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),l=(r(7294),r(1387)),a=r(9769),i=r(6671);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}function c(e){var t=function(t){return(0,n.jsx)(a.$,o({},t,{meta:e}))};return t.appShell=d,t}function d(e){return(0,n.jsx)(i.T,o({routeTree:l},e))}},9769:function(e,t,r){"use strict";r.d(t,{$:function(){return w}});var n=r(5893),l=r(3905),a=r(7016),i=r(8338),s=r(1178),o=r(1664),c=r(7294);var d=function(){var e=(0,s.e)().breadcrumbs;return e?(0,n.jsx)("div",{className:"flex",children:e.map((function(e,t){return e.path&&(0,n.jsx)("div",{className:"flex mb-3 mt-0.5 items-center",children:(0,n.jsxs)(c.Fragment,{children:[(0,n.jsx)(o.default,{href:e.path,children:(0,n.jsx)("a",{className:"text-link dark:text-link-dark text-sm tracking-wide font-bold uppercase mr-1 hover:underline",children:e.title})}),(0,n.jsx)("span",{className:"inline-block mr-1 text-link dark:text-link-dark text-lg",children:(0,n.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M6.86612 13.6161C6.37796 14.1043 6.37796 14.8957 6.86612 15.3839C7.35427 15.872 8.14572 15.872 8.63388 15.3839L13.1339 10.8839C13.622 10.3957 13.622 9.60428 13.1339 9.11612L8.63388 4.61612C8.14572 4.12797 7.35427 4.12797 6.86612 4.61612C6.37796 5.10428 6.37796 5.89573 6.86612 6.38388L10.4822 10L6.86612 13.6161Z",fill:"currentColor"})})})]},e.path)},t)}))}):null},p=r(4184),u=r.n(p),m={foundation:{name:"Foundation",classes:"bg-yellow-50 text-white"},intermediate:{name:"Intermediate",classes:"bg-purple-40 text-white"},advanced:{name:"Advanced",classes:"bg-green-40 text-white"},experimental:{name:"Experimental",classes:"bg-ui-orange text-white"},deprecated:{name:"Deprecated",classes:"bg-red-40 text-white"}};var x=function(e){var t=e.text,r=e.variant,l=e.className,a=m[r],i=a.name,s=a.classes;return(0,n.jsx)("span",{className:u()("mr-2",l),children:(0,n.jsx)("span",{className:u()("inline font-bold text-sm uppercase py-1 px-2 rounded",s),children:t||i})})},h=r(2937);var f=function(e){var t=e.title,r=e.status,l=e.description,a=e.tags,i=void 0===a?[]:a;return(0,n.jsx)("div",{className:"px-5 sm:px-12 pt-5",children:(0,n.jsxs)("div",{className:"max-w-4xl ml-0 2xl:mx-auto",children:[i?(0,n.jsx)(d,{}):null,(0,n.jsxs)(h.H1,{className:"mt-0 text-primary dark:text-primary-dark -mx-.5",children:[t,r?(0,n.jsxs)("em",{children:["\u2014",r]}):""]}),l&&(0,n.jsx)("p",{className:"mt-4 mb-6 text-primary dark:text-primary-dark text-xl text-gray-90 leading-large",children:l}),(null===i||void 0===i?void 0:i.length)>0&&(0,n.jsx)("div",{className:"mt-4",children:i.map((function(e){return(0,n.jsx)(x,{variant:e},e)}))})]})})},v=r(6875),g=r(9729);function j(e){var t=e.children;return(0,n.jsx)("div",{className:"max-w-4xl ml-0 2xl:mx-auto",children:t})}function w(e){var t=e.children,r=e.meta,o=function(e){k.length>0&&(N.push((0,n.jsx)(j,{children:k},e)),k=[])},d=(0,s.e)(),p=d.route,u=d.nextRoute,m=d.prevRoute,x=r.title||(null===p||void 0===p?void 0:p.title)||"",h=r.description||(null===p||void 0===p?void 0:p.description)||"",w=c.Children.toArray(t).filter((function(e){var t;return!!(null===(t=e.props)||void 0===t?void 0:t.mdxType)&&["h1","h2","h3","Challenges","Recipes","Recap"].includes(e.props.mdxType)})).map((function(e){var t,r;return"Challenges"===e.props.mdxType?{url:"#challenges",depth:0,text:"Challenges"}:"Recipes"===e.props.mdxType?{url:"#recipes",depth:0,text:"Recipes"}:"Recap"===e.props.mdxType?{url:"#recap",depth:0,text:"Recap"}:{url:"#"+e.props.id,depth:null!==(r=(null===(t=e.props)||void 0===t?void 0:t.mdxType)&&parseInt(e.props.mdxType.replace("h",""),0))&&void 0!==r?r:0,text:e.props.children}}));w.length>0&&w.unshift({depth:1,text:"Overview",url:"#"}),p||console.error("This page was not added to one of the sidebar JSON files.");var y="/"===(null===p||void 0===p?void 0:p.path),b=["Sandpack","APIAnatomy","FullWidth","Illustration","IllustrationBlock","Challenges","Recipes"],k=[],N=[];return c.Children.forEach(t,(function(e,t){null!=e&&("object"===typeof e&&b.includes(e.props.mdxType)?(o(t),N.push(e)):k.push(e))})),o("last"),(0,n.jsxs)("article",{className:"h-full mx-auto relative w-full min-w-0 flex flex-col",children:[(0,n.jsxs)("div",{className:"lg:pt-0 pt-20 pl-0 lg:pl-80 2xl:px-80 flex flex-col flex-grow",children:[(0,n.jsx)(v.p,{title:x}),!y&&(0,n.jsx)(f,{title:x,description:h,tags:null===p||void 0===p?void 0:p.tags}),(0,n.jsx)("div",{className:"px-5 sm:px-12",children:(0,n.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,n.jsx)(l.Zo,{components:i.t,children:N})})}),(0,n.jsx)("div",{className:"px-5 sm:px-12 mt-auto",children:(0,n.jsx)(a.h,{route:p,nextRoute:u,prevRoute:m})})]}),(0,n.jsx)("div",{className:"w-full lg:max-w-xs hidden 2xl:block",children:!y&&w.length>0&&(0,n.jsx)(g.o,{headings:w})})]})}},4684:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});r(7294);var n=r(3905),l=r(9027);function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i,s=(i="Sandpack",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",Object.assign({},e))}),o={},c=(0,l.Z)({title:"Slider",layout:"API"});function d(e){var t=e.components,r=a(e,["components"]);return(0,n.kt)(c,Object.assign({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s,{mdxType:"Sandpack"},(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-js",metastring:"App.js active","App.js":!0,active:!0}),'import { Slider } from \'@reactunity/material\';\nimport \'@reactunity/material/styles\';\n\nexport default function App() {\n  return <scroll class="main">\n    <Slider allowScroll direction="horizontal" mode="normal" max={100} />\n    <Slider allowScroll direction="horizontal" mode="diff" max={100} />\n    <Slider allowScroll direction="horizontal-reverse" mode="normal" max={100} />\n    <Slider allowScroll direction="horizontal-reverse" mode="diff" max={100} />\n\n    <view style={{ flexDirection: \'row\' }}>\n      <Slider allowScroll direction="vertical" mode="normal" max={100} step={20} />\n      <Slider allowScroll direction="vertical" mode="diff" max={100} step={20} />\n      <Slider allowScroll direction="vertical-reverse" mode="normal" max={100} step={20} />\n      <Slider allowScroll direction="vertical-reverse" mode="diff" max={100} step={20} />\n    </view>\n  </scroll>;\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-css",metastring:"style.css","style.css":!0}),".main > * {\n  margin: 10px 20px;\n}\n"))))}d.isMDXComponent=!0}},function(e){e.O(0,[3033,5762,4051,2874,6671,8617,9774,2888,179],(function(){return t=8205,e(e.s=t);var t}));var t=e.O();_N_E=t}]);