/*! For license information please see 6f6a429f.c84272f9.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[135],{84248:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>h,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"api/puppeteer.touchscreen","title":"Touchscreen class","description":"The Touchscreen class exposes touchscreen events.","source":"@site/versioned_docs/version-23.11.0/api/puppeteer.touchscreen.md","sourceDirName":"api","slug":"/api/puppeteer.touchscreen","permalink":"/api/puppeteer.touchscreen","draft":false,"unlisted":false,"tags":[],"version":"23.11.0","frontMatter":{"sidebar_label":"Touchscreen"},"sidebar":"api","previous":{"title":"Mouse.wheel","permalink":"/api/puppeteer.mouse.wheel"},"next":{"title":"Touchscreen.tap","permalink":"/api/puppeteer.touchscreen.tap"}}');var c=s(74848),n=s(28453);const o={sidebar_label:"Touchscreen"},h="Touchscreen class",i={},d=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.header,{children:(0,c.jsx)(t.h1,{id:"touchscreen-class",children:"Touchscreen class"})}),"\n",(0,c.jsx)(t.p,{children:"The Touchscreen class exposes touchscreen events."}),"\n",(0,c.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-typescript",children:"export declare abstract class Touchscreen\n"})}),"\n",(0,c.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,c.jsxs)(t.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,c.jsx)(t.code,{children:"Touchscreen"})," class."]}),"\n",(0,c.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,c.jsxs)("table",{children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:(0,c.jsx)(t.p,{children:"Method"})}),(0,c.jsx)("th",{children:(0,c.jsx)(t.p,{children:"Modifiers"})}),(0,c.jsx)("th",{children:(0,c.jsx)(t.p,{children:"Description"})})]})}),(0,c.jsxs)("tbody",{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:(0,c.jsx)("span",{id:"tap",children:(0,c.jsx)(t.a,{href:"/api/puppeteer.touchscreen.tap",children:"tap(x, y)"})})}),(0,c.jsx)("td",{}),(0,c.jsx)("td",{children:(0,c.jsxs)(t.p,{children:["Dispatches a ",(0,c.jsx)(t.code,{children:"touchstart"})," and ",(0,c.jsx)(t.code,{children:"touchend"})," event."]})})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:(0,c.jsx)("span",{id:"touchend",children:(0,c.jsx)(t.a,{href:"/api/puppeteer.touchscreen.touchend",children:"touchEnd()"})})}),(0,c.jsx)("td",{}),(0,c.jsx)("td",{children:(0,c.jsxs)(t.p,{children:["Dispatches a ",(0,c.jsx)(t.code,{children:"touchend"})," event on the first touch that is active."]})})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:(0,c.jsx)("span",{id:"touchmove",children:(0,c.jsx)(t.a,{href:"/api/puppeteer.touchscreen.touchmove",children:"touchMove(x, y)"})})}),(0,c.jsx)("td",{}),(0,c.jsxs)("td",{children:[(0,c.jsxs)(t.p,{children:["Dispatches a ",(0,c.jsx)(t.code,{children:"touchMove"})," event on the first touch that is active."]}),(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"Remarks:"})}),(0,c.jsxs)(t.p,{children:["Not every ",(0,c.jsx)(t.code,{children:"touchMove"})," call results in a ",(0,c.jsx)(t.code,{children:"touchmove"})," event being emitted, depending on the browser's optimizations. For example, Chrome ",(0,c.jsx)(t.a,{href:"https://developer.chrome.com/blog/a-more-compatible-smoother-touch/#chromes-new-model-the-throttled-async-touchmove-model",children:"throttles"})," touch move events."]})]})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:(0,c.jsx)("span",{id:"touchstart",children:(0,c.jsx)(t.a,{href:"/api/puppeteer.touchscreen.touchstart",children:"touchStart(x, y)"})})}),(0,c.jsx)("td",{}),(0,c.jsx)("td",{children:(0,c.jsxs)(t.p,{children:["Dispatches a ",(0,c.jsx)(t.code,{children:"touchstart"})," event."]})})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},21020:(e,t,s)=>{var r=s(96540),c=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,h=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var r,n={},d=null,a=null;for(r in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)o.call(t,r)&&!i.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:c,type:e,key:d,ref:a,props:n,_owner:h.current}}t.Fragment=n,t.jsx=d,t.jsxs=d},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>h});var r=s(96540);const c={},n=r.createContext(c);function o(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);