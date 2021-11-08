(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{149:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.a.createElement(b,i(i({ref:t},c),{},{components:n})):r.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},150:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(20);t.default=function(){var e=Object(o.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},151:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var o=n(150),r=n(152);function a(){var e=Object(o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var a=void 0===o?{}:o,s=a.forcePrependBaseUrl,i=void 0!==s&&s,l=a.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(a,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},152:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}))},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(149)),s=(n(151),{id:"aks",title:"AKS"}),i={unversionedId:"xks/operator-guide/kubernetes/aks",id:"xks/operator-guide/kubernetes/aks",isDocsHomePage:!1,title:"AKS",description:"System Node Pool",source:"@site/docs/xks/operator-guide/kubernetes/aks.md",slug:"/xks/operator-guide/kubernetes/aks",permalink:"/docs/xks/operator-guide/kubernetes/aks",editUrl:"https://github.com/xenitab/xenitab.github.io/edit/main/docs/xks/operator-guide/kubernetes/aks.md",version:"current",sidebar:"docs",previous:{title:"XKF on Github",permalink:"/docs/xks/operator-guide/github"},next:{title:"EKS",permalink:"/docs/xks/operator-guide/kubernetes/eks"}},l=[{value:"System Node Pool",id:"system-node-pool",children:[{value:"Sizing Nodes",id:"sizing-nodes",children:[]},{value:"Modifying Nodes",id:"modifying-nodes",children:[]}]}],c={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"system-node-pool"},"System Node Pool"),Object(a.b)("p",null,"AKS requires the configuration of a system node pool when creating a cluster. This system node pool is not like the other additional node pools. It is tightly coupled to the AKS cluster. It is not\npossible without manual intervention to change the instance type or taints on this node pool without recreating the cluster. Additionally the system node pool cannot scale down to zero, for AKS to\nwork there has to be at least one instance present. This is because critical system pods like tunnelfront and coredns will by default run on the system node pool. For more information about AKS\nsystem node pool refer to the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/aks/use-system-pools#system-and-user-node-pools"}),"official documentation"),"."),Object(a.b)("p",null,"XKS follows the Azure recommendation and runs only system critical applications on the system node pool. Doing this protects services like coredns from starvation or memory issues caused by user\napplications running on the same nodes. This is achieved by adding the taint ",Object(a.b)("inlineCode",{parentName:"p"},"CriticalAddonsOnly")," to all of the system nodes."),Object(a.b)("h3",{id:"sizing-nodes"},"Sizing Nodes"),Object(a.b)("p",null,"Smaller AKS clusters can survive with a single node as the load on the system applications will be moderately low. In larger clusters and production clusters it is recommended to run at least three\nsystem nodes that may be larger in size. This section aims to describe how to properly size the system nodes."),Object(a.b)("p",null,"The minimum requirement for a system node is a VM with at least 2 vCPUs and 4GB of memory. Burstable B series VMs are not recommended. A good starting point for all clusters are the D series node\ntypes which have a balance of CPU and memory resources. A goo starting point is a node of type ",Object(a.b)("inlineCode",{parentName:"p"},"Standard_D2as_v4"),"."),Object(a.b)("p",null,"More work has to be done in this area regarding sizing and scaling of the system node pools to achieve a standardized solution."),Object(a.b)("h3",{id:"modifying-nodes"},"Modifying Nodes"),Object(a.b)("p",null,"There may come times when Terraform wants to recreate the AKS cluster when the system node pool has been updated. This happens when updating certain properties in the system node pool. It is still\npossible to do these updates without recreating the cluster, but it requires some manual intervention. AKS requires at least one system node pool but does not have an upper limit. This makes it\npossible to manually add a new temporary system node pool. Remove the existing default node pool created by Terraform. Create a new system node pool with the same name but with the updated parameters.\nFinally remove the temporary node pool. Terraform will just assume that the changes have already been applied and import the new state without any other complaints."),Object(a.b)("p",null,"Start off with creating a temporary system pool. Make sure to replace the cluster name and resource groups to the correct values."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),'az aks nodepool add --cluster-name aks-dev-we-aks1 --resource-group rg-dev-we-aks --name temp --mode "System" --node-count 1\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"It may not be possible to create a new node pool with the current Kubernetes version if the cluster has not been updated in a while. Azure will remove minor versions as new versions are released. In\nthat case you will need to upgrade the cluster to the latest minor version before making changes to the system pool, as AKS will not allow a node with a newer version than the control plane.")),Object(a.b)("p",null,"Delete the system node pool created by Terraform."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"az aks nodepool delete --cluster-name aks-dev-we-aks1 --resource-group rg-dev-we-aks --name default\n")),Object(a.b)("p",null,"Create a new node pool with the new configuration. In this case it is setting a new instance type and adding a taint."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),'az aks nodepool add --cluster-name aks-dev-we-aks1 --resource-group rg-dev-we-aks --name default --mode "System" --zones 1 2 3 --node-vm-size "Standard_D2as_v4" --node-taints "CriticalAddonsOnly=true:NoSchedule"\n--node-count 1\n')),Object(a.b)("p",null,"Delete the temporary pool."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"az aks nodepool delete --cluster-name aks-dev-we-aks1 --resource-group rg-dev-we-aks --name temp\n")),Object(a.b)("p",null,"For additional information about updating the system nodes refer to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://pumpingco.de/blog/modify-aks-default-node-pool-in-terraform-without-redeploying-the-cluster/"}),"this blog post"),"."))}u.isMDXComponent=!0}}]);