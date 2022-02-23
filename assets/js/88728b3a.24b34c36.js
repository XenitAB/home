"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[7416],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return v}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),v=i,m=d["".concat(l,".").concat(v)]||d[v]||p[v]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(2263),i=n(3919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,u=void 0!==a&&a,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(u)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},878:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return v}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=n(4996),u=["components"],l={id:"cd",title:"Continuous Delivery"},c=void 0,s={unversionedId:"xks/developer-guide/cd",id:"xks/developer-guide/cd",isDocsHomePage:!1,title:"Continuous Delivery",description:"Continuous Delivery (CD) should be the only way to make changes to running applications in the XKS service.",source:"@site/docs/xks/developer-guide/cd.md",sourceDirName:"xks/developer-guide",slug:"/xks/developer-guide/cd",permalink:"/docs/xks/developer-guide/cd",editUrl:"https://github.com/xenitab/xenitab.github.io/edit/main/docs/xks/developer-guide/cd.md",tags:[],version:"current",frontMatter:{id:"cd",title:"Continuous Delivery"},sidebar:"docs",previous:{title:"Security",permalink:"/docs/xks/developer-guide/security"},next:{title:"Continuous Integration",permalink:"/docs/xks/developer-guide/ci"}},p=[{value:"GitOps",id:"gitops",children:[],level:2},{value:"Azure AD Identity",id:"azure-ad-identity",children:[],level:2},{value:"Setup CI/CD pipeline",id:"setup-cicd-pipeline",children:[{value:"Enable CI user to push to gitops repo",id:"enable-ci-user-to-push-to-gitops-repo",children:[],level:3},{value:"Service connections",id:"service-connections",children:[],level:3}],level:2}],d={toc:p};function v(e){var t=e.components,n=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Continuous Delivery (CD) should be the only way to make changes to running applications in the XKS service.\nThis is to ensure that changes are consistent and tracked in a centralized manner that can be observed by all."),(0,o.kt)("h2",{id:"gitops"},"GitOps"),(0,o.kt)("h2",{id:"azure-ad-identity"},"Azure AD Identity"),(0,o.kt)("h2",{id:"setup-cicd-pipeline"},"Setup CI/CD pipeline"),(0,o.kt)("p",null,"At Xenit we have created a CI/CD template to make it easier to get started with GitOps in our case using FluxV2 and the ",(0,o.kt)("a",{parentName:"p",href:"https://toolkit.fluxcd.io/"},"GitOps toolkit"),"."),(0,o.kt)("p",null,"You can find the base for all our Azure DevOps pipelines in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XenitAB/azure-devops-templates/tree/main/gitops-v2"},"Azure Devops Templates repo"),"."),(0,o.kt)("p",null,"Follow the example documentation on how to setup your base repo.\nBelow we will explain how to do the manual steps that is needed to get Azure DevOps to enable some of the flows that we are creating."),(0,o.kt)("h3",{id:"enable-ci-user-to-push-to-gitops-repo"},"Enable CI user to push to gitops repo"),(0,o.kt)("p",null,"The core feature of the gitops repo is that one of the pipelines automatically updates the image tag in your repository so Flux will automatically update your deployment in Kubernetes."),(0,o.kt)("p",null,"We have to grant it permissions to do this, sadly manually..."),(0,o.kt)("img",{alt:"CI access",src:(0,a.Z)("img/assets/xks/developer-guide/gitops_repo_settings.png")}),(0,o.kt)("h3",{id:"service-connections"},"Service connections"),(0,o.kt)("p",null,"To be able to talk from Azure DevOps to AKS using our gitops pipelines we also need to configure service connections to tenant namespace.\nSadly setting up the Service Connections is a manual step."),(0,o.kt)("p",null,"Get the needed config."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'az keyvault secret show --vault-name <vault-name> --name <secret-name> -o tsv --query value\n# Example\naz keyvault secret show --vault-name kv-prod-we-core-1337 --name sp-rg-xks-prod-backend-contributor -o tsv --query value\n\n# The output will look something like this\n{"clientId":"12345","clientSecret":"SoMuchSecret","subscriptionId":"sub-id","tenantId":"tenant-id"}\n')),(0,o.kt)("p",null,"In Azure DevOps:\nProject settings -> Service connections -> New service connection -> Azure Resource Manager -> Service principal (manual)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Subscription Id = subscriptionId"),(0,o.kt)("li",{parentName:"ul"},"Service Principal Id = clientId"),(0,o.kt)("li",{parentName:"ul"},"Service principal key = clientSecret"),(0,o.kt)("li",{parentName:"ul"},"Tenant ID = tenantId"),(0,o.kt)("li",{parentName:"ul"},"Service connection name = random-name")))}v.isMDXComponent=!0}}]);