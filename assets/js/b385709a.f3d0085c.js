"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91690],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,h=d["".concat(i,".").concat(u)]||d[u]||c[u]||l;return n?r.createElement(h,p(p({ref:t},s),{},{components:n})):r.createElement(h,p({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var m=2;m<l;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},846117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(487462),a=(n(667294),n(603905));const l={sidebar_label:"ElementHandle.tap"},p="ElementHandle.tap() method",o={unversionedId:"api/puppeteer.elementhandle.tap",id:"version-15.4.1/api/puppeteer.elementhandle.tap",title:"ElementHandle.tap() method",description:"This method scrolls element into view if needed, and then uses Touchscreen.tap() to tap in the center of the element. If the element is detached from DOM, the method throws an error.",source:"@site/versioned_docs/version-15.4.1/api/puppeteer.elementhandle.tap.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.tap",permalink:"/15.4.1/api/puppeteer.elementhandle.tap",draft:!1,tags:[],version:"15.4.1",frontMatter:{sidebar_label:"ElementHandle.tap"},sidebar:"sidebar",previous:{title:"ElementHandle.select",permalink:"/15.4.1/api/puppeteer.elementhandle.select"},next:{title:"ElementHandle.type",permalink:"/15.4.1/api/puppeteer.elementhandle.type"}},i={},m=[{value:"Parameters",id:"parameters",level:2}],s={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"elementhandletap-method"},"ElementHandle.tap() method"),(0,a.kt)("p",null,"This method scrolls element into view if needed, and then uses ",(0,a.kt)("a",{parentName:"p",href:"/15.4.1/api/puppeteer.touchscreen.tap"},"Touchscreen.tap()")," to tap in the center of the element. If the element is detached from DOM, the method throws an error."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class ElementHandle {\n  tap(this: ElementHandle<Element>): Promise<void>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"this"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/15.4.1/api/puppeteer.elementhandle"},"ElementHandle"),"<","Element",">"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"))}c.isMDXComponent=!0}}]);