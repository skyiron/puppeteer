"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[470425],{603905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>w});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=c(t),w=o,f=b["".concat(i,".").concat(w)]||b[w]||u[w]||a;return t?n.createElement(f,s(s({ref:r},l),{},{components:t})):n.createElement(f,s({ref:r},l))}));function w(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=b;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},736306:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=t(487462),o=(t(667294),t(603905));const a={sidebar_label:"Browser.browserContexts"},s="Browser.browserContexts() method",p={unversionedId:"api/puppeteer.browser.browsercontexts",id:"api/puppeteer.browser.browsercontexts",title:"Browser.browserContexts() method",description:"Returns an array of all open browser contexts. In a newly created browser, this will return a single instance of BrowserContext.",source:"@site/../docs/api/puppeteer.browser.browsercontexts.md",sourceDirName:"api",slug:"/api/puppeteer.browser.browsercontexts",permalink:"/next/api/puppeteer.browser.browsercontexts",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Browser.browserContexts"},sidebar:"sidebar",previous:{title:"Browser",permalink:"/next/api/puppeteer.browser"},next:{title:"Browser.close",permalink:"/next/api/puppeteer.browser.close"}},i={},c=[],l={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browserbrowsercontexts-method"},"Browser.browserContexts() method"),(0,o.kt)("p",null,"Returns an array of all open browser contexts. In a newly created browser, this will return a single instance of ",(0,o.kt)("a",{parentName:"p",href:"/next/api/puppeteer.browsercontext"},"BrowserContext"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class Browser {\n  browserContexts(): BrowserContext[];\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/next/api/puppeteer.browsercontext"},"BrowserContext"),"[","]"))}u.isMDXComponent=!0}}]);