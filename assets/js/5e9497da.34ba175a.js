/*! For license information please see 5e9497da.34ba175a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21659],{71061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"api/puppeteer.elementhandle.waitforselector","title":"ElementHandle.waitForSelector() method","description":"Wait for an element matching the given selector to appear in the current element.","source":"@site/versioned_docs/version-23.10.0/api/puppeteer.elementhandle.waitforselector.md","sourceDirName":"api","slug":"/api/puppeteer.elementhandle.waitforselector","permalink":"/api/puppeteer.elementhandle.waitforselector","draft":false,"unlisted":false,"tags":[],"version":"23.10.0","frontMatter":{"sidebar_label":"ElementHandle.waitForSelector"},"sidebar":"api","previous":{"title":"ElementHandle.uploadFile","permalink":"/api/puppeteer.elementhandle.uploadfile"},"next":{"title":"HTTPRequest","permalink":"/api/puppeteer.httprequest"}}');var l=n(74848),o=n(28453);const i={sidebar_label:"ElementHandle.waitForSelector"},s="ElementHandle.waitForSelector() method",a={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"elementhandlewaitforselector-method",children:"ElementHandle.waitForSelector() method"})}),"\n",(0,l.jsx)(t.p,{children:"Wait for an element matching the given selector to appear in the current element."}),"\n",(0,l.jsxs)(t.p,{children:["Unlike ",(0,l.jsx)(t.a,{href:"/api/puppeteer.frame.waitforselector",children:"Frame.waitForSelector()"}),", this method does not work across navigations or if the element is detached from DOM."]}),"\n",(0,l.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-typescript",children:"class ElementHandle {\n  waitForSelector<Selector extends string>(\n    selector: Selector,\n    options?: WaitForSelectorOptions,\n  ): Promise<ElementHandle<NodeFor<Selector>> | null>;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:(0,l.jsx)(t.p,{children:"Parameter"})}),(0,l.jsx)("th",{children:(0,l.jsx)(t.p,{children:"Type"})}),(0,l.jsx)("th",{children:(0,l.jsx)(t.p,{children:"Description"})})]})}),(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(t.p,{children:"selector"})}),(0,l.jsx)("td",{children:(0,l.jsx)(t.p,{children:"Selector"})}),(0,l.jsx)("td",{children:(0,l.jsx)(t.p,{children:"The selector to query and wait for."})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(t.p,{children:"options"})}),(0,l.jsx)("td",{children:(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"/api/puppeteer.waitforselectoroptions",children:"WaitForSelectorOptions"})})}),(0,l.jsx)("td",{children:(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.em,{children:"(Optional)"})," Options for customizing waiting behavior."]})})]})]})]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,l.jsxs)(t.p,{children:["Promise<",(0,l.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<",(0,l.jsx)(t.a,{href:"/api/puppeteer.nodefor",children:"NodeFor"}),"<Selector>> | null>"]}),"\n",(0,l.jsx)(t.p,{children:"An element matching the given selector."}),"\n",(0,l.jsx)(t.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,l.jsx)(t.p,{children:"Throws if an element matching the given selector doesn't appear."}),"\n",(0,l.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  let currentURL;\n  page\n    .mainFrame()\n    .waitForSelector('img')\n    .then(() => console.log('First URL with image: ' + currentURL));\n\n  for (currentURL of [\n    'https://example.com',\n    'https://google.com',\n    'https://bbc.com',\n  ]) {\n    await page.goto(currentURL);\n  }\n  await browser.close();\n})();\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},21020:(e,t,n)=>{var r=n(96540),l=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,p=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,r)&&!a.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:l,type:e,key:c,ref:p,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(96540);const l={},o=r.createContext(l);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);