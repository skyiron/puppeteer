"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[631173],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},155555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(487462),r=(n(667294),n(603905));const o={sidebar_label:"Page.evaluateOnNewDocument"},l="Page.evaluateOnNewDocument() method",p={unversionedId:"api/puppeteer.page.evaluateonnewdocument",id:"version-15.4.0/api/puppeteer.page.evaluateonnewdocument",title:"Page.evaluateOnNewDocument() method",description:"Adds a function which would be invoked in one of the following scenarios:",source:"@site/versioned_docs/version-15.4.0/api/puppeteer.page.evaluateonnewdocument.md",sourceDirName:"api",slug:"/api/puppeteer.page.evaluateonnewdocument",permalink:"/15.4.0/api/puppeteer.page.evaluateonnewdocument",draft:!1,tags:[],version:"15.4.0",frontMatter:{sidebar_label:"Page.evaluateOnNewDocument"},sidebar:"sidebar",previous:{title:"Page.evaluateHandle",permalink:"/15.4.0/api/puppeteer.page.evaluatehandle"},next:{title:"Page.exposeFunction",permalink:"/15.4.0/api/puppeteer.page.exposefunction"}},i={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pageevaluateonnewdocument-method"},"Page.evaluateOnNewDocument() method"),(0,r.kt)("p",null,"Adds a function which would be invoked in one of the following scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"whenever the page is navigated")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"whenever the child frame is attached or navigated. In this case, the function is invoked in the context of the newly attached frame."))),(0,r.kt)("p",null,"The function is invoked after the document was created but before any of its scripts were run. This is useful to amend the JavaScript environment, e.g. to seed ",(0,r.kt)("inlineCode",{parentName:"p"},"Math.random"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  evaluateOnNewDocument<\n    Params extends unknown[],\n    Func extends (...args: Params) => unknown = (...args: Params) => unknown\n  >(pageFunction: Func | string, ...args: Params): Promise<void>;\n}\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,r.kt)("td",{parentName:"tr",align:null},"Func ","|"," string"),(0,r.kt)("td",{parentName:"tr",align:null},"Function to be evaluated in browser context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"args"),(0,r.kt)("td",{parentName:"tr",align:null},"Params"),(0,r.kt)("td",{parentName:"tr",align:null},"Arguments to pass to ",(0,r.kt)("code",null,"pageFunction"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","void",">"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"An example of overriding the navigator.languages property before the page loads:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// preload.js\n\n// overwrite the `languages` property to use a custom getter\nObject.defineProperty(navigator, 'languages', {\nget: function () {\nreturn ['en-US', 'en', 'bn'];\n},\n});\n\n// In your puppeteer script, assuming the preload.js file is\nin same folder of our script\nconst preloadFile = fs.readFileSync('./preload.js', 'utf8');\nawait page.evaluateOnNewDocument(preloadFile);\n")))}c.isMDXComponent=!0}}]);