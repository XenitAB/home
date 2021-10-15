(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{142:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=l(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(t),b=n,f=d["".concat(a,".").concat(b)]||d[b]||p[b]||i;return t?o.a.createElement(f,c(c({ref:r},s),{},{components:t})):o.a.createElement(f,c({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},143:function(e,r,t){"use strict";t.r(r);var n=t(0),o=t(20);r.default=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},144:function(e,r,t){"use strict";t.d(r,"b",(function(){return i})),t.d(r,"a",(function(){return a}));var n=t(143),o=t(145);function i(){var e=Object(n.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,i=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,c=void 0!==a&&a,u=i.absolute,s=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(c)return r+t;var l=t.startsWith(r)?t:r+t.replace(/^\//,"");return s?e+l:l}(i,t,e,r)}}}function a(e,r){return void 0===r&&(r={}),(0,i().withBaseUrl)(e,r)}},145:function(e,r,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}t.d(r,"b",(function(){return n})),t.d(r,"a",(function(){return o}))},86:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return d}));var n=t(3),o=t(7),i=(t(0),t(142)),a=t(144),c={id:"index",title:"Overview"},u={unversionedId:"xks/operator-guide/index",id:"xks/operator-guide/index",isDocsHomePage:!1,title:"Overview",description:"Xenit Kubernetes Service (XKS) is an opinionated Kubernetes deployment on a public cloud provider's managed Kubernetes service. It combines a cloud provider's managed Kubernetes offering and ancillary services with additional configuration and services that run on top of Kubernetes.",source:"@site/docs/xks/operator-guide/index.md",slug:"/xks/operator-guide/index",permalink:"/docs/xks/operator-guide/index",editUrl:"https://github.com/xenitab/xenitab.github.io/edit/main/docs/xks/operator-guide/index.md",version:"current",sidebar:"docs",previous:{title:"Networking",permalink:"/docs/xks/developer-guide/networking"},next:{title:"Cluster blue green",permalink:"/docs/xks/operator-guide/blue-green"}},s=[{value:"Architecture",id:"architecture",children:[]},{value:"Core",id:"core",children:[]},{value:"Governance",id:"governance",children:[]},{value:"Hub",id:"hub",children:[]},{value:"AKS",id:"aks",children:[]}],l={rightToc:s};function d(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://xenit.se/it-tjanster/kubernetes-service/"}),"Xenit Kubernetes Service")," (XKS) is an opinionated Kubernetes deployment on a public cloud provider's managed Kubernetes service. It combines a cloud provider's managed Kubernetes offering and ancillary services with additional configuration and services that run on top of Kubernetes."),Object(i.b)("h2",{id:"architecture"},"Architecture"),Object(i.b)("p",null,"XKS is set up from a set of Terraform modules that when combined creates the full XKS service. There are multiple individual states that all fulfill their own purpose and build\nupon each other in a hierarchical manner. The first setup requires applying the Terraform in the correct order, but after that ordering should not matter. Separate states are used\nas it allows for a more flexible architecture that could be changed in parallel."),Object(i.b)("img",{alt:"XKS Overview",src:Object(a.a)("img/assets/xks/operator-guide/aks-overview.jpg")}),Object(i.b)("p",null,"The following Terraform modules are used in XKS:"),Object(i.b)("h2",{id:"core"},"Core"),Object(i.b)("h2",{id:"governance"},"Governance"),Object(i.b)("h2",{id:"hub"},"Hub"),Object(i.b)("h2",{id:"aks"},"AKS"),Object(i.b)("p",null,"The AKS terraform contains three modules that are used to setup a Kubernetes cluster. To allow for blue/green deployments of AKS clusters resources have to be split up in to\nglobal resources that can be shared between the clusters, and cluster specific resources."),Object(i.b)("p",null,"The aks-global module contains the global resources like ACR, DNS and Azure AD configuration."),Object(i.b)("p",null,"The aks and aks-core module creates a AKS cluster and configures it. This cluster will have a suffix, normally a number to allow for temporarily creating multiple clusters\nwhen performing a blue/green deployment of the clusters. Namespaces will be created in the cluster for each of the configured tenants. Each namespaces is linked to a resource\ngroup in Azure where namespace resources are expected to be created."),Object(i.b)("img",{alt:"AKS Resource Groups",src:Object(a.a)("img/assets/xks/operator-guide/aks-rg-xks-overview.jpg")}))}d.isMDXComponent=!0}}]);