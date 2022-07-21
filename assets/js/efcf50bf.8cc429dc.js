"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[995695],{603905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(667294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(t),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},737472:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=t(487462),a=(t(667294),t(603905));const o={sidebar_label:"errors"},i="errors variable",p={unversionedId:"api/puppeteer.errors",id:"version-15.3.1/api/puppeteer.errors",title:"errors variable",description:"Puppeteer methods might throw errors if they are unable to fulfill a request. For example, page.waitForSelector(selector[, options]) might fail if the selector doesn't match any nodes during the given timeframe.",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.errors.md",sourceDirName:"api",slug:"/api/puppeteer.errors",permalink:"/15.3.1/api/puppeteer.errors",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"errors"},sidebar:"sidebar",previous:{title:"devices",permalink:"/15.3.1/api/puppeteer.devices"},next:{title:"executablePath",permalink:"/15.3.1/api/puppeteer.executablepath"}},l={},s=[{value:"Example",id:"example",level:2}],c={toc:s};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"errors-variable"},"errors variable"),(0,a.kt)("p",null,"Puppeteer methods might throw errors if they are unable to fulfill a request. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"page.waitForSelector(selector[, options])")," might fail if the selector doesn't match any nodes during the given timeframe."),(0,a.kt)("p",null,"For certain types of errors Puppeteer uses specific error classes. These classes are available via ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer.errors"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"errors: PuppeteerErrors;\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"An example of handling a timeout error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n  await page.waitForSelector('.foo');\n} catch (e) {\n  if (e instanceof puppeteer.errors.TimeoutError) {\n    // Do something if this is a timeout.\n  }\n}\n")))}u.isMDXComponent=!0}}]);