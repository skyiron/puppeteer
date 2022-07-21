"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[440022],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,x=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(x,i(i({ref:t},s),{},{components:n})):r.createElement(x,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},434556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(487462),a=(n(667294),n(603905));const o={sidebar_label:"ExecutionContext"},i="ExecutionContext class",p={unversionedId:"api/puppeteer.executioncontext",id:"version-15.4.1/api/puppeteer.executioncontext",title:"ExecutionContext class",description:'This class represents a context for JavaScript execution. A \\Page\\] might have many execution contexts: - each [frame has "default" execution context that is always created after frame is attached to DOM. This context is returned by the Frame.executionContext() method. - Extension\'s content scripts create additional execution contexts.',source:"@site/versioned_docs/version-15.4.1/api/puppeteer.executioncontext.md",sourceDirName:"api",slug:"/api/puppeteer.executioncontext",permalink:"/15.4.1/api/puppeteer.executioncontext",draft:!1,tags:[],version:"15.4.1",frontMatter:{sidebar_label:"ExecutionContext"},sidebar:"sidebar",previous:{title:"EventType",permalink:"/15.4.1/api/puppeteer.eventtype"},next:{title:"ExecutionContext.evaluate",permalink:"/15.4.1/api/puppeteer.executioncontext.evaluate"}},c={},l=[{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"executioncontext-class"},"ExecutionContext class"),(0,a.kt)("p",null,"This class represents a context for JavaScript execution. A ","[","Page","]"," might have many execution contexts: - each ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"},"frame"),' has "default" execution context that is always created after frame is attached to DOM. This context is returned by the ',(0,a.kt)("a",{parentName:"p",href:"/15.4.1/api/puppeteer.frame.executioncontext"},"Frame.executionContext()")," method. - ",(0,a.kt)("a",{parentName:"p",href:"https://developer.chrome.com/extensions"},"Extension"),"'s content scripts create additional execution contexts."),(0,a.kt)("p",null,"Besides pages, execution contexts can be found in ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"workers"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class ExecutionContext\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"ExecutionContext")," class."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/15.4.1/api/puppeteer.executioncontext.evaluate"},"evaluate(pageFunction, args)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/15.4.1/api/puppeteer.executioncontext.evaluatehandle"},"evaluateHandle(pageFunction, args)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/15.4.1/api/puppeteer.executioncontext.frame"},"frame()")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/15.4.1/api/puppeteer.executioncontext.queryobjects"},"queryObjects(prototypeHandle)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"This method iterates the JavaScript heap and finds all the objects with the given prototype.")))))}u.isMDXComponent=!0}}]);