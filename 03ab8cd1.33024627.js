(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||r;return n?o.a.createElement(m,l(l({ref:t},c),{},{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),r=(n(0),n(142)),i={id:"flux",title:"Flux"},l={unversionedId:"xks/developer-guide/flux",id:"xks/developer-guide/flux",isDocsHomePage:!1,title:"Flux",description:"Flux is very tightly coupled with XKF and it's how we deploy all tenant yaml to our clusters.",source:"@site/docs/xks/developer-guide/flux.md",slug:"/xks/developer-guide/flux",permalink:"/docs/xks/developer-guide/flux",editUrl:"https://github.com/xenitab/xenitab.github.io/edit/main/docs/xks/developer-guide/flux.md",version:"current",sidebar:"docs",previous:{title:"Cloud IAM",permalink:"/docs/xks/developer-guide/cloud-iam"},next:{title:"Ingress",permalink:"/docs/xks/developer-guide/ingress"}},u=[{value:"Flux CLI",id:"flux-cli",children:[]},{value:"XKF and Flux",id:"xkf-and-flux",children:[]},{value:"Debugging",id:"debugging",children:[{value:"Normal error",id:"normal-error",children:[]},{value:"git repositories",id:"git-repositories",children:[]},{value:"Kustomization",id:"kustomization",children:[]}]}],c={rightToc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Flux is very tightly coupled with XKF and it's how we deploy all tenant yaml to our clusters.\nThe goal of this document is to give you as a developer a quick overview of\nhow to get use flux in XKF and perform simple debugging tasks.\nFlux has it's own ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://fluxcd.io/"}),"official documentation")," and where you can find much more information."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"In this document we are only talking about Flux v2\nBefore reading any further please read through the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://fluxcd.io/docs/concepts/"}),"core concepts")," of flux.")),Object(r.b)("p",null,"Our very own Philip Laine ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=F7B_TBcIyl8"}),"presented")," on KubeCon 2021 show a similar workflow that we use."),Object(r.b)("h2",{id:"flux-cli"},"Flux CLI"),Object(r.b)("p",null,"You don't have to use the flux cli but it can be very helpful especially if want to force a reconcile of a flux resource.\nIn some of the commands and debugging we assume that you have the cli installed.\nHere you can find more information on how to setup the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://fluxcd.io/docs/installation/"}),"flux cli"),"."),Object(r.b)("h2",{id:"xkf-and-flux"},"XKF and Flux"),Object(r.b)("p",null,"In the XKF framework we talk allot about tenants, from a Kubernetes point of view a tenant is a namespace that have been generated using terraform.\nIf you want more information how that works you can look at the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/XenitAB/terraform-modules/tree/main/modules/kubernetes/fluxcd-v2-azdo"}),"AZDO module"),"\nand the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/XenitAB/terraform-modules/tree/main/modules/kubernetes/fluxcd-v2-github"}),"GitHub module"),"."),Object(r.b)("p",null,"The module populate the tenant namespaces by creating a basic config with a flux gitRepository and Kustomization pointing to a pre-defined repository and path.\nIt stores this in a central repository that normally your platform team manages and it should only be updated using terraform."),Object(r.b)("p",null,"At the time of writing these docs the files generated could look something like this if you are using Azure DevOps (AZDO) and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/XenitAB/azdo-proxy"}),"AZDO-proxy"),"."),Object(r.b)("p",null,"As a member of tenant1 you will be able to see these resources in your namespace, in this case tenant1.\nYou should never modify these resources manually, flux will automatically change back to the config defined in the git repository."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"---\napiVersion: source.toolkit.fluxcd.io/v1beta1\nkind: GitRepository\nmetadata:\n  name: tenant1\n  namespace: tenant1\nspec:\n  # If you are using github libgit2 won't be defined\n  gitImplementation: libgit2\n  interval: 1m\n  # This example url assumes that you are using AZDO-proxy https://github.com/XenitAB/azdo-proxy\n  url: http://azdo-proxy.flux-system.svc.cluster.local/Org1/project1/_git/gitops\n  secretRef:\n    name: flux\n  ref:\n    branch: main\n---\napiVersion: kustomize.toolkit.fluxcd.io/v1beta1\nkind: Kustomization\nmetadata:\n  name: tenant1\n  namespace: tenant1\nspec:\n  serviceAccountName: flux\n  interval: 5m\n  path: ./tenant/dev\n  sourceRef:\n    kind: GitRepository\n    name: tenant1\n  prune: true\n  validation: client\n")),Object(r.b)("h2",{id:"debugging"},"Debugging"),Object(r.b)("p",null,"Below, you will find a few good base commands to debug why flux haven't applied your changes."),Object(r.b)("h3",{id:"normal-error"},"Normal error"),Object(r.b)("p",null,"When adding a new file to your GitOps repository don't forget to update the ",Object(r.b)("inlineCode",{parentName:"p"},"kustomization.yaml")," file."),Object(r.b)("p",null,"It can easily happen that you create a file in your repository and you commit it and when you look in the cluster it haven't been synced.\nThis is most likely due to that you have missed to update the kustomization.yaml file."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kustomization.yaml"}),"apiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nresources:\n  - deployment.yaml\n  - ingress.yaml\n  - networkpolicy.yaml\n")),Object(r.b)("h3",{id:"git-repositories"},"git repositories"),Object(r.b)("p",null,"Shows you the status if your changes have been synced to the cluster."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ kubectl get gitrepositories\nNAME   URL                                                                         READY   STATUS                                                            AGE\nwt     http://azdo-proxy.flux-system.svc.cluster.local/Org1/project1/_git/gitops   True    Fetched revision: main/9baa401630894b78ecc5fa5ebdf72c978583dea8   2d2h\n")),Object(r.b)("p",null,"Flux should automatically pull the changes to the cluster but if you think they sync takes\nto long time or you want to sync it for some other reason you can."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Remember to provide the --namespace flag, else flux will assume the source is in the flux-system namespace.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"flux reconcile source git tenant1 --namespace tenant1\n")),Object(r.b)("h3",{id:"kustomization"},"Kustomization"),Object(r.b)("p",null,"It's always good to check if flux have applied your changes and if your health checks have passed.\nOverall the sha of your source and the kustomization resource should be the same."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ kubectl get kustomizations\nNAME       READY   STATUS                                                            AGE\napps-dev   True    Applied revision: main/9baa401630894b78ecc5fa5ebdf72c978583dea8   47h\ntenant1    True    Applied revision: main/9baa401630894b78ecc5fa5ebdf72c978583dea8   2d2h\n")))}s.isMDXComponent=!0}}]);