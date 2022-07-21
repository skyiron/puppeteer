"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[930530],{603905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(h,p(p({ref:t},s),{},{components:a})):n.createElement(h,p({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var u=2;u<l;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},921328:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(487462),r=(a(667294),a(603905));const l={sidebar_label:"JSHandle.evaluateHandle"},p="JSHandle.evaluateHandle() method",i={unversionedId:"api/puppeteer.jshandle.evaluatehandle",id:"api/puppeteer.jshandle.evaluatehandle",title:"JSHandle.evaluateHandle() method",description:"This method passes this handle as the first argument to pageFunction.",source:"@site/../docs/api/puppeteer.jshandle.evaluatehandle.md",sourceDirName:"api",slug:"/api/puppeteer.jshandle.evaluatehandle",permalink:"/next/api/puppeteer.jshandle.evaluatehandle",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"JSHandle.evaluateHandle"},sidebar:"sidebar",previous:{title:"JSHandle.evaluate",permalink:"/next/api/puppeteer.jshandle.evaluate"},next:{title:"JSHandle.executionContext",permalink:"/next/api/puppeteer.jshandle.executioncontext"}},o={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jshandleevaluatehandle-method"},"JSHandle.evaluateHandle() method"),(0,r.kt)("p",null,"This method passes this handle as the first argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class JSHandle {\n  evaluateHandle<\n    Params extends unknown[],\n    Func extends EvaluateFunc<[this, ...Params]> = EvaluateFunc<\n      [this, ...Params]\n    >\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,r.kt)("td",{parentName:"tr",align:null},"Func ","|"," string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"args"),(0,r.kt)("td",{parentName:"tr",align:null},"Params"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<",(0,r.kt)("a",{parentName:"p",href:"/next/api/puppeteer.handlefor"},"HandleFor"),"<","Awaited","<","ReturnType","<","Func",">",">",">",">"),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"The only difference between ",(0,r.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluate")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," is that ",(0,r.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns an in-page object (JSHandle)."),(0,r.kt)("p",null,"If the function passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns a Promise, then ",(0,r.kt)("inlineCode",{parentName:"p"},"evaluateHandle.evaluateHandle")," waits for the promise to resolve and returns its value."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/next/api/puppeteer.page.evaluatehandle"},"Page.evaluateHandle()")," for more details."))}d.isMDXComponent=!0}}]);