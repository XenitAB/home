(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),b=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=b(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(t),m=n,d=p["".concat(o,".").concat(m)]||p[m]||s[m]||i;return t?a.a.createElement(d,l(l({ref:r},u),{},{components:t})):a.a.createElement(d,l({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},70:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return b}));var n=t(3),a=t(7),i=(t(0),t(100)),o={title:"Azure Terraform modules",slug:"/terraform-modules/azure",custom_edit_url:"https://github.com/XenitAB/terraform-modules/edit/main/modules/azure/README.md",sidebar_label:"Overview"},l={unversionedId:"terraform-modules/azure/README",id:"terraform-modules/azure/README",isDocsHomePage:!1,title:"Azure Terraform modules",description:"This directory contains all the Azure Terraform modules.",source:"@site/docs/terraform-modules/azure/README.md",slug:"/terraform-modules/azure",permalink:"/docs/terraform-modules/azure",editUrl:"https://github.com/XenitAB/terraform-modules/edit/main/modules/azure/README.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Xenit Terraform modules",permalink:"/docs/terraform-modules"},next:{title:"Azure Kubernetes Service",permalink:"/docs/terraform-modules/azure/aks"}},c=[{value:"Modules",id:"modules",children:[]},{value:"Getting started",id:"getting-started",children:[{value:"Azure Service Principal (owner)",id:"azure-service-principal-owner",children:[]}]}],u={rightToc:c};function b(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This directory contains all the Azure Terraform modules."),Object(i.b)("h2",{id:"modules"},"Modules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/terraform-modules/azure/aks"}),Object(i.b)("inlineCode",{parentName:"a"},"aks"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/terraform-modules/azure/aks-global"}),Object(i.b)("inlineCode",{parentName:"a"},"aks-global"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/terraform-modules/azure/azure-pipelines-agent-vmss"}),Object(i.b)("inlineCode",{parentName:"a"},"azure-pipelines-agent-vmss"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/terraform-modules/azure/core"}),Object(i.b)("inlineCode",{parentName:"a"},"core"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/terraform-modules/azure/governance"}),Object(i.b)("inlineCode",{parentName:"a"},"governance"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/terraform-modules/azure/hub"}),Object(i.b)("inlineCode",{parentName:"a"},"hub")))),Object(i.b)("h2",{id:"getting-started"},"Getting started"),Object(i.b)("h3",{id:"azure-service-principal-owner"},"Azure Service Principal (owner)"),Object(i.b)("p",null,"INFO: This service principal will be used to run ",Object(i.b)("inlineCode",{parentName:"p"},"governance"),", ",Object(i.b)("inlineCode",{parentName:"p"},"core"),", ",Object(i.b)("inlineCode",{parentName:"p"},"aks-global"),", ",Object(i.b)("inlineCode",{parentName:"p"},"aks")," and ",Object(i.b)("inlineCode",{parentName:"p"},"hub")," modules. Running other modules, like ",Object(i.b)("inlineCode",{parentName:"p"},"azure-pipelines-agent-vmss")," can be done with the service principals that are created and stored in the core Azure KeyVault."),Object(i.b)("p",null,"Create and delegate access to the ",Object(i.b)("inlineCode",{parentName:"p"},"owner")," service principal:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create new service principal: ",Object(i.b)("inlineCode",{parentName:"li"},"sp-sub-<subscription_name>-all-owner")),Object(i.b)("li",{parentName:"ul"},"Create three Azure AD groups:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Owner group: ",Object(i.b)("inlineCode",{parentName:"li"},"az-sub-<subscription_name>-all-owner")),Object(i.b)("li",{parentName:"ul"},"Contributor group: ",Object(i.b)("inlineCode",{parentName:"li"},"az-sub-<subscription_name>-all-contributor")),Object(i.b)("li",{parentName:"ul"},"Reader group: ",Object(i.b)("inlineCode",{parentName:"li"},"az-sub-<subscription_name>-all-reader")))),Object(i.b)("li",{parentName:"ul"},"Grant service principal the following permissions:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"API Permissions: (Application)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Group.ReadWrite.All")," (",Object(i.b)("inlineCode",{parentName:"li"},"Microsoft Graph"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Application.ReadWrite.All")," (",Object(i.b)("inlineCode",{parentName:"li"},"Azure Active Directory Graph")," - it's under the ",Object(i.b)("inlineCode",{parentName:"li"},"Supported legacy APIs")," section)"))),Object(i.b)("li",{parentName:"ul"},"API Permissions: ",Object(i.b)("inlineCode",{parentName:"li"},"Grant admin consent for <Tenant>")),Object(i.b)("li",{parentName:"ul"},"Subscription permissions on all the subscriptions: ",Object(i.b)("inlineCode",{parentName:"li"},"Owner")),Object(i.b)("li",{parentName:"ul"},"The service principal also needs to be member of the ",Object(i.b)("inlineCode",{parentName:"li"},"User administrator")," role")))))}b.isMDXComponent=!0}}]);