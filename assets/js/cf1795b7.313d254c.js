"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[889462],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,d=f["".concat(u,".").concat(m)]||f[m]||c[m]||p;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},902172:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var n=r(487462),a=(r(667294),r(603905));const p={sidebar_label:"HTTPRequest.frame"},o="HTTPRequest.frame() method",i={unversionedId:"api/puppeteer.httprequest.frame",id:"version-15.3.1/api/puppeteer.httprequest.frame",title:"HTTPRequest.frame() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.httprequest.frame.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.frame",permalink:"/15.3.1/api/puppeteer.httprequest.frame",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"HTTPRequest.frame"},sidebar:"sidebar",previous:{title:"HTTPRequest.finalizeInterceptions",permalink:"/15.3.1/api/puppeteer.httprequest.finalizeinterceptions"},next:{title:"HTTPRequest.headers",permalink:"/15.3.1/api/puppeteer.httprequest.headers"}},u={},s=[],l={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"httprequestframe-method"},"HTTPRequest.frame() method"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPRequest {\n  frame(): Frame | null;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/15.3.1/api/puppeteer.frame"},"Frame")," ","|"," null"),(0,a.kt)("p",null,"the frame that initiated the request, or null if navigating to error pages."))}c.isMDXComponent=!0}}]);