"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[986328],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(667294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=p,y=d["".concat(i,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:p,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},261812:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(487462),p=(r(667294),r(603905));const o={sidebar_label:"Product"},a="Product type",c={unversionedId:"api/puppeteer.product",id:"version-15.3.2/api/puppeteer.product",title:"Product type",description:"Supported products.",source:"@site/versioned_docs/version-15.3.2/api/puppeteer.product.md",sourceDirName:"api",slug:"/api/puppeteer.product",permalink:"/15.3.2/api/puppeteer.product",draft:!1,tags:[],version:"15.3.2",frontMatter:{sidebar_label:"Product"},sidebar:"sidebar",previous:{title:"PressOptions.text",permalink:"/15.3.2/api/puppeteer.pressoptions.text"},next:{title:"ProductLauncher",permalink:"/15.3.2/api/puppeteer.productlauncher"}},i={},u=[],l={toc:u};function s(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"product-type"},"Product type"),(0,p.kt)("p",null,"Supported products."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type Product = 'chrome' | 'firefox';\n")))}s.isMDXComponent=!0}}]);