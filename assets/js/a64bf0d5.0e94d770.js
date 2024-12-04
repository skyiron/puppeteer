/*! For license information please see a64bf0d5.0e94d770.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42127],{4370:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"api/puppeteer.browsercontext.waitfortarget","title":"BrowserContext.waitForTarget() method","description":"Waits until a target matching the given predicate appears and returns it.","source":"@site/versioned_docs/version-23.10.1/api/puppeteer.browsercontext.waitfortarget.md","sourceDirName":"api","slug":"/api/puppeteer.browsercontext.waitfortarget","permalink":"/api/puppeteer.browsercontext.waitfortarget","draft":false,"unlisted":false,"tags":[],"version":"23.10.1","frontMatter":{"sidebar_label":"BrowserContext.waitForTarget"},"sidebar":"api","previous":{"title":"BrowserContext.targets","permalink":"/api/puppeteer.browsercontext.targets"},"next":{"title":"Page","permalink":"/api/puppeteer.page"}}');var a=t(74848),s=t(28453);const i={sidebar_label:"BrowserContext.waitForTarget"},o="BrowserContext.waitForTarget() method",p={},l=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"browsercontextwaitfortarget-method",children:"BrowserContext.waitForTarget() method"})}),"\n",(0,a.jsxs)(r.p,{children:["Waits until a ",(0,a.jsx)(r.a,{href:"/api/puppeteer.target",children:"target"})," matching the given ",(0,a.jsx)(r.code,{children:"predicate"})," appears and returns it."]}),"\n",(0,a.jsxs)(r.p,{children:["This will look all open ",(0,a.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"class BrowserContext {\n  waitForTarget(\n    predicate: (x: Target) => boolean | Promise<boolean>,\n    options?: WaitForTargetOptions,\n  ): Promise<Target>;\n}\n"})}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Parameter"})}),(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Type"})}),(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Description"})})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:"predicate"})}),(0,a.jsx)("td",{children:(0,a.jsxs)(r.p,{children:["(x: ",(0,a.jsx)(r.a,{href:"/api/puppeteer.target",children:"Target"}),") => boolean | Promise<boolean>"]})}),(0,a.jsx)("td",{})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:"options"})}),(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"/api/puppeteer.waitfortargetoptions",children:"WaitForTargetOptions"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:(0,a.jsx)(r.em,{children:"(Optional)"})})})]})]})]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(r.p,{children:["Promise<",(0,a.jsx)(r.a,{href:"/api/puppeteer.target",children:"Target"}),">"]}),"\n",(0,a.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(r.p,{children:["Finding a target for a page opened via ",(0,a.jsx)(r.code,{children:"window.open"}),":"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-ts",children:"await page.evaluate(() => window.open('https://www.example.com/'));\nconst newWindowTarget = await browserContext.waitForTarget(\n  target => target.url() === 'https://www.example.com/',\n);\n"})})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},21020:(e,r,t)=>{var n=t(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,s={},l=null,c=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,n)&&!p.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:a,type:e,key:l,ref:c,props:s,_owner:o.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var n=t(96540);const a={},s=n.createContext(a);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);