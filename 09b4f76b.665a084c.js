(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),O=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},j=function(e){var t=O(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),j=O(a),d=n,p=j["".concat(l,".").concat(d)]||j[d]||m[d]||b;return a?r.a.createElement(p,c(c({ref:t},o),{},{components:a})):r.a.createElement(p,c({ref:t},o))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},60:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),b=(a(0),a(119)),l={title:"Grafana Loki",slug:"/terraform-modules/kubernetes/loki",custom_edit_url:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/loki/README.md"},c={unversionedId:"terraform-modules/kubernetes/loki",id:"terraform-modules/kubernetes/loki",isDocsHomePage:!1,title:"Grafana Loki",description:"This module is used to add loki to Kubernetes clusters (tested with AKS).",source:"@site/docs/terraform-modules/kubernetes/loki.md",slug:"/terraform-modules/kubernetes/loki",permalink:"/docs/terraform-modules/kubernetes/loki",editUrl:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/loki/README.md",version:"current",sidebar:"docs",previous:{title:"kyverno",permalink:"/docs/terraform-modules/kubernetes/kyverno"},next:{title:"OPA Gatekeeper",permalink:"/docs/terraform-modules/kubernetes/opa-gatekeeper"}},i=[{value:"Details",id:"details",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Providers",id:"providers",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]}],o={rightToc:i};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"This module is used to add ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/grafana/loki"}),Object(b.b)("inlineCode",{parentName:"a"},"loki"))," to Kubernetes clusters (tested with AKS)."),Object(b.b)("h2",{id:"details"},"Details"),Object(b.b)("p",null,"This module will also add ",Object(b.b)("inlineCode",{parentName:"p"},"minio")," (S3 Gateway to Azure Storage Account), ",Object(b.b)("inlineCode",{parentName:"p"},"fluent-bit")," and ",Object(b.b)("inlineCode",{parentName:"p"},"grafana"),"."),Object(b.b)("h2",{id:"requirements"},"Requirements"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Version"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"terraform"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.13.5")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"azurerm"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2.47.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"helm"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2.0.2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"kubernetes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2.0.2")))),Object(b.b)("h2",{id:"providers"},"Providers"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Version"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"azurerm"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2.47.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"helm"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2.0.2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"kubernetes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2.0.2")))),Object(b.b)("h2",{id:"inputs"},"Inputs"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"environment"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The environment (short name) to use for the deploy"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"kubernetes","_","namespace","_","name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Kubernetes namespace name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"loki"')),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"location","_","short"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Azure region short name."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"loki","_","helm","_","chart","_","name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The helm chart name for loki"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"loki-stack"')),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"loki","_","helm","_","chart","_","version"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The helm chart version for loki"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"2.0.0"')),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"loki","_","helm","_","release","_","name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The helm release name for loki"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"loki"')),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"loki","_","helm","_","repository"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The helm repository for loki"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"https://grafana.github.io/loki/charts"')),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"minio","_","helm","_","chart","_","name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The helm chart name for minio"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"minio"')),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"minio","_","helm","_","chart","_","version"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The helm chart version for minio"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"8.0.0"')),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"minio","_","helm","_","release","_","name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The helm release name for minio"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"loki-minio"')),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"minio","_","helm","_","repository"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The helm repository for minio"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"https://helm.min.io/"')),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name to use for the deploy"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"resource","_","group","_","name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The resource group name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'""')),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"storage","_","account","_","configuration"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The storage account configuration"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("pre",null,"object({",Object(b.b)("br",null),"    account_tier             = string",Object(b.b)("br",null),"    account_replication_type = string",Object(b.b)("br",null),"    account_kind             = string",Object(b.b)("br",null),"  })")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("pre",null,"{",Object(b.b)("br",null),'  "account_kind": "StorageV2",',Object(b.b)("br",null),'  "account_replication_type": "GRS",',Object(b.b)("br",null),'  "account_tier": "Standard"',Object(b.b)("br",null),"}")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"storage","_","account","_","name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The storage account name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'""')),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"storage","_","container","_","name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The storage container name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"loki"')),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"no")))),Object(b.b)("h2",{id:"outputs"},"Outputs"),Object(b.b)("p",null,"No output."))}O.isMDXComponent=!0}}]);