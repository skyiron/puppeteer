"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[109185],{603905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,b=c["".concat(l,".").concat(d)]||c[d]||u[d]||p;return r?n.createElement(b,o(o({ref:t},m),{},{components:r})):n.createElement(b,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},895672:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var n=r(487462),a=(r(667294),r(603905));const p={sidebar_label:"BrowserEmittedEvents"},o="BrowserEmittedEvents enum",i={unversionedId:"api/puppeteer.browseremittedevents",id:"version-15.3.2/api/puppeteer.browseremittedevents",title:"BrowserEmittedEvents enum",description:"All the events a browser instance may emit.",source:"@site/versioned_docs/version-15.3.2/api/puppeteer.browseremittedevents.md",sourceDirName:"api",slug:"/api/puppeteer.browseremittedevents",permalink:"/15.3.2/api/puppeteer.browseremittedevents",draft:!1,tags:[],version:"15.3.2",frontMatter:{sidebar_label:"BrowserEmittedEvents"},sidebar:"sidebar",previous:{title:"BrowserContextOptions.proxyServer",permalink:"/15.3.2/api/puppeteer.browsercontextoptions.proxyserver"},next:{title:"BrowserFetcher",permalink:"/15.3.2/api/puppeteer.browserfetcher"}},l={},s=[{value:"Enumeration Members",id:"enumeration-members",level:2}],m={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"browseremittedevents-enum"},"BrowserEmittedEvents enum"),(0,a.kt)("p",null,"All the events a ",(0,a.kt)("a",{parentName:"p",href:"/15.3.2/api/puppeteer.browser"},"browser instance")," may emit."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare const enum BrowserEmittedEvents\n")),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Member"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Disconnected"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,'"',"disconnected",'"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"Emitted when Puppeteer gets disconnected from the Chromium instance. This might happen because of one of the following:"),(0,a.kt)("p",null,"- Chromium is closed or crashed"),(0,a.kt)("p",null,"- The ",(0,a.kt)("a",{parentName:"td",href:"/15.3.2/api/puppeteer.browser.disconnect"},"browser.disconnect")," method was called."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TargetChanged"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,'"',"targetchanged",'"')),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted when the url of a target changes. Contains a ",(0,a.kt)("a",{parentName:"td",href:"/15.3.2/api/puppeteer.target"},"Target")," instance.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TargetCreated"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,'"',"targetcreated",'"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"Emitted when a target is created, for example when a new page is opened by ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/open"},"window.open")," or by ",(0,a.kt)("a",{parentName:"td",href:"/15.3.2/api/puppeteer.browser.newpage"},"browser.newPage")),(0,a.kt)("p",null,"Contains a ",(0,a.kt)("a",{parentName:"td",href:"/15.3.2/api/puppeteer.target"},"Target")," instance."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TargetDestroyed"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,'"',"targetdestroyed",'"')),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted when a target is destroyed, for example when a page is closed. Contains a ",(0,a.kt)("a",{parentName:"td",href:"/15.3.2/api/puppeteer.target"},"Target")," instance.")))))}u.isMDXComponent=!0}}]);