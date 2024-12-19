/*! For license information please see d75b93e5.5236851b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87315],{78370:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"api/puppeteer.devicerequestprompt","title":"DeviceRequestPrompt class","description":"Device request prompts let you respond to the page requesting for a device through an API like WebBluetooth.","source":"@site/versioned_docs/version-23.11.1/api/puppeteer.devicerequestprompt.md","sourceDirName":"api","slug":"/api/puppeteer.devicerequestprompt","permalink":"/api/puppeteer.devicerequestprompt","draft":false,"unlisted":false,"tags":[],"version":"23.11.1","frontMatter":{"sidebar_label":"DeviceRequestPrompt"},"sidebar":"api","previous":{"title":"Device","permalink":"/api/puppeteer.device"},"next":{"title":"DeviceRequestPrompt.cancel","permalink":"/api/puppeteer.devicerequestprompt.cancel"}}');var i=t(74848),n=t(28453);const c={sidebar_label:"DeviceRequestPrompt"},d="DeviceRequestPrompt class",p={},l=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function o(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"devicerequestprompt-class",children:"DeviceRequestPrompt class"})}),"\n",(0,i.jsx)(r.p,{children:"Device request prompts let you respond to the page requesting for a device through an API like WebBluetooth."}),"\n",(0,i.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"export declare class DeviceRequestPrompt\n"})}),"\n",(0,i.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"DeviceRequestPrompt"})," instances are returned via the ",(0,i.jsx)(r.a,{href:"/api/puppeteer.page.waitfordeviceprompt",children:"Page.waitForDevicePrompt()"})," method."]}),"\n",(0,i.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,i.jsx)(r.code,{children:"DeviceRequestPrompt"})," class."]}),"\n",(0,i.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"const [devicePrompt] = Promise.all([\n  page.waitForDevicePrompt(),\n  page.click('#connect-bluetooth'),\n]);\nawait devicePrompt.select(\n  await devicePrompt.waitForDevice(({name}) => name.includes('My Device')),\n);\n"})}),"\n",(0,i.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Property"})}),(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Modifiers"})}),(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Description"})})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"devices",children:"devices"})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/api/puppeteer.devicerequestpromptdevice",children:"DeviceRequestPromptDevice"}),"[]"]})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"Current list of selectable devices."})})]})})]}),"\n",(0,i.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Method"})}),(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Modifiers"})}),(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Description"})})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"cancel",children:(0,i.jsx)(r.a,{href:"/api/puppeteer.devicerequestprompt.cancel",children:"cancel()"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"Cancel the prompt."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"select",children:(0,i.jsx)(r.a,{href:"/api/puppeteer.devicerequestprompt.select",children:"select(device)"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"Select a device in the prompt's list."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"waitfordevice",children:(0,i.jsx)(r.a,{href:"/api/puppeteer.devicerequestprompt.waitfordevice",children:"waitForDevice(filter, options)"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"Resolve to the first device in the prompt matching a filter."})})]})]})]})]})}function a(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},21020:(e,r,t)=>{var s=t(96540),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var s,n={},l=null,o=null;for(s in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(o=r.ref),r)c.call(r,s)&&!p.hasOwnProperty(s)&&(n[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===n[s]&&(n[s]=r[s]);return{$$typeof:i,type:e,key:l,ref:o,props:n,_owner:d.current}}r.Fragment=n,r.jsx=l,r.jsxs=l},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>d});var s=t(96540);const i={},n=s.createContext(i);function c(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);