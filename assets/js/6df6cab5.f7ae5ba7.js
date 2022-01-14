"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[694],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return i}});var r=n(2263),o=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,s=void 0!==i&&i,u=a.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+c:c}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},2222:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=(n(4996),["components"]),s={id:"eks",title:"EKS"},u=void 0,l={unversionedId:"xks/operator-guide/kubernetes/eks",id:"xks/operator-guide/kubernetes/eks",isDocsHomePage:!1,title:"EKS",description:"Xenit Kubernetes Framework supports both AKS and EKS.",source:"@site/docs/xks/operator-guide/kubernetes/eks.md",sourceDirName:"xks/operator-guide/kubernetes",slug:"/xks/operator-guide/kubernetes/eks",permalink:"/docs/xks/operator-guide/kubernetes/eks",editUrl:"https://github.com/xenitab/xenitab.github.io/edit/main/docs/xks/operator-guide/kubernetes/eks.md",tags:[],version:"current",frontMatter:{id:"eks",title:"EKS"},sidebar:"docs",previous:{title:"AKS",permalink:"/docs/xks/operator-guide/kubernetes/aks"}},c=[{value:"Differences",id:"differences",children:[{value:"Repo structure",id:"repo-structure",children:[],level:3},{value:"EKS",id:"eks",children:[],level:3},{value:"IRSA",id:"irsa",children:[],level:3}],level:2},{value:"Bootstrap",id:"bootstrap",children:[],level:2},{value:"Tenants account peering",id:"tenants-account-peering",children:[],level:2},{value:"Break glass",id:"break-glass",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Xenit Kubernetes Framework supports both AKS and EKS.\nIn this document we will describe how to setup XKF on EKS and how it differs from AKS."),(0,a.kt)("h2",{id:"differences"},"Differences"),(0,a.kt)("p",null,"To setup XKF using EKS you still need a Azure environment."),(0,a.kt)("p",null,"XKF is heavy relying on Azure AD (AAD) and we have developed our own tool to\nmanage access to our clusters called ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XenitAB/azad-kube-proxy"},"azad-kube-proxy"),"."),(0,a.kt)("p",null,"So our governance solution is still fully located in Azure together with our Terraform state"),(0,a.kt)("h3",{id:"repo-structure"},"Repo structure"),(0,a.kt)("p",null,"This is how a AWS repo structure can look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"\u251c\u2500\u2500 Makefile\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 aws-core\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.tf\n\u2502\xa0\xa0 \u251c\u2500\u2500 outputs.tf\n\u2502\xa0\xa0 \u251c\u2500\u2500 variables\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 common.tfvars\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 dev.tfvars\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 prod.tfvars\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 qa.tfvars\n\u2502\xa0\xa0 \u2514\u2500\u2500 variables.tf\n\u251c\u2500\u2500 aws-eks\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.tf\n\u2502\xa0\xa0 \u251c\u2500\u2500 outputs.tf\n\u2502\xa0\xa0 \u251c\u2500\u2500 variables\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 common.tfvars\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 dev.tfvars\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 prod.tfvars\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 qa.tfvars\n\u2502\xa0\xa0 \u2514\u2500\u2500 variables.tf\n\u251c\u2500\u2500 azure-governance\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.tf\n\u2502\xa0\xa0 \u251c\u2500\u2500 outputs.tf\n\u2502\xa0\xa0 \u251c\u2500\u2500 variables\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 common.tfvars\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 dev.tfvars\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 prod.tfvars\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 qa.tfvars\n\u2502\xa0\xa0 \u2514\u2500\u2500 variables.tf\n\u251c\u2500\u2500 global.tfvars\n")),(0,a.kt)("h3",{id:"eks"},"EKS"),(0,a.kt)("p",null,"Just like in AKS we use Calico as our CNI."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AWS CNI don't support network policies"),(0,a.kt)("li",{parentName:"ul"},"AWS CNI heavily limits how many pods we can run on a single node"),(0,a.kt)("li",{parentName:"ul"},"We want to be consistent with AKS")),(0,a.kt)("p",null,"Just after setting up the EKS cluster we use a null_resource to first delete\nthe AWS CNI daemon set and then install calico.\nThis is all done before we add a single node to the cluster."),(0,a.kt)("p",null,"After this we add a eks node group and Calico starts."),(0,a.kt)("h3",{id:"irsa"},"IRSA"),(0,a.kt)("p",null,"In AKS we use AAD Pod Identity to support access to Azure resources.\nWe support the same thing in EKS but use IAM roles for service accounts IRSA."),(0,a.kt)("p",null,"To make it easier to use IRSA we have developed a small terraform ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XenitAB/terraform-modules/blob/main/modules/aws/irsa/README.md"},"module"),"."),(0,a.kt)("h2",{id:"bootstrap"},"Bootstrap"),(0,a.kt)("p",null,"By default AWS CNI limits the amount of pods that you can have on a single node.\nSince we are using Calico we don't have this limit,\nbut when setting up a default EKS environment the EKS ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/awslabs/amazon-eks-ami/blob/master/files/bootstrap.sh"},"bootstrap script"),"\ndefines a pod limit. To remove this limit we have created our own AWS launch template for our EKS node group."),(0,a.kt)("p",null,"It sets ",(0,a.kt)("inlineCode",{parentName:"p"},"--use-max-pods false"),' and some needed kubernetes node labels, if these labels aren\'t set the EKS cluster is unable to "find" the nodes in the node group.'),(0,a.kt)("h2",{id:"tenants-account-peering"},"Tenants account peering"),(0,a.kt)("p",null,"In Azure we separates XKF and our tenants by using Resource Groups, in AWS we use separate accounts."),(0,a.kt)("p",null,"To setup a VPC peering you need to know the target VPC id, this creates a chicken and egg problem.\nTo workaround this problem we sadly have to run the eks/core module multiple times in both the XKF side and the tenant."),(0,a.kt)("p",null,"Run Terraform in the following order:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"XKF core without any vpc_peering_config_requester defined."),(0,a.kt)("li",{parentName:"ul"},"Tenant core without any vpc_peering_config_accepter defined."),(0,a.kt)("li",{parentName:"ul"},"XKF core define vpc_peering_config_requester, manually getting the needed information from the tenant account."),(0,a.kt)("li",{parentName:"ul"},"Tenant core define vpc_peering_config_accepter, manually getting the needed information from the XKF account.")),(0,a.kt)("p",null,"Make sure that you only have one peering request open at the same time, else the accepter side won't be able to find a unique request.\nNow you should be able to see the VPC peering connected on both sides."),(0,a.kt)("h2",{id:"break-glass"},"Break glass"),(0,a.kt)("p",null,"We are very dependent on azad-proxy to work but if something happens with the\ningress, azad-proxy or the AAD we need have ways of reaching the cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks --region eu-west-1 update-kubeconfig --name dev-eks1 --alias dev-eks1 --role-arn arn:aws:iam::111111111111:role/xkf-eu-west-1-dev-eks-admin\n")))}d.isMDXComponent=!0}}]);