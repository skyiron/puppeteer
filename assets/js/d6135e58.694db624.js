"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[871632],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<l;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},205260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(487462),a=(n(667294),n(603905));const l={sidebar_label:"ElementHandle.$"},p="ElementHandle.$() method",o={unversionedId:"api/puppeteer.elementhandle._",id:"version-15.3.1/api/puppeteer.elementhandle._",title:"ElementHandle.$() method",description:"Runs element.querySelector within the page.",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.elementhandle._.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle._",permalink:"/15.3.1/api/puppeteer.elementhandle._",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"ElementHandle.$"},sidebar:"sidebar",previous:{title:"ElementHandle",permalink:"/15.3.1/api/puppeteer.elementhandle"},next:{title:"ElementHandle.$$",permalink:"/15.3.1/api/puppeteer.elementhandle.__"}},i={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"elementhandle-method"},"ElementHandle.$() method"),(0,a.kt)("p",null,"Runs ",(0,a.kt)("inlineCode",{parentName:"p"},"element.querySelector")," within the page."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class ElementHandle {\n  $<Selector extends string>(\n    selector: Selector\n  ): Promise<ElementHandle<NodeFor<Selector>> | null>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"selector"),(0,a.kt)("td",{parentName:"tr",align:null},"Selector"),(0,a.kt)("td",{parentName:"tr",align:null},"The selector to query with.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/15.3.1/api/puppeteer.elementhandle"},"ElementHandle"),"<",(0,a.kt)("a",{parentName:"p",href:"/15.3.1/api/puppeteer.nodefor"},"NodeFor"),"<","Selector",">",">"," ","|"," null",">"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"null")," if no element matches the selector."),(0,a.kt)("h2",{id:"exceptions"},"Exceptions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Error")," if the selector has no associated query handler."))}m.isMDXComponent=!0}}]);