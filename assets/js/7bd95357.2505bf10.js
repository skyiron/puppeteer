"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[810011],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(g,p(p({ref:t},u),{},{components:r})):a.createElement(g,p({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},850790:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(487462),n=(r(667294),r(603905));const o={sidebar_label:"Browser.waitForTarget"},p="Browser.waitForTarget() method",i={unversionedId:"api/puppeteer.browser.waitfortarget",id:"version-15.4.1/api/puppeteer.browser.waitfortarget",title:"Browser.waitForTarget() method",description:"Searches for a target in all browser contexts.",source:"@site/versioned_docs/version-15.4.1/api/puppeteer.browser.waitfortarget.md",sourceDirName:"api",slug:"/api/puppeteer.browser.waitfortarget",permalink:"/15.4.1/api/puppeteer.browser.waitfortarget",draft:!1,tags:[],version:"15.4.1",frontMatter:{sidebar_label:"Browser.waitForTarget"},sidebar:"sidebar",previous:{title:"Browser.version",permalink:"/15.4.1/api/puppeteer.browser.version"},next:{title:"Browser.wsEndpoint",permalink:"/15.4.1/api/puppeteer.browser.wsendpoint"}},l={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"browserwaitfortarget-method"},"Browser.waitForTarget() method"),(0,n.kt)("p",null,"Searches for a target in all browser contexts."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Browser {\n  waitForTarget(\n    predicate: (x: Target) => boolean | Promise<boolean>,\n    options?: WaitForTargetOptions\n  ): Promise<Target>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"predicate"),(0,n.kt)("td",{parentName:"tr",align:null},"(x: ",(0,n.kt)("a",{parentName:"td",href:"/15.4.1/api/puppeteer.target"},"Target"),") =",">"," boolean ","|"," Promise","<","boolean",">"),(0,n.kt)("td",{parentName:"tr",align:null},"A function to be run for every target.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.4.1/api/puppeteer.waitfortargetoptions"},"WaitForTargetOptions")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/15.4.1/api/puppeteer.target"},"Target"),">"),(0,n.kt)("p",null,"The first target found that matches the ",(0,n.kt)("inlineCode",{parentName:"p"},"predicate")," function."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"An example of finding a target for a page opened via ",(0,n.kt)("inlineCode",{parentName:"p"},"window.open"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"await page.evaluate(() => window.open('https://www.example.com/'));\nconst newWindowTarget = await browser.waitForTarget(\n  target => target.url() === 'https://www.example.com/'\n);\n")))}c.isMDXComponent=!0}}]);