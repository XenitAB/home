(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{149:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,f=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return r?i.a.createElement(f,c(c({ref:t},u),{},{components:r})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},150:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r(20);t.default=function(){var e=Object(n.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},151:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}));var n=r(150),i=r(152);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,a=o.forcePrependBaseUrl,c=void 0!==a&&a,s=o.absolute,u=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(c)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+l:l}(o,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},152:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}))},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),o=(r(0),r(149)),a=(r(151),{id:"index",title:"Overview"}),c={unversionedId:"xks/index",id:"xks/index",isDocsHomePage:!1,title:"Overview",description:"Xenit Kubernetes Service (XKS; link in Swedish) is an opinionated Kubernetes deployment on top of a cloud provider's managed Kubernetes service. XKS currently supports Azure Kubernetes Service (AKS) and AWS Elastic Kubernetes service (EKS). Xenit Kubernetes Service:",source:"@site/docs/xks/index.md",slug:"/xks/index",permalink:"/docs/xks/index",editUrl:"https://github.com/xenitab/xenitab.github.io/edit/main/docs/xks/index.md",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Introduction",permalink:"/docs/xks/developer-guide/introduction"}},s=[],u={rightToc:s};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://xenit.se/it-tjanster/kubernetes-framework-2/"}),"Xenit Kubernetes Service")," (XKS; link in Swedish) is an opinionated Kubernetes deployment on top of a cloud provider's managed Kubernetes service. XKS currently supports Azure Kubernetes Service (AKS) and AWS Elastic Kubernetes service (EKS). Xenit Kubernetes Service:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"is secure by default"),Object(o.b)("li",{parentName:"ul"},"is DevOps-oriented"),Object(o.b)("li",{parentName:"ul"},"has batteries included"),Object(o.b)("li",{parentName:"ul"},"has a team-oriented permissions model")),Object(o.b)("p",null,"This documentation consists of two main sections:"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./developer-guide/introduction"}),Object(o.b)("strong",{parentName:"a"},"Developer Guide")),": This documentation is targeted towards developers using XKS. It covers the basics of Kubernetes and the custom features that are offered by XKS."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./operator-guide/index"}),Object(o.b)("strong",{parentName:"a"},"Operator Guide")),": This section is meant primarily for Xenit's operations staff. It collects Xenit's internal documentation for operating XKS clusters. It is public and part of this documentation because we believe in transparency. It serves as a reference to how the various services included in XKS are set up. It also describes various recurring procedures, such as replacing an existing Kubernetes cluster."),Object(o.b)("p",null,"XKS is assembled from Open Source services, some of which are provided to XKS customers. This assembly is itself Open Source and the important components are documented under the Projects section in the menu bar. For more information about the services, please refer to their respective documentation. Some of the more prominent projects:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/"}),"Kubernetes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://fluxcd.io/"}),"Flux")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.github.io/ingress-nginx/"}),"Nginx Ingress Controller"))))}l.isMDXComponent=!0}}]);