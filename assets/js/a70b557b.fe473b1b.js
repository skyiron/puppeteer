"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[851609],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),f=o,m=b["".concat(c,".").concat(f)]||b[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},674992:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(487462),o=(r(667294),r(603905));const i={sidebar_label:"BrowserContext.isIncognito"},a="BrowserContext.isIncognito() method",s={unversionedId:"api/puppeteer.browsercontext.isincognito",id:"version-15.3.0/api/puppeteer.browsercontext.isincognito",title:"BrowserContext.isIncognito() method",description:"Returns whether BrowserContext is incognito. The default browser context is the only non-incognito browser context.",source:"@site/versioned_docs/version-15.3.0/api/puppeteer.browsercontext.isincognito.md",sourceDirName:"api",slug:"/api/puppeteer.browsercontext.isincognito",permalink:"/15.3.0/api/puppeteer.browsercontext.isincognito",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"BrowserContext.isIncognito"},sidebar:"sidebar",previous:{title:"BrowserContext.close",permalink:"/15.3.0/api/puppeteer.browsercontext.close"},next:{title:"BrowserContext.newPage",permalink:"/15.3.0/api/puppeteer.browsercontext.newpage"}},c={},p=[{value:"Remarks",id:"remarks",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browsercontextisincognito-method"},"BrowserContext.isIncognito() method"),(0,o.kt)("p",null,"Returns whether BrowserContext is incognito. The default browser context is the only non-incognito browser context."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class BrowserContext {\n  isIncognito(): boolean;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"boolean"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The default browser context cannot be closed."))}u.isMDXComponent=!0}}]);