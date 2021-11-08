(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),i=(n(0),n(149)),o={title:"Gitops V2",slug:"/azure-devops-templates/gitops-v2",custom_edit_url:"https://github.com/XenitAB/azure-devops-templates/edit/main/gitops-v2/README.md"},p={unversionedId:"azure-devops-templates/gitops-v2",id:"azure-devops-templates/gitops-v2",isDocsHomePage:!1,title:"Gitops V2",description:"These Azure DevOps tempalates are meant to be used to enable an application promotion flow together with Flux V2 in a multi tenant deployment.",source:"@site/docs/azure-devops-templates/gitops-v2.md",slug:"/azure-devops-templates/gitops-v2",permalink:"/docs/azure-devops-templates/gitops-v2",editUrl:"https://github.com/XenitAB/azure-devops-templates/edit/main/gitops-v2/README.md",version:"current",sidebar:"docs",previous:{title:"GitOps",permalink:"/docs/azure-devops-templates/gitops"},next:{title:"gitops-v2 for github",permalink:"/docs/azure-devops-templates/gitops-v2-github"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Background",id:"background",children:[]},{value:"Usage",id:"usage",children:[]}],l={rightToc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"These Azure DevOps tempalates are meant to be used to enable an application promotion flow together with Flux V2 in a multi tenant deployment."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"The pipelines and tools expect that the tenant repository is setup in a specific structure."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-txt"}),".\n\u251c\u2500\u2500 apps/\n\u2502   \u251c\u2500\u2500 dev/\n\u2502   \u2502   \u2514\u2500\u2500 kustomization.yaml\n\u2502   \u251c\u2500\u2500 qa/\n\u2502   \u2502   \u2514\u2500\u2500 kustomization.yaml\n\u2502   \u2514\u2500\u2500 prod/\n\u2502       \u2514\u2500\u2500 kustomization.yaml\n\u2514\u2500\u2500 tenant/\n    \u251c\u2500\u2500 dev/\n    \u2502   \u251c\u2500\u2500 app.yaml\n    \u2502   \u251c\u2500\u2500 kustomization.yaml\n    \u2502   \u2514\u2500\u2500 notification.yaml\n    \u251c\u2500\u2500 qa/\n    \u2502   \u251c\u2500\u2500 app.yaml\n    \u2502   \u251c\u2500\u2500 kustomization.yaml\n    \u2502   \u2514\u2500\u2500 notification.yaml\n    \u2514\u2500\u2500 prod/\n        \u251c\u2500\u2500 app.yaml\n        \u251c\u2500\u2500 kustomization.yaml\n        \u2514\u2500\u2500 notification.yaml\n")),Object(i.b)("p",null,"The tenant directory contains the entrypoint for the tenant into each cluster. From there notifications are configured and\nindividual ",Object(i.b)("inlineCode",{parentName:"p"},"Kustomization")," resources are created to deploy applications. The directory ",Object(i.b)("inlineCode",{parentName:"p"},"apps")," represents a group of applications,\na tenant repository can contain multiple groups which will run their promotion in separate cadences."),Object(i.b)("p",null,"Look in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/XenitAB/azure-devops-templates/blob/main/gitops-v2/examples/template-repository"}),"examples directory")," for a template directory structure to get started."),Object(i.b)("h2",{id:"background"},"Background"),Object(i.b)("p",null,"The tempaltes are meant to be used in two different repositories, ",Object(i.b)("inlineCode",{parentName:"p"},"./build/main.yaml")," should be used in the application\nrepository. It builds a Docker image and published the image as an artificat on the pipeline. After that is complete\nits responsibility is done."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"./new/main.yaml"),", ",Object(i.b)("inlineCode",{parentName:"p"},"./status/main.yaml"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"./promote/main.yaml"),' are meant to be used to create pipelines in\nthe "gitops" repository. These three pipelines are responsible for creating the PRs to move an application from\none environment to another. The templates make heavy use of the ',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/XenitAB/gitops-promotion"}),"gitops-promotion"),"\ntool to execute the majority of logic."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Create the build pipeline in the application repository. The ",Object(i.b)("inlineCode",{parentName:"p"},"serviceName")," is the name of the application."),Object(i.b)("p",null,"build.yaml"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'name: $(Build.BuildId)\n\ntrigger:\n  branches:\n    include:\n      - main\n\nresources:\n  repositories:\n    - repository: templates\n      type: git\n      name: XKS/azure-devops-templates\n      ref: refs/tags/2021.04.2\n\nstages:\n  - template: gitops-v2/build/main.yaml@templates\n    parameters:\n      serviceName: "test-application"\n')),Object(i.b)("p",null,'Create the three pipelines in the "gitops" repository, note that the pipeline alias should match the ',Object(i.b)("inlineCode",{parentName:"p"},"serviceName")," it references.\nIt is totally fine to reference multiple pipelines as triggers, this will be handled by the pipeline to determine which pipeline\ntriggered the run."),Object(i.b)("p",null,"There are support for both Azure and AWS container registry but not at the same time in one pipeline.\nTo use AWS you have to define the variable ",Object(i.b)("inlineCode",{parentName:"p"},"cloud"),", it defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"azure"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"cloud")," variable supports ",Object(i.b)("strong",{parentName:"p"},"lowercase")," only, accepted variables is ",Object(i.b)("inlineCode",{parentName:"p"},"aws")," or ",Object(i.b)("inlineCode",{parentName:"p"},"azure"),".")),Object(i.b)("p",null,"new-azure.yaml"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'trigger: none\n\nresources:\n  repositories:\n    - repository: templates\n      type: git\n      name: XKS/azure-devops-templates\n      ref: refs/tags/2021.04.2\n  pipelines:\n    - pipeline: test-application\n      source: test-application\n      trigger:\n        stages:\n          - cd_trigger\n\nstages:\n  - template: ./gitops-v2/new/main.yaml@templates\n    parameters:\n      azureSubscriptionTemplate: "azure-{0}-foobar-contributor"\n      acrNameTemplate: "acr{0}weaks"\n      imagePathPrefix: foobar\n      cloud: azure\n      group: apps\n      environments:\n        - name: dev\n        - name: qa\n        - name: prod\n')),Object(i.b)("p",null,"new-aws.yaml"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'trigger: none\n\nresources:\n  repositories:\n    - repository: templates\n      type: git\n      name: XKS/azure-devops-templates\n      ref: refs/tags/2021.07.1\n  pipelines:\n    - pipeline: test-application\n      source: test-application\n      trigger:\n        stages:\n          - cd_trigger\n\nstages:\n  - template: ./gitops-v2/new/main.yaml@templates\n    parameters:\n      awsServiceConnectionTemplate: "ecr-{0}-foobar-contributor"\n      awsRegion: eu-west-1\n      cloud: aws\n      group: apps\n      environments:\n        - name: dev\n        - name: qa\n        - name: prod\n')),Object(i.b)("p",null,"status.yaml"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"trigger: none\n\nresources:\n  repositories:\n    - repository: templates\n      type: git\n      name: XKS/azure-devops-templates\n      ref: refs/tags/2021.04.2\n\nstages:\n  - template: ./gitops-v2/status/main.yaml@templates\n")),Object(i.b)("p",null,"promote.yaml"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"trigger:\n  - main\n\nresources:\n  repositories:\n    - repository: templates\n      type: git\n      name: XKS/azure-devops-templates\n      ref: refs/tags/2021.04.2\n\nstages:\n  - template: ./gitops-v2/promote/main.yaml@templates\n")),Object(i.b)("p",null,"TBD - Repository configuration"),Object(i.b)("p",null,"After all of the pipelines are complete the last thing to do is to annotate where the image tag should be updated.\nWithout an annotation the gitops-promotion tool will not know where to update the image tag. This annotation is very\nsimple and can either be set on a kustomization image replacement or helm release."),Object(i.b)("p",null,"./examples/template-repository/apps/dev/kustomization.yaml"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nnamespace: dev-a\nresources:\n  - certificate.yaml\n  - ./podinfo\nimages:\n  - name: acr.azurecr.io/tenant/test-application\n    newTag: "0ddf7cc" # {"$imagepolicy": "apps:test-application:tag"}\n')),Object(i.b)("p",null,'The tag contains the group name in this case "apps" and the service name which in this case is "test-application".\nTrigger a build of the application and see how the image tag will be updated.'))}c.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),b=a,d=m["".concat(o,".").concat(b)]||m[b]||u[b]||i;return n?r.a.createElement(d,p(p({ref:t},l),{},{components:n})):r.a.createElement(d,p({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);