(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{104:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),o=(t(0),t(149)),i={title:"Xenit Terraform modules",slug:"/terraform-modules",custom_edit_url:"https://github.com/XenitAB/terraform-modules/edit/main/README.md",sidebar_label:"Overview"},s={unversionedId:"terraform-modules/README",id:"terraform-modules/README",isDocsHomePage:!1,title:"Xenit Terraform modules",description:"This repository contains the Xenit Terraform modules.",source:"@site/docs/terraform-modules/README.md",slug:"/terraform-modules",permalink:"/docs/terraform-modules",editUrl:"https://github.com/XenitAB/terraform-modules/edit/main/README.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Contributing",permalink:"/docs/terraform-modules/CONTRIBUTING"},next:{title:"AWS Terraform modules",permalink:"/docs/terraform-modules/aws"}},c=[{value:"Module groups",id:"module-groups",children:[]},{value:"Contributing",id:"contributing",children:[]},{value:"Style Guide",id:"style-guide",children:[]}],l={rightToc:c};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This repository contains the Xenit Terraform modules."),Object(o.b)("h2",{id:"module-groups"},"Module groups"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/terraform-modules/aws"}),Object(o.b)("inlineCode",{parentName:"a"},"aws"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/terraform-modules/azure"}),Object(o.b)("inlineCode",{parentName:"a"},"azure"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/terraform-modules/kubernetes"}),Object(o.b)("inlineCode",{parentName:"a"},"kubernetes")))),Object(o.b)("h2",{id:"contributing"},"Contributing"),Object(o.b)("p",null,"Read the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/terraform-modules/CONTRIBUTING"}),"contributing guide")," to get started writing modules."),Object(o.b)("h2",{id:"style-guide"},"Style Guide"),Object(o.b)("p",null,"These modules use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/terraform-linters/tflint"}),"tflint")," to enforce best practices, check the tflint configuration file in the modules\ndirectory for details about which rules are enabled. The are also provider specific style guides in the individual directories for standards that only\napply to that provider. Following the standards below however will help you avoid the most common rule violations."),Object(o.b)("p",null,"Every resource name should be lowercase and snakecased. No other format should be used in the resource names. The role assignment for a cluster admin\nis named ",Object(o.b)("inlineCode",{parentName:"p"},"cluster_admin")," and not ",Object(o.b)("inlineCode",{parentName:"p"},"clusterAdmin"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-terraform"}),'resource "azurerm_role_assignment" "cluster_admin" {\n  scope = azurerm_kubernetes_cluster.this.id\n  role_definition_name = "Azure Kubernetes Service Cluster User Role"\n  principal_id         = var.aad_groups.cluster_admin.id\n}\n')),Object(o.b)("p",null,"Resources that only have a single instance and no fitting name that distinguishes it should use the name ",Object(o.b)("inlineCode",{parentName:"p"},"this"),". The reasoning is that it is more DRY\nthan reporting the resource type like ",Object(o.b)("inlineCode",{parentName:"p"},"aks")," which other people may do. However if there is a fitting name please use it. Additionally please do not\nhave to resources of the same type where one of them is called ",Object(o.b)("inlineCode",{parentName:"p"},"this")," and the other has a specific name, instead give both resources a specific name."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-terraform"}),'resource "azurerm_kubernetes_cluster" "this" {\n  name                            = "aks-${var.environment}-${var.location_short}-${var.name}${var.aks_name_suffix}"\n  location                        = data.azurerm_resource_group.this.location\n  resource_group_name             = data.azurerm_resource_group.this.name\n  dns_prefix                      = "aks-${var.environment}-${var.location_short}-${var.name}${var.aks_name_suffix}"\n}\n')))}u.isMDXComponent=!0},149:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},m=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},p=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(t),p=n,b=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return t?a.a.createElement(b,s(s({ref:r},l),{},{components:t})):a.a.createElement(b,s({ref:r},l))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);