"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[786512],{603905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(667294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,y=d["".concat(l,".").concat(f)]||d[f]||s[f]||p;return t?n.createElement(y,o(o({ref:r},u),{},{components:t})):n.createElement(y,o({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<p;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},588552:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=t(487462),a=(t(667294),t(603905));const p={sidebar_label:"Handler"},o="Handler type",i={unversionedId:"api/puppeteer.handler",id:"version-15.3.1/api/puppeteer.handler",title:"Handler type",description:"Signature:",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.handler.md",sourceDirName:"api",slug:"/api/puppeteer.handler",permalink:"/15.3.1/api/puppeteer.handler",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"Handler"},sidebar:"sidebar",previous:{title:"HandleOr",permalink:"/15.3.1/api/puppeteer.handleor"},next:{title:"InnerParams",permalink:"/15.3.1/api/puppeteer.innerparams"}},l={},c=[],u={toc:c};function s(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"handler-type"},"Handler type"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type Handler<T = any> = (event?: T) => void;\n")))}s.isMDXComponent=!0}}]);