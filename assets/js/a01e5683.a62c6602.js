"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[610559],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=u(r),f=a,m=g["".concat(l,".").concat(f)]||g[f]||s[f]||p;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<p;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},741388:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>u});var n=r(487462),a=(r(667294),r(603905));const p={sidebar_label:"Target.page"},o="Target.page() method",i={unversionedId:"api/puppeteer.target.page",id:"version-15.3.2/api/puppeteer.target.page",title:"Target.page() method",description:'If the target is not of type "page" or "background_page", returns null.',source:"@site/versioned_docs/version-15.3.2/api/puppeteer.target.page.md",sourceDirName:"api",slug:"/api/puppeteer.target.page",permalink:"/15.3.2/api/puppeteer.target.page",draft:!1,tags:[],version:"15.3.2",frontMatter:{sidebar_label:"Target.page"},sidebar:"sidebar",previous:{title:"Target.opener",permalink:"/15.3.2/api/puppeteer.target.opener"},next:{title:"Target.type",permalink:"/15.3.2/api/puppeteer.target.type"}},l={},u=[],c={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"targetpage-method"},"Target.page() method"),(0,a.kt)("p",null,"If the target is not of type ",(0,a.kt)("inlineCode",{parentName:"p"},'"page"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'"background_page"'),", returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Target {\n  page(): Promise<Page | null>;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/15.3.2/api/puppeteer.page"},"Page")," ","|"," null",">"))}s.isMDXComponent=!0}}]);