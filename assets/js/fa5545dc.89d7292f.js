"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41425],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(667294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=l(r),f=p,d=y["".concat(o,".").concat(f)]||y[f]||c[f]||s;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var s=r.length,a=new Array(s);a[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},356114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(487462),p=(r(667294),r(603905));const s={sidebar_label:"HTTPResponse.securityDetails"},a="HTTPResponse.securityDetails() method",i={unversionedId:"api/puppeteer.httpresponse.securitydetails",id:"version-15.4.2/api/puppeteer.httpresponse.securitydetails",title:"HTTPResponse.securityDetails() method",description:"Signature:",source:"@site/versioned_docs/version-15.4.2/api/puppeteer.httpresponse.securitydetails.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.securitydetails",permalink:"/api/puppeteer.httpresponse.securitydetails",draft:!1,tags:[],version:"15.4.2",frontMatter:{sidebar_label:"HTTPResponse.securityDetails"},sidebar:"sidebar",previous:{title:"HTTPResponse.request",permalink:"/api/puppeteer.httpresponse.request"},next:{title:"HTTPResponse.status",permalink:"/api/puppeteer.httpresponse.status"}},o={},l=[],u={toc:l};function c(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"httpresponsesecuritydetails-method"},"HTTPResponse.securityDetails() method"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPResponse {\n  securityDetails(): SecurityDetails | null;\n}\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/puppeteer.securitydetails"},"SecurityDetails")," ","|"," null"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/puppeteer.securitydetails"},"SecurityDetails")," if the response was received over the secure connection, or ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," otherwise."))}c.isMDXComponent=!0}}]);