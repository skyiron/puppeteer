"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[793824],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(667294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=s(r),m=i,d=f["".concat(u,".").concat(m)]||f[m]||c[m]||o;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},405125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(487462),i=(r(667294),r(603905));const o={sidebar_label:"HTTPRequest.initiator"},a="HTTPRequest.initiator() method",p={unversionedId:"api/puppeteer.httprequest.initiator",id:"version-15.3.2/api/puppeteer.httprequest.initiator",title:"HTTPRequest.initiator() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.2/api/puppeteer.httprequest.initiator.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.initiator",permalink:"/15.3.2/api/puppeteer.httprequest.initiator",draft:!1,tags:[],version:"15.3.2",frontMatter:{sidebar_label:"HTTPRequest.initiator"},sidebar:"sidebar",previous:{title:"HTTPRequest.headers",permalink:"/15.3.2/api/puppeteer.httprequest.headers"},next:{title:"HTTPRequest.interceptResolutionState",permalink:"/15.3.2/api/puppeteer.httprequest.interceptresolutionstate"}},u={},s=[],l={toc:s};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"httprequestinitiator-method"},"HTTPRequest.initiator() method"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPRequest {\n  initiator(): Protocol.Network.Initiator;\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")),(0,i.kt)("p",null,"Protocol.Network.Initiator"),(0,i.kt)("p",null,"the initiator of the request."))}c.isMDXComponent=!0}}]);