(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(f,s(s({ref:t},c),{},{components:n})):a.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},143:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(20);t.default=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},144:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(143),a=n(145);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,s=void 0!==i&&i,u=o.absolute,c=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+l:l}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},145:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(142)),i=(n(144),{id:"eks",title:"EKS"}),s={unversionedId:"xks/operator-guide/eks",id:"xks/operator-guide/eks",isDocsHomePage:!1,title:"EKS",description:"Xenit Kubernetes Framework supports both AKS and EKS, though AKS is our main platform.",source:"@site/docs/xks/operator-guide/eks.md",slug:"/xks/operator-guide/eks",permalink:"/docs/xks/operator-guide/eks",editUrl:"https://github.com/xenitab/xenitab.github.io/edit/main/docs/xks/operator-guide/eks.md",version:"current",sidebar:"docs",previous:{title:"Cluster blue green",permalink:"/docs/xks/operator-guide/blue-green"},next:{title:"Operator Guide",permalink:"/docs/xks/operator-guide/operator-guide"}},u=[{value:"Differences",id:"differences",children:[{value:"Repo structure",id:"repo-structure",children:[]},{value:"EKS",id:"eks",children:[]},{value:"IRSA",id:"irsa",children:[]}]},{value:"Bootstrap",id:"bootstrap",children:[]},{value:"Tenants account peering",id:"tenants-account-peering",children:[]},{value:"Break glass",id:"break-glass",children:[]}],c={rightToc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Xenit Kubernetes Framework supports both AKS and EKS, though AKS is our main platform.\nIn this document we will describe how to setup XKF on EKS and how it differs from AKS."),Object(o.b)("h2",{id:"differences"},"Differences"),Object(o.b)("p",null,"To setup XKF using EKS you still need a Azure environment."),Object(o.b)("p",null,"XKF is heavy relying on Azure AD (AAD) and we have developed our own tool to\nmanage access to our clusters called ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/XenitAB/azad-kube-proxy"}),"azad-kube-proxy"),"."),Object(o.b)("p",null,"So our governance solution is still fully located in Azure together with our Terraform state"),Object(o.b)("h3",{id:"repo-structure"},"Repo structure"),Object(o.b)("p",null,"This is how a AWS repo structure can look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-txt"}),"\u251c\u2500\u2500 Makefile\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 aws-core\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.tf\n\u2502\xa0\xa0 \u251c\u2500\u2500 outputs.tf\n\u2502\xa0\xa0 \u251c\u2500\u2500 variables\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 common.tfvars\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 dev.tfvars\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 prod.tfvars\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 qa.tfvars\n\u2502\xa0\xa0 \u2514\u2500\u2500 variables.tf\n\u251c\u2500\u2500 aws-eks\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.tf\n\u2502\xa0\xa0 \u251c\u2500\u2500 outputs.tf\n\u2502\xa0\xa0 \u251c\u2500\u2500 variables\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 common.tfvars\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 dev.tfvars\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 prod.tfvars\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 qa.tfvars\n\u2502\xa0\xa0 \u2514\u2500\u2500 variables.tf\n\u251c\u2500\u2500 azure-governance\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.tf\n\u2502\xa0\xa0 \u251c\u2500\u2500 outputs.tf\n\u2502\xa0\xa0 \u251c\u2500\u2500 variables\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 common.tfvars\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 dev.tfvars\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 prod.tfvars\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 qa.tfvars\n\u2502\xa0\xa0 \u2514\u2500\u2500 variables.tf\n\u251c\u2500\u2500 global.tfvars\n")),Object(o.b)("h3",{id:"eks"},"EKS"),Object(o.b)("p",null,"Just like in AKS we use Calico as our CNI."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"AWS CNI don't support network policies"),Object(o.b)("li",{parentName:"ul"},"AWS CNI heavily limits how many pods we can run on a single node"),Object(o.b)("li",{parentName:"ul"},"We want to be consistent with AKS")),Object(o.b)("p",null,"Just after setting up the EKS cluster we use a null_resource to first delete\nthe AWS CNI daemon set and then install calico.\nThis is all done before we add a single node to the cluster."),Object(o.b)("p",null,"After this we add a eks node group and Calico starts."),Object(o.b)("h3",{id:"irsa"},"IRSA"),Object(o.b)("p",null,"In AKS we use AAD Pod Identity to support access to Azure resources.\nWe support the same thing in EKS but use IAM roles for service accounts IRSA."),Object(o.b)("p",null,"To make it easier to use IRSA we have developed a small terraform ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/XenitAB/terraform-modules/blob/main/modules/aws/irsa/README.md"}),"module"),"."),Object(o.b)("h2",{id:"bootstrap"},"Bootstrap"),Object(o.b)("p",null,"By default AWS CNI limits the amount of pods that you can have on a single node.\nSince we are using Calico we don't have this limit,\nbut when setting up a default EKS environment the EKS ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/awslabs/amazon-eks-ami/blob/master/files/bootstrap.sh"}),"bootstrap script"),"\ndefines a pod limit. To remove this limit we have created our own AWS launch template for our EKS node group."),Object(o.b)("p",null,"It sets ",Object(o.b)("inlineCode",{parentName:"p"},"--use-max-pods false"),' and some needed kubernetes node labels, if these labels aren\'t set the EKS cluster is unable to "find" the nodes in the node group.'),Object(o.b)("h2",{id:"tenants-account-peering"},"Tenants account peering"),Object(o.b)("p",null,"In Azure we separates XKF and our tenants by using Resource Groups, in AWS we use separate accounts."),Object(o.b)("p",null,"To setup a VPC peering you need to know the target VPC id, this creates a chicken and egg problem.\nTo workaround this problem we sadly have to run the eks/core module multiple times in both the XKF side and the tenant."),Object(o.b)("p",null,"Run Terraform in the following order:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"XKF core without any vpc_peering_config_requester defined."),Object(o.b)("li",{parentName:"ul"},"Tenant core without any vpc_peering_config_accepter defined."),Object(o.b)("li",{parentName:"ul"},"XKF core define vpc_peering_config_requester, manually getting the needed information from the tenant account."),Object(o.b)("li",{parentName:"ul"},"Tenant core define vpc_peering_config_accepter, manually getting the needed information from the XKF account.")),Object(o.b)("p",null,"Make sure that you only have one peering request open at the same time, else the accepter side won't be able to find a unique request.\nNow you should be able to see the VPC peering connected on both sides."),Object(o.b)("h2",{id:"break-glass"},"Break glass"),Object(o.b)("p",null,"We are very dependent on azad-proxy to work but if something happens with the\ningress, azad-proxy or the AAD we need have ways of reaching the cluster."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"aws eks --region eu-west-1 update-kubeconfig --name dev-eks1 --alias dev-eks1 --role-arn arn:aws:iam::111111111111:role/xkf-eu-west-1-dev-eks-admin\n")))}l.isMDXComponent=!0}}]);