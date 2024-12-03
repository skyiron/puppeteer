/*! For license information please see 3e0d5009.6060b2da.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74221],{73186:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"api/puppeteer.mouse.drop","title":"Mouse.drop() method","description":"Performs a dragenter, dragover, and drop in sequence.","source":"@site/versioned_docs/version-23.10.0/api/puppeteer.mouse.drop.md","sourceDirName":"api","slug":"/api/puppeteer.mouse.drop","permalink":"/api/puppeteer.mouse.drop","draft":false,"unlisted":false,"tags":[],"version":"23.10.0","frontMatter":{"sidebar_label":"Mouse.drop"},"sidebar":"api","previous":{"title":"Mouse.dragOver","permalink":"/api/puppeteer.mouse.dragover"},"next":{"title":"Mouse.move","permalink":"/api/puppeteer.mouse.move"}}');var s=t(74848),o=t(28453);const a={sidebar_label:"Mouse.drop"},i="Mouse.drop() method",d={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"mousedrop-method",children:"Mouse.drop() method"})}),"\n",(0,s.jsx)(r.p,{children:"Performs a dragenter, dragover, and drop in sequence."}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Mouse {\n  abstract drop(target: Point, data: Protocol.Input.DragData): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"target"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.point",children:"Point"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"point to drop on"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"data"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Protocol.Input.DragData"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"drag data containing items and operations mask"})})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<void>"})]})}function l(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},21020:(e,r,t)=>{var n=t(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var n,o={},p=null,c=null;for(n in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(c=r.ref),r)a.call(r,n)&&!d.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:p,ref:c,props:o,_owner:i.current}}r.Fragment=o,r.jsx=p,r.jsxs=p},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var n=t(96540);const s={},o=n.createContext(s);function a(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);