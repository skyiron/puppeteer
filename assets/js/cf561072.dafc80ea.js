"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[456828],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||p;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,s=new Array(p);s[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<p;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},379723:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>a,toc:()=>l});var n=r(487462),o=(r(667294),r(603905));const p={sidebar_label:"HTTPResponse.ok"},s="HTTPResponse.ok() method",a={unversionedId:"api/puppeteer.httpresponse.ok",id:"version-15.3.2/api/puppeteer.httpresponse.ok",title:"HTTPResponse.ok() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.2/api/puppeteer.httpresponse.ok.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.ok",permalink:"/15.3.2/api/puppeteer.httpresponse.ok",draft:!1,tags:[],version:"15.3.2",frontMatter:{sidebar_label:"HTTPResponse.ok"},sidebar:"sidebar",previous:{title:"HTTPResponse.json",permalink:"/15.3.2/api/puppeteer.httpresponse.json"},next:{title:"HTTPResponse.remoteAddress",permalink:"/15.3.2/api/puppeteer.httpresponse.remoteaddress"}},i={},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"httpresponseok-method"},"HTTPResponse.ok() method"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPResponse {\n  ok(): boolean;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"boolean"),(0,o.kt)("p",null,"True if the response was successful (status in the range 200-299)."))}u.isMDXComponent=!0}}]);