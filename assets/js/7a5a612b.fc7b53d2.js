"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[290740],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},42820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(487462),a=(n(667294),n(603905));const o={sidebar_label:"Page.setContent"},i="Page.setContent() method",p={unversionedId:"api/puppeteer.page.setcontent",id:"version-15.3.2/api/puppeteer.page.setcontent",title:"Page.setContent() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.2/api/puppeteer.page.setcontent.md",sourceDirName:"api",slug:"/api/puppeteer.page.setcontent",permalink:"/15.3.2/api/puppeteer.page.setcontent",draft:!1,tags:[],version:"15.3.2",frontMatter:{sidebar_label:"Page.setContent"},sidebar:"sidebar",previous:{title:"Page.setCacheEnabled",permalink:"/15.3.2/api/puppeteer.page.setcacheenabled"},next:{title:"Page.setCookie",permalink:"/15.3.2/api/puppeteer.page.setcookie"}},l={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pagesetcontent-method"},"Page.setContent() method"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  setContent(html: string, options?: WaitForOptions): Promise<void>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"html"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"HTML markup to assign to the page.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/15.3.2/api/puppeteer.waitforoptions"},"WaitForOptions")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," Parameters that has some properties.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," might have the following options."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"timeout")," : Maximum time in milliseconds for resources to load, defaults to 30 seconds, pass ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," to disable timeout. The default value can be changed by using the ",(0,a.kt)("a",{parentName:"p",href:"/15.3.2/api/puppeteer.page.setdefaultnavigationtimeout"},"Page.setDefaultNavigationTimeout()")," or ",(0,a.kt)("a",{parentName:"p",href:"/15.3.2/api/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()")," methods.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"waitUntil"),": When to consider setting markup succeeded, defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"load"),". Given an array of event strings, setting content is considered to be successful after all events have been fired. Events can be either:",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"p"},"load")," : consider setting content to be finished when the ",(0,a.kt)("inlineCode",{parentName:"p"},"load")," event is fired.",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"p"},"domcontentloaded")," : consider setting content to be finished when the ",(0,a.kt)("inlineCode",{parentName:"p"},"DOMContentLoaded")," event is fired.",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"p"},"networkidle0")," : consider setting content to be finished when there are no more than 0 network connections for at least ",(0,a.kt)("inlineCode",{parentName:"p"},"500")," ms.",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"p"},"networkidle2")," : consider setting content to be finished when there are no more than 2 network connections for at least ",(0,a.kt)("inlineCode",{parentName:"p"},"500")," ms."))))}m.isMDXComponent=!0}}]);