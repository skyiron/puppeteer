"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[398017],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},561533:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(487462),n=(r(667294),r(603905));const i={sidebar_label:"Page.waitForFileChooser"},o="Page.waitForFileChooser() method",l={unversionedId:"api/puppeteer.page.waitforfilechooser",id:"version-15.3.1/api/puppeteer.page.waitforfilechooser",title:"Page.waitForFileChooser() method",description:"This method is typically coupled with an action that triggers file choosing.",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.page.waitforfilechooser.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforfilechooser",permalink:"/15.3.1/api/puppeteer.page.waitforfilechooser",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"Page.waitForFileChooser"},sidebar:"sidebar",previous:{title:"Page.viewport",permalink:"/15.3.1/api/puppeteer.page.viewport"},next:{title:"Page.waitForFrame",permalink:"/15.3.1/api/puppeteer.page.waitforframe"}},p={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pagewaitforfilechooser-method"},"Page.waitForFileChooser() method"),(0,n.kt)("p",null,"This method is typically coupled with an action that triggers file choosing."),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"This must be called before the file chooser is launched. It will not return a currently active file chooser."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  waitForFileChooser(options?: WaitTimeoutOptions): Promise<FileChooser>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.waittimeoutoptions"},"WaitTimeoutOptions")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/15.3.1/api/puppeteer.filechooser"},"FileChooser"),">"),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"In non-headless Chromium, this method results in the native file picker dialog ",(0,n.kt)("inlineCode",{parentName:"p"},"not showing up")," for the user."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"The following example clicks a button that issues a file chooser and then responds with ",(0,n.kt)("inlineCode",{parentName:"p"},"/tmp/myfile.pdf")," as if a user has selected this file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const [fileChooser] = await Promise.all([\n  page.waitForFileChooser(),\n  page.click('#upload-file-button'),\n  // some button that triggers file selection\n]);\nawait fileChooser.accept(['/tmp/myfile.pdf']);\n")))}m.isMDXComponent=!0}}]);