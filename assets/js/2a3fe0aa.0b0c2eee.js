"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[853739],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(u,".").concat(f)]||m[f]||l[f]||i;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},742909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(487462),o=(r(667294),r(603905));const i={sidebar_label:"LaunchOptions.timeout"},a="LaunchOptions.timeout property",p={unversionedId:"api/puppeteer.launchoptions.timeout",id:"version-15.3.1/api/puppeteer.launchoptions.timeout",title:"LaunchOptions.timeout property",description:"Maximum time in milliseconds to wait for the browser to start. Pass 0 to disable the timeout.",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.launchoptions.timeout.md",sourceDirName:"api",slug:"/api/puppeteer.launchoptions.timeout",permalink:"/15.3.1/api/puppeteer.launchoptions.timeout",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"LaunchOptions.timeout"},sidebar:"sidebar",previous:{title:"LaunchOptions.product",permalink:"/15.3.1/api/puppeteer.launchoptions.product"},next:{title:"LaunchOptions.waitForInitialPage",permalink:"/15.3.1/api/puppeteer.launchoptions.waitforinitialpage"}},u={},c=[],s={toc:c};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"launchoptionstimeout-property"},"LaunchOptions.timeout property"),(0,o.kt)("p",null,"Maximum time in milliseconds to wait for the browser to start. Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to disable the timeout."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface LaunchOptions {\n  timeout?: number;\n}\n")))}l.isMDXComponent=!0}}]);