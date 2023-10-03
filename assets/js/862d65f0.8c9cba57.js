"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[6582],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),y=a,d=m["".concat(s,".").concat(y)]||m[y]||p[y]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1802:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=(n(4996),["components"]),l={id:"structure",title:"GitOps Repository Structure"},s=void 0,u={unversionedId:"xks/developer-guide/ci-cd/structure",id:"xks/developer-guide/ci-cd/structure",title:"GitOps Repository Structure",description:"Repository Structure",source:"@site/docs/xks/developer-guide/ci-cd/repo-structure.md",sourceDirName:"xks/developer-guide/ci-cd",slug:"/xks/developer-guide/ci-cd/structure",permalink:"/docs/xks/developer-guide/ci-cd/structure",editUrl:"https://github.com/xenitab/xenitab.github.io/edit/main/docs/xks/developer-guide/ci-cd/repo-structure.md",tags:[],version:"current",frontMatter:{id:"structure",title:"GitOps Repository Structure"}},c=[{value:"Repository Structure",id:"repository-structure",children:[{value:"Per ENV - Repository Structure",id:"per-env---repository-structure",children:[],level:3},{value:"Per APP - Repository Structure",id:"per-app---repository-structure",children:[],level:3}],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"repository-structure"},"Repository Structure"),(0,o.kt)("p",null,"There are 2 ways one can structure the GitOps repository, based upon how you want the kustomizations in flux to work."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Per ENV kustomization",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Somewhat easier to maintain and configure, every app relies on one reconciliation of the kustomization."),(0,o.kt)("li",{parentName:"ul"},"One kustomization per ENV in the Flux-configuration, looking something like this:")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kustomize.toolkit.fluxcd.io/v1beta1\nkind: Kustomization\nmetadata:\n  name: apps-dev\nspec:\n  serviceAccountName: flux\n  interval: "1m"\n  timeout: "30s"\n  prune: true\n  sourceRef:\n    kind: GitRepository\n    name: giops\n  path: "./apps/dev"\n\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Per APP kustomization",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"More granular control and every app has its own reconciliation and kustomization."),(0,o.kt)("li",{parentName:"ul"},"One kustomization per app in the Flux-configuration, looking something like this:")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  apiVersion: kustomize.toolkit.fluxcd.io/v1beta1\nkind: Kustomization\nmetadata:\n  name: app1-dev\nspec:\n  serviceAccountName: flux\n  interval: "1m"\n  timeout: "30s"\n  prune: true\n  sourceRef:\n    kind: GitRepository\n    name: gitops\n  path: "./App1/dev"\n')),(0,o.kt)("p",null,"Below we will show examples of the repository structure to achieve both cases."),(0,o.kt)("h3",{id:"per-env---repository-structure"},"Per ENV - Repository Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nGitOps\n  \u251c\u2500\u2500 Apps/\n  \u2502   \u251c\u2500\u2500 dev/\n  \u2502   \u2502   \u251c\u2500\u2500 kustomization.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 App1/\n  \u2502   \u2502   \u2502    \u251c\u2500\u2500 kustomization.yaml\n  \u2502   \u2502   \u2502    \u251c\u2500\u2500 deployment.yaml\n  \u2502   \u2502   \u2502    \u251c\u2500\u2500 service.yaml\n  \u2502   \u2502   \u2502    \u2514\u2500\u2500 ingress.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 App2/\n  \u2502   \u2502   \u2502    \u251c\u2500\u2500 kustomization.yaml\n  \u2502   \u2502   \u2502    \u251c\u2500\u2500 deployment.yaml\n  \u2502   \u2502   \u2502    \u251c\u2500\u2500 service.yaml\n  \u2502   \u2502   \u2502    \u2514\u2500\u2500 ingress.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 secret-provider-class-patch.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 certificate.yaml\n  \u2502   \u251c\u2500\u2500 qa/\n  \u2502   \u2502   \u251c\u2500\u2500 kustomization.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 App1/\n  \u2502   \u2502   \u2502    \u251c\u2500\u2500 kustomization.yaml\n  \u2502   \u2502   \u2502    \u251c\u2500\u2500 deployment.yaml\n  \u2502   \u2502   \u2502    \u251c\u2500\u2500 service.yaml\n  \u2502   \u2502   \u2502    \u2514\u2500\u2500 ingress.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 App2/\n  \u2502   \u2502   \u2502    \u251c\u2500\u2500 kustomization.yaml\n  \u2502   \u2502   \u2502    \u251c\u2500\u2500 deployment.yaml\n  \u2502   \u2502   \u2502    \u251c\u2500\u2500 service.yaml\n  \u2502   \u2502   \u2502    \u2514\u2500\u2500 ingress.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 secret-provider-class-patch.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 certificate.yaml\n  \u2502   \u251c\u2500\u2500 prod/\n  \u2502   \u2502   \u251c\u2500\u2500 kustomization.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 App1/\n  \u2502   \u2502   \u2502    \u251c\u2500\u2500 kustomization.yaml\n  \u2502   \u2502   \u2502    \u251c\u2500\u2500 deployment-patch.yaml\n  \u2502   \u2502   \u2502    \u2514\u2500\u2500 ingress-patch.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 App2/\n  \u2502   \u2502   \u2502    \u251c\u2500\u2500 kustomization.yaml\n  \u2502   \u2502   \u2502    \u251c\u2500\u2500 deployment-patch.yaml\n  \u2502   \u2502   \u2502    \u2514\u2500\u2500 ingress-patch.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 secret-provider-class-patch.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 certificate.yaml\n  \u251c\u2500\u2500 Tenant/\n  \u2502   \u2514\u2500\u2500 Platform / Flux configuration.\n")),(0,o.kt)("h3",{id:"per-app---repository-structure"},"Per APP - Repository Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nGitOps\n  \u251c\u2500\u2500 App1/\n  \u2502   \u251c\u2500\u2500 base/\n  \u2502   \u2502   \u251c\u2500\u2500 kustomization.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 deployment.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 service.yaml\n  \u2502   \u2502   \u2514\u2500\u2500 ingress.yaml\n  \u2502   \u251c\u2500\u2500 dev/\n  \u2502   \u2502   \u251c\u2500\u2500 kustomization.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 deployment.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 service.yaml\n  \u2502   \u2502   \u2514\u2500\u2500 ingress.yaml\n  \u2502   \u251c\u2500\u2500 qa/\n  \u2502   \u2502   \u251c\u2500\u2500 kustomization.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 deployment.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 service.yaml\n  \u2502   \u2502   \u2514\u2500\u2500 ingress.yaml\n  \u2502   \u251c\u2500\u2500 prod/\n  \u2502   \u2502   \u251c\u2500\u2500 kustomization.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 deployment.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 service.yaml\n  \u2502   \u2502   \u2514\u2500\u2500 ingress.yaml\n  \u251c\u2500\u2500 App2/\n  \u2502   \u251c\u2500\u2500 dev/\n  \u2502   \u2502   \u251c\u2500\u2500 kustomization.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 deployment.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 service.yaml\n  \u2502   \u2502   \u2514\u2500\u2500 ingress.yaml\n  \u2502   \u251c\u2500\u2500 qa/\n  \u2502   \u2502   \u251c\u2500\u2500 kustomization.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 deployment.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 service.yaml\n  \u2502   \u2502   \u2514\u2500\u2500 ingress.yaml\n  \u2502   \u251c\u2500\u2500 prod/\n  \u2502   \u2502   \u251c\u2500\u2500 kustomization.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 deployment.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 service.yaml\n  \u2502   \u2502   \u2514\u2500\u2500 ingress.yaml\n  \u251c\u2500\u2500 Apps/\n  \u2502   \u251c\u2500\u2500 dev/\n  \u2502   \u2502   \u251c\u2500\u2500 kustomization.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 secret-provider-class.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 certificate.yaml\n  \u2502   \u251c\u2500\u2500 qa/\n  \u2502   \u2502   \u251c\u2500\u2500 kustomization.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 secret-provider-class.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 certificate.yaml\n  \u2502   \u251c\u2500\u2500 prod/\n  \u2502   \u2502   \u251c\u2500\u2500 kustomization.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 secret-provider-class.yaml\n  \u2502   \u2502   \u251c\u2500\u2500 certificate.yaml\n  \u251c\u2500\u2500 Tenant/\n  \u2502   \u2514\u2500\u2500 Platform / Flux configuration.\n")),(0,o.kt)("p",null,'Note that we in this example also utilize the "Per ENV" method for things that are used by all applications, such as the certificates we create, we only create one certificate resource containing multiple SANs for each application. Each app also uses the same Key Vault, therefor this can be the same also.\nAnother repository structure worth mentioning is using a ',(0,o.kt)("strong",{parentName:"p"},"/base"),' folder for each application, in both the "Per ENV" and "Per App" structures.\nThis will enable you to have a "Common" folder containing all the configuration that is the same between your environments and then patch the correct values in each ENV folder.'))}m.isMDXComponent=!0}}]);