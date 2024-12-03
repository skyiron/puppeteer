/*! For license information please see 4311faa3.9504821e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37405],{68579:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"api/puppeteer.configuration","title":"Configuration interface","description":"Defines options to configure Puppeteer\'s behavior during installation and runtime.","source":"@site/versioned_docs/version-23.10.0/api/puppeteer.configuration.md","sourceDirName":"api","slug":"/api/puppeteer.configuration","permalink":"/api/puppeteer.configuration","draft":false,"unlisted":false,"tags":[],"version":"23.10.0","frontMatter":{"sidebar_label":"Configuration"},"sidebar":"api","previous":{"title":"CommonEventEmitter.removeAllListeners","permalink":"/api/puppeteer.commoneventemitter.removealllisteners"},"next":{"title":"connect","permalink":"/api/puppeteer.connect"}}');var s=n(74848),d=n(28453);const t={sidebar_label:"Configuration"},c="Configuration interface",l={},o=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"configuration-interface",children:"Configuration interface"})}),"\n",(0,s.jsx)(r.p,{children:"Defines options to configure Puppeteer's behavior during installation and runtime."}),"\n",(0,s.jsx)(r.p,{children:"See individual properties for more information."}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export interface Configuration\n"})}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Property"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Default"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"_chrome-headless-shell_",children:'"chrome-headless-shell"'})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.chromeheadlessshellsettings",children:"ChromeHeadlessShellSettings"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"cachedirectory",children:"cacheDirectory"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"string"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.p,{children:"Defines the directory to be used by Puppeteer for caching."}),(0,s.jsxs)(r.p,{children:["Can be overridden by ",(0,s.jsx)(r.code,{children:"PUPPETEER_CACHE_DIR"}),"."]})]}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"path.join(os.homedir(), '.cache', 'puppeteer')"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"chrome",children:"chrome"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.chromesettings",children:"ChromeSettings"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"defaultbrowser",children:"defaultBrowser"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.supportedbrowser",children:"SupportedBrowser"})})}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.p,{children:"Specifies which browser you'd like Puppeteer to use."}),(0,s.jsxs)(r.p,{children:["Can be overridden by ",(0,s.jsx)(r.code,{children:"PUPPETEER_BROWSER"}),"."]})]}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"chrome"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"executablepath",children:"executablePath"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"string"})}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(r.p,{children:["Specifies an executable path to be used in ",(0,s.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.launch",children:"puppeteer.launch"}),"."]}),(0,s.jsxs)(r.p,{children:["Can be overridden by ",(0,s.jsx)(r.code,{children:"PUPPETEER_EXECUTABLE_PATH"}),"."]})]}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Auto-computed."})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"experiments",children:"experiments"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.experimentsconfiguration",children:"ExperimentsConfiguration"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Defines experimental options for Puppeteer."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"firefox",children:"firefox"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.firefoxsettings",children:"FirefoxSettings"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"loglevel",children:"logLevel"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"'silent' | 'error' | 'warn'"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Tells Puppeteer to log at the given level."})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"warn"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"skipdownload",children:"skipDownload"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"boolean"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.p,{children:"Tells Puppeteer to not download during installation."}),(0,s.jsxs)(r.p,{children:["Can be overridden by ",(0,s.jsx)(r.code,{children:"PUPPETEER_SKIP_DOWNLOAD"}),"."]})]}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"temporarydirectory",children:"temporaryDirectory"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"string"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.p,{children:"Defines the directory to be used by Puppeteer for creating temporary files."}),(0,s.jsxs)(r.p,{children:["Can be overridden by ",(0,s.jsx)(r.code,{children:"PUPPETEER_TMP_DIR"}),"."]})]}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"os.tmpdir()"})})})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},21020:(e,r,n)=>{var i=n(96540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,n){var i,d={},o=null,h=null;for(i in void 0!==n&&(o=""+n),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(h=r.ref),r)t.call(r,i)&&!l.hasOwnProperty(i)&&(d[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===d[i]&&(d[i]=r[i]);return{$$typeof:s,type:e,key:o,ref:h,props:d,_owner:c.current}}r.Fragment=d,r.jsx=o,r.jsxs=o},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>c});var i=n(96540);const s={},d=i.createContext(s);function t(e){const r=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(d.Provider,{value:r},e.children)}}}]);