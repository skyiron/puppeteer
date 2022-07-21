"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[565407],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(667294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(r),f=p,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,s=new Array(o);s[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:p,s[1]=a;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},694874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(487462),p=(r(667294),r(603905));const o={sidebar_label:"HTTPResponse.text"},s="HTTPResponse.text() method",a={unversionedId:"api/puppeteer.httpresponse.text",id:"version-15.3.1/api/puppeteer.httpresponse.text",title:"HTTPResponse.text() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.httpresponse.text.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.text",permalink:"/15.3.1/api/puppeteer.httpresponse.text",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"HTTPResponse.text"},sidebar:"sidebar",previous:{title:"HTTPResponse.statusText",permalink:"/15.3.1/api/puppeteer.httpresponse.statustext"},next:{title:"HTTPResponse.timing",permalink:"/15.3.1/api/puppeteer.httpresponse.timing"}},i={},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"httpresponsetext-method"},"HTTPResponse.text() method"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPResponse {\n  text(): Promise<string>;\n}\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")),(0,p.kt)("p",null,"Promise","<","string",">"),(0,p.kt)("p",null,"Promise which resolves to a text representation of response body."))}u.isMDXComponent=!0}}]);