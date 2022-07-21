"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[826117],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||p;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<p;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},764866:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=r(487462),a=(r(667294),r(603905));const p={sidebar_label:"devices"},i="devices variable",o={unversionedId:"api/puppeteer.devices",id:"api/puppeteer.devices",title:"devices variable",description:"A list of devices to be used with page.emulate(options). Actual list of devices can be found in src/common/DeviceDescriptors.ts.",source:"@site/../docs/api/puppeteer.devices.md",sourceDirName:"api",slug:"/api/puppeteer.devices",permalink:"/next/api/puppeteer.devices",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"devices"},sidebar:"sidebar",previous:{title:"defaultArgs",permalink:"/next/api/puppeteer.defaultargs"},next:{title:"errors",permalink:"/next/api/puppeteer.errors"}},c={},s=[{value:"Example",id:"example",level:2}],l={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"devices-variable"},"devices variable"),(0,a.kt)("p",null,"A list of devices to be used with ",(0,a.kt)("inlineCode",{parentName:"p"},"page.emulate(options)"),". Actual list of devices can be found in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/src/common/DeviceDescriptors.ts"},"src/common/DeviceDescriptors.ts"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"devices: DevicesMap;\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const puppeteer = require('puppeteer');\nconst iPhone = puppeteer.devices['iPhone 6'];\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.emulate(iPhone);\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n")))}u.isMDXComponent=!0}}]);