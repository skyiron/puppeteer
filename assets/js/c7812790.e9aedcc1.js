"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[835835],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(r),m=n,w=d["".concat(s,".").concat(m)]||d[m]||c[m]||p;return r?a.createElement(w,o(o({ref:t},u),{},{components:r})):a.createElement(w,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var i=2;i<p;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},229950:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var a=r(487462),n=(r(667294),r(603905));const p={sidebar_label:"Browser"},o="Browser class",l={unversionedId:"api/puppeteer.browser",id:"version-15.3.1/api/puppeteer.browser",title:"Browser class",description:"A Browser is created when Puppeteer connects to a Chromium instance, either through PuppeteerNode.launch() or Puppeteer.connect().",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.browser.md",sourceDirName:"api",slug:"/api/puppeteer.browser",permalink:"/15.3.1/api/puppeteer.browser",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"Browser"},sidebar:"sidebar",previous:{title:"BoxModel.width",permalink:"/15.3.1/api/puppeteer.boxmodel.width"},next:{title:"Browser.browserContexts",permalink:"/15.3.1/api/puppeteer.browser.browsercontexts"}},s={},i=[{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Methods",id:"methods",level:2}],u={toc:i};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"browser-class"},"Browser class"),(0,n.kt)("p",null,"A Browser is created when Puppeteer connects to a Chromium instance, either through ",(0,n.kt)("a",{parentName:"p",href:"/15.3.1/api/puppeteer.puppeteernode.launch"},"PuppeteerNode.launch()")," or ",(0,n.kt)("a",{parentName:"p",href:"/15.3.1/api/puppeteer.puppeteer.connect"},"Puppeteer.connect()"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Browser extends EventEmitter\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends:")," ",(0,n.kt)("a",{parentName:"p",href:"/15.3.1/api/puppeteer.eventemitter"},"EventEmitter")),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"The Browser class extends from Puppeteer's ",(0,n.kt)("a",{parentName:"p",href:"/15.3.1/api/puppeteer.eventemitter"},"EventEmitter")," class and will emit various events which are documented in the ",(0,n.kt)("a",{parentName:"p",href:"/15.3.1/api/puppeteer.browseremittedevents"},"BrowserEmittedEvents")," enum."),(0,n.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.kt)("inlineCode",{parentName:"p"},"Browser")," class."),(0,n.kt)("h2",{id:"example-1"},"Example 1"),(0,n.kt)("p",null,"An example of using a ",(0,n.kt)("a",{parentName:"p",href:"/15.3.1/api/puppeteer.browser"},"Browser")," to create a ",(0,n.kt)("a",{parentName:"p",href:"/15.3.1/api/puppeteer.page"},"Page"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://example.com');\n  await browser.close();\n})();\n")),(0,n.kt)("h2",{id:"example-2"},"Example 2"),(0,n.kt)("p",null,"An example of disconnecting from and reconnecting to a ",(0,n.kt)("a",{parentName:"p",href:"/15.3.1/api/puppeteer.browser"},"Browser"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  // Store the endpoint to be able to reconnect to Chromium\n  const browserWSEndpoint = browser.wsEndpoint();\n  // Disconnect puppeteer from Chromium\n  browser.disconnect();\n\n  // Use the endpoint to reestablish a connection\n  const browser2 = await puppeteer.connect({browserWSEndpoint});\n  // Close Chromium\n  await browser2.close();\n})();\n")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.browser.browsercontexts"},"browserContexts()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Returns an array of all open browser contexts. In a newly created browser, this will return a single instance of ",(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.browsercontext"},"BrowserContext"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.browser.close"},"close()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Closes Chromium and all of its pages (if any were opened). The ",(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.browser"},"Browser")," object itself is considered to be disposed and cannot be used anymore.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.browser.createincognitobrowsercontext"},"createIncognitoBrowserContext(options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Creates a new incognito browser context. This won't share cookies/cache with other browser contexts.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.browser.defaultbrowsercontext"},"defaultBrowserContext()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Returns the default browser context. The default browser context cannot be closed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.browser.disconnect"},"disconnect()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Disconnects Puppeteer from the browser, but leaves the Chromium process running. After calling ",(0,n.kt)("code",null,"disconnect"),", the ",(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.browser"},"Browser")," object is considered disposed and cannot be used anymore.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.browser.isconnected"},"isConnected()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Indicates that the browser is connected.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.browser.newpage"},"newPage()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Promise which resolves to a new ",(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.page"},"Page")," object. The Page is created in a default browser context.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.browser.pages"},"pages()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"An array of all open pages inside the Browser.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.browser.process"},"process()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"The spawned browser process. Returns ",(0,n.kt)("code",null,"null")," if the browser instance was created with ",(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.puppeteer.connect"},"Puppeteer.connect()"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.browser.target"},"target()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"The target associated with the browser.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.browser.targets"},"targets()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"All active targets inside the Browser. In case of multiple browser contexts, returns an array with all the targets in all browser contexts.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.browser.useragent"},"userAgent()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"The browser's original user agent. Pages can override the browser user agent with ",(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.page.setuseragent"},"Page.setUserAgent()"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.browser.version"},"version()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"A string representing the browser name and version.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.browser.waitfortarget"},"waitForTarget(predicate, options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Searches for a target in all browser contexts.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.browser.wsendpoint"},"wsEndpoint()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"The browser websocket endpoint which can be used as an argument to ",(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.puppeteer.connect"},"Puppeteer.connect()"),".")))))}c.isMDXComponent=!0}}]);