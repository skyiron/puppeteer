"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44012],{603905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,p(p({ref:t},l),{},{components:n})):r.createElement(f,p({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var u=2;u<i;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},503765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(487462),o=(n(667294),n(603905));const i={sidebar_label:"HTTPRequest.interceptResolutionState"},p="HTTPRequest.interceptResolutionState() method",a={unversionedId:"api/puppeteer.httprequest.interceptresolutionstate",id:"version-15.3.0/api/puppeteer.httprequest.interceptresolutionstate",title:"HTTPRequest.interceptResolutionState() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.0/api/puppeteer.httprequest.interceptresolutionstate.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.interceptresolutionstate",permalink:"/15.3.0/api/puppeteer.httprequest.interceptresolutionstate",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"HTTPRequest.interceptResolutionState"},sidebar:"sidebar",previous:{title:"HTTPRequest.initiator",permalink:"/15.3.0/api/puppeteer.httprequest.initiator"},next:{title:"HTTPRequest.isInterceptResolutionHandled",permalink:"/15.3.0/api/puppeteer.httprequest.isinterceptresolutionhandled"}},s={},u=[],l={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"httprequestinterceptresolutionstate-method"},"HTTPRequest.interceptResolutionState() method"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPRequest {\n  interceptResolutionState(): InterceptResolutionState;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/15.3.0/api/puppeteer.interceptresolutionstate"},"InterceptResolutionState")),(0,o.kt)("p",null,"An InterceptResolutionState object describing the current resolution action and priority."),(0,o.kt)("p",null,"InterceptResolutionState contains: action: InterceptResolutionAction priority?: number"),(0,o.kt)("p",null,"InterceptResolutionAction is one of: ",(0,o.kt)("inlineCode",{parentName:"p"},"abort"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"respond"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"continue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"disabled"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"none"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"already-handled"),"."))}c.isMDXComponent=!0}}]);