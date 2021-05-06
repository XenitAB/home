(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{130:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=n.a.createContext({}),o=function(e){var t=n.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return n.a.createElement(m.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=o(a),p=r,j=u["".concat(c,".").concat(p)]||u[p]||O[p]||b;return a?n.a.createElement(j,l(l({ref:t},m),{},{components:a})):n.a.createElement(j,l({ref:t},m))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var m=2;m<b;m++)c[m]=a[m];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(7),b=(a(0),a(130)),c={title:"Prometheus",slug:"/terraform-modules/kubernetes/prometheus",custom_edit_url:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/prometheus/README.md"},l={unversionedId:"terraform-modules/kubernetes/prometheus",id:"terraform-modules/kubernetes/prometheus",isDocsHomePage:!1,title:"Prometheus",description:"Adds Prometheus to a Kubernetes cluster.",source:"@site/docs/terraform-modules/kubernetes/prometheus.md",slug:"/terraform-modules/kubernetes/prometheus",permalink:"/docs/terraform-modules/kubernetes/prometheus",editUrl:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/prometheus/README.md",version:"current",sidebar:"docs",previous:{title:"OPA Gatekeeper",permalink:"/docs/terraform-modules/kubernetes/opa-gatekeeper"},next:{title:"Reloader",permalink:"/docs/terraform-modules/kubernetes/reloader"}},i=[{value:"Requirements",id:"requirements",children:[]},{value:"Providers",id:"providers",children:[]},{value:"Modules",id:"modules",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]}],m={rightToc:i};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Adds ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack"}),"Prometheus")," to a Kubernetes cluster."),Object(b.b)("h2",{id:"requirements"},"Requirements"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Version"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_terraform"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#requirement_terraform"}),"terraform")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0.14.7")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_helm"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#requirement_helm"}),"helm")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.1.2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_kubernetes"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#requirement_kubernetes"}),"kubernetes")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.1.0")))),Object(b.b)("h2",{id:"providers"},"Providers"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Version"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"provider_helm"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#provider_helm"}),"helm")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.1.2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"provider_kubernetes"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#provider_kubernetes"}),"kubernetes")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.1.0")))),Object(b.b)("h2",{id:"modules"},"Modules"),Object(b.b)("p",null,"No modules."),Object(b.b)("h2",{id:"resources"},"Resources"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/helm/2.1.2/docs/resources/release"}),"helm_release.prometheus")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/helm/2.1.2/docs/resources/release"}),"helm_release.prometheus_extras")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/kubernetes/2.1.0/docs/resources/namespace"}),"kubernetes_namespace.this")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")))),Object(b.b)("h2",{id:"inputs"},"Inputs"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_cluster_name"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_cluster_name"}),"cluster","_","name")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Name of the prometheus cluster"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_environment"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_environment"}),"environment")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The environment in which the prometheus instance is deployed"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_namespace_selector"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_namespace_selector"}),"namespace","_","selector")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Kind labels to look for in namespaces"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"list(string)")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("pre",null,"[",Object(b.b)("br",null),'  "platform"',Object(b.b)("br",null),"]")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_remote_write_enabled"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_remote_write_enabled"}),"remote","_","write","_","enabled")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"If remote write should be enabled or not"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_remote_write_url"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_remote_write_url"}),"remote","_","write","_","url")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The URL where to send prometheus remote","_","write data"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_resource_selector"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_resource_selector"}),"resource","_","selector")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Monitoring type labels to look for in Prometheus resources"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"list(string)")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("pre",null,"[",Object(b.b)("br",null),'  "platform"',Object(b.b)("br",null),"]")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_tenant_id"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_tenant_id"}),"tenant","_","id")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The tenant id label to apply to all metrics in remote write"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'""')),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_volume_claim_enabled"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_volume_claim_enabled"}),"volume","_","claim","_","enabled")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"If prometheus should store data localy"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_volume_claim_size"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_volume_claim_size"}),"volume","_","claim","_","size")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Size of prometheus disk"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"5Gi"')),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_volume_claim_storage_class_name"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_volume_claim_storage_class_name"}),"volume","_","claim","_","storage","_","class","_","name")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"StorageClass name that your pvc will use"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"default"')),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"no")))),Object(b.b)("h2",{id:"outputs"},"Outputs"),Object(b.b)("p",null,"No outputs."))}o.isMDXComponent=!0}}]);