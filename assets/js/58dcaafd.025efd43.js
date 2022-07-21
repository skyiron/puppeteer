"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[470820],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},796893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(487462),a=(n(667294),n(603905));const o={sidebar_label:"JSHandle.jsonValue"},l="JSHandle.jsonValue() method",p={unversionedId:"api/puppeteer.jshandle.jsonvalue",id:"version-15.3.0/api/puppeteer.jshandle.jsonvalue",title:"JSHandle.jsonValue() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.0/api/puppeteer.jshandle.jsonvalue.md",sourceDirName:"api",slug:"/api/puppeteer.jshandle.jsonvalue",permalink:"/15.3.0/api/puppeteer.jshandle.jsonvalue",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"JSHandle.jsonValue"},sidebar:"sidebar",previous:{title:"JSHandle.getProperty_1",permalink:"/15.3.0/api/puppeteer.jshandle.getproperty_1"},next:{title:"JSHandle.toString",permalink:"/15.3.0/api/puppeteer.jshandle.tostring"}},i={},s=[{value:"Remarks",id:"remarks",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jshandlejsonvalue-method"},"JSHandle.jsonValue() method"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class JSHandle {\n  jsonValue<T = unknown>(): Promise<T>;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","T",">"),(0,a.kt)("p",null,"Returns a JSON representation of the object.If the object has a ",(0,a.kt)("inlineCode",{parentName:"p"},"toJSON")," function, it will not be called."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The JSON is generated by running ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"},"JSON.stringify")," on the object in page and consequent ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"},"JSON.parse")," in puppeteer. ","*","*","NOTE","*","*"," The method throws if the referenced object is not stringifiable."))}u.isMDXComponent=!0}}]);