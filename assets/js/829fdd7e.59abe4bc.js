/*! For license information please see 829fdd7e.59abe4bc.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73004],{35043:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>d,metadata:()=>a,toc:()=>p});var n=t(74848),s=t(28453);const d={sidebar_label:"Keyboard.type"},i="Keyboard.type() method",a={id:"api/puppeteer.keyboard.type",title:"Keyboard.type() method",description:"Sends a keydown, keypress/input, and keyup event for each character in the text.",source:"@site/../docs/api/puppeteer.keyboard.type.md",sourceDirName:"api",slug:"/api/puppeteer.keyboard.type",permalink:"/next/api/puppeteer.keyboard.type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Keyboard.type"},sidebar:"api",previous:{title:"Keyboard.sendCharacter",permalink:"/next/api/puppeteer.keyboard.sendcharacter"},next:{title:"Keyboard.up",permalink:"/next/api/puppeteer.keyboard.up"}},o={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"keyboardtype-method",children:"Keyboard.type() method"})}),"\n",(0,n.jsxs)(r.p,{children:["Sends a ",(0,n.jsx)(r.code,{children:"keydown"}),", ",(0,n.jsx)(r.code,{children:"keypress"}),"/",(0,n.jsx)(r.code,{children:"input"}),", and ",(0,n.jsx)(r.code,{children:"keyup"})," event for each character in the text."]}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Keyboard {\n  abstract type(\n    text: string,\n    options?: Readonly<KeyboardTypeOptions>,\n  ): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"text"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"A text to type into a focused element."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"options"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Readonly<",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.keyboardtypeoptions",children:"KeyboardTypeOptions"}),">"]})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"(Optional)"})," An object of options. Accepts delay which, if specified, is the time to wait between ",(0,n.jsx)(r.code,{children:"keydown"})," and ",(0,n.jsx)(r.code,{children:"keyup"})," in milliseconds. Defaults to 0."]})})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["To press a special key, like ",(0,n.jsx)(r.code,{children:"Control"})," or ",(0,n.jsx)(r.code,{children:"ArrowDown"}),", use ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.keyboard.press",children:"Keyboard.press()"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Modifier keys DO NOT effect ",(0,n.jsx)(r.code,{children:"keyboard.type"}),". Holding down ",(0,n.jsx)(r.code,{children:"Shift"})," will not type the text in upper case."]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"await page.keyboard.type('Hello'); // Types instantly\nawait page.keyboard.type('World', {delay: 100}); // Types slower, like a user\n"})})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},21020:(e,r,t)=>{var n=t(96540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var n,d={},p=null,c=null;for(n in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,n)&&!o.hasOwnProperty(n)&&(d[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===d[n]&&(d[n]=r[n]);return{$$typeof:s,type:e,key:p,ref:c,props:d,_owner:a.current}}r.Fragment=d,r.jsx=p,r.jsxs=p},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(96540);const s={},d=n.createContext(s);function i(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);