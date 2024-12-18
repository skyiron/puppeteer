/*! For license information please see 59670ea1.949dc026.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3219],{90177:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"api/puppeteer.page.select","title":"Page.select() method","description":"Triggers a change and input event once all the provided options have been selected. If there\'s no ` element matching selector`, the method throws an error.","source":"@site/versioned_docs/version-23.11.0/api/puppeteer.page.select.md","sourceDirName":"api","slug":"/api/puppeteer.page.select","permalink":"/api/puppeteer.page.select","draft":false,"unlisted":false,"tags":[],"version":"23.11.0","frontMatter":{"sidebar_label":"Page.select"},"sidebar":"api","previous":{"title":"Page.screenshot","permalink":"/api/puppeteer.page.screenshot"},"next":{"title":"Page.setBypassCSP","permalink":"/api/puppeteer.page.setbypasscsp"}}');var n=s(74848),a=s(28453);const i={sidebar_label:"Page.select"},l="Page.select() method",c={},o=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"pageselect-method",children:"Page.select() method"})}),"\n",(0,n.jsxs)(t.p,{children:["Triggers a ",(0,n.jsx)(t.code,{children:"change"})," and ",(0,n.jsx)(t.code,{children:"input"})," event once all the provided options have been selected. If there's no ",(0,n.jsx)(t.code,{children:"<select>"})," element matching ",(0,n.jsx)(t.code,{children:"selector"}),", the method throws an error."]}),"\n",(0,n.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  select(selector: string, ...values: string[]): Promise<string[]>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"selector"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#selectors",children:"selector"})," to query the page for. ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"CSS selectors"})," can be passed as-is and a ",(0,n.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#non-css-selectors",children:"Puppeteer-specific selector syntax"})," allows quering by ",(0,n.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#text-selectors--p-text",children:"text"}),", ",(0,n.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#aria-selectors--p-aria",children:"a11y role and name"}),", and ",(0,n.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath",children:"xpath"})," and ",(0,n.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom",children:"combining these queries across shadow roots"}),". Alternatively, you can specify the selector type using a ",(0,n.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#prefixed-selector-syntax",children:"prefix"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"values"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"string[]"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:["Values of options to select. If the ",(0,n.jsx)(t.code,{children:"<select>"})," has the ",(0,n.jsx)(t.code,{children:"multiple"})," attribute, all values are considered, otherwise only the first one is taken into account."]})})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<string[]>"}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["Shortcut for ",(0,n.jsx)(t.a,{href:"/api/puppeteer.frame.select",children:"page.mainFrame().select()"})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"page.select('select#colors', 'blue'); // single selection\npage.select('select#colors', 'red', 'green', 'blue'); // multiple selections\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},21020:(e,t,s)=>{var r=s(96540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,s){var r,a={},o=null,p=null;for(r in void 0!==s&&(o=""+s),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:n,type:e,key:o,ref:p,props:a,_owner:l.current}}t.Fragment=a,t.jsx=o,t.jsxs=o},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var r=s(96540);const n={},a=r.createContext(n);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);