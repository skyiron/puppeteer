"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[403184],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},643044:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(487462),a=(r(667294),r(603905));const o={sidebar_label:"Frame.focus"},l="Frame.focus() method",p={unversionedId:"api/puppeteer.frame.focus",id:"api/puppeteer.frame.focus",title:"Frame.focus() method",description:"This method fetches an element with selector and focuses it.",source:"@site/../docs/api/puppeteer.frame.focus.md",sourceDirName:"api",slug:"/api/puppeteer.frame.focus",permalink:"/next/api/puppeteer.frame.focus",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Frame.focus"},sidebar:"sidebar",previous:{title:"Frame.executionContext",permalink:"/next/api/puppeteer.frame.executioncontext"},next:{title:"Frame.goto",permalink:"/next/api/puppeteer.frame.goto"}},i={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"framefocus-method"},"Frame.focus() method"),(0,a.kt)("p",null,"This method fetches an element with ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," and focuses it."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Frame {\n  focus(selector: string): Promise<void>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"selector"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"the selector for the element to focus. If there are multiple elements, the first will be focused.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If there's no element matching ",(0,a.kt)("inlineCode",{parentName:"p"},"selector"),", the method throws an error."))}u.isMDXComponent=!0}}]);