(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return p}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),u=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=u(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),O=u(a),j=r,p=O["".concat(c,".").concat(j)]||O[j]||m[j]||b;return a?n.a.createElement(p,l(l({ref:t},i),{},{components:a})):n.a.createElement(p,l({ref:t},i))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<b;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},61:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),b=(a(0),a(137)),c={title:"Grafana Loki",slug:"/terraform-modules/kubernetes/loki",custom_edit_url:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/loki/README.md"},l={unversionedId:"terraform-modules/kubernetes/loki",id:"terraform-modules/kubernetes/loki",isDocsHomePage:!1,title:"Grafana Loki",description:"This module is used to add loki to Kubernetes clusters (tested with AKS).",source:"@site/docs/terraform-modules/kubernetes/loki.md",slug:"/terraform-modules/kubernetes/loki",permalink:"/docs/terraform-modules/kubernetes/loki",editUrl:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/loki/README.md",version:"current"},o=[{value:"Details",id:"details",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Providers",id:"providers",children:[]},{value:"Modules",id:"modules",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]}],i={rightToc:o};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"This module is used to add ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/grafana/loki"}),Object(b.b)("inlineCode",{parentName:"a"},"loki"))," to Kubernetes clusters (tested with AKS)."),Object(b.b)("h2",{id:"details"},"Details"),Object(b.b)("p",null,"This module will also add ",Object(b.b)("inlineCode",{parentName:"p"},"minio")," (S3 Gateway to Azure Storage Account), ",Object(b.b)("inlineCode",{parentName:"p"},"fluent-bit")," and ",Object(b.b)("inlineCode",{parentName:"p"},"grafana"),"."),Object(b.b)("h2",{id:"requirements"},"Requirements"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Version"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_terraform"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#requirement_terraform"}),"terraform")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0.15.3")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_azurerm"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#requirement_azurerm"}),"azurerm")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.72.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_helm"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#requirement_helm"}),"helm")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.2.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_kubernetes"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#requirement_kubernetes"}),"kubernetes")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.4.1")))),Object(b.b)("h2",{id:"providers"},"Providers"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Version"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"provider_azurerm"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#provider_azurerm"}),"azurerm")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.72.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"provider_helm"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#provider_helm"}),"helm")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.2.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"provider_kubernetes"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#provider_kubernetes"}),"kubernetes")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.4.1")))),Object(b.b)("h2",{id:"modules"},"Modules"),Object(b.b)("p",null,"No modules."),Object(b.b)("h2",{id:"resources"},"Resources"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/azurerm/2.72.0/docs/resources/storage_account"}),"azurerm_storage_account.loki")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/azurerm/2.72.0/docs/resources/storage_container"}),"azurerm_storage_container.loki")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/helm/2.2.0/docs/resources/release"}),"helm_release.loki_stack")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/helm/2.2.0/docs/resources/release"}),"helm_release.minio")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/kubernetes/2.4.1/docs/resources/namespace"}),"kubernetes_namespace.this")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/azurerm/2.72.0/docs/data-sources/resource_group"}),"azurerm_resource_group.this")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"data source")))),Object(b.b)("h2",{id:"inputs"},"Inputs"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_environment"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_environment"}),"environment")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The environment (short name) to use for the deploy"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_location_short"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_location_short"}),"location","_","short")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The Azure region short name."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_name"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_name"}),"name")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The name to use for the deploy"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_resource_group_name"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_resource_group_name"}),"resource","_","group","_","name")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The resource group name"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'""')),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_storage_account_configuration"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_storage_account_configuration"}),"storage","_","account","_","configuration")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The storage account configuration"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("pre",null,"object({",Object(b.b)("br",null),"    account_tier             = string",Object(b.b)("br",null),"    account_replication_type = string",Object(b.b)("br",null),"    account_kind             = string",Object(b.b)("br",null),"  })")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("pre",null,"{",Object(b.b)("br",null),'  "account_kind": "StorageV2",',Object(b.b)("br",null),'  "account_replication_type": "GRS",',Object(b.b)("br",null),'  "account_tier": "Standard"',Object(b.b)("br",null),"}")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_storage_account_name"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_storage_account_name"}),"storage","_","account","_","name")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The storage account name"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'""')),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_storage_container_name"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_storage_container_name"}),"storage","_","container","_","name")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The storage container name"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"loki"')),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"no")))),Object(b.b)("h2",{id:"outputs"},"Outputs"),Object(b.b)("p",null,"No outputs."))}u.isMDXComponent=!0}}]);