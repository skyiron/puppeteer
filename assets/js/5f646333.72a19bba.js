"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58581],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(r),c=a,g=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},186315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(487462),a=(r(667294),r(603905));const o={sidebar_label:"Page.goto"},i="Page.goto() method",p={unversionedId:"api/puppeteer.page.goto",id:"api/puppeteer.page.goto",title:"Page.goto() method",description:"Signature:",source:"@site/../docs/api/puppeteer.page.goto.md",sourceDirName:"api",slug:"/api/puppeteer.page.goto",permalink:"/next/api/puppeteer.page.goto",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.goto"},sidebar:"sidebar",previous:{title:"Page.goForward",permalink:"/next/api/puppeteer.page.goforward"},next:{title:"Page.hover",permalink:"/next/api/puppeteer.page.hover"}},l={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pagegoto-method"},"Page.goto() method"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  goto(\n    url: string,\n    options?: WaitForOptions & {\n      referer?: string;\n    }\n  ): Promise<HTTPResponse | null>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"URL to navigate page to. The URL should include scheme, e.g. ",(0,a.kt)("code",null,"https://"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/next/api/puppeteer.waitforoptions"},"WaitForOptions")," ","&"," { referer?: string; }"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," Navigation Parameter")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/next/api/puppeteer.httpresponse"},"HTTPResponse")," ","|"," null",">"),(0,a.kt)("p",null,"Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The argument ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," might have the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"timeout")," : Maximum navigation time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout. The default value can be changed by using the ",(0,a.kt)("a",{parentName:"p",href:"/next/api/puppeteer.page.setdefaultnavigationtimeout"},"Page.setDefaultNavigationTimeout()")," or ",(0,a.kt)("a",{parentName:"p",href:"/next/api/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()")," methods.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"waitUntil"),":When to consider navigation succeeded, defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"load"),". Given an array of event strings, navigation is considered to be successful after all events have been fired. Events can be either:",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"p"},"load")," : consider navigation to be finished when the load event is fired.",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"p"},"domcontentloaded")," : consider navigation to be finished when the DOMContentLoaded event is fired.",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"p"},"networkidle0")," : consider navigation to be finished when there are no more than 0 network connections for at least ",(0,a.kt)("inlineCode",{parentName:"p"},"500")," ms.",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"p"},"networkidle2")," : consider navigation to be finished when there are no more than 2 network connections for at least ",(0,a.kt)("inlineCode",{parentName:"p"},"500")," ms.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"referer")," : Referer header value. If provided it will take preference over the referer header value set by ",(0,a.kt)("a",{parentName:"p",href:"/next/api/puppeteer.page.setextrahttpheaders"},"page.setExtraHTTPHeaders()"),"."))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"page.goto")," will throw an error if: - there's an SSL error (e.g. in case of self-signed certificates). - target URL is invalid. - the timeout is exceeded during navigation. - the remote server does not respond or is unreachable. - the main resource failed to load."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"page.goto"),' will not throw an error when any valid HTTP status code is returned by the remote server, including 404 "Not Found" and 500 "Internal Server Error". The status code for such responses can be retrieved by calling response.status().'),(0,a.kt)("p",null,"NOTE: ",(0,a.kt)("inlineCode",{parentName:"p"},"page.goto")," either throws an error or returns a main resource response. The only exceptions are navigation to about:blank or navigation to the same URL with a different hash, which would succeed and return null."),(0,a.kt)("p",null,"NOTE: Headless mode doesn't support navigation to a PDF document. See the ",(0,a.kt)("a",{parentName:"p",href:"https://bugs.chromium.org/p/chromium/issues/detail?id=761295"},"upstream issue"),"."),(0,a.kt)("p",null,"Shortcut for ",(0,a.kt)("a",{parentName:"p",href:"/next/api/puppeteer.frame.goto"},"page.mainFrame().goto(url, options)"),"."))}d.isMDXComponent=!0}}]);