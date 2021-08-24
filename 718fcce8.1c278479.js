(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{137:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(a),j=r,d=u["".concat(c,".").concat(j)]||u[j]||O[j]||b;return a?n.a.createElement(d,l(l({ref:t},i),{},{components:a})):n.a.createElement(d,l({ref:t},i))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<b;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},163:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fluxcd-v2-cd7b8300384cf8a51744bb537697956d.jpg"},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),b=(a(0),a(137)),c={title:"Flux V2",slug:"/terraform-modules/kubernetes/fluxcd-v2-azdo",custom_edit_url:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/fluxcd-v2-azdo/README.md"},l={unversionedId:"terraform-modules/kubernetes/fluxcd-v2-azdo",id:"terraform-modules/kubernetes/fluxcd-v2-azdo",isDocsHomePage:!1,title:"Flux V2",description:"Installs and configures flux2 with Azure DevOps.",source:"@site/docs/terraform-modules/kubernetes/fluxcd-v2-azdo.md",slug:"/terraform-modules/kubernetes/fluxcd-v2-azdo",permalink:"/docs/terraform-modules/kubernetes/fluxcd-v2-azdo",editUrl:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/fluxcd-v2-azdo/README.md",version:"current"},o=[{value:"Requirements",id:"requirements",children:[]},{value:"Providers",id:"providers",children:[]},{value:"Modules",id:"modules",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]}],i={rightToc:o};function p(e){var t=e.components,c=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,c,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Installs and configures ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/fluxcd/flux2"}),"flux2")," with Azure DevOps."),Object(b.b)("p",null,'The module is meant to offer a full bootstrap and confiugration of a Kubernetes cluster\nwith Fluxv2. A "root" repository is created for the bootstrap configuration along with a\nrepository per namepsace passed in the variables. The root repository will receive ',Object(b.b)("inlineCode",{parentName:"p"},"cluster-admin"),"\npermissions in the cluster while each of the namespace repositories will be limited to their\nrepsective namespace. The CRDs, component deployments and bootstrap configuration are both\nadded to the Kubernetes cluster and commited to the root repository. While the namespace\nconfiguration is only comitted to the root repository and expected to be reconciled through\nthe bootstrap configuration."),Object(b.b)("p",null,Object(b.b)("img",{alt:"flux-arch",src:a(163).default})),Object(b.b)("h2",{id:"requirements"},"Requirements"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Version"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_terraform"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#requirement_terraform"}),"terraform")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0.15.3")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_azuredevops"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#requirement_azuredevops"}),"azuredevops")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0.3.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_flux"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#requirement_flux"}),"flux")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0.2.2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_helm"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#requirement_helm"}),"helm")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.2.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_kubectl"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#requirement_kubectl"}),"kubectl")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.11.3")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_kubernetes"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#requirement_kubernetes"}),"kubernetes")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.4.1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_random"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#requirement_random"}),"random")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"3.1.0")))),Object(b.b)("h2",{id:"providers"},"Providers"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Version"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"provider_azuredevops"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#provider_azuredevops"}),"azuredevops")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0.3.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"provider_flux"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#provider_flux"}),"flux")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0.2.2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"provider_helm"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#provider_helm"}),"helm")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.2.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"provider_kubectl"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#provider_kubectl"}),"kubectl")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.11.3")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"provider_kubernetes"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#provider_kubernetes"}),"kubernetes")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.4.1")))),Object(b.b)("h2",{id:"modules"},"Modules"),Object(b.b)("p",null,"No modules."),Object(b.b)("h2",{id:"resources"},"Resources"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/xenitab/azuredevops/0.3.0/docs/resources/git_repository_file"}),"azuredevops_git_repository_file.cluster_tenants")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/xenitab/azuredevops/0.3.0/docs/resources/git_repository_file"}),"azuredevops_git_repository_file.install")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/xenitab/azuredevops/0.3.0/docs/resources/git_repository_file"}),"azuredevops_git_repository_file.kustomize")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/xenitab/azuredevops/0.3.0/docs/resources/git_repository_file"}),"azuredevops_git_repository_file.sync")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/xenitab/azuredevops/0.3.0/docs/resources/git_repository_file"}),"azuredevops_git_repository_file.tenant")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/helm/2.2.0/docs/resources/release"}),"helm_release.azdo_proxy")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/gavinbunney/kubectl/1.11.3/docs/resources/manifest"}),"kubectl_manifest.install")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/gavinbunney/kubectl/1.11.3/docs/resources/manifest"}),"kubectl_manifest.sync")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/kubernetes/2.4.1/docs/resources/namespace"}),"kubernetes_namespace.this")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/xenitab/azuredevops/0.3.0/docs/data-sources/git_repository"}),"azuredevops_git_repository.cluster")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"data source")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/xenitab/azuredevops/0.3.0/docs/data-sources/project"}),"azuredevops_project.this")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"data source")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/fluxcd/flux/0.2.2/docs/data-sources/install"}),"flux_install.this")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"data source")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/fluxcd/flux/0.2.2/docs/data-sources/sync"}),"flux_sync.this")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"data source")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/gavinbunney/kubectl/1.11.3/docs/data-sources/file_documents"}),"kubectl_file_documents.install")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"data source")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/gavinbunney/kubectl/1.11.3/docs/data-sources/file_documents"}),"kubectl_file_documents.sync")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"data source")))),Object(b.b)("h2",{id:"inputs"},"Inputs"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_azure_devops_org"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_azure_devops_org"}),"azure","_","devops","_","org")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Azure DevOps organization for bootstrap repository"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_azure_devops_pat"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_azure_devops_pat"}),"azure","_","devops","_","pat")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PAT to authenticate with Azure DevOps"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_azure_devops_proj"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_azure_devops_proj"}),"azure","_","devops","_","proj")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Azure DevOps project for bootstrap repository"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_branch"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_branch"}),"branch")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Branch to point source controller towards"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"main"')),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_cluster_repo"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_cluster_repo"}),"cluster","_","repo")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Name of cluster repository"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"fleet-infra"')),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_environment"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_environment"}),"environment")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Environment name of the cluster"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_namespaces"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_namespaces"}),"namespaces")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The namespaces to configure flux with"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("pre",null,"list(",Object(b.b)("br",null),"    object({",Object(b.b)("br",null),"      name = string",Object(b.b)("br",null),"      flux = object({",Object(b.b)("br",null),"        enabled     = bool",Object(b.b)("br",null),"        create_crds = bool",Object(b.b)("br",null),"        org         = string",Object(b.b)("br",null),"        proj        = string",Object(b.b)("br",null),"        repo        = string",Object(b.b)("br",null),"      })",Object(b.b)("br",null),"    })",Object(b.b)("br",null),"  )")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"yes")))),Object(b.b)("h2",{id:"outputs"},"Outputs"),Object(b.b)("p",null,"No outputs."))}p.isMDXComponent=!0}}]);