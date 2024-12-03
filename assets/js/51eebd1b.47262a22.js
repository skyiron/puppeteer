/*! For license information please see 51eebd1b.47262a22.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74196],{93447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"api/puppeteer.page.setdefaultnavigationtimeout","title":"Page.setDefaultNavigationTimeout() method","description":"This setting will change the default maximum navigation time for the following methods and related shortcuts:","source":"@site/versioned_docs/version-23.10.0/api/puppeteer.page.setdefaultnavigationtimeout.md","sourceDirName":"api","slug":"/api/puppeteer.page.setdefaultnavigationtimeout","permalink":"/api/puppeteer.page.setdefaultnavigationtimeout","draft":false,"unlisted":false,"tags":[],"version":"23.10.0","frontMatter":{"sidebar_label":"Page.setDefaultNavigationTimeout"},"sidebar":"api","previous":{"title":"Page.setCookie","permalink":"/api/puppeteer.page.setcookie"},"next":{"title":"Page.setDefaultTimeout","permalink":"/api/puppeteer.page.setdefaulttimeout"}}');var r=n(74848),a=n(28453);const s={sidebar_label:"Page.setDefaultNavigationTimeout"},o="Page.setDefaultNavigationTimeout() method",l={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"pagesetdefaultnavigationtimeout-method",children:"Page.setDefaultNavigationTimeout() method"})}),"\n",(0,r.jsx)(t.p,{children:"This setting will change the default maximum navigation time for the following methods and related shortcuts:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.page.goback",children:"page.goBack(options)"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.page.goforward",children:"page.goForward(options)"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.page.goto",children:"page.goto(url,options)"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.page.reload",children:"page.reload(options)"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.page.setcontent",children:"page.setContent(html,options)"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.page.waitfornavigation",children:"page.waitForNavigation(options)"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract setDefaultNavigationTimeout(timeout: number): void;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"timeout"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"number"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Maximum navigation time in milliseconds."})})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"void"})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var i=n(96540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var i,a={},p=null,d=null;for(i in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,i)&&!l.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:r,type:e,key:p,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=p,t.jsxs=p},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);