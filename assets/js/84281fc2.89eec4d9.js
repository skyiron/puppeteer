"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[308844],{603905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(n),s=a,g=c["".concat(i,".").concat(s)]||c[s]||u[s]||l;return n?r.createElement(g,p(p({ref:t},m),{},{components:n})):r.createElement(g,p({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var d=2;d<l;d++)p[d]=n[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},643613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(487462),a=(n(667294),n(603905));const l={sidebar_label:"ElementHandle.dragEnter"},p="ElementHandle.dragEnter() method",o={unversionedId:"api/puppeteer.elementhandle.dragenter",id:"api/puppeteer.elementhandle.dragenter",title:"ElementHandle.dragEnter() method",description:"This method creates a dragenter event on the element.",source:"@site/../docs/api/puppeteer.elementhandle.dragenter.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.dragenter",permalink:"/next/api/puppeteer.elementhandle.dragenter",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"ElementHandle.dragEnter"},sidebar:"sidebar",previous:{title:"ElementHandle.dragAndDrop",permalink:"/next/api/puppeteer.elementhandle.draganddrop"},next:{title:"ElementHandle.dragOver",permalink:"/next/api/puppeteer.elementhandle.dragover"}},i={},d=[{value:"Parameters",id:"parameters",level:2}],m={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"elementhandledragenter-method"},"ElementHandle.dragEnter() method"),(0,a.kt)("p",null,"This method creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"dragenter")," event on the element."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class ElementHandle {\n  dragEnter(\n    this: ElementHandle<Element>,\n    data?: Protocol.Input.DragData\n  ): Promise<void>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"this"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/next/api/puppeteer.elementhandle"},"ElementHandle"),"<","Element",">"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},"Protocol.Input.DragData"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"))}u.isMDXComponent=!0}}]);