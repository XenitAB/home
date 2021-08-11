(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{134:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var a=t(0),n=t.n(a);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var b=n.a.createContext({}),u=function(e){var r=n.a.useContext(b),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return n.a.createElement(b.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},m=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,d=p["".concat(l,".").concat(m)]||p[m]||s[m]||i;return t?n.a.createElement(d,o(o({ref:r},b),{},{components:t})):n.a.createElement(d,o({ref:r},b))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<i;b++)l[b]=t[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},75:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return l})),t.d(r,"metadata",(function(){return o})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return u}));var a=t(3),n=t(7),i=(t(0),t(134)),l={title:"Azure Terraform modules",slug:"/terraform-modules/azure",custom_edit_url:"https://github.com/XenitAB/terraform-modules/edit/main/modules/azure/README.md",sidebar_label:"Overview"},o={unversionedId:"terraform-modules/azure/README",id:"terraform-modules/azure/README",isDocsHomePage:!1,title:"Azure Terraform modules",description:"This directory contains all the Azure Terraform modules.",source:"@site/docs/terraform-modules/azure/README.md",slug:"/terraform-modules/azure",permalink:"/docs/terraform-modules/azure",editUrl:"https://github.com/XenitAB/terraform-modules/edit/main/modules/azure/README.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"IRSA",permalink:"/docs/terraform-modules/aws/irsa"},next:{title:"Azure Kubernetes Service",permalink:"/docs/terraform-modules/azure/aks"}},c=[{value:"Modules",id:"modules",children:[{value:"Deprecated modules",id:"deprecated-modules",children:[]}]},{value:"Getting started",id:"getting-started",children:[{value:"Azure Service Principal (owner)",id:"azure-service-principal-owner",children:[]}]}],b={rightToc:c};function u(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This directory contains all the Azure Terraform modules."),Object(i.b)("h2",{id:"modules"},"Modules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/terraform-modules/azure/aks"}),Object(i.b)("inlineCode",{parentName:"a"},"aks"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/terraform-modules/azure/aks-global"}),Object(i.b)("inlineCode",{parentName:"a"},"aks-global"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/terraform-modules/azure/azure-pipelines-agent-vmss"}),Object(i.b)("inlineCode",{parentName:"a"},"azure-pipelines-agent-vmss"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/terraform-modules/azure/core"}),Object(i.b)("inlineCode",{parentName:"a"},"core"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/terraform-modules/azure/github-runner"}),Object(i.b)("inlineCode",{parentName:"a"},"github-runner"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/terraform-modules/azure/governance-global"}),Object(i.b)("inlineCode",{parentName:"a"},"governance-global"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/terraform-modules/azure/governance-regional"}),Object(i.b)("inlineCode",{parentName:"a"},"governance-regional"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/terraform-modules/azure/hub"}),Object(i.b)("inlineCode",{parentName:"a"},"hub")))),Object(i.b)("h3",{id:"deprecated-modules"},"Deprecated modules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/terraform-modules/azure/governance"}),Object(i.b)("inlineCode",{parentName:"a"},"governance")))),Object(i.b)("h2",{id:"getting-started"},"Getting started"),Object(i.b)("h3",{id:"azure-service-principal-owner"},"Azure Service Principal (owner)"),Object(i.b)("p",null,"INFO: This service principal will be used to run ",Object(i.b)("inlineCode",{parentName:"p"},"governance-global"),", ",Object(i.b)("inlineCode",{parentName:"p"},"governance-regional"),", ",Object(i.b)("inlineCode",{parentName:"p"},"core"),", ",Object(i.b)("inlineCode",{parentName:"p"},"aks-global"),", ",Object(i.b)("inlineCode",{parentName:"p"},"aks")," and ",Object(i.b)("inlineCode",{parentName:"p"},"hub")," modules. Running other modules, like ",Object(i.b)("inlineCode",{parentName:"p"},"azure-pipelines-agent-vmss")," can be done with the service principals that are created and stored in the core Azure KeyVault."),Object(i.b)("p",null,"Create and delegate access to the ",Object(i.b)("inlineCode",{parentName:"p"},"owner")," service principal:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create new service principal: ",Object(i.b)("inlineCode",{parentName:"li"},"sp-sub-<subscription_name>-all-owner")),Object(i.b)("li",{parentName:"ul"},"Create three Azure AD groups:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Owner group: ",Object(i.b)("inlineCode",{parentName:"li"},"az-sub-<subscription_name>-all-owner")),Object(i.b)("li",{parentName:"ul"},"Contributor group: ",Object(i.b)("inlineCode",{parentName:"li"},"az-sub-<subscription_name>-all-contributor")),Object(i.b)("li",{parentName:"ul"},"Reader group: ",Object(i.b)("inlineCode",{parentName:"li"},"az-sub-<subscription_name>-all-reader")))),Object(i.b)("li",{parentName:"ul"},"Grant service principal the following permissions:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"API Permissions: (Application)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Group.ReadWrite.All")," (",Object(i.b)("inlineCode",{parentName:"li"},"Microsoft Graph"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Application.ReadWrite.All")," (",Object(i.b)("inlineCode",{parentName:"li"},"Azure Active Directory Graph")," - it's under the ",Object(i.b)("inlineCode",{parentName:"li"},"Supported legacy APIs")," section)"))),Object(i.b)("li",{parentName:"ul"},"API Permissions: ",Object(i.b)("inlineCode",{parentName:"li"},"Grant admin consent for <Tenant>")),Object(i.b)("li",{parentName:"ul"},"Subscription permissions on all the subscriptions: ",Object(i.b)("inlineCode",{parentName:"li"},"Owner")),Object(i.b)("li",{parentName:"ul"},"The service principal also needs to be member of the ",Object(i.b)("inlineCode",{parentName:"li"},"User administrator")," role")))))}u.isMDXComponent=!0}}]);