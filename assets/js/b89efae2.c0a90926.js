"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[930626],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||p;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<p;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},423135:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var n=r(487462),a=(r(667294),r(603905));const p={sidebar_label:"Page.viewport"},i="Page.viewport() method",o={unversionedId:"api/puppeteer.page.viewport",id:"version-15.4.1/api/puppeteer.page.viewport",title:"Page.viewport() method",description:"Signature:",source:"@site/versioned_docs/version-15.4.1/api/puppeteer.page.viewport.md",sourceDirName:"api",slug:"/api/puppeteer.page.viewport",permalink:"/15.4.1/api/puppeteer.page.viewport",draft:!1,tags:[],version:"15.4.1",frontMatter:{sidebar_label:"Page.viewport"},sidebar:"sidebar",previous:{title:"Page.url",permalink:"/15.4.1/api/puppeteer.page.url"},next:{title:"Page.waitForFileChooser",permalink:"/15.4.1/api/puppeteer.page.waitforfilechooser"}},l={},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pageviewport-method"},"Page.viewport() method"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  viewport(): Viewport | null;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/15.4.1/api/puppeteer.viewport"},"Viewport")," ","|"," null"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"width"),": page's width in pixels")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"height"),": page's height in pixels")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"deviceScalarFactor"),": Specify device scale factor (can be though of as dpr). Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"isMobile"),": Whether the meta viewport tag is taken into account. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"hasTouch"),": Specifies if viewport supports touch events. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"isLandScape"),": Specifies if viewport is in landscape mode. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."))))}s.isMDXComponent=!0}}]);