(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9114],{7052:function(e,t,n){"use strict";n.d(t,{D:function(){return r}});var o=n(7294);function r(e){var t=e.isOpen,n=e.onOpen,r=e.onClose,i=e.onInput,l=e.searchButtonRef;o.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?r():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),l&&l.current===document.activeElement&&i&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&i(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,r,i,l])}},8509:function(e,t,n){"use strict";n.d(t,{Qp:function(){return h},tG:function(){return g},tP:function(){return v}});var o=!1;if("undefined"!==typeof window){var r={get passive(){o=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var i="undefined"!==typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),l=[],u=!1,c=-1,a=void 0,s=void 0,f=function(e){return l.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},d=function(e){var t=e||window.event;return!!f(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},p=function(){void 0!==s&&(document.body.style.paddingRight=s,s=void 0),void 0!==a&&(document.body.style.overflow=a,a=void 0)},h=function(e,t){if(e){if(!l.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};l=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(l),[n]),i?(e.ontouchstart=function(e){1===e.targetTouches.length&&(c=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-c;!f(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?d(e):e.stopPropagation())}(t,e)},u||(document.addEventListener("touchmove",d,o?{passive:!1}:void 0),u=!0)):function(e){if(void 0===s){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;t&&n>0&&(s=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===a&&(a=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},v=function(){i?(l.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),u&&(document.removeEventListener("touchmove",d,o?{passive:!1}:void 0),u=!1),c=-1):p(),l=[]},g=function(e){e?(l=l.filter((function(t){return t.targetElement!==e})),i?(e.ontouchstart=null,e.ontouchmove=null,u&&0===l.length&&(document.removeEventListener("touchmove",d,o?{passive:!1}:void 0),u=!1)):l.length||p()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},3454:function(e,t,n){"use strict";var o,r;e.exports=(null==(o=n.g.process)?void 0:o.env)&&"object"===typeof(null==(r=n.g.process)?void 0:r.env)?n.g.process:n(7663)},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=n(7294))&&o.__esModule?o:{default:o},i=n(6273),l=n(2725),u=n(3462),c=n(1018),a=n(7190),s=n(1210),f=n(8684);const d="undefined"!==typeof r.default.useTransition,p={};function h(e,t,n,o){if(!e)return;if(!i.isLocalURL(t))return;e.prefetch(t,n,o).catch((e=>{0}));const r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;p[t+"%"+n+(r?"%"+r:"")]=!0}var v=r.default.forwardRef((function(e,t){let n;const{href:o,as:v,children:g,prefetch:m,passHref:y,replace:b,shallow:w,scroll:E,locale:x,onClick:C,onMouseEnter:O,legacyBehavior:T=!0!==Boolean(!1)}=e,k=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=g,!T||"string"!==typeof n&&"number"!==typeof n||(n=r.default.createElement("a",null,n));const j=!1!==m,[,M]=d?r.default.useTransition():[];let L=r.default.useContext(u.RouterContext);const S=r.default.useContext(c.AppRouterContext);S&&(L=S);const{href:P,as:R}=r.default.useMemo((()=>{const[e,t]=i.resolveHref(L,o,!0);return{href:e,as:v?i.resolveHref(L,v):t||e}}),[L,o,v]),_=r.default.useRef(P),D=r.default.useRef(R);let I;T&&(I=r.default.Children.only(n));const A=T?I&&"object"===typeof I&&I.ref:t,[H,W,B]=a.useIntersection({rootMargin:"200px"}),K=r.default.useCallback((e=>{D.current===R&&_.current===P||(B(),D.current=R,_.current=P),H(e),A&&("function"===typeof A?A(e):"object"===typeof A&&(A.current=e))}),[R,A,P,B,H]);r.default.useEffect((()=>{const e=W&&j&&i.isLocalURL(P),t="undefined"!==typeof x?x:L&&L.locale,n=p[P+"%"+R+(t?"%"+t:"")];e&&!n&&h(L,P,R,{locale:t})}),[R,P,W,x,j,L]);const N={ref:K,onClick:e=>{T||"function"!==typeof C||C(e),T&&I.props&&"function"===typeof I.props.onClick&&I.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,l,u,c,a){const{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){const{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(n)))return;e.preventDefault();const f=()=>{t[r?"replace":"push"](n,o,{shallow:l,locale:c,scroll:u})};a?a(f):f()}(e,L,P,R,b,w,E,x,S?M:void 0)},onMouseEnter:e=>{T||"function"!==typeof O||O(e),T&&I.props&&"function"===typeof I.props.onMouseEnter&&I.props.onMouseEnter(e),i.isLocalURL(P)&&h(L,P,R,{priority:!0})}};if(!T||y||"a"===I.type&&!("href"in I.props)){const e="undefined"!==typeof x?x:L&&L.locale,t=L&&L.isLocaleDomain&&s.getDomainLocale(R,e,L.locales,L.domainLocales);N.href=t||f.addBasePath(l.addLocale(R,e,L&&L.defaultLocale))}return T?r.default.cloneElement(I,N):r.default.createElement("a",Object.assign({},k,N),n)}));t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:c}=e;const a=c||!i,s=o.useRef(),[f,d]=o.useState(!1),[p,h]=o.useState(null);o.useEffect((()=>{if(i){if(s.current&&(s.current(),s.current=void 0),a||f)return;return p&&p.tagName&&(s.current=function(e,t,n){const{id:o,observer:r,elements:i}=function(e){const t={root:e.root||null,margin:e.rootMargin||""},n=u.find((e=>e.root===t.root&&e.margin===t.margin));let o;if(n&&(o=l.get(n),o))return o;const r=new Map,i=new IntersectionObserver((e=>{e.forEach((e=>{const t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o={id:t,observer:i,elements:r},u.push(t),l.set(t,o),o}(n);return i.set(e,t),r.observe(e),function(){if(i.delete(e),r.unobserve(e),0===i.size){r.disconnect(),l.delete(o);const e=u.findIndex((e=>e.root===o.root&&e.margin===o.margin));e>-1&&u.splice(e,1)}}}(p,(e=>e&&d(e)),{root:null==t?void 0:t.current,rootMargin:n})),()=>{null==s.current||s.current(),s.current=void 0}}if(!f){const e=r.requestIdleCallback((()=>d(!0)));return()=>r.cancelIdleCallback(e)}}),[p,a,n,t,f]);const v=o.useCallback((()=>{d(!1)}),[]);return[h,f,v]};var o=n(7294),r=n(9311);const i="function"===typeof IntersectionObserver;const l=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.AppRouterContext=void 0;const r=((o=n(7294))&&o.__esModule?o:{default:o}).default.createContext(null);t.AppRouterContext=r},7663:function(e){!function(){var t={308:function(e){var t,n,o=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(o){try{return t.call(null,e,0)}catch(o){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:r}catch(e){t=r}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var u,c=[],a=!1,s=-1;function f(){a&&u&&(a=!1,u.length?c=u.concat(c):s=-1,c.length&&d())}function d(){if(!a){var e=l(f);a=!0;for(var t=c.length;t;){for(u=c,c=[];++s<t;)u&&u[s].run();s=-1,t=c.length}u=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||a||l(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}},l=!0;try{t[e](i,i.exports,o),l=!1}finally{l&&delete n[e]}return i.exports}o.ab="//";var r=o(308);e.exports=r}()},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},75:function(e,t,n){var o=n(3454);(function(){var t,n,r,i,l,u;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof o&&null!==o&&o.hrtime?(e.exports=function(){return(t()-l)/1e6},n=o.hrtime,i=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),u=1e9*o.uptime(),l=i-u):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)},4087:function(e,t,n){for(var o=n(75),r="undefined"===typeof window?n.g:window,i=["moz","webkit"],l="AnimationFrame",u=r["request"+l],c=r["cancel"+l]||r["cancelRequest"+l],a=0;!u&&a<i.length;a++)u=r[i[a]+"Request"+l],c=r[i[a]+"Cancel"+l]||r[i[a]+"CancelRequest"+l];if(!u||!c){var s=0,f=0,d=[];u=function(e){if(0===d.length){var t=o(),n=Math.max(0,16.666666666666668-(t-s));s=n+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(s)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return d.push({handle:++f,callback:e,cancelled:!1}),f},c=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return u.call(r,e)},e.exports.cancel=function(){c.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=u,e.cancelAnimationFrame=c}},704:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var o=n(7294),r=n(3935),i=n(4087),l=n.n(i);var u=function(e,t){};function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t.indexOf(n=i[o])>=0||(r[n]=e[n]);return r}var s=function(){};function f(e){return null!=e&&e.current?e.current.scrollHeight:(u(!0,"useCollapse was not able to find a ref to the collapse element via `getCollapseProps`. Ensure that the element exposes its `ref` prop. If it exposes the ref prop under a different name (like `innerRef`), use the `refKey` property to change it. Example:\n\n{...getCollapseProps({refKey: 'innerRef'})}"),"auto")}var d=function(){var e=arguments;return function(){var t=arguments;return[].slice.call(e).forEach((function(e){return e&&e.apply(void 0,[].slice.call(t))}))}};function p(e,t){if(null!=e)if("function"==typeof e)e(t);else try{e.current=t}catch(n){throw new Error('Cannot assign value "'+t+'" to ref "'+e+'"')}}var h="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,v=!1,g=0,m=function(){return++g},y=["duration","easing","collapseStyles","expandStyles","onExpandStart","onExpandEnd","onCollapseStart","onCollapseEnd","isExpanded","defaultExpanded","hasDisabledAnimation"],b=["disabled","onClick"],w=["style","onTransitionEnd","refKey"];function E(e){var t,n=void 0===e?{}:e,i=n.duration,g=n.easing,E=void 0===g?"cubic-bezier(0.4, 0, 0.2, 1)":g,x=n.collapseStyles,C=void 0===x?{}:x,O=n.expandStyles,T=void 0===O?{}:O,k=n.onExpandStart,j=void 0===k?s:k,M=n.onExpandEnd,L=void 0===M?s:M,S=n.onCollapseStart,P=void 0===S?s:S,R=n.onCollapseEnd,_=void 0===R?s:R,D=n.isExpanded,I=n.defaultExpanded,A=void 0!==I&&I,H=n.hasDisabledAnimation,W=void 0!==H&&H,B=a(n,y),K=function(e,t){var n=(0,o.useState)(t||!1),r=n[0],i=n[1],l=(0,o.useRef)(null!=e),c=l.current?e:r,a=(0,o.useCallback)((function(e){l.current||i(e)}),[]);return(0,o.useEffect)((function(){u(!(l.current&&null==e),"useCollapse is changing from controlled to uncontrolled. useCollapse should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."),u(!(!l.current&&null!=e),"useCollapse is changing from uncontrolled to controlled. useCollapse should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop.")}),[e]),[c,a]}(D,A),N=K[0],q=K[1],U=function(e){var t=v?m():null,n=(0,o.useState)(t),r=n[0],i=n[1];return h((function(){null===r&&i(m())}),[]),(0,o.useEffect)((function(){!1===v&&(v=!0)}),[]),null!=r?String(r):void 0}(),V=(0,o.useRef)(null);t=V,(0,o.useEffect)((function(){}),[t]);var z,Y,Z,X=(B.collapsedHeight||0)+"px",F={display:"0px"===X?"none":"block",height:X,overflow:"hidden"},G=(0,o.useState)(N?{}:F),Q=G[0],J=G[1],$=function(e){(0,r.flushSync)((function(){J(e)}))},ee=function(e){$((function(t){return c({},t,e)}))};function te(e){if(W)return{};var t=i||function(e){if(!e||"string"==typeof e)return 0;var t=e/36;return Math.round(10*(4+15*Math.pow(t,.25)+t/5))}(e);return{transition:"height "+t+"ms "+E}}z=function(){l()(N?function(){j(),ee(c({},T,{willChange:"height",display:"block",overflow:"hidden"})),l()((function(){var e=f(V);ee(c({},te(e),{height:e}))}))}:function(){P();var e=f(V);ee(c({},C,te(e),{willChange:"height",height:e})),l()((function(){ee({height:X,overflow:"hidden"})}))})},Y=[N,X],Z=(0,o.useRef)(!0),(0,o.useEffect)((function(){if(!Z.current)return z();Z.current=!1}),Y);var ne=function(e){if(e.target===V.current&&"height"===e.propertyName)if(N){var t=f(V);t===Q.height?$({}):ee({height:t}),L()}else Q.height===X&&($(F),_())};return{getToggleProps:function(e){var t=void 0===e?{}:e,n=t.disabled,o=void 0!==n&&n,r=t.onClick,i=void 0===r?s:r,l=a(t,b);return c({type:"button",role:"button",id:"react-collapsed-toggle-"+U,"aria-controls":"react-collapsed-panel-"+U,"aria-expanded":N,tabIndex:0,disabled:o},l,{onClick:o?s:d(i,(function(){return q((function(e){return!e}))}))})},getCollapseProps:function(e){var t,n=void 0===e?{}:e,o=n.style,r=void 0===o?{}:o,i=n.onTransitionEnd,l=void 0===i?s:i,u=n.refKey,f=void 0===u?"ref":u,h=a(n,w);return c({id:"react-collapsed-panel-"+U,"aria-hidden":!N},h,((t={})[f]=function(){var e=[].slice.call(arguments);return e.every((function(e){return null==e}))?null:function(t){e.forEach((function(e){p(e,t)}))}}(V,h[f]),t.onTransitionEnd=d(ne,l),t.style=c({boxSizing:"border-box"},r,Q),t))},isExpanded:N,setExpanded:q}}},2615:function(e,t,n){"use strict";function o(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function r(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function i(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return r(n.overflowY,t)||r(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function l(e,t,n,o,r,i,l,u){return i<e&&l>t||i>e&&l<t?0:i<=e&&u<=n||l>=t&&u>=n?i-e-o:l>t&&u<n||i<e&&u>n?l-t+r:0}function u(e,t){var n=window,r=t.scrollMode,u=t.block,c=t.inline,a=t.boundary,s=t.skipOverflowHiddenElements,f="function"==typeof a?a:function(e){return e!==a};if(!o(e))throw new TypeError("Invalid target");for(var d=document.scrollingElement||document.documentElement,p=[],h=e;o(h)&&f(h);){if((h=h.parentElement)===d){p.push(h);break}null!=h&&h===document.body&&i(h)&&!i(document.documentElement)||null!=h&&i(h,s)&&p.push(h)}for(var v=n.visualViewport?n.visualViewport.width:innerWidth,g=n.visualViewport?n.visualViewport.height:innerHeight,m=window.scrollX||pageXOffset,y=window.scrollY||pageYOffset,b=e.getBoundingClientRect(),w=b.height,E=b.width,x=b.top,C=b.right,O=b.bottom,T=b.left,k="start"===u||"nearest"===u?x:"end"===u?O:x+w/2,j="center"===c?T+E/2:"end"===c?C:T,M=[],L=0;L<p.length;L++){var S=p[L],P=S.getBoundingClientRect(),R=P.height,_=P.width,D=P.top,I=P.right,A=P.bottom,H=P.left;if("if-needed"===r&&x>=0&&T>=0&&O<=g&&C<=v&&x>=D&&O<=A&&T>=H&&C<=I)return M;var W=getComputedStyle(S),B=parseInt(W.borderLeftWidth,10),K=parseInt(W.borderTopWidth,10),N=parseInt(W.borderRightWidth,10),q=parseInt(W.borderBottomWidth,10),U=0,V=0,z="offsetWidth"in S?S.offsetWidth-S.clientWidth-B-N:0,Y="offsetHeight"in S?S.offsetHeight-S.clientHeight-K-q:0;if(d===S)U="start"===u?k:"end"===u?k-g:"nearest"===u?l(y,y+g,g,K,q,y+k,y+k+w,w):k-g/2,V="start"===c?j:"center"===c?j-v/2:"end"===c?j-v:l(m,m+v,v,B,N,m+j,m+j+E,E),U=Math.max(0,U+y),V=Math.max(0,V+m);else{U="start"===u?k-D-K:"end"===u?k-A+q+Y:"nearest"===u?l(D,A,R,K,q+Y,k,k+w,w):k-(D+R/2)+Y/2,V="start"===c?j-H-B:"center"===c?j-(H+_/2)+z/2:"end"===c?j-I+N+z:l(H,I,_,B,N+z,j,j+E,E);var Z=S.scrollLeft,X=S.scrollTop;k+=X-(U=Math.max(0,Math.min(X+U,S.scrollHeight-R+Y))),j+=Z-(V=Math.max(0,Math.min(Z+V,S.scrollWidth-_+z)))}M.push({el:S,top:U,left:V})}return M}function c(e){return e===Object(e)&&0!==Object.keys(e).length}n.d(t,{Z:function(){return a}});var a=function(e,t){var n=e.isConnected||e.ownerDocument.documentElement.contains(e);if(c(t)&&"function"===typeof t.behavior)return t.behavior(n?u(e,t):[]);if(n){var o=function(e){return!1===e?{block:"end",inline:"nearest"}:c(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var n="scrollBehavior"in document.body.style;e.forEach((function(e){var o=e.el,r=e.top,i=e.left;o.scroll&&n?o.scroll({top:r,left:i,behavior:t}):(o.scrollTop=r,o.scrollLeft=i)}))}(u(e,o),o.behavior)}}},9396:function(e,t,n){"use strict";function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}n.d(t,{Z:function(){return o}})},9534:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return o}})}}]);