"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[882],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=u(r),p=a,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},4996:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return s}});var n=r(2263),a=r(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,s=i.forcePrependBaseUrl,o=void 0!==s&&s,l=i.absolute,u=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(o)return t+r;var c=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+c:c}(i,r,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},6338:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),s=r(4996),o=["components"],l={id:"architecture-and-design",title:"Architecture and design"},u=void 0,c={unversionedId:"xks/architecture-and-design",id:"xks/architecture-and-design",isDocsHomePage:!1,title:"Architecture and design",description:"Overview",source:"@site/docs/xks/architecture-and-design.md",sourceDirName:"xks",slug:"/xks/architecture-and-design",permalink:"/docs/xks/architecture-and-design",editUrl:"https://github.com/xenitab/xenitab.github.io/edit/main/docs/xks/architecture-and-design.md",tags:[],version:"current",frontMatter:{id:"architecture-and-design",title:"Architecture and design"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/xks/index"},next:{title:"Introduction",permalink:"/docs/xks/developer-guide/introduction"}},d=[{value:"Overview",id:"overview",children:[{value:"Glossary",id:"glossary",children:[],level:3}],level:2},{value:"Role-based access management",id:"role-based-access-management",children:[],level:2},{value:"Security and access",id:"security-and-access",children:[{value:"Security",id:"security",children:[{value:"Tenant security",id:"tenant-security",children:[],level:4},{value:"Platform",id:"platform",children:[],level:4}],level:3},{value:"Access",id:"access",children:[],level:3}],level:2},{value:"Network design",id:"network-design",children:[],level:2},{value:"Backup",id:"backup",children:[],level:2},{value:"Cost optimization",id:"cost-optimization",children:[],level:2},{value:"Container management",id:"container-management",children:[],level:2},{value:"Xenit Kubernetes Framework",id:"xenit-kubernetes-framework",children:[],level:2}],h={toc:d};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/search?q=topic%3Axenit-kubernetes-framework+org%3AXenitAB+fork%3Atrue"},"Xenit Kubernetes Framework")," (XKF) are the open source building blocks for a service Xenit AB provides to customers: ",(0,i.kt)("a",{parentName:"p",href:"https://xenit.se/it-tjanster/kubernetes-eng/"},"Xenit Kubernetes Service")," (XKS)"),(0,i.kt)("p",null,"In the terminology of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/enterprise-scale/architecture"},"Microsoft Cloud Adoption Framework")," (CAF), Xenit Kubernetes Service is an enterprise-scale landing zone. Additionally, the workload supports multiple cloud providers and AWS is also supported at the moment (but still requires the governance part in Azure)."),(0,i.kt)("img",{alt:"XKS Overview",src:(0,s.Z)("img/assets/xks/operator-guide/aks-overview.jpg")}),(0,i.kt)("h3",{id:"glossary"},"Glossary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Platform team: the team managing the platform (XKF)"),(0,i.kt)("li",{parentName:"ul"},"Tenant: A group of people (team/project/product) at the company using XKS")),(0,i.kt)("h2",{id:"role-based-access-management"},"Role-based access management"),(0,i.kt)("p",null,"All role-based access control (RBAC) and identity & access management (IAM) is handled with Azure AD. Azure AD groups are created and nested using the framework and framework admins as well as customer end users are granted access through these different groups."),(0,i.kt)("p",null,"Where possible two different permissions are exposed through Azure AD groups: Reader and Contributor."),(0,i.kt)("p",null,"These permissions are scoped in many different ways and start at the management group level, subscription level, resource group level and at last namespaces in Kubernetes. These are also split over the different environments (development, quality assurance and production) meaning you can have read/write in one environment but only read in the others."),(0,i.kt)("p",null,"An owner role and group is also created for most resources, but the recommendation is not to use it as owners will be able to actually change the IAM which in most cases is undesirable."),(0,i.kt)("p",null,"Usually the tenant is granted read/write to their resource groups and namespaces, meaning they will be able to add/remove whatever they want in their limited scope. This usually means creating deployments in Kubernetes as well as databases and other stateful resources in their Azure Resource Groups. When using AWS Elastic Kubernetes Service (EKS) the delegation is not as rigorous as in Azure and the default setup creates three accounts where all the customer tenants share resources."),(0,i.kt)("p",null,"Each tenant namespace has the ability to use the cloud provider metadata service to access services in the cloud provider. This is enabled through tools like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/aad-pod-identity"},"Azure AD POD Identity")," (aad-pod-identity) and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html"},"IAM Roles for Service Accounts")," (IRSA). These tools enable the tenants to access resources in their respective resource groups or accounts without having to create manually shared secrets (that would also have to be rotated)."),(0,i.kt)("h2",{id:"security-and-access"},"Security and access"),(0,i.kt)("h3",{id:"security"},"Security"),(0,i.kt)("p",null,"The platform is based on the principle of least privilege and in every layer we try to only delegate what is needed and no more. This is both true for the tenant and platform resources and their respective access."),(0,i.kt)("p",null,"The second part of the work we do regarding security is focused around trying to keep the platform as lean and easy to understand as possible, making sure to remove complexity where needed. Adding security often means selecting a much more complex solution and it is much harder to understand and maintain something complex over something simple. Keeping the cognitive load of maintaining a platform like this as low as possible is always a priority."),(0,i.kt)("p",null,"Additionally, we try to add products and services into the mix to make it easier for both the platform team and tenant teams to keep the environment secure. This is an ever-changing environment where new things are added as needed and the list below is not an exhaustive one:"),(0,i.kt)("h4",{id:"tenant-security"},"Tenant security"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GitOps for application delivery to clusters"),(0,i.kt)("li",{parentName:"ul"},"CI/CD templates for building containers and promoting applications with GitOps"),(0,i.kt)("li",{parentName:"ul"},"Tools for security scanning and linting inside the pipelines"),(0,i.kt)("li",{parentName:"ul"},"Admission controllers to make sure unsafe configuration is prohibited"),(0,i.kt)("li",{parentName:"ul"},"Mutating admission controllers to make it easier to have sane defaults"),(0,i.kt)("li",{parentName:"ul"},"Continuous education from the platform team"),(0,i.kt)("li",{parentName:"ul"},"One account to protect instead of having multiple accounts to access different resources"),(0,i.kt)("li",{parentName:"ul"},"Infrastructure as Code with corresponding CI/CD templates for secure deployment of resources"),(0,i.kt)("li",{parentName:"ul"},"SSO from the tenant namespaces to the tenant resource groups to make sure no secrets have to be shared"),(0,i.kt)("li",{parentName:"ul"},"Ability to use mTLS together with a service mesh (linkerd)"),(0,i.kt)("li",{parentName:"ul"},"Automated certificate and DNS management from the platform")),(0,i.kt)("h4",{id:"platform"},"Platform"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Observability of the platform handled by the platform team"),(0,i.kt)("li",{parentName:"ul"},"Runtime security in the platform using Falco"),(0,i.kt)("li",{parentName:"ul"},"Automated update management of Infrastructure as Code (with code review)")),(0,i.kt)("h3",{id:"access"},"Access"),(0,i.kt)("p",null,"The primary authentication method to access any resource is based on Azure AD. Most of the actions taken by a tenant engineer will require authentication to Azure AD either using the Azure Management Console or the Azure CLI."),(0,i.kt)("p",null,"A tenant will be granted access to the clusters using a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XenitAB/azad-kube-proxy"},"proxy")," built by Xenit and provided in the framework, making sure they do not have to reconfigure their computers when a blue/green deployment of the clusters are made and the Kubernetes API endpoint change. The proxy will move with the clusters and it will be seamless for the tenant engineers."),(0,i.kt)("p",null,"The proxy also provides a CLI (",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," plugin through ",(0,i.kt)("a",{parentName:"p",href:"https://krew.sigs.k8s.io/"},"krew"),") that makes it easier to both discover and configure access to the clusters. A valid session with Azure CLI is required to use it."),(0,i.kt)("p",null,"Other than that, most of the access and work with the tenant resources are done through a GitOps repository for changes in regards to applications in Kubernetes and a Terraform repository in regards to resources in the cloud provider."),(0,i.kt)("h2",{id:"network-design"},"Network design"),(0,i.kt)("p",null,"By default, the network setup is expected to be quite autonomous and usually considered to be an external service compared to everything else in the organization using it. It is possible to setup peering with internal networks, but usually it begins with a much simpler setup and then grows organically when required."),(0,i.kt)("img",{alt:"XKS Simple Network Design",src:(0,s.Z)("img/assets/xks/operator-guide/simple-network-design.jpg")}),(0,i.kt)("p",null,"The cluster environments are completely separated from each other, but a hub in the production subscription has a peering with them to provide static IP-addresses for CI/CD like terraform to access resources."),(0,i.kt)("p",null,"Inside an environment the cluster is using kubenet and Calico to keep the amount of IP-addresses to a minimum. Kubernetes Services can either be exposed internally or externally using either a service resource or an ingress resource, where most tenants exclusively use ingress (provided by NGINX Ingress Controller)."),(0,i.kt)("p",null,"Inside the clusters Calico is used to restrict traffic between namespaces."),(0,i.kt)("h2",{id:"backup"},"Backup"),(0,i.kt)("p",null,"Xenit Kubernetes Framework is built to be ephemeral wich means any cluster can at any time be wiped and a new setup without any loss of data. This means that tenants are not allowed to store state inside of the clusters and are required to store it in the cloud provider (blob storage, databases, message queues etc.)."),(0,i.kt)("p",null,"Since both the platform team and the tenant teams are deploying resources using GitOps, the current state of the environment is stored in git."),(0,i.kt)("p",null,"The content of stateful resources (including backups) are handled by the cloud provider and it is up to the tenants to configure and manage."),(0,i.kt)("h2",{id:"cost-optimization"},"Cost optimization"),(0,i.kt)("p",null,"The platform team limits how much the clusters can auto scale and a service delivery manager together with the platform team helps the tenants understand their utilization and provides feedback to keep the cost at bay."),(0,i.kt)("h2",{id:"container-management"},"Container management"),(0,i.kt)("p",null,"When a new tenant is being setup, the platform team provides onboarding for them and they then continously work together to assist in any questions. Monthly health checks are done to make sure that no obvious mistakes have been made by the tenants and monitoring is setup to warn the platform team if something is wrong with the platform."),(0,i.kt)("p",null,"Most of the management of the workloads that the tenants deploy are handled through GitOps but they are also able to work with the clusters directly, with the knowledge that any cluster may at any time be rolled over (blue/green) and anything not in git will not be persisted."),(0,i.kt)("h2",{id:"xenit-kubernetes-framework"},"Xenit Kubernetes Framework"),(0,i.kt)("p",null,"XKF is set up from a set of Terraform modules that when combined creates the full XKS service. There are multiple individual states that all fulfill their own purpose and build\nupon each other in a hierarchical manner. The first setup requires applying the Terraform in the correct order, but after that ordering should not matter. Separate states are used\nas it allows for a more flexible architecture that could be changed in parallel."),(0,i.kt)("img",{alt:"XKS Overview",src:(0,s.Z)("img/assets/xks/operator-guide/aks-overview.jpg")}),(0,i.kt)("p",null,"The AKS Terraform contains three modules that are used to setup a Kubernetes cluster. To allow for blue/green deployments of AKS clusters resources have to be split up into\nglobal resources that can be shared between the clusters, and cluster-specific resources."),(0,i.kt)("p",null,"The aks-global module contains the global resources like ACR, DNS and Azure AD configuration."),(0,i.kt)("p",null,"The aks and aks-core module creates an AKS cluster and configures it. This cluster will have a suffix, normally a number to allow for temporarily creating multiple clusters\nwhen performing a blue/green deployment of the clusters. Namespaces will be created in the cluster for each of the configured tenants. Each namespace is linked to a resource\ngroup in Azure where namespace resources are expected to be created."),(0,i.kt)("img",{alt:"AKS Resource Groups",src:(0,s.Z)("img/assets/xks/operator-guide/aks-rg-xks-overview.jpg")}))}p.isMDXComponent=!0}}]);