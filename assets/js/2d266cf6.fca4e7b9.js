"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[783124],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||p;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},97849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var a=r(487462),n=(r(667294),r(603905));const p={sidebar_label:"Page.waitForRequest"},o="Page.waitForRequest() method",i={unversionedId:"api/puppeteer.page.waitforrequest",id:"version-15.4.0/api/puppeteer.page.waitforrequest",title:"Page.waitForRequest() method",description:"Signature:",source:"@site/versioned_docs/version-15.4.0/api/puppeteer.page.waitforrequest.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforrequest",permalink:"/15.4.0/api/puppeteer.page.waitforrequest",draft:!1,tags:[],version:"15.4.0",frontMatter:{sidebar_label:"Page.waitForRequest"},sidebar:"sidebar",previous:{title:"Page.waitForNetworkIdle",permalink:"/15.4.0/api/puppeteer.page.waitfornetworkidle"},next:{title:"Page.waitForResponse",permalink:"/15.4.0/api/puppeteer.page.waitforresponse"}},l={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pagewaitforrequest-method"},"Page.waitForRequest() method"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  waitForRequest(\n    urlOrPredicate: string | ((req: HTTPRequest) => boolean | Promise<boolean>),\n    options?: {\n      timeout?: number;\n    }\n  ): Promise<HTTPRequest>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"urlOrPredicate"),(0,n.kt)("td",{parentName:"tr",align:null},"string ","|"," ((req: ",(0,n.kt)("a",{parentName:"td",href:"/15.4.0/api/puppeteer.httprequest"},"HTTPRequest"),") =",">"," boolean ","|"," Promise","<","boolean",">",")"),(0,n.kt)("td",{parentName:"tr",align:null},"A URL or predicate to wait for")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options"),(0,n.kt)("td",{parentName:"tr",align:null},"{ timeout?: number; }"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," Optional waiting parameters")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/15.4.0/api/puppeteer.httprequest"},"HTTPRequest"),">"),(0,n.kt)("p",null,"Promise which resolves to the matched response"),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"Optional Waiting Parameters have:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout"),": Maximum wait time in milliseconds, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"30")," seconds, pass ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," to disable the timeout. The default value can be changed by using the ",(0,n.kt)("a",{parentName:"li",href:"/15.4.0/api/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()")," method.")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const firstResponse = await page.waitForResponse(\n  'https://example.com/resource'\n);\nconst finalResponse = await page.waitForResponse(\n  response =>\n    response.url() === 'https://example.com' && response.status() === 200\n);\nconst finalResponse = await page.waitForResponse(async response => {\n  return (await response.text()).includes('<html>');\n});\nreturn finalResponse.ok();\n")))}m.isMDXComponent=!0}}]);