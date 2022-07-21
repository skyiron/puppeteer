"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[234725],{603905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>s});var r=t(667294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(t),s=o,b=c["".concat(p,".").concat(s)]||c[s]||m[s]||a;return t?r.createElement(b,l(l({ref:n},d),{},{components:t})):r.createElement(b,l({ref:n},d))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},43214:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(487462),o=(t(667294),t(603905));const a={sidebar_label:"ElementHandle.boundingBox"},l="ElementHandle.boundingBox() method",i={unversionedId:"api/puppeteer.elementhandle.boundingbox",id:"version-15.4.0/api/puppeteer.elementhandle.boundingbox",title:"ElementHandle.boundingBox() method",description:"This method returns the bounding box of the element (relative to the main frame), or null if the element is not visible.",source:"@site/versioned_docs/version-15.4.0/api/puppeteer.elementhandle.boundingbox.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.boundingbox",permalink:"/15.4.0/api/puppeteer.elementhandle.boundingbox",draft:!1,tags:[],version:"15.4.0",frontMatter:{sidebar_label:"ElementHandle.boundingBox"},sidebar:"sidebar",previous:{title:"ElementHandle.asElement",permalink:"/15.4.0/api/puppeteer.elementhandle.aselement"},next:{title:"ElementHandle.boxModel",permalink:"/15.4.0/api/puppeteer.elementhandle.boxmodel"}},p={},u=[],d={toc:u};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"elementhandleboundingbox-method"},"ElementHandle.boundingBox() method"),(0,o.kt)("p",null,"This method returns the bounding box of the element (relative to the main frame), or ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," if the element is not visible."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class ElementHandle {\n  boundingBox(): Promise<BoundingBox | null>;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/15.4.0/api/puppeteer.boundingbox"},"BoundingBox")," ","|"," null",">"))}m.isMDXComponent=!0}}]);