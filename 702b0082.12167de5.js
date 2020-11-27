(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,s=m["".concat(b,".").concat(d)]||m[d]||p[d]||c;return r?a.a.createElement(s,o(o({ref:t},l),{},{components:r})):a.a.createElement(s,o({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,b=new Array(c);b[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var l=2;l<c;l++)b[l]=r[l];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),c=(r(0),r(100)),b={title:"Certificate manager (cert-manager)",slug:"/terraform-modules/kubernetes/cert-manager",custom_edit_url:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/cert-manager/README.md"},o={unversionedId:"terraform-modules/kubernetes/cert-manager",id:"terraform-modules/kubernetes/cert-manager",isDocsHomePage:!1,title:"Certificate manager (cert-manager)",description:"This module is used to add cert-manager to Kubernetes clusters.",source:"@site/docs/terraform-modules/kubernetes/cert-manager.md",slug:"/terraform-modules/kubernetes/cert-manager",permalink:"/docs/terraform-modules/kubernetes/cert-manager",editUrl:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/cert-manager/README.md",version:"current",sidebar:"docs",previous:{title:"Azure DevOps Proxy (azdo-proxy)",permalink:"/docs/terraform-modules/kubernetes/azdo-proxy"},next:{title:"Datadog",permalink:"/docs/terraform-modules/kubernetes/datadog"}},i=[{value:"Requirements",id:"requirements",children:[]},{value:"Providers",id:"providers",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]}],l={rightToc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This module is used to add ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jetstack/cert-manager"}),Object(c.b)("inlineCode",{parentName:"a"},"cert-manager"))," to Kubernetes clusters."),Object(c.b)("h2",{id:"requirements"},"Requirements"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Version"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"terraform"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.13.5")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"helm"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.3.2")))),Object(c.b)("h2",{id:"providers"},"Providers"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Version"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"helm"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.3.2")))),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"notification","_","email"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Email address to send certificate expiration notifications"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},'"DG-Team-DevOps@xenit.se"')),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"no")))),Object(c.b)("h2",{id:"outputs"},"Outputs"),Object(c.b)("p",null,"No output."))}u.isMDXComponent=!0}}]);