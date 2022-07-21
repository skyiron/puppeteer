"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[954871],{603905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(a),k=n,d=c["".concat(o,".").concat(k)]||c[k]||u[k]||i;return a?r.createElement(d,p(p({ref:t},s),{},{components:a})):r.createElement(d,p({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var m=2;m<i;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},169512:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=a(487462),n=(a(667294),a(603905));const i={sidebar_label:"Page.metrics"},p="Page.metrics() method",l={unversionedId:"api/puppeteer.page.metrics",id:"api/puppeteer.page.metrics",title:"Page.metrics() method",description:"Signature:",source:"@site/../docs/api/puppeteer.page.metrics.md",sourceDirName:"api",slug:"/api/puppeteer.page.metrics",permalink:"/next/api/puppeteer.page.metrics",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.metrics"},sidebar:"sidebar",previous:{title:"Page.mainFrame",permalink:"/next/api/puppeteer.page.mainframe"},next:{title:"Page.mouse",permalink:"/next/api/puppeteer.page.mouse"}},o={},m=[{value:"Remarks",id:"remarks",level:2}],s={toc:m};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pagemetrics-method"},"Page.metrics() method"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  metrics(): Promise<Metrics>;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/next/api/puppeteer.metrics"},"Metrics"),">"),(0,n.kt)("p",null,"Object containing metrics as key/value pairs."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Timestamp")," : The timestamp when the metrics sample was taken.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Documents")," : Number of documents in the page.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Frames")," : Number of frames in the page.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"JSEventListeners")," : Number of events in the page.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Nodes")," : Number of DOM nodes in the page.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"LayoutCount")," : Total number of full or partial page layout.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"RecalcStyleCount")," : Total number of page style recalculations.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"LayoutDuration")," : Combined durations of all page layouts.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"RecalcStyleDuration")," : Combined duration of all page style recalculations.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"ScriptDuration")," : Combined duration of JavaScript execution.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"TaskDuration")," : Combined duration of all tasks performed by the browser.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"JSHeapUsedSize")," : Used JavaScript heap size.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"JSHeapTotalSize")," : Total JavaScript heap size."))),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"NOTE: All timestamps are in monotonic time: monotonically increasing time in seconds since an arbitrary point in the past."))}u.isMDXComponent=!0}}]);