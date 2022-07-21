"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[535226],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},494445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(487462),a=(n(667294),n(603905));const o={sidebar_label:"Page.emulateNetworkConditions"},i="Page.emulateNetworkConditions() method",p={unversionedId:"api/puppeteer.page.emulatenetworkconditions",id:"api/puppeteer.page.emulatenetworkconditions",title:"Page.emulateNetworkConditions() method",description:"Signature:",source:"@site/../docs/api/puppeteer.page.emulatenetworkconditions.md",sourceDirName:"api",slug:"/api/puppeteer.page.emulatenetworkconditions",permalink:"/next/api/puppeteer.page.emulatenetworkconditions",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.emulateNetworkConditions"},sidebar:"sidebar",previous:{title:"Page.emulateMediaType",permalink:"/next/api/puppeteer.page.emulatemediatype"},next:{title:"Page.emulateTimezone",permalink:"/next/api/puppeteer.page.emulatetimezone"}},l={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pageemulatenetworkconditions-method"},"Page.emulateNetworkConditions() method"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  emulateNetworkConditions(\n    networkConditions: NetworkConditions | null\n  ): Promise<void>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"networkConditions"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/next/api/puppeteer.networkconditions"},"NetworkConditions")," ","|"," null"),(0,a.kt)("td",{parentName:"tr",align:null},"Passing ",(0,a.kt)("code",null,"null")," disables network condition emulation.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"NOTE: This does not affect WebSockets and WebRTC PeerConnections (see ",(0,a.kt)("a",{parentName:"p",href:"https://crbug.com/563644"},"https://crbug.com/563644"),"). To set the page offline, you can use ","[","page.setOfflineMode(enabled)","]","(","#","pagesetofflinemodeenabled)."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const puppeteer = require('puppeteer');\nconst slow3G = puppeteer.networkConditions['Slow 3G'];\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.emulateNetworkConditions(slow3G);\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n")))}c.isMDXComponent=!0}}]);