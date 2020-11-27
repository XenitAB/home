(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},b=Object.keys(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),i=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=i(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=i(r),m=n,d=s["".concat(l,".").concat(m)]||s[m]||p[m]||b;return r?a.a.createElement(d,c(c({ref:t},u),{},{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=r.length,l=new Array(b);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var u=2;u<b;u++)l[u]=r[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return i}));var n=r(3),a=r(7),b=(r(0),r(100)),l={title:"External Secrets",slug:"/terraform-modules/kubernetes/external-secrets",custom_edit_url:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/external-secrets/README.md"},c={unversionedId:"terraform-modules/kubernetes/external-secrets",id:"terraform-modules/kubernetes/external-secrets",isDocsHomePage:!1,title:"External Secrets",description:"Adds external-secrets to a Kubernetes clusters.",source:"@site/docs/terraform-modules/kubernetes/external-secrets.md",slug:"/terraform-modules/kubernetes/external-secrets",permalink:"/home/docs/terraform-modules/kubernetes/external-secrets",editUrl:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/external-secrets/README.md",version:"current",sidebar:"docs",previous:{title:"External DNS (external-dns)",permalink:"/home/docs/terraform-modules/kubernetes/external-dns"},next:{title:"Flux (v1)",permalink:"/home/docs/terraform-modules/kubernetes/fluxcd-v1"}},o=[{value:"Requirements",id:"requirements",children:[]},{value:"Providers",id:"providers",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]}],u={rightToc:o};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Adds ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/external-secrets/kubernetes-external-secrets"}),Object(b.b)("inlineCode",{parentName:"a"},"external-secrets"))," to a Kubernetes clusters."),Object(b.b)("h2",{id:"requirements"},"Requirements"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Version"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"terraform"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.13.5")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"helm"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.3.2")))),Object(b.b)("h2",{id:"providers"},"Providers"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Version"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"helm"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.3.2")))),Object(b.b)("h2",{id:"inputs"},"Inputs"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws","_","config"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AWS specific configuration"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("pre",null,"object({",Object(b.b)("br",null),"    role_arn = string,",Object(b.b)("br",null),"    region   = string",Object(b.b)("br",null),"  })")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("pre",null,"{",Object(b.b)("br",null),'  "region": "",',Object(b.b)("br",null),'  "role_arn": ""',Object(b.b)("br",null),"}")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"no")))),Object(b.b)("h2",{id:"outputs"},"Outputs"),Object(b.b)("p",null,"No output."))}i.isMDXComponent=!0}}]);