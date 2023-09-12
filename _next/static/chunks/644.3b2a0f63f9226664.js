"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[644],{8644:function(t,e,i){i.r(e),i.d(e,{closeLintPanel:function(){return S},diagnosticCount:function(){return L},forceLinting:function(){return $},lintGutter:function(){return W},lintKeymap:function(){return D},linter:function(){return E},nextDiagnostic:function(){return P},openLintPanel:function(){return B},setDiagnostics:function(){return y},setDiagnosticsEffect:function(){return k}});var o=i(7421),s=i(8120),n=i(3599);const r=s.r$.define({combine(t){let e,i;for(let o of t)e=e||o.topContainer,i=i||o.bottomContainer;return{topContainer:e,bottomContainer:i}}});const l=o.lg.fromClass(class{constructor(t){this.input=t.state.facet(m),this.specs=this.input.filter((t=>t)),this.panels=this.specs.map((e=>e(t)));let e=t.state.facet(r);this.top=new a(t,!0,e.topContainer),this.bottom=new a(t,!1,e.bottomContainer),this.top.sync(this.panels.filter((t=>t.top))),this.bottom.sync(this.panels.filter((t=>!t.top)));for(let i of this.panels)i.dom.classList.add("cm-panel"),i.mount&&i.mount()}update(t){let e=t.state.facet(r);this.top.container!=e.topContainer&&(this.top.sync([]),this.top=new a(t.view,!0,e.topContainer)),this.bottom.container!=e.bottomContainer&&(this.bottom.sync([]),this.bottom=new a(t.view,!1,e.bottomContainer)),this.top.syncClasses(),this.bottom.syncClasses();let i=t.state.facet(m);if(i!=this.input){let e=i.filter((t=>t)),o=[],s=[],n=[],r=[];for(let i of e){let e,l=this.specs.indexOf(i);l<0?(e=i(t.view),r.push(e)):(e=this.panels[l],e.update&&e.update(t)),o.push(e),(e.top?s:n).push(e)}this.specs=e,this.panels=o,this.top.sync(s),this.bottom.sync(n);for(let t of r)t.dom.classList.add("cm-panel"),t.mount&&t.mount()}else for(let o of this.panels)o.update&&o.update(t)}destroy(){this.top.sync([]),this.bottom.sync([])}},{provide:o.BF.scrollMargins.from((t=>({top:t.top.scrollMargin(),bottom:t.bottom.scrollMargin()})))});class a{constructor(t,e,i){this.view=t,this.top=e,this.container=i,this.dom=void 0,this.classes="",this.panels=[],this.syncClasses()}sync(t){for(let e of this.panels)e.destroy&&t.indexOf(e)<0&&e.destroy();this.panels=t,this.syncDOM()}syncDOM(){if(0==this.panels.length)return void(this.dom&&(this.dom.remove(),this.dom=void 0));if(!this.dom){this.dom=document.createElement("div"),this.dom.className=this.top?"cm-panels cm-panels-top":"cm-panels cm-panels-bottom",this.dom.style[this.top?"top":"bottom"]="0";let t=this.container||this.view.dom;t.insertBefore(this.dom,this.top?t.firstChild:null)}let t=this.dom.firstChild;for(let e of this.panels)if(e.dom.parentNode==this.dom){for(;t!=e.dom;)t=c(t);t=t.nextSibling}else this.dom.insertBefore(e.dom,t);for(;t;)t=c(t)}scrollMargin(){return!this.dom||this.container?0:Math.max(0,this.top?this.dom.getBoundingClientRect().bottom-Math.max(0,this.view.scrollDOM.getBoundingClientRect().top):Math.min(innerHeight,this.view.scrollDOM.getBoundingClientRect().bottom)-this.dom.getBoundingClientRect().top)}syncClasses(){if(this.container&&this.classes!=this.view.themeClasses){for(let t of this.classes.split(" "))t&&this.container.classList.remove(t);for(let t of(this.classes=this.view.themeClasses).split(" "))t&&this.container.classList.add(t)}}}function c(t){let e=t.nextSibling;return t.remove(),e}const d=o.tk.baseTheme({".cm-panels":{boxSizing:"border-box",position:"sticky",left:0,right:0},"&light .cm-panels":{backgroundColor:"#f5f5f5",color:"black"},"&light .cm-panels-top":{borderBottom:"1px solid #ddd"},"&light .cm-panels-bottom":{borderTop:"1px solid #ddd"},"&dark .cm-panels":{backgroundColor:"#333338",color:"white"}}),m=s.r$.define({enables:[l,d]});var h=i(9737),f=i(382);function u(){var t=arguments[0];"string"==typeof t&&(t=document.createElement(t));var e=1,i=arguments[1];if(i&&"object"==typeof i&&null==i.nodeType&&!Array.isArray(i)){for(var o in i)if(Object.prototype.hasOwnProperty.call(i,o)){var s=i[o];"string"==typeof s?t.setAttribute(o,s):null!=s&&(t[o]=s)}e++}for(;e<arguments.length;e++)p(t,arguments[e]);return t}function p(t,e){if("string"==typeof e)t.appendChild(document.createTextNode(e));else if(null==e);else if(null!=e.nodeType)t.appendChild(e);else{if(!Array.isArray(e))throw new RangeError("Unsupported child node: "+e);for(var i=0;i<e.length;i++)p(t,e[i])}}class g{constructor(t,e,i){this.from=t,this.to=e,this.diagnostic=i}}class v{constructor(t,e,i){this.diagnostics=t,this.panel=e,this.selected=i}static init(t,e,i){let s=o.p.set(t.map((t=>t.from==t.to||t.from==t.to-1&&i.doc.lineAt(t.from).to==t.from?o.p.widget({widget:new _(t),diagnostic:t}).range(t.from):o.p.mark({attributes:{class:"cm-lintRange cm-lintRange-"+t.severity},diagnostic:t}).range(t.from,t.to))),!0);return new v(s,e,b(s))}}function b(t,e=null,i=0){let o=null;return t.between(i,1e9,((t,i,{spec:s})=>{if(!e||s.diagnostic==e)return o=new g(t,i,s.diagnostic),!1})),o}function w(t,e){return t.field(T,!1)?e:e.concat(s.Py.appendConfig.of([T,o.tk.decorations.compute([T],(t=>{let{selected:e,panel:i}=t.field(T);return e&&i&&e.from!=e.to?o.p.set([R.range(e.from,e.to)]):o.p.none})),(0,n.bF)(A),q]))}function y(t,e){return{effects:w(t,[k.of(e)])}}const k=s.Py.define(),C=s.Py.define(),x=s.Py.define(),T=s.QQ.define({create:()=>new v(o.p.none,null,null),update(t,e){if(e.docChanged){let i=t.diagnostics.map(e.changes),o=null;if(t.selected){let s=e.changes.mapPos(t.selected.from,1);o=b(i,t.selected.diagnostic,s)||b(i,null,s)}t=new v(i,t.panel,o)}for(let i of e.effects)i.is(k)?t=v.init(i.value,t.panel,e.state):i.is(C)?t=new v(t.diagnostics,i.value?H.open:null,t.selected):i.is(x)&&(t=new v(t.diagnostics,t.panel,i.value));return t},provide:t=>[m.from(t,(t=>t.panel)),o.tk.decorations.from(t,(t=>t.diagnostics))]});function L(t){let e=t.field(T,!1);return e?e.diagnostics.size:0}const R=o.p.mark({class:"cm-lintRange cm-lintRange-active"});function A(t,e,i){let{diagnostics:o}=t.state.field(T),s=[],n=2e8,r=0;return o.between(e-(i<0?1:0),e+(i>0?1:0),((t,o,{spec:l})=>{e>=t&&e<=o&&(t==o||(e>t||i>0)&&(e<o||i<0))&&(s.push(l.diagnostic),n=Math.min(t,n),r=Math.max(o,r))})),s.length?{pos:n,end:r,above:t.state.doc.lineAt(n).to<r,create:()=>({dom:M(t,s)})}:null}function M(t,e){return u("ul",{class:"cm-tooltip-lint"},e.map((e=>j(t,e,!1))))}const B=t=>{let e=t.state.field(T,!1);e&&e.panel||t.dispatch({effects:w(t.state,[C.of(!0)])});let i=function(t,e){let i=t.plugin(l),o=i?i.specs.indexOf(e):-1;return o>-1?i.panels[o]:null}(t,H.open);return i&&i.dom.querySelector(".cm-panel-lint ul").focus(),!0},S=t=>{let e=t.state.field(T,!1);return!(!e||!e.panel)&&(t.dispatch({effects:C.of(!1)}),!0)},P=t=>{let e=t.state.field(T,!1);if(!e)return!1;let i=t.state.selection.main,o=e.diagnostics.iter(i.to+1);return!(!o.value&&(o=e.diagnostics.iter(0),!o.value||o.from==i.from&&o.to==i.to))&&(t.dispatch({selection:{anchor:o.from,head:o.to},scrollIntoView:!0}),!0)},D=[{key:"Mod-Shift-m",run:B},{key:"F8",run:P}],O=o.lg.fromClass(class{constructor(t){this.view=t,this.timeout=-1,this.set=!0;let{delay:e}=t.state.facet(I);this.lintTime=Date.now()+e,this.run=this.run.bind(this),this.timeout=setTimeout(this.run,e)}run(){let t=Date.now();if(t<this.lintTime-10)setTimeout(this.run,this.lintTime-t);else{this.set=!1;let{state:t}=this.view,{sources:e}=t.facet(I);Promise.all(e.map((t=>Promise.resolve(t(this.view))))).then((e=>{let i=e.reduce(((t,e)=>t.concat(e)));this.view.state.doc==t.doc&&this.view.dispatch(y(this.view.state,i))}),(t=>{(0,o.OO)(this.view.state,t)}))}}update(t){let e=t.state.facet(I);(t.docChanged||e!=t.startState.facet(I))&&(this.lintTime=Date.now()+e.delay,this.set||(this.set=!0,this.timeout=setTimeout(this.run,e.delay)))}force(){this.set&&(this.lintTime=Date.now(),this.run())}destroy(){clearTimeout(this.timeout)}}),I=s.r$.define({combine:t=>({sources:t.map((t=>t.source)),delay:t.length?Math.max(...t.map((t=>t.delay))):750}),enables:O});function E(t,e={}){var i;return I.of({source:t,delay:null!==(i=e.delay)&&void 0!==i?i:750})}function $(t){let e=t.plugin(O);e&&e.force()}function N(t){let e=[];if(t)t:for(let{name:i}of t){for(let t=0;t<i.length;t++){let o=i[t];if(/[a-zA-Z]/.test(o)&&!e.some((t=>t.toLowerCase()==o.toLowerCase()))){e.push(o);continue t}}e.push("")}return e}function j(t,e,i){var o;let s=i?N(e.actions):[];return u("li",{class:"cm-diagnostic cm-diagnostic-"+e.severity},u("span",{class:"cm-diagnosticText"},e.message),null===(o=e.actions)||void 0===o?void 0:o.map(((i,o)=>{let n=o=>{o.preventDefault();let s=b(t.state.field(T).diagnostics,e);s&&i.apply(t,s.from,s.to)},{name:r}=i,l=s[o]?r.indexOf(s[o]):-1,a=l<0?r:[r.slice(0,l),u("u",r.slice(l,l+1)),r.slice(l+1)];return u("button",{type:"button",class:"cm-diagnosticAction",onclick:n,onmousedown:n,"aria-label":` Action: ${r}${l<0?"":` (access key "${s[o]})"`}.`},a)})),e.source&&u("div",{class:"cm-diagnosticSource"},e.source))}class _ extends o.l9{constructor(t){super(),this.diagnostic=t}eq(t){return t.diagnostic==this.diagnostic}toDOM(){return u("span",{class:"cm-lintPoint cm-lintPoint-"+this.diagnostic.severity})}}class Q{constructor(t,e){this.diagnostic=e,this.id="item_"+Math.floor(4294967295*Math.random()).toString(16),this.dom=j(t,e,!0),this.dom.id=this.id,this.dom.setAttribute("role","option")}}class H{constructor(t){this.view=t,this.items=[];this.list=u("ul",{tabIndex:0,role:"listbox","aria-label":this.view.state.phrase("Diagnostics"),onkeydown:e=>{if(27==e.keyCode)S(this.view),this.view.focus();else if(38==e.keyCode||33==e.keyCode)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(40==e.keyCode||34==e.keyCode)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(36==e.keyCode)this.moveSelection(0);else if(35==e.keyCode)this.moveSelection(this.items.length-1);else if(13==e.keyCode)this.view.focus();else{if(!(e.keyCode>=65&&e.keyCode<=90&&this.selectedIndex>=0))return;{let{diagnostic:i}=this.items[this.selectedIndex],o=N(i.actions);for(let s=0;s<o.length;s++)if(o[s].toUpperCase().charCodeAt(0)==e.keyCode){let e=b(this.view.state.field(T).diagnostics,i);e&&i.actions[s].apply(t,e.from,e.to)}}}e.preventDefault()},onclick:t=>{for(let e=0;e<this.items.length;e++)this.items[e].dom.contains(t.target)&&this.moveSelection(e)}}),this.dom=u("div",{class:"cm-panel-lint"},this.list,u("button",{type:"button",name:"close","aria-label":this.view.state.phrase("close"),onclick:()=>S(this.view)},"\xd7")),this.update()}get selectedIndex(){let t=this.view.state.field(T).selected;if(!t)return-1;for(let e=0;e<this.items.length;e++)if(this.items[e].diagnostic==t.diagnostic)return e;return-1}update(){let{diagnostics:t,selected:e}=this.view.state.field(T),i=0,o=!1,s=null;for(t.between(0,this.view.state.doc.length,((t,n,{spec:r})=>{let l,a=-1;for(let e=i;e<this.items.length;e++)if(this.items[e].diagnostic==r.diagnostic){a=e;break}a<0?(l=new Q(this.view,r.diagnostic),this.items.splice(i,0,l),o=!0):(l=this.items[a],a>i&&(this.items.splice(i,a-i),o=!0)),e&&l.diagnostic==e.diagnostic?l.dom.hasAttribute("aria-selected")||(l.dom.setAttribute("aria-selected","true"),s=l):l.dom.hasAttribute("aria-selected")&&l.dom.removeAttribute("aria-selected"),i++}));i<this.items.length&&!(1==this.items.length&&this.items[0].diagnostic.from<0);)o=!0,this.items.pop();0==this.items.length&&(this.items.push(new Q(this.view,{from:-1,to:-1,severity:"info",message:this.view.state.phrase("No diagnostics")})),o=!0),s?(this.list.setAttribute("aria-activedescendant",s.id),this.view.requestMeasure({key:this,read:()=>({sel:s.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:t,panel:e})=>{t.top<e.top?this.list.scrollTop-=e.top-t.top:t.bottom>e.bottom&&(this.list.scrollTop+=t.bottom-e.bottom)}})):this.selectedIndex<0&&this.list.removeAttribute("aria-activedescendant"),o&&this.sync()}sync(){let t=this.list.firstChild;function e(){let e=t;t=e.nextSibling,e.remove()}for(let i of this.items)if(i.dom.parentNode==this.list){for(;t!=i.dom;)e();t=i.dom.nextSibling}else this.list.insertBefore(i.dom,t);for(;t;)e()}moveSelection(t){if(this.selectedIndex<0)return;let e=b(this.view.state.field(T).diagnostics,this.items[t].diagnostic);e&&this.view.dispatch({selection:{anchor:e.from,head:e.to},scrollIntoView:!0,effects:x.of(e)})}static open(t){return new H(t)}}function z(t,e='viewBox="0 0 40 40"'){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(t)}</svg>')`}function X(t){return z(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${t}" fill="none" stroke-width=".7"/>`,'width="6" height="3"')}const q=o.tk.baseTheme({".cm-diagnostic":{padding:"3px 6px 3px 8px",marginLeft:"-1px",display:"block",whiteSpace:"pre-wrap"},".cm-diagnostic-error":{borderLeft:"5px solid #d11"},".cm-diagnostic-warning":{borderLeft:"5px solid orange"},".cm-diagnostic-info":{borderLeft:"5px solid #999"},".cm-diagnosticAction":{font:"inherit",border:"none",padding:"2px 4px",backgroundColor:"#444",color:"white",borderRadius:"3px",marginLeft:"8px"},".cm-diagnosticSource":{fontSize:"70%",opacity:.7},".cm-lintRange":{backgroundPosition:"left bottom",backgroundRepeat:"repeat-x",paddingBottom:"0.7px"},".cm-lintRange-error":{backgroundImage:X("#d11")},".cm-lintRange-warning":{backgroundImage:X("orange")},".cm-lintRange-info":{backgroundImage:X("#999")},".cm-lintRange-active":{backgroundColor:"#ffdd9980"},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:"relative","&:after":{content:'""',position:"absolute",bottom:0,left:"-2px",borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"4px solid #d11"}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:"orange"}},".cm-lintPoint-info":{"&:after":{borderBottomColor:"#999"}},".cm-panel.cm-panel-lint":{position:"relative","& ul":{maxHeight:"100px",overflowY:"auto","& [aria-selected]":{backgroundColor:"#ddd","& u":{textDecoration:"underline"}},"&:focus [aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"},"& u":{textDecoration:"none"},padding:0,margin:0},"& [name=close]":{position:"absolute",top:"0",right:"2px",background:"inherit",border:"none",font:"inherit",padding:0,margin:0}}});class F extends h.SJ{constructor(t){super(),this.diagnostics=t,this.severity=t.reduce(((t,e)=>{let i=e.severity;return"error"==i||"warning"==i&&"info"==t?i:t}),"info")}toDOM(t){let e=document.createElement("div");return e.className="cm-lint-marker cm-lint-marker-"+this.severity,e.onmouseover=()=>function(t,e,i){function o(){let o=t.elementAtHeight(e.getBoundingClientRect().top+5-t.documentTop);t.coordsAtPos(o.from)&&t.dispatch({effects:J.of({pos:o.from,above:!1,create:()=>({dom:M(t,i),getCoords:()=>e.getBoundingClientRect()})})}),e.onmouseout=e.onmousemove=null,function(t,e){let i=o=>{let s=e.getBoundingClientRect();if(!(o.clientX>s.left-10&&o.clientX<s.right+10&&o.clientY>s.top-10&&o.clientY<s.bottom+10)){for(let t=o.target;t;t=t.parentNode)if(1==t.nodeType&&t.classList.contains("cm-tooltip-lint"))return;window.removeEventListener("mousemove",i),t.state.field(V)&&t.dispatch({effects:J.of(null)})}};window.addEventListener("mousemove",i)}(t,e)}let{hoverTime:s}=t.state.facet(K),n=setTimeout(o,s);e.onmouseout=()=>{clearTimeout(n),e.onmouseout=e.onmousemove=null},e.onmousemove=()=>{clearTimeout(n),n=setTimeout(o,s)}}(t,e,this.diagnostics),e}}function U(t,e){let i=Object.create(null);for(let s of e){let e=t.lineAt(s.from);(i[e.from]||(i[e.from]=[])).push(s)}let o=[];for(let s in i)o.push(new F(i[s]).range(+s));return f.Xs.of(o,!0)}const Y=(0,h.v5)({class:"cm-gutter-lint",markers:t=>t.state.field(Z)}),Z=s.QQ.define({create:()=>f.Xs.empty,update(t,e){t=t.map(e.changes);for(let i of e.effects)i.is(k)&&(t=U(e.state.doc,i.value));return t}}),J=s.Py.define(),V=s.QQ.define({create:()=>null,update:(t,e)=>(t&&e.docChanged&&(t=Object.assign(Object.assign({},t),{pos:e.changes.mapPos(t.pos)})),e.effects.reduce(((t,e)=>e.is(J)?e.value:t),t)),provide:t=>n.hJ.from(t)}),G=o.tk.baseTheme({".cm-gutter-lint":{width:"1.4em","& .cm-gutterElement":{padding:".2em"}},".cm-lint-marker":{width:"1em",height:"1em"},".cm-lint-marker-info":{content:z('<path fill="#aaf" stroke="#77e" stroke-width="6" stroke-linejoin="round" d="M5 5L35 5L35 35L5 35Z"/>')},".cm-lint-marker-warning":{content:z('<path fill="#fe8" stroke="#fd7" stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z"/>')},".cm-lint-marker-error:before":{content:z('<circle cx="20" cy="20" r="15" fill="#f87" stroke="#f43" stroke-width="6"/>')}}),K=s.r$.define({combine:t=>(0,s.BO)(t,{hoverTime:300})});function W(t={}){return[K.of(t),Z,Y,G,V]}}}]);