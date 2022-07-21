"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[260036],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},924983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(487462),o=(n(667294),n(603905));const l={sidebar_label:"ElementHandle.boxModel"},a="ElementHandle.boxModel() method",p={unversionedId:"api/puppeteer.elementhandle.boxmodel",id:"api/puppeteer.elementhandle.boxmodel",title:"ElementHandle.boxModel() method",description:"This method returns boxes of the element, or null if the element is not visible.",source:"@site/../docs/api/puppeteer.elementhandle.boxmodel.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.boxmodel",permalink:"/next/api/puppeteer.elementhandle.boxmodel",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"ElementHandle.boxModel"},sidebar:"sidebar",previous:{title:"ElementHandle.boundingBox",permalink:"/next/api/puppeteer.elementhandle.boundingbox"},next:{title:"ElementHandle.click",permalink:"/next/api/puppeteer.elementhandle.click"}},i={},c=[{value:"Remarks",id:"remarks",level:2}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"elementhandleboxmodel-method"},"ElementHandle.boxModel() method"),(0,o.kt)("p",null,"This method returns boxes of the element, or ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," if the element is not visible."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class ElementHandle {\n  boxModel(): Promise<BoxModel | null>;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/next/api/puppeteer.boxmodel"},"BoxModel")," ","|"," null",">"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Boxes are represented as an array of points; Each Point is an object ",(0,o.kt)("inlineCode",{parentName:"p"},"{x, y}"),". Box points are sorted clock-wise."))}m.isMDXComponent=!0}}]);