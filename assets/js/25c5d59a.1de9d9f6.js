"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[154489],{603905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(667294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,p(p({ref:e},s),{},{components:n})):a.createElement(k,p({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},207163:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(487462),r=(n(667294),n(603905));const l={sidebar_label:"LaunchOptions"},p="LaunchOptions interface",i={unversionedId:"api/puppeteer.launchoptions",id:"version-15.3.1/api/puppeteer.launchoptions",title:"LaunchOptions interface",description:"Generic launch options that can be passed when launching any browser.",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.launchoptions.md",sourceDirName:"api",slug:"/api/puppeteer.launchoptions",permalink:"/15.3.1/api/puppeteer.launchoptions",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"LaunchOptions"},sidebar:"sidebar",previous:{title:"Keyboard.up",permalink:"/15.3.1/api/puppeteer.keyboard.up"},next:{title:"LaunchOptions.channel",permalink:"/15.3.1/api/puppeteer.launchoptions.channel"}},o={},u=[{value:"Properties",id:"properties",level:2}],s={toc:u};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"launchoptions-interface"},"LaunchOptions interface"),(0,r.kt)("p",null,"Generic launch options that can be passed when launching any browser."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface LaunchOptions\n")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.launchoptions.channel"},"channel?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.chromereleasechannel"},"ChromeReleaseChannel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Chrome Release Channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.launchoptions.dumpio"},"dumpio?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," If true, pipes the browser process stdout and stderr to ",(0,r.kt)("code",null,"process.stdout")," and ",(0,r.kt)("code",null,"process.stderr"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.launchoptions.env"},"env?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Record","<","string, string ","|"," undefined",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Specify environment variables that will be visible to the browser.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.launchoptions.executablepath"},"executablePath?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Path to a browser executable to use instead of the bundled Chromium. Note that Puppeteer is only guaranteed to work with the bundled Chromium, so use this setting at your own risk.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.launchoptions.extraprefsfirefox"},"extraPrefsFirefox?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Record","<","string, unknown",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," ",(0,r.kt)("a",{parentName:"td",href:"https://searchfox.org/mozilla-release/source/modules/libpref/init/all.js"},"Additional preferences")," that can be passed when launching with Firefox.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.launchoptions.handlesighup"},"handleSIGHUP?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Close the browser process on ",(0,r.kt)("code",null,"SIGHUP"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.launchoptions.handlesigint"},"handleSIGINT?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Close the browser process on ",(0,r.kt)("code",null,"Ctrl+C"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.launchoptions.handlesigterm"},"handleSIGTERM?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Close the browser process on ",(0,r.kt)("code",null,"SIGTERM"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.launchoptions.ignoredefaultargs"},"ignoreDefaultArgs?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean ","|"," string","[","]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," If ",(0,r.kt)("code",null,"true"),", do not use ",(0,r.kt)("code",null,"puppeteer.defaultArgs()")," when creating a browser. If an array is provided, these args will be filtered out. Use this with care - you probably want the default arguments Puppeteer uses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.launchoptions.pipe"},"pipe?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Connect to a browser over a pipe instead of a WebSocket.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.launchoptions.product"},"product?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.product"},"Product")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Which browser to launch.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.launchoptions.timeout"},"timeout?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Maximum time in milliseconds to wait for the browser to start. Pass ",(0,r.kt)("code",null,"0")," to disable the timeout.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.launchoptions.waitforinitialpage"},"waitForInitialPage?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Whether to wait for the initial page to be ready. Useful when a user explicitly disables that (e.g. ",(0,r.kt)("code",null,"--no-startup-window")," for Chrome).")))))}d.isMDXComponent=!0}}]);