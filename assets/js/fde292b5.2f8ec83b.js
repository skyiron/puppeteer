"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[541448],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(r),f=o,m=b["".concat(c,".").concat(f)]||b[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},767592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=r(487462),o=(r(667294),r(603905));const a={sidebar_label:"WebWorker.executionContext"},i="WebWorker.executionContext() method",p={unversionedId:"api/puppeteer.webworker.executioncontext",id:"version-15.4.1/api/puppeteer.webworker.executioncontext",title:"WebWorker.executionContext() method",description:"Returns the ExecutionContext the WebWorker runs in",source:"@site/versioned_docs/version-15.4.1/api/puppeteer.webworker.executioncontext.md",sourceDirName:"api",slug:"/api/puppeteer.webworker.executioncontext",permalink:"/15.4.1/api/puppeteer.webworker.executioncontext",draft:!1,tags:[],version:"15.4.1",frontMatter:{sidebar_label:"WebWorker.executionContext"},sidebar:"sidebar",previous:{title:"WebWorker.evaluateHandle",permalink:"/15.4.1/api/puppeteer.webworker.evaluatehandle"},next:{title:"WebWorker.url",permalink:"/15.4.1/api/puppeteer.webworker.url"}},c={},u=[],l={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webworkerexecutioncontext-method"},"WebWorker.executionContext() method"),(0,o.kt)("p",null,"Returns the ExecutionContext the WebWorker runs in"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class WebWorker {\n  executionContext(): Promise<ExecutionContext>;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/15.4.1/api/puppeteer.executioncontext"},"ExecutionContext"),">"),(0,o.kt)("p",null,"The ExecutionContext the web worker runs in."))}s.isMDXComponent=!0}}]);