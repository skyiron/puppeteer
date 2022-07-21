"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[715561],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var l=2;l<i;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},926196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(487462),o=(n(667294),n(603905));const i={sidebar_label:"HTTPRequest.interceptResolutionState"},p="HTTPRequest.interceptResolutionState() method",a={unversionedId:"api/puppeteer.httprequest.interceptresolutionstate",id:"api/puppeteer.httprequest.interceptresolutionstate",title:"HTTPRequest.interceptResolutionState() method",description:"Signature:",source:"@site/../docs/api/puppeteer.httprequest.interceptresolutionstate.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.interceptresolutionstate",permalink:"/next/api/puppeteer.httprequest.interceptresolutionstate",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"HTTPRequest.interceptResolutionState"},sidebar:"sidebar",previous:{title:"HTTPRequest.initiator",permalink:"/next/api/puppeteer.httprequest.initiator"},next:{title:"HTTPRequest.isInterceptResolutionHandled",permalink:"/next/api/puppeteer.httprequest.isinterceptresolutionhandled"}},u={},l=[],s={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"httprequestinterceptresolutionstate-method"},"HTTPRequest.interceptResolutionState() method"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPRequest {\n  interceptResolutionState(): InterceptResolutionState;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/next/api/puppeteer.interceptresolutionstate"},"InterceptResolutionState")),(0,o.kt)("p",null,"An InterceptResolutionState object describing the current resolution action and priority."),(0,o.kt)("p",null,"InterceptResolutionState contains: action: InterceptResolutionAction priority?: number"),(0,o.kt)("p",null,"InterceptResolutionAction is one of: ",(0,o.kt)("inlineCode",{parentName:"p"},"abort"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"respond"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"continue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"disabled"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"none"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"already-handled"),"."))}c.isMDXComponent=!0}}]);