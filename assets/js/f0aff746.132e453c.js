"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[284471],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||l[f]||p;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<p;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},494658:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var n=r(487462),a=(r(667294),r(603905));const p={sidebar_label:"HTTPRequest.headers"},o="HTTPRequest.headers() method",s={unversionedId:"api/puppeteer.httprequest.headers",id:"version-15.4.2/api/puppeteer.httprequest.headers",title:"HTTPRequest.headers() method",description:"Signature:",source:"@site/versioned_docs/version-15.4.2/api/puppeteer.httprequest.headers.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.headers",permalink:"/api/puppeteer.httprequest.headers",draft:!1,tags:[],version:"15.4.2",frontMatter:{sidebar_label:"HTTPRequest.headers"},sidebar:"sidebar",previous:{title:"HTTPRequest.frame",permalink:"/api/puppeteer.httprequest.frame"},next:{title:"HTTPRequest.initiator",permalink:"/api/puppeteer.httprequest.initiator"}},i={},u=[],c={toc:u};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"httprequestheaders-method"},"HTTPRequest.headers() method"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPRequest {\n  headers(): Record<string, string>;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Record","<","string, string",">"),(0,a.kt)("p",null,"an object with HTTP headers associated with the request. All header names are lower-case."))}l.isMDXComponent=!0}}]);