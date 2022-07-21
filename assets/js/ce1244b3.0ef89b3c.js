"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[994261],{603905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,f=d["".concat(i,".").concat(c)]||d[c]||u[c]||l;return n?r.createElement(f,p(p({ref:t},m),{},{components:n})):r.createElement(f,p({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<l;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},474582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(487462),a=(n(667294),n(603905));const l={sidebar_label:"ElementHandle.uploadFile"},p="ElementHandle.uploadFile() method",o={unversionedId:"api/puppeteer.elementhandle.uploadfile",id:"version-15.4.0/api/puppeteer.elementhandle.uploadfile",title:"ElementHandle.uploadFile() method",description:"This method expects elementHandle to point to an input element.",source:"@site/versioned_docs/version-15.4.0/api/puppeteer.elementhandle.uploadfile.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.uploadfile",permalink:"/15.4.0/api/puppeteer.elementhandle.uploadfile",draft:!1,tags:[],version:"15.4.0",frontMatter:{sidebar_label:"ElementHandle.uploadFile"},sidebar:"sidebar",previous:{title:"ElementHandle.type",permalink:"/15.4.0/api/puppeteer.elementhandle.type"},next:{title:"ElementHandle.waitForSelector",permalink:"/15.4.0/api/puppeteer.elementhandle.waitforselector"}},i={},s=[{value:"Parameters",id:"parameters",level:2}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"elementhandleuploadfile-method"},"ElementHandle.uploadFile() method"),(0,a.kt)("p",null,"This method expects ",(0,a.kt)("inlineCode",{parentName:"p"},"elementHandle")," to point to an ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"},"input element"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class ElementHandle {\n  uploadFile(\n    this: ElementHandle<HTMLInputElement>,\n    ...filePaths: string[]\n  ): Promise<void>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"this"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/15.4.0/api/puppeteer.elementhandle"},"ElementHandle"),"<","HTMLInputElement",">"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filePaths"),(0,a.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the value of the file input to these paths. If a path is relative, then it is resolved against the ",(0,a.kt)("a",{parentName:"td",href:"https://nodejs.org/api/process.html#process_process_cwd"},"current working directory"),". Note for locals script connecting to remote chrome environments, paths must be absolute.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"))}u.isMDXComponent=!0}}]);