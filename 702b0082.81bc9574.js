(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{149:function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return p}));var a=r(0),n=r.n(a);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),o=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},O=function(e){var t=o(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),O=o(r),j=a,p=O["".concat(c,".").concat(j)]||O[j]||m[j]||b;return r?n.a.createElement(p,l(l({ref:t},u),{},{components:r})):n.a.createElement(p,l({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=r.length,c=new Array(b);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<b;u++)c[u]=r[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}j.displayName="MDXCreateElement"},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return o}));var a=r(3),n=r(7),b=(r(0),r(149)),c={title:"Certificate manager (cert-manager)",slug:"/terraform-modules/kubernetes/cert-manager",custom_edit_url:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/cert-manager/README.md"},l={unversionedId:"terraform-modules/kubernetes/cert-manager",id:"terraform-modules/kubernetes/cert-manager",isDocsHomePage:!1,title:"Certificate manager (cert-manager)",description:"This module is used to add cert-manager to Kubernetes clusters.",source:"@site/docs/terraform-modules/kubernetes/cert-manager.md",slug:"/terraform-modules/kubernetes/cert-manager",permalink:"/docs/terraform-modules/kubernetes/cert-manager",editUrl:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/cert-manager/README.md",version:"current",sidebar:"docs",previous:{title:"Azure AD Kubernetes API Proxy",permalink:"/docs/terraform-modules/kubernetes/azad-kube-proxy"},next:{title:"Cluster Autoscaler (cluster-autoscaler)",permalink:"/docs/terraform-modules/kubernetes/cluster-autoscaler"}},i=[{value:"Requirements",id:"requirements",children:[]},{value:"Providers",id:"providers",children:[]},{value:"Modules",id:"modules",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]}],u={rightToc:i};function o(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"This module is used to add ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jetstack/cert-manager"}),Object(b.b)("inlineCode",{parentName:"a"},"cert-manager"))," to Kubernetes clusters."),Object(b.b)("h2",{id:"requirements"},"Requirements"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Version"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_terraform"})," ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#requirement_terraform"}),"terraform")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.15.3")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_helm"})," ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#requirement_helm"}),"helm")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.3.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_kubernetes"})," ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#requirement_kubernetes"}),"kubernetes")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.6.1")))),Object(b.b)("h2",{id:"providers"},"Providers"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Version"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"provider_helm"})," ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#provider_helm"}),"helm")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.3.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"provider_kubernetes"})," ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#provider_kubernetes"}),"kubernetes")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.6.1")))),Object(b.b)("h2",{id:"modules"},"Modules"),Object(b.b)("p",null,"No modules."),Object(b.b)("h2",{id:"resources"},"Resources"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/helm/2.3.0/docs/resources/release"}),"helm_release.cert_manager")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/helm/2.3.0/docs/resources/release"}),"helm_release.cert_manager_extras")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/kubernetes/2.6.1/docs/resources/namespace"}),"kubernetes_namespace.this")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"resource")))),Object(b.b)("h2",{id:"inputs"},"Inputs"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_acme_server"})," ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#input_acme_server"}),"acme","_","server")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ACME server to add to the created ClusterIssuer"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"https://acme-v02.api.letsencrypt.org/directory"')),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_aws_config"})," ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#input_aws_config"}),"aws","_","config")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"AWS specific configuration"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("pre",null,"object({",Object(b.b)("br",null),"    region         = string,",Object(b.b)("br",null),"    hosted_zone_id = string,",Object(b.b)("br",null),"    role_arn       = string,",Object(b.b)("br",null),"  })")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("pre",null,"{",Object(b.b)("br",null),'  "hosted_zone_id": "",',Object(b.b)("br",null),'  "region": "",',Object(b.b)("br",null),'  "role_arn": ""',Object(b.b)("br",null),"}")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_azure_config"})," ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#input_azure_config"}),"azure","_","config")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Azure specific configuration"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("pre",null,"object({",Object(b.b)("br",null),"    subscription_id     = string,",Object(b.b)("br",null),"    hosted_zone_name    = string,",Object(b.b)("br",null),"    resource_group_name = string,",Object(b.b)("br",null),"    client_id           = string,",Object(b.b)("br",null),"    resource_id         = string,",Object(b.b)("br",null),"  })")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("pre",null,"{",Object(b.b)("br",null),'  "client_id": "",',Object(b.b)("br",null),'  "hosted_zone_name": "",',Object(b.b)("br",null),'  "resource_group_name": "",',Object(b.b)("br",null),'  "resource_id": "",',Object(b.b)("br",null),'  "subscription_id": ""',Object(b.b)("br",null),"}")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_cloud_provider"})," ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#input_cloud_provider"}),"cloud","_","provider")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Cloud provider to use."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_notification_email"})," ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#input_notification_email"}),"notification","_","email")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Email address to send certificate expiration notifications"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"yes")))),Object(b.b)("h2",{id:"outputs"},"Outputs"),Object(b.b)("p",null,"No outputs."))}o.isMDXComponent=!0}}]);