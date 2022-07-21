"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[652695],{603905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(667294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=a.createContext({}),l=function(e){var r=a.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return a.createElement(m.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(t),f=n,g=u["".concat(m,".").concat(f)]||u[f]||s[f]||p;return t?a.createElement(g,i(i({ref:r},c),{},{components:t})):a.createElement(g,i({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=u;var o={};for(var m in r)hasOwnProperty.call(r,m)&&(o[m]=r[m]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<p;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},989055:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var a=t(487462),n=(t(667294),t(603905));const p={sidebar_label:"Page.mainFrame"},i="Page.mainFrame() method",o={unversionedId:"api/puppeteer.page.mainframe",id:"version-15.4.0/api/puppeteer.page.mainframe",title:"Page.mainFrame() method",description:"Signature:",source:"@site/versioned_docs/version-15.4.0/api/puppeteer.page.mainframe.md",sourceDirName:"api",slug:"/api/puppeteer.page.mainframe",permalink:"/15.4.0/api/puppeteer.page.mainframe",draft:!1,tags:[],version:"15.4.0",frontMatter:{sidebar_label:"Page.mainFrame"},sidebar:"sidebar",previous:{title:"Page.keyboard",permalink:"/15.4.0/api/puppeteer.page.keyboard"},next:{title:"Page.metrics",permalink:"/15.4.0/api/puppeteer.page.metrics"}},m={},l=[{value:"Remarks",id:"remarks",level:2}],c={toc:l};function s(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pagemainframe-method"},"Page.mainFrame() method"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  mainFrame(): Frame;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/15.4.0/api/puppeteer.frame"},"Frame")),(0,n.kt)("p",null,"The page's main frame."),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"Page is guaranteed to have a main frame which persists during navigations."))}s.isMDXComponent=!0}}]);