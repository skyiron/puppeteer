"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51250],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),h=a,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||p;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<p;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},851289:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>u});var n=r(487462),a=(r(667294),r(603905));const p={sidebar_label:"PuppeteerNode.launch"},o="PuppeteerNode.launch() method",i={unversionedId:"api/puppeteer.puppeteernode.launch",id:"version-15.4.2/api/puppeteer.puppeteernode.launch",title:"PuppeteerNode.launch() method",description:"Launches puppeteer and launches a browser instance with given arguments and options when specified.",source:"@site/versioned_docs/version-15.4.2/api/puppeteer.puppeteernode.launch.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteernode.launch",permalink:"/api/puppeteer.puppeteernode.launch",draft:!1,tags:[],version:"15.4.2",frontMatter:{sidebar_label:"PuppeteerNode.launch"},sidebar:"sidebar",previous:{title:"PuppeteerNode.executablePath",permalink:"/api/puppeteer.puppeteernode.executablepath"},next:{title:"PuppeteerNode.product",permalink:"/api/puppeteer.puppeteernode.product"}},l={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"puppeteernodelaunch-method"},"PuppeteerNode.launch() method"),(0,a.kt)("p",null,"Launches puppeteer and launches a browser instance with given arguments and options when specified."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class PuppeteerNode {\n  launch(options?: PuppeteerLaunchOptions): Promise<Browser>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteerlaunchoptions"},"PuppeteerLaunchOptions")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," Set of configurable options to set on the browser.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.browser"},"Browser"),">"),(0,a.kt)("p",null,"Promise which resolves to browser instance."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"*","*","NOTE","*","*"," Puppeteer can also be used to control the Chrome browser, but it works best with the version of Chromium it is bundled with. There is no guarantee it will work with any other version. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"executablePath")," option with extreme caution. If Google Chrome (rather than Chromium) is preferred, a ",(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/chrome/browser/canary.html"},"Chrome Canary")," or ",(0,a.kt)("a",{parentName:"p",href:"https://www.chromium.org/getting-involved/dev-channel"},"Dev Channel")," build is suggested. In ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer.launch([options])"),", any mention of Chromium also applies to Chrome. See ",(0,a.kt)("a",{parentName:"p",href:"https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/"},"this article")," for a description of the differences between Chromium and Chrome. ",(0,a.kt)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.md"},"This article")," describes some differences for Linux users."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"ignoreDefaultArgs")," to filter out ",(0,a.kt)("inlineCode",{parentName:"p"},"--mute-audio")," from default arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const browser = await puppeteer.launch({\n  ignoreDefaultArgs: ['--mute-audio'],\n});\n")))}c.isMDXComponent=!0}}]);