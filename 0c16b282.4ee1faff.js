(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=n.a.createContext({}),u=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=u(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=u(r),p=a,d=m["".concat(c,".").concat(p)]||m[p]||s[p]||b;return r?n.a.createElement(d,l(l({ref:t},o),{},{components:r})):n.a.createElement(d,l({ref:t},o))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=r.length,c=new Array(b);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<b;o++)c[o]=r[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},62:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),b=(r(0),r(137)),c={title:"Ingress Healthz (ingress-healthz)",slug:"/terraform-modules/kubernetes/ingress-healthz",custom_edit_url:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/ingress-healthz/README.md"},l={unversionedId:"terraform-modules/kubernetes/ingress-healthz",id:"terraform-modules/kubernetes/ingress-healthz",isDocsHomePage:!1,title:"Ingress Healthz (ingress-healthz)",description:"This module is used to deploy a very simple NGINX server meant to check the health of cluster ingress.",source:"@site/docs/terraform-modules/kubernetes/ingress-healthz.md",slug:"/terraform-modules/kubernetes/ingress-healthz",permalink:"/docs/terraform-modules/kubernetes/ingress-healthz",editUrl:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/ingress-healthz/README.md",version:"current"},i=[{value:"Requirements",id:"requirements",children:[]},{value:"Providers",id:"providers",children:[]},{value:"Modules",id:"modules",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]}],o={rightToc:i};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"This module is used to deploy a very simple NGINX server meant to check the health of cluster ingress.\nIt is meant to simulate an application that expects traffic through the ingress controller with\nautomatic DNS creation and certificate creation, without depending on the stability of a dynamic application."),Object(b.b)("h2",{id:"requirements"},"Requirements"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Version"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_terraform"})," ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#requirement_terraform"}),"terraform")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.15.3")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_helm"})," ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#requirement_helm"}),"helm")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.2.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_kubernetes"})," ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#requirement_kubernetes"}),"kubernetes")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.4.1")))),Object(b.b)("h2",{id:"providers"},"Providers"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Version"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"provider_helm"})," ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#provider_helm"}),"helm")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.2.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"provider_kubernetes"})," ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#provider_kubernetes"}),"kubernetes")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.4.1")))),Object(b.b)("h2",{id:"modules"},"Modules"),Object(b.b)("p",null,"No modules."),Object(b.b)("h2",{id:"resources"},"Resources"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/helm/2.2.0/docs/resources/release"}),"helm_release.ingress_healthz")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/kubernetes/2.4.1/docs/resources/namespace"}),"kubernetes_namespace.this")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"resource")))),Object(b.b)("h2",{id:"inputs"},"Inputs"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_dns_zone"})," ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#input_dns_zone"}),"dns","_","zone")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DNS Zone to create ingress sub domain under"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_environment"})," ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#input_environment"}),"environment")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Environment ingress-healthz is deployed in"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_linkerd_enabled"})," ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#input_linkerd_enabled"}),"linkerd","_","enabled")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Should linkerd be enabled"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")))),Object(b.b)("h2",{id:"outputs"},"Outputs"),Object(b.b)("p",null,"No outputs."))}u.isMDXComponent=!0}}]);