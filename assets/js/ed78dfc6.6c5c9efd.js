"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[245481],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(r),y=a,m=g["".concat(i,".").concat(y)]||g[y]||u[y]||p;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<p;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},628641:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var n=r(487462),a=(r(667294),r(603905));const p={sidebar_label:"CoverageEntry"},o="CoverageEntry interface",l={unversionedId:"api/puppeteer.coverageentry",id:"version-15.4.2/api/puppeteer.coverageentry",title:"CoverageEntry interface",description:"The CoverageEntry class represents one entry of the coverage report.",source:"@site/versioned_docs/version-15.4.2/api/puppeteer.coverageentry.md",sourceDirName:"api",slug:"/api/puppeteer.coverageentry",permalink:"/api/puppeteer.coverageentry",draft:!1,tags:[],version:"15.4.2",frontMatter:{sidebar_label:"CoverageEntry"},sidebar:"sidebar",previous:{title:"Coverage.stopJSCoverage",permalink:"/api/puppeteer.coverage.stopjscoverage"},next:{title:"CoverageEntry.ranges",permalink:"/api/puppeteer.coverageentry.ranges"}},i={},c=[{value:"Properties",id:"properties",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"coverageentry-interface"},"CoverageEntry interface"),(0,a.kt)("p",null,"The CoverageEntry class represents one entry of the coverage report."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface CoverageEntry\n")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.coverageentry.ranges"},"ranges")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Array","<","{ start: number; end: number; }",">"),(0,a.kt)("td",{parentName:"tr",align:null},"The covered range as start and end positions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.coverageentry.text"},"text")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The content of the style sheet or script.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.coverageentry.url"},"url")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The URL of the style sheet or script.")))))}u.isMDXComponent=!0}}]);