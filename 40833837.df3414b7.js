(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{123:function(e,t,b){"use strict";b.d(t,"a",(function(){return i})),b.d(t,"b",(function(){return p}));var a=b(0),n=b.n(a);function r(e,t,b){return t in e?Object.defineProperty(e,t,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[t]=b,e}function l(e,t){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),b.push.apply(b,a)}return b}function c(e){for(var t=1;t<arguments.length;t++){var b=null!=arguments[t]?arguments[t]:{};t%2?l(Object(b),!0).forEach((function(t){r(e,t,b[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):l(Object(b)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(b,t))}))}return e}function j(e,t){if(null==e)return{};var b,a,n=function(e,t){if(null==e)return{};var b,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)b=r[a],t.indexOf(b)>=0||(n[b]=e[b]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)b=r[a],t.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(e,b)&&(n[b]=e[b])}return n}var O=n.a.createContext({}),d=function(e){var t=n.a.useContext(O),b=t;return e&&(b="function"==typeof e?e(t):c(c({},t),e)),b},i=function(e){var t=d(e.components);return n.a.createElement(O.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},o=n.a.forwardRef((function(e,t){var b=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,O=j(e,["components","mdxType","originalType","parentName"]),i=d(b),o=a,p=i["".concat(l,".").concat(o)]||i[o]||u[o]||r;return b?n.a.createElement(p,c(c({ref:t},O),{},{components:b})):n.a.createElement(p,c({ref:t},O))}));function p(e,t){var b=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=b.length,l=new Array(r);l[0]=o;var c={};for(var j in t)hasOwnProperty.call(t,j)&&(c[j]=t[j]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var O=2;O<r;O++)l[O]=b[O];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,b)}o.displayName="MDXCreateElement"},74:function(e,t,b){"use strict";b.r(t),b.d(t,"frontMatter",(function(){return l})),b.d(t,"metadata",(function(){return c})),b.d(t,"rightToc",(function(){return j})),b.d(t,"default",(function(){return d}));var a=b(3),n=b(7),r=(b(0),b(123)),l={title:"AKS Core",slug:"/terraform-modules/kubernetes/aks-core",custom_edit_url:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/aks-core/README.md"},c={unversionedId:"terraform-modules/kubernetes/aks-core",id:"terraform-modules/kubernetes/aks-core",isDocsHomePage:!1,title:"AKS Core",description:"This module is used to create AKS clusters.",source:"@site/docs/terraform-modules/kubernetes/aks-core.md",slug:"/terraform-modules/kubernetes/aks-core",permalink:"/docs/terraform-modules/kubernetes/aks-core",editUrl:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/aks-core/README.md",version:"current",sidebar:"docs",previous:{title:"Azure AD POD Identity (AAD-POD-Identity)",permalink:"/docs/terraform-modules/kubernetes/aad-pod-identity"},next:{title:"Azure AD Kubernetes API Proxy",permalink:"/docs/terraform-modules/kubernetes/azad-kube-proxy"}},j=[{value:"Requirements",id:"requirements",children:[]},{value:"Providers",id:"providers",children:[]},{value:"Modules",id:"modules",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]}],O={rightToc:j};function d(e){var t=e.components,b=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},O,b,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This module is used to create AKS clusters."),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Version"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"terraform"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.14.7")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"azuread"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.4.0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"azurerm"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.50.0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"flux"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.0.12")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"github"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4.5.1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"kubectl"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.10.0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"kubernetes"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.0.2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"random"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3.1.0")))),Object(r.b)("h2",{id:"providers"},"Providers"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Version"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"azurerm"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.50.0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"kubernetes"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.0.2")))),Object(r.b)("h2",{id:"modules"},"Modules"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Source"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Version"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"aad_pod_identity"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"../../kubernetes/aad-pod-identity"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"azad_kube_proxy"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"../../kubernetes/azad-kube-proxy"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cert_manager"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"../../kubernetes/cert-manager"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"csi_secrets_store_provider_azure"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"../../kubernetes/csi-secrets-store-provider-azure"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"datadog"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"../../kubernetes/datadog"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"external_dns"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"../../kubernetes/external-dns"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"falco"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"../../kubernetes/falco"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fluxcd_v1_azure_devops"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"../../kubernetes/fluxcd-v1"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fluxcd_v2_azure_devops"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"../../kubernetes/fluxcd-v2-azdo"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fluxcd_v2_github"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"../../kubernetes/fluxcd-v2-github"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ingress_nginx"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"../../kubernetes/ingress-nginx"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"kyverno"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"../../kubernetes/kyverno"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"opa_gatekeeper"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"../../kubernetes/opa-gatekeeper"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"reloader"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"../../kubernetes/reloader"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"velero"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"../../kubernetes/velero"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/azurerm/2.50.0/docs/data-sources/client_config"}),"azurerm_client_config"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/azurerm/2.50.0/docs/data-sources/resource_group"}),"azurerm_resource_group"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/kubernetes/2.0.2/docs/resources/cluster_role"}),"kubernetes_cluster_role"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/kubernetes/2.0.2/docs/resources/cluster_role_binding"}),"kubernetes_cluster_role_binding"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/kubernetes/2.0.2/docs/resources/limit_range"}),"kubernetes_limit_range"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/kubernetes/2.0.2/docs/resources/namespace"}),"kubernetes_namespace"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/kubernetes/2.0.2/docs/resources/network_policy"}),"kubernetes_network_policy"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/kubernetes/2.0.2/docs/resources/role_binding"}),"kubernetes_role_binding"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/kubernetes/2.0.2/docs/resources/service_account"}),"kubernetes_service_account"))))),Object(r.b)("h2",{id:"inputs"},"Inputs"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"aad","_","groups"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Configuration for aad groups"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("pre",null,"object({",Object(r.b)("br",null),"    view = map(any)",Object(r.b)("br",null),"    edit = map(any)",Object(r.b)("br",null),"    cluster_admin = object({",Object(r.b)("br",null),"      id   = string",Object(r.b)("br",null),"      name = string",Object(r.b)("br",null),"    })",Object(r.b)("br",null),"    cluster_view = object({",Object(r.b)("br",null),"      id   = string",Object(r.b)("br",null),"      name = string",Object(r.b)("br",null),"    })",Object(r.b)("br",null),"    aks_managed_identity = object({",Object(r.b)("br",null),"      id   = string",Object(r.b)("br",null),"      name = string",Object(r.b)("br",null),"    })",Object(r.b)("br",null),"  })")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n/a"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"aad","_","pod","_","identity","_","config"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Configuration for aad pod identity"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("pre",null,"map(object({",Object(r.b)("br",null),"    id        = string",Object(r.b)("br",null),"    client_id = string",Object(r.b)("br",null),"  }))")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n/a"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"aad","_","pod","_","identity","_","enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Should aad-pod-identity be enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"azad","_","kube","_","proxy","_","config"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The azad-kube-proxy configuration"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("pre",null,"object({",Object(r.b)("br",null),"    fqdn                  = string",Object(r.b)("br",null),"    dashboard             = string",Object(r.b)("br",null),"    azure_ad_group_prefix = string",Object(r.b)("br",null),"    allowed_ips           = list(string)",Object(r.b)("br",null),"    azure_ad_app = object({",Object(r.b)("br",null),"      client_id     = string",Object(r.b)("br",null),"      client_secret = string",Object(r.b)("br",null),"      tenant_id     = string",Object(r.b)("br",null),"    })",Object(r.b)("br",null),"    k8dash_config = object({",Object(r.b)("br",null),"      client_id     = string",Object(r.b)("br",null),"      client_secret = string",Object(r.b)("br",null),"      scope         = string",Object(r.b)("br",null),"    })",Object(r.b)("br",null),"  })")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("pre",null,"{",Object(r.b)("br",null),'  "allowed_ips": [],',Object(r.b)("br",null),'  "azure_ad_app": {',Object(r.b)("br",null),'    "client_id": "",',Object(r.b)("br",null),'    "client_secret": "",',Object(r.b)("br",null),'    "tenant_id": ""',Object(r.b)("br",null),"  },",Object(r.b)("br",null),'  "azure_ad_group_prefix": "",',Object(r.b)("br",null),'  "dashboard": "",',Object(r.b)("br",null),'  "fqdn": "",',Object(r.b)("br",null),'  "k8dash_config": {',Object(r.b)("br",null),'    "client_id": "",',Object(r.b)("br",null),'    "client_secret": "",',Object(r.b)("br",null),'    "scope": ""',Object(r.b)("br",null),"  }",Object(r.b)("br",null),"}")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"azad","_","kube","_","proxy","_","enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Should azad-kube-proxy be enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cert","_","manager","_","config"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Cert Manager configuration"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("pre",null,"object({",Object(r.b)("br",null),"    notification_email = string",Object(r.b)("br",null),"    dns_zone           = string",Object(r.b)("br",null),"  })")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n/a"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cert","_","manager","_","enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Should Cert Manager be enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"csi","_","secrets","_","store","_","provider","_","azure","_","enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Should csi-secrets-store-provider-azure be enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"datadog","_","config"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Datadog configuration"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("pre",null,"object({",Object(r.b)("br",null),"    datadog_site = string",Object(r.b)("br",null),"    api_key      = string",Object(r.b)("br",null),"  })")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("pre",null,"{",Object(r.b)("br",null),'  "api_key": "",',Object(r.b)("br",null),'  "datadog_site": ""',Object(r.b)("br",null),"}")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"datadog","_","enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Should Datadog be enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"environment"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The environment name to use for the deploy"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n/a"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"external","_","dns","_","config"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"External DNS configuration"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("pre",null,"object({",Object(r.b)("br",null),"    client_id   = string",Object(r.b)("br",null),"    resource_id = string",Object(r.b)("br",null),"  })")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n/a"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"external","_","dns","_","enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Should External DNS be enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"falco","_","enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Should Falco be enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fluxcd","_","v1","_","config"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Configuration for fluxcd-v1"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("pre",null,"object({",Object(r.b)("br",null),"    flux_status_enabled = bool",Object(r.b)("br",null),"    azure_devops = object({",Object(r.b)("br",null),"      pat  = string",Object(r.b)("br",null),"      org  = string",Object(r.b)("br",null),"      proj = string",Object(r.b)("br",null),"    })",Object(r.b)("br",null),"  })")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("pre",null,"{",Object(r.b)("br",null),'  "azure_devops": {',Object(r.b)("br",null),'    "org": "",',Object(r.b)("br",null),'    "pat": "",',Object(r.b)("br",null),'    "proj": ""',Object(r.b)("br",null),"  },",Object(r.b)("br",null),'  "flux_status_enabled": false',Object(r.b)("br",null),"}")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fluxcd","_","v1","_","enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Should fluxcd-v1 be enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fluxcd","_","v2","_","config"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Configuration for fluxcd-v2"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("pre",null,"object({",Object(r.b)("br",null),"    type = string",Object(r.b)("br",null),"    github = object({",Object(r.b)("br",null),"      owner = string",Object(r.b)("br",null),"    })",Object(r.b)("br",null),"    azure_devops = object({",Object(r.b)("br",null),"      pat  = string",Object(r.b)("br",null),"      org  = string",Object(r.b)("br",null),"      proj = string",Object(r.b)("br",null),"    })",Object(r.b)("br",null),"  })")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n/a"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fluxcd","_","v2","_","enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Should fluxcd-v2 be enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ingress","_","nginx","_","enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Should Ingress NGINX be enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"kubernetes","_","default","_","limit","_","range"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default limit range for tenant namespaces"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("pre",null,"object({",Object(r.b)("br",null),"    default_request = object({",Object(r.b)("br",null),"      cpu    = string",Object(r.b)("br",null),"      memory = string",Object(r.b)("br",null),"    })",Object(r.b)("br",null),"    default = object({",Object(r.b)("br",null),"      cpu    = string",Object(r.b)("br",null),"      memory = string",Object(r.b)("br",null),"    })",Object(r.b)("br",null),"  })")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("pre",null,"{",Object(r.b)("br",null),'  "default": {',Object(r.b)("br",null),'    "cpu": "",',Object(r.b)("br",null),'    "memory": "256Mi"',Object(r.b)("br",null),"  },",Object(r.b)("br",null),'  "default_request": {',Object(r.b)("br",null),'    "cpu": "50m",',Object(r.b)("br",null),'    "memory": "32Mi"',Object(r.b)("br",null),"  }",Object(r.b)("br",null),"}")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"kubernetes","_","network","_","policy","_","default","_","deny"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If network policies should by default deny cross namespace traffic"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"kyverno","_","enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Should Kyverno be enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"location","_","short"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The Azure region short name."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n/a"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The commonName to use for the deploy"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n/a"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"namespaces"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The namespaces that should be created in Kubernetes."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("pre",null,"list(",Object(r.b)("br",null),"    object({",Object(r.b)("br",null),"      name   = string",Object(r.b)("br",null),"      labels = map(string)",Object(r.b)("br",null),"      flux = object({",Object(r.b)("br",null),"        enabled = bool",Object(r.b)("br",null),"        github = object({",Object(r.b)("br",null),"          repo = string",Object(r.b)("br",null),"        })",Object(r.b)("br",null),"        azure_devops = object({",Object(r.b)("br",null),"          org  = string",Object(r.b)("br",null),"          proj = string",Object(r.b)("br",null),"          repo = string",Object(r.b)("br",null),"        })",Object(r.b)("br",null),"      })",Object(r.b)("br",null),"    })",Object(r.b)("br",null),"  )")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n/a"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"opa","_","gatekeeper","_","enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Should OPA Gatekeeper be enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"reloader","_","enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Should Reloader be enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"velero","_","config"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Velero configuration"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("pre",null,"object({",Object(r.b)("br",null),"    azure_storage_account_name      = string",Object(r.b)("br",null),"    azure_storage_account_container = string",Object(r.b)("br",null),"    identity = object({",Object(r.b)("br",null),"      client_id   = string",Object(r.b)("br",null),"      resource_id = string",Object(r.b)("br",null),"    })",Object(r.b)("br",null),"  })")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"n/a"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"velero","_","enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Should Velero be enabled"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"no")))),Object(r.b)("h2",{id:"outputs"},"Outputs"),Object(r.b)("p",null,"No output."))}d.isMDXComponent=!0}}]);