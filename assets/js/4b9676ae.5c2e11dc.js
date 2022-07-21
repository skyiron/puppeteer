"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[602505],{603905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,w=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(w,a(a({ref:t},l),{},{components:n})):r.createElement(w,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(487462),o=(n(667294),n(603905));const i={sidebar_label:"networkConditions"},a="networkConditions variable",p={unversionedId:"api/puppeteer.networkconditions",id:"version-15.3.0/api/puppeteer.networkconditions",title:"networkConditions variable",description:"A list of network conditions to be used with page.emulateNetworkConditions(networkConditions). Actual list of predefined conditions can be found in src/common/NetworkConditions.ts.",source:"@site/versioned_docs/version-15.3.0/api/puppeteer.networkconditions.md",sourceDirName:"api",slug:"/api/puppeteer.networkconditions",permalink:"/15.3.0/api/puppeteer.networkconditions",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"networkConditions"},sidebar:"sidebar",previous:{title:"launch",permalink:"/15.3.0/api/puppeteer.launch"},next:{title:"registerCustomQueryHandler",permalink:"/15.3.0/api/puppeteer.registercustomqueryhandler"}},s={},c=[{value:"Example",id:"example",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"networkconditions-variable"},"networkConditions variable"),(0,o.kt)("p",null,"A list of network conditions to be used with ",(0,o.kt)("inlineCode",{parentName:"p"},"page.emulateNetworkConditions(networkConditions)"),". Actual list of predefined conditions can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/src/common/NetworkConditions.ts"},"src/common/NetworkConditions.ts"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"networkConditions: Readonly<{\n    'Slow 3G': NetworkConditions;\n    'Fast 3G': NetworkConditions;\n}>\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const puppeteer = require('puppeteer');\nconst slow3G = puppeteer.networkConditions['Slow 3G'];\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.emulateNetworkConditions(slow3G);\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n")))}u.isMDXComponent=!0}}]);