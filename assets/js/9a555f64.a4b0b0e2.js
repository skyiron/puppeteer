"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[209771],{603905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||c;return t?n.createElement(m,s(s({ref:r},l),{},{components:t})):n.createElement(m,s({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,s=new Array(c);s[0]=d;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<c;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},109167:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var n=t(487462),o=(t(667294),t(603905));const c={sidebar_label:"Browser.disconnect"},s="Browser.disconnect() method",a={unversionedId:"api/puppeteer.browser.disconnect",id:"api/puppeteer.browser.disconnect",title:"Browser.disconnect() method",description:"Disconnects Puppeteer from the browser, but leaves the Chromium process running. After calling disconnect, the Browser object is considered disposed and cannot be used anymore.",source:"@site/../docs/api/puppeteer.browser.disconnect.md",sourceDirName:"api",slug:"/api/puppeteer.browser.disconnect",permalink:"/next/api/puppeteer.browser.disconnect",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Browser.disconnect"},sidebar:"sidebar",previous:{title:"Browser.defaultBrowserContext",permalink:"/next/api/puppeteer.browser.defaultbrowsercontext"},next:{title:"Browser.isConnected",permalink:"/next/api/puppeteer.browser.isconnected"}},i={},p=[],l={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browserdisconnect-method"},"Browser.disconnect() method"),(0,o.kt)("p",null,"Disconnects Puppeteer from the browser, but leaves the Chromium process running. After calling ",(0,o.kt)("inlineCode",{parentName:"p"},"disconnect"),", the ",(0,o.kt)("a",{parentName:"p",href:"/next/api/puppeteer.browser"},"Browser")," object is considered disposed and cannot be used anymore."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class Browser {\n  disconnect(): void;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"void"))}u.isMDXComponent=!0}}]);