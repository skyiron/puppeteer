"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[660623],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return r?n.createElement(m,p(p({ref:t},u),{},{components:r})):n.createElement(m,p({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},390494:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(487462),o=(r(667294),r(603905));const a={sidebar_label:"NodeFor"},p="NodeFor type",i={unversionedId:"api/puppeteer.nodefor",id:"version-15.3.1/api/puppeteer.nodefor",title:"NodeFor type",description:"Signature:",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.nodefor.md",sourceDirName:"api",slug:"/api/puppeteer.nodefor",permalink:"/15.3.1/api/puppeteer.nodefor",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"NodeFor"},sidebar:"sidebar",previous:{title:"NetworkConditions.upload",permalink:"/15.3.1/api/puppeteer.networkconditions.upload"},next:{title:"Offset",permalink:"/15.3.1/api/puppeteer.offset"}},l={},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nodefor-type"},"NodeFor type"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type NodeFor<Selector extends string> =\n  Selector extends keyof HTMLElementTagNameMap\n    ? HTMLElementTagNameMap[Selector]\n    : Selector extends keyof SVGElementTagNameMap\n    ? SVGElementTagNameMap[Selector]\n    : Element;\n")))}s.isMDXComponent=!0}}]);