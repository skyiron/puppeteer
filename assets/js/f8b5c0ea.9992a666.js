"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[226266],{603905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},237884:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(487462),o=(t(667294),t(603905));const a={sidebar_label:"BrowserFetcher.localRevisions"},i="BrowserFetcher.localRevisions() method",s={unversionedId:"api/puppeteer.browserfetcher.localrevisions",id:"version-15.4.1/api/puppeteer.browserfetcher.localrevisions",title:"BrowserFetcher.localRevisions() method",description:"Signature:",source:"@site/versioned_docs/version-15.4.1/api/puppeteer.browserfetcher.localrevisions.md",sourceDirName:"api",slug:"/api/puppeteer.browserfetcher.localrevisions",permalink:"/15.4.1/api/puppeteer.browserfetcher.localrevisions",draft:!1,tags:[],version:"15.4.1",frontMatter:{sidebar_label:"BrowserFetcher.localRevisions"},sidebar:"sidebar",previous:{title:"BrowserFetcher.host",permalink:"/15.4.1/api/puppeteer.browserfetcher.host"},next:{title:"BrowserFetcher.platform",permalink:"/15.4.1/api/puppeteer.browserfetcher.platform"}},l={},p=[{value:"Remarks",id:"remarks",level:2}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browserfetcherlocalrevisions-method"},"BrowserFetcher.localRevisions() method"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class BrowserFetcher {\n  localRevisions(): Promise<string[]>;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"Promise","<","string","[","]",">"),(0,o.kt)("p",null,"A promise with a list of all revision strings (for the current ",(0,o.kt)("inlineCode",{parentName:"p"},"product"),") available locally on disk."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"This method is affected by the current ",(0,o.kt)("inlineCode",{parentName:"p"},"product"),"."))}u.isMDXComponent=!0}}]);