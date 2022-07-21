"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[655635],{603905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),y=a,m=c["".concat(i,".").concat(y)]||c[y]||u[y]||p;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},541469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var n=r(487462),a=(r(667294),r(603905));const p={sidebar_label:"Keyboard.type"},o="Keyboard.type() method",l={unversionedId:"api/puppeteer.keyboard.type",id:"version-15.3.2/api/puppeteer.keyboard.type",title:"Keyboard.type() method",description:"Sends a keydown, keypress/input, and keyup event for each character in the text.",source:"@site/versioned_docs/version-15.3.2/api/puppeteer.keyboard.type.md",sourceDirName:"api",slug:"/api/puppeteer.keyboard.type",permalink:"/15.3.2/api/puppeteer.keyboard.type",draft:!1,tags:[],version:"15.3.2",frontMatter:{sidebar_label:"Keyboard.type"},sidebar:"sidebar",previous:{title:"Keyboard.sendCharacter",permalink:"/15.3.2/api/puppeteer.keyboard.sendcharacter"},next:{title:"Keyboard.up",permalink:"/15.3.2/api/puppeteer.keyboard.up"}},i={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"keyboardtype-method"},"Keyboard.type() method"),(0,a.kt)("p",null,"Sends a ",(0,a.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"keypress"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"input"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"keyup")," event for each character in the text."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Keyboard {\n  type(\n    text: string,\n    options?: {\n      delay?: number;\n    }\n  ): Promise<void>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"text"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"A text to type into a focused element.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},"{ delay?: number; }"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," An object of options. Accepts delay which, if specified, is the time to wait between ",(0,a.kt)("code",null,"keydown")," and ",(0,a.kt)("code",null,"keyup")," in milliseconds. Defaults to 0.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"To press a special key, like ",(0,a.kt)("inlineCode",{parentName:"p"},"Control")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", use ",(0,a.kt)("a",{parentName:"p",href:"/15.3.2/api/puppeteer.keyboard.press"},"Keyboard.press()"),"."),(0,a.kt)("p",null,"Modifier keys DO NOT effect ",(0,a.kt)("inlineCode",{parentName:"p"},"keyboard.type"),". Holding down ",(0,a.kt)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await page.keyboard.type('Hello'); // Types instantly\nawait page.keyboard.type('World', {delay: 100}); // Types slower, like a user\n")))}u.isMDXComponent=!0}}]);