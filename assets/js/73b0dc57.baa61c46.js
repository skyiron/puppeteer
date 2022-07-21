"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[866852],{603905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>m});var n=t(667294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),o=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},s=function(e){var a=o(e.components);return n.createElement(u.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=o(t),m=r,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return t?n.createElement(g,p(p({ref:a},s),{},{components:t})):n.createElement(g,p({ref:a},s))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=c;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=t[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},377406:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=t(487462),r=(t(667294),t(603905));const l={sidebar_label:"Page.evaluateHandle"},p="Page.evaluateHandle() method",i={unversionedId:"api/puppeteer.page.evaluatehandle",id:"version-15.4.0/api/puppeteer.page.evaluatehandle",title:"Page.evaluateHandle() method",description:"Signature:",source:"@site/versioned_docs/version-15.4.0/api/puppeteer.page.evaluatehandle.md",sourceDirName:"api",slug:"/api/puppeteer.page.evaluatehandle",permalink:"/15.4.0/api/puppeteer.page.evaluatehandle",draft:!1,tags:[],version:"15.4.0",frontMatter:{sidebar_label:"Page.evaluateHandle"},sidebar:"sidebar",previous:{title:"Page.evaluate",permalink:"/15.4.0/api/puppeteer.page.evaluate"},next:{title:"Page.evaluateOnNewDocument",permalink:"/15.4.0/api/puppeteer.page.evaluateonnewdocument"}},u={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}],s={toc:o};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pageevaluatehandle-method"},"Page.evaluateHandle() method"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  evaluateHandle<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,r.kt)("td",{parentName:"tr",align:null},"Func ","|"," string"),(0,r.kt)("td",{parentName:"tr",align:null},"a function that is run within the page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"args"),(0,r.kt)("td",{parentName:"tr",align:null},"Params"),(0,r.kt)("td",{parentName:"tr",align:null},"arguments to be passed to the pageFunction")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<",(0,r.kt)("a",{parentName:"p",href:"/15.4.0/api/puppeteer.handlefor"},"HandleFor"),"<","Awaited","<","ReturnType","<","Func",">",">",">",">"),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"The only difference between ",(0,r.kt)("a",{parentName:"p",href:"/15.4.0/api/puppeteer.page.evaluate"},"page.evaluate")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"page.evaluateHandle")," is that ",(0,r.kt)("inlineCode",{parentName:"p"},"evaluateHandle")," will return the value wrapped in an in-page object."),(0,r.kt)("p",null,"If the function passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"page.evaluteHandle")," returns a Promise, the function will wait for the promise to resolve and return its value."),(0,r.kt)("p",null,"You can pass a string instead of a function (although functions are recommended as they are easier to debug and use with TypeScript):"),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const aHandle = await page.evaluateHandle('document');\n")),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/15.4.0/api/puppeteer.jshandle"},"JSHandle")," instances can be passed as arguments to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const aHandle = await page.evaluateHandle(() => document.body);\nconst resultHandle = await page.evaluateHandle(body => body.innerHTML, aHandle);\nconsole.log(await resultHandle.jsonValue());\nawait resultHandle.dispose();\n")),(0,r.kt)("p",null,"Most of the time this function returns a ",(0,r.kt)("a",{parentName:"p",href:"/15.4.0/api/puppeteer.jshandle"},"JSHandle"),", but if ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction")," returns a reference to an element, you instead get an ",(0,r.kt)("a",{parentName:"p",href:"/15.4.0/api/puppeteer.elementhandle"},"ElementHandle")," back:"),(0,r.kt)("h2",{id:"example-3"},"Example 3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const button = await page.evaluateHandle(() =>\n  document.querySelector('button')\n);\n// can call `click` because `button` is an `ElementHandle`\nawait button.click();\n")),(0,r.kt)("p",null,"The TypeScript definitions assume that ",(0,r.kt)("inlineCode",{parentName:"p"},"evaluateHandle")," returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"JSHandle"),", but if you know it's going to return an ",(0,r.kt)("inlineCode",{parentName:"p"},"ElementHandle"),", pass it as the generic argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const button = await page.evaluateHandle<ElementHandle>(...);\n")))}d.isMDXComponent=!0}}]);