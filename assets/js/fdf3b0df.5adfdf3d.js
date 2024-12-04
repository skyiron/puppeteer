/*! For license information please see fdf3b0df.5adfdf3d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93124],{471:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"api/puppeteer.elementhandle.__","title":"ElementHandle.$$() method","description":"Queries the current element for all elements matching the given selector.","source":"@site/versioned_docs/version-23.10.1/api/puppeteer.elementhandle.__.md","sourceDirName":"api","slug":"/api/puppeteer.elementhandle.__","permalink":"/api/puppeteer.elementhandle.__","draft":false,"unlisted":false,"tags":[],"version":"23.10.1","frontMatter":{"sidebar_label":"ElementHandle.$$"},"sidebar":"api","previous":{"title":"ElementHandle.$","permalink":"/api/puppeteer.elementhandle._"},"next":{"title":"ElementHandle.$$eval","permalink":"/api/puppeteer.elementhandle.__eval"}}');var s=r(74848),l=r(28453);const a={sidebar_label:"ElementHandle.$$"},i="ElementHandle.$$() method",p={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function o(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"elementhandle-method",children:"ElementHandle.$$() method"})}),"\n",(0,s.jsx)(t.p,{children:"Queries the current element for all elements matching the given selector."}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class ElementHandle {\n  $$<Selector extends string>(\n    selector: Selector,\n    options?: QueryOptions,\n  ): Promise<Array<ElementHandle<NodeFor<Selector>>>>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"selector"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Selector"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#selectors",children:"selector"})," to query the page for. ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"CSS selectors"})," can be passed as-is and a ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#non-css-selectors",children:"Puppeteer-specific selector syntax"})," allows quering by ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#text-selectors--p-text",children:"text"}),", ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#aria-selectors--p-aria",children:"a11y role and name"}),", and ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath",children:"xpath"})," and ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom",children:"combining these queries across shadow roots"}),". Alternatively, you can specify the selector type using a ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#prefixed-selector-syntax",children:"prefix"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.queryoptions",children:"QueryOptions"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"(Optional)"})})})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(t.p,{children:["Promise<Array<",(0,s.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<",(0,s.jsx)(t.a,{href:"/api/puppeteer.nodefor",children:"NodeFor"}),"<Selector>>>>"]}),"\n",(0,s.jsxs)(t.p,{children:["An array of ",(0,s.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"element handles"})," that point to elements matching the given selector."]})]})}function c(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},21020:(e,t,r)=>{var n=r(96540),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,l={},d=null,o=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(o=t.ref),t)a.call(t,n)&&!p.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:s,type:e,key:d,ref:o,props:l,_owner:i.current}}t.Fragment=l,t.jsx=d,t.jsxs=d},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var n=r(96540);const s={},l=n.createContext(s);function a(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);