"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[982577],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(667294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=c(r),f=p,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,s=new Array(o);s[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:p,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},876878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(487462),p=(r(667294),r(603905));const o={sidebar_label:"HTTPResponse.text"},s="HTTPResponse.text() method",a={unversionedId:"api/puppeteer.httpresponse.text",id:"api/puppeteer.httpresponse.text",title:"HTTPResponse.text() method",description:"Signature:",source:"@site/../docs/api/puppeteer.httpresponse.text.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.text",permalink:"/next/api/puppeteer.httpresponse.text",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"HTTPResponse.text"},sidebar:"sidebar",previous:{title:"HTTPResponse.statusText",permalink:"/next/api/puppeteer.httpresponse.statustext"},next:{title:"HTTPResponse.timing",permalink:"/next/api/puppeteer.httpresponse.timing"}},i={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"httpresponsetext-method"},"HTTPResponse.text() method"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPResponse {\n  text(): Promise<string>;\n}\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")),(0,p.kt)("p",null,"Promise","<","string",">"),(0,p.kt)("p",null,"Promise which resolves to a text representation of response body."))}u.isMDXComponent=!0}}]);