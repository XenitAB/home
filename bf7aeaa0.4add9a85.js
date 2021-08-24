(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),b=(a(0),a(137)),c={title:"Hub",slug:"/terraform-modules/azure/hub",custom_edit_url:"https://github.com/XenitAB/terraform-modules/edit/main/modules/azure/hub/README.md"},l={unversionedId:"terraform-modules/azure/hub",id:"terraform-modules/azure/hub",isDocsHomePage:!1,title:"Hub",description:"This module is used to create a separate network in one of the subscriptions (usually PROD) and connect it to all the networks.",source:"@site/docs/terraform-modules/azure/hub.md",slug:"/terraform-modules/azure/hub",permalink:"/docs/terraform-modules/azure/hub",editUrl:"https://github.com/XenitAB/terraform-modules/edit/main/modules/azure/hub/README.md",version:"current"},i=[{value:"Usage",id:"usage",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Providers",id:"providers",children:[]},{value:"Modules",id:"modules",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]}],o={rightToc:i};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"This module is used to create a separate network in one of the subscriptions (usually PROD) and connect it to all the networks."),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("p",null,"Use together with the ",Object(b.b)("inlineCode",{parentName:"p"},"core")," module to create a peered network where SPOF (single point of failure) resources can be created, lik Azure Pipelines Agent Virtual Machine Scale Set (VMSS)."),Object(b.b)("h2",{id:"requirements"},"Requirements"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Version"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_terraform"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#requirement_terraform"}),"terraform")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0.15.3")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_azuread"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#requirement_azuread"}),"azuread")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.6.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"requirement_azurerm"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#requirement_azurerm"}),"azurerm")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.72.0")))),Object(b.b)("h2",{id:"providers"},"Providers"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Version"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"provider_azuread"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#provider_azuread"}),"azuread")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.6.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"provider_azurerm"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#provider_azurerm"}),"azurerm")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.72.0")))),Object(b.b)("h2",{id:"modules"},"Modules"),Object(b.b)("p",null,"No modules."),Object(b.b)("h2",{id:"resources"},"Resources"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/azurerm/2.72.0/docs/resources/nat_gateway"}),"azurerm_nat_gateway.this")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/azurerm/2.72.0/docs/resources/network_security_group"}),"azurerm_network_security_group.this")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/azurerm/2.72.0/docs/resources/public_ip_prefix"}),"azurerm_public_ip_prefix.this")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/azurerm/2.72.0/docs/resources/role_assignment"}),"azurerm_role_assignment.service_endpoint_join")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/azurerm/2.72.0/docs/resources/role_definition"}),"azurerm_role_definition.service_endpoint_join")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/azurerm/2.72.0/docs/resources/subnet"}),"azurerm_subnet.this")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/azurerm/2.72.0/docs/resources/subnet_nat_gateway_association"}),"azurerm_subnet_nat_gateway_association.this")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/azurerm/2.72.0/docs/resources/subnet_network_security_group_association"}),"azurerm_subnet_network_security_group_association.this")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/azurerm/2.72.0/docs/resources/virtual_network"}),"azurerm_virtual_network.this")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/azurerm/2.72.0/docs/resources/virtual_network_peering"}),"azurerm_virtual_network_peering.this")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resource")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/azuread/1.6.0/docs/data-sources/group"}),"azuread_group.service_endpoint_join")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"data source")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://registry.terraform.io/providers/hashicorp/azurerm/2.72.0/docs/data-sources/resource_group"}),"azurerm_resource_group.this")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"data source")))),Object(b.b)("h2",{id:"inputs"},"Inputs"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_azure_ad_group_prefix"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_azure_ad_group_prefix"}),"azure","_","ad","_","group","_","prefix")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Prefix for Azure AD Groups"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"az"')),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_environment"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_environment"}),"environment")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The environment (short name) to use for the deploy"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_group_name_separator"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_group_name_separator"}),"group","_","name","_","separator")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Separator for group names"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"-"')),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_location_short"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_location_short"}),"location","_","short")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The location shortname for the subscription"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_name"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_name"}),"name")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The name to use for the deploy"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_nat_gateway_public_ip_prefix_length"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_nat_gateway_public_ip_prefix_length"}),"nat","_","gateway","_","public","_","ip","_","prefix","_","length")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The Public IP Prefix length for NAT Gateway"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"31")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_peering_config"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_peering_config"}),"peering","_","config")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Peering configuration"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("pre",null,"list(object({",Object(b.b)("br",null),"    name                         = string",Object(b.b)("br",null),"    remote_virtual_network_id    = string",Object(b.b)("br",null),"    allow_forwarded_traffic      = bool",Object(b.b)("br",null),"    use_remote_gateways          = bool",Object(b.b)("br",null),"    allow_virtual_network_access = bool",Object(b.b)("br",null),"  }))")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"[]")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_subscription_name"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_subscription_name"}),"subscription","_","name")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The subscription CommonName to use for the deploy"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"input_vnet_config"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#input_vnet_config"}),"vnet","_","config")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Address spaces used by virtual network."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("pre",null,"object({",Object(b.b)("br",null),"    address_space = list(string)",Object(b.b)("br",null),"    subnets = list(object({",Object(b.b)("br",null),"      name              = string",Object(b.b)("br",null),"      cidr              = string",Object(b.b)("br",null),"      service_endpoints = list(string)",Object(b.b)("br",null),"    }))",Object(b.b)("br",null),"  })")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"n/a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"yes")))),Object(b.b)("h2",{id:"outputs"},"Outputs"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"output_public_ip_prefixes"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#output_public_ip_prefixes"}),"public","_","ip","_","prefixes")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Public IP prefix information")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"output_resource_groups"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#output_resource_groups"}),"resource","_","groups")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Resource group information")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"output_subnets"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#output_subnets"}),"subnets")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Subnet information")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",{name:"output_virtual_networks"})," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#output_virtual_networks"}),"virtual","_","networks")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Virtual network information")))))}u.isMDXComponent=!0},137:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),u=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=u(a),j=r,m=p["".concat(c,".").concat(j)]||p[j]||O[j]||b;return a?n.a.createElement(m,l(l({ref:t},o),{},{components:a})):n.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);