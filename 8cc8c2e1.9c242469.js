(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{130:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(h,l(l({ref:t},s),{},{components:r})):a.a.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},131:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(21);t.default=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},133:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(131),a=r(134);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,l=void 0!==i&&i,u=o.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(l)return t+r;var c=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+c:c}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},134:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(130)),i=r(133),l={id:"operator-guide",title:"Operator Guide"},u={unversionedId:"services/xks/operator-guide",id:"services/xks/operator-guide",isDocsHomePage:!1,title:"Operator Guide",description:"Bootstrap",source:"@site/docs/services/xks/operator-guide.md",slug:"/services/xks/operator-guide",permalink:"/docs/services/xks/operator-guide",editUrl:"https://github.com/xenitab/xenitab.github.io/edit/main/docs/services/xks/operator-guide.md",version:"current",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/services/xks/index"},next:{title:"Azure DevOps agents",permalink:"/docs/services/xks/azure-devops-agents"}},s=[{value:"Bootstrap",id:"bootstrap",children:[]},{value:"Add New Tenant",id:"add-new-tenant",children:[{value:"Import azure-devops-templates pipeline",id:"import-azure-devops-templates-pipeline",children:[]},{value:"Setup XKS",id:"setup-xks",children:[]},{value:"Create terraform repo",id:"create-terraform-repo",children:[]},{value:"Update repo",id:"update-repo",children:[]},{value:"Create terraform storage",id:"create-terraform-storage",children:[]},{value:"CI/CD",id:"cicd",children:[]},{value:"confgiure core",id:"confgiure-core",children:[]},{value:"configure AKS",id:"configure-aks",children:[]},{value:"Create PAT secret",id:"create-pat-secret",children:[]},{value:"Add PAT to Azure Key Vaults",id:"add-pat-to-azure-key-vaults",children:[]},{value:"GitOps using flux",id:"gitops-using-flux",children:[]},{value:"Configure AKS cluster",id:"configure-aks-cluster",children:[]}]},{value:"Admin and developer access",id:"admin-and-developer-access",children:[{value:"Azure AD Kubernetes Proxy",id:"azure-ad-kubernetes-proxy",children:[]},{value:"AAD groups",id:"aad-groups",children:[]},{value:"Authorized IP",id:"authorized-ip",children:[]}]}],c={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"bootstrap"},"Bootstrap"),Object(o.b)("h2",{id:"add-new-tenant"},"Add New Tenant"),Object(o.b)("p",null,"When creating a new tenant there a number of for now manual processes to make."),Object(o.b)("p",null,"In this scenario we are assuming that you are using azure devops and that you have already created a project and organization."),Object(o.b)("p",null,"In your project lets call it project1 in the future manually import a repository.\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/XenitAB/azure-devops-templates"}),"https://github.com/XenitAB/azure-devops-templates")),Object(o.b)("h3",{id:"import-azure-devops-templates-pipeline"},"Import azure-devops-templates pipeline"),Object(o.b)("p",null,"To make sure that the azure-devops-templates repo is up to date we have a automatic CI that fetches updates from upstream to your local azure devops clone."),Object(o.b)("p",null,"Go to pipelines -> New pipeline -> Azure Repos Git -> azure-devops-templates -> Existing Azure Pipelines YAML file"),Object(o.b)("p",null,"Import the pipeline from the following path: /.ci/pipeline.yaml"),Object(o.b)("h3",{id:"setup-xks"},"Setup XKS"),Object(o.b)("p",null,"In this case we will only setup a single XKS cluster in one environment, in our case dev.\nIt's easy to add more environments when you have created your first one."),Object(o.b)("p",null,"At Xenit we are using terraform modules that we share ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/XenitAB/terraform-modules"}),"upstream")),Object(o.b)("p",null,"To setup XKS we will utilize 4 modules:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"governance-global"),Object(o.b)("li",{parentName:"ul"},"governance-regional"),Object(o.b)("li",{parentName:"ul"},"core"),Object(o.b)("li",{parentName:"ul"},"aks")),Object(o.b)("h3",{id:"create-terraform-repo"},"Create terraform repo"),Object(o.b)("p",null,"Of course we need a place to store our terraform code so create on in your azure devops organization.\nTODO create a example repo that uses our terraform modules."),Object(o.b)("p",null,"You can today see a example of the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/XenitAB/azure-devops-templates/blob/master/terraform-docker/README.md#makefile"}),"Makefile")),Object(o.b)("h3",{id:"update-repo"},"Update repo"),Object(o.b)("p",null,"We need to update a number of settings in a number of places in your terraform repo."),Object(o.b)("p",null,'Generate a SUFFIX that should be tfstate + a few random numbers, for example "tfstate1234"'),Object(o.b)("p",null,"Update the Makefile SUFFIX variable with the suffix and the random number."),Object(o.b)("p",null,"Also update global.tfvars with the same random number."),Object(o.b)("h3",{id:"create-terraform-storage"},"Create terraform storage"),Object(o.b)("p",null,"In order to store a terraform state we need to prepare that."),Object(o.b)("p",null,"We have written a small golang tool that will help out with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/XenitAB/github-actions/tree/main/docker/go-tf-prepare"}),"that")),Object(o.b)("p",null,"Instead of running these a number of these scripts manually we will use the make file."),Object(o.b)("p",null,"We use one terrafrom state per DIR and environment.\nLets create the first terraform state, in this case governance."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"make prepare ENV=dev DIR=governance")),Object(o.b)("h3",{id:"cicd"},"CI/CD"),Object(o.b)("p",null,"We will have one CI/CD pipeline per DIR.\nYou can find ready to use pipelines under .ci/ in the terraform repo."),Object(o.b)("h4",{id:"update-pipelines"},"Update pipelines"),Object(o.b)("p",null,"Update the variable azureSubscriptionTemplate. You can find the value under Project settings -> Service Connections"),Object(o.b)("img",{alt:"Service Connections",src:Object(i.a)("img/operator/project_settings.png")}),Object(o.b)("p",null,"In my case sp-sub-project1-xks"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'name: $(Build.BuildId)\n\nvariables:\n  - name: azureSubscriptionTemplate\n    value: "sp-sub-project1-xks-{0}-owner"\n  - name: terraformFolder\n    value: "governance"\n  - name: sourceBranch\n    value: "refs/heads/main"\n')),Object(o.b)("p",null,"Also update the project path in name. Also notice the ref, the ref points to witch version of the module that you are using."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"resources:\n  repositories:\n    - repository: templates\n      type: git\n      name: project1/azure-devops-templates\n      ref: refs/tags/2021.03.1\n")),Object(o.b)("h4",{id:"add-cicd-piplines"},"Add CI/CD piplines"),Object(o.b)("p",null,"Once again add a pipeline."),Object(o.b)("p",null,"Assuming that you named your repository to terraform"),Object(o.b)("p",null,"Pipelines -> New pipeline -> Azure Repos Git -> terraform -> Existing Azure Pipelines YAML file"),Object(o.b)("p",null,"Import the pipeline from the following path: .ci/pipeline-governance.yaml"),Object(o.b)("h4",{id:"governence-stage-done"},"Governence stage done"),Object(o.b)("p",null,"Hopefully after adding the pipeline the pipeline should automatically trigger and the plan and apply stage should go thourgh without a problem."),Object(o.b)("h3",{id:"confgiure-core"},"confgiure core"),Object(o.b)("p",null,"Get a CIDR network for your AKS env per env.\nDefine in core/variables/env.tfvars"),Object(o.b)("p",null,"Run the prepare script to create a location for your state file.\n",Object(o.b)("inlineCode",{parentName:"p"},"make prepare ENV=dev DIR=core")),Object(o.b)("p",null,"Othen then that you should edit .ci just like you did for governance.\nAdd the pipeline and run it."),Object(o.b)("h3",{id:"configure-aks"},"configure AKS"),Object(o.b)("p",null,"Time to install AKS."),Object(o.b)("p",null,"Start to update main.tf to point on your organization/project."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-main.tf"}),'  fluxcd_v2_enabled = true\n  fluxcd_v2_config = {\n    type = "azure_devops"\n    github = {\n      owner = ""\n    }\n    azure_devops = {\n      org  = "organization1"\n      pat  = data.azurerm_key_vault_secret.azure_devops_pat.value\n      proj = "project1"\n    }\n  }\n')),Object(o.b)("p",null,"Notice the org and proj"),Object(o.b)("h3",{id:"create-pat-secret"},"Create PAT secret"),Object(o.b)("p",null,"To make it possible for flux to clone repos from azure devops we need to create a Personal Access Token(PAT)."),Object(o.b)("p",null,"User Settings -> Personal access tokens -> New Token"),Object(o.b)("img",{alt:"Settings user",src:Object(i.a)("img/operator/settings_user.png")}),Object(o.b)("p",null,"Create a PAT"),Object(o.b)("img",{alt:"Create PAT",src:Object(i.a)("img/operator/create_pat.png")}),Object(o.b)("p",null,"Copy the generated key, we will need it for the next step."),Object(o.b)("h3",{id:"add-pat-to-azure-key-vaults"},"Add PAT to Azure Key Vaults"),Object(o.b)("p",null,"To make it possible for terraform to reach the PAT in a easy and secure way we have chosen to store the PAT in Azure Key Vaults which you need to add manually."),Object(o.b)("h4",{id:"az-cli"},"az cli"),Object(o.b)("p",null,"You can add the secret using the az cli."),Object(o.b)("p",null,"Call the secret azure-devops-pat and the value should be the token you created in azure devops."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'# List all key vaults\naz keyvault list\n\n# Create the secret\naz keyvault secret set --vault-name kv-dev-we-core-1234 --name azure-devops-pat --value "SuperSecretToken123"\n')),Object(o.b)("h4",{id:"azure-portal"},"Azure portal"),Object(o.b)("p",null,"Or if you prefer use the UI."),Object(o.b)("p",null,'In azure portal search for "Key vaults" and pick the core one that matches the unique_suffix that you have specified in global.tfvars, in our case 1234.'),Object(o.b)("p",null,"Key vaults -> core-1234 -> Secrets -> Generate/Import"),Object(o.b)("img",{alt:"Azure Key Vaults",src:Object(i.a)("img/operator/azure_key_vault.jpg")}),Object(o.b)("p",null,'Call the secret "azure-devops-pat" and add the PAT key that you created in the previous step.'),Object(o.b)("h3",{id:"gitops-using-flux"},"GitOps using flux"),Object(o.b)("p",null,"If you want flux to manage your GitOps repo from the get go you can enable this in aks/variables/common.tfvars\nIn my case I will have flux manage a namespace called monitor and sync a repo under monitor-gitops."),Object(o.b)("p",null,"Make sure that you create this repository before running terraform."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-common.tfvars"}),'namespaces = [\n  {\n    name                    = "monitor"\n    delegate_resource_group = true\n    labels = {\n      "terraform" = "true"\n    }\n    flux = {\n      enabled = true\n      azure_devops = {\n        org  = "organization1"\n        proj = "project1"\n        repo = "monitor-gitops"\n      }\n      github = {\n        repo = ""\n      }\n    }\n  }\n]\n')),Object(o.b)("h3",{id:"configure-aks-cluster"},"Configure AKS cluster"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"How big should your cluster be?"),Object(o.b)("li",{parentName:"ul"},"Which version of kubernetes should you run?"),Object(o.b)("li",{parentName:"ul"},"What DNS zone should you use?"),Object(o.b)("li",{parentName:"ul"},"What SKU tier should your cluster have?"),Object(o.b)("li",{parentName:"ul"},"What size should your k8s nodes have?")),Object(o.b)("p",null,"All of this is configured under aks/variables/prod.tfvars"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-prod.tfvars"}),'environment = "dev"\ndns_zone    = "dev.aks.xenit.io"\n\naks_config = {\n  kubernetes_version = "1.19.7"\n  sku_tier           = "Free"\n  default_node_pool = {\n    orchestrator_version = "1.19.7"\n    vm_size              = "Standard_B2s"\n    min_count            = 1\n    max_count            = 3\n    node_labels          = {}\n  },\n  additional_node_pools = []\n}\n\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Notice the vm_size = Standard_B2s")),Object(o.b)("h2",{id:"admin-and-developer-access"},"Admin and developer access"),Object(o.b)("p",null,"Hopefully you should now have one XKS cluster up and running, but currently no developer can actually reach the cluster."),Object(o.b)("p",null,"In XKF we see clusters as cattle and at any time we can decide to recreate a XKS cluster.\nTo be able to do this without our developers even knowing we use blue green clusters, TODO write a document on how blue green clusters works and link.\nWe use GitOps together with DNS to be able to migrate applications without any impact to end-users assuming that our developers have written 12 step applications.\nTo store state we utilize the cloud services available in the different clouds that XKF supports."),Object(o.b)("p",null,"To make sure that our developers don't notice when we change our the cluster we have written a Kubernetes API Proxy called ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/XenitAB/azad-kube-proxy"}),"azad-kube-proxy"),"."),Object(o.b)("h3",{id:"azure-ad-kubernetes-proxy"},"Azure AD Kubernetes Proxy"),Object(o.b)("p",null,"AZAD as we also call it, is a deployment that runs inside XKS and sits in front of the kubernetes API."),Object(o.b)("p",null,"We also supplie a krew/kubectl plugin to make it easy for our developers to use AZAD.\nFor instructions on how to setup and configure ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/XenitAB/azad-kube-proxy"}),"see"),"."),Object(o.b)("h4",{id:"azad-usage"},"AZAD Usage"),Object(o.b)("p",null,"Install krew: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://krew.sigs.k8s.io/docs/user-guide/setup/install/#windows"}),"https://krew.sigs.k8s.io/docs/user-guide/setup/install/#windows"),"\nInstall azad-proxy plugin: kubectl krew install azad-proxy\nLogin with azure cli (a valid session with azure cli is always required): az login\nDiscover the clusters: kubectl azad-proxy discover"),Object(o.b)("p",null,"There are two ways to connect to the cluster using azad."),Object(o.b)("p",null,"Ether use the menu feature:\n",Object(o.b)("inlineCode",{parentName:"p"},"kubectl azad-proxy menu")),Object(o.b)("p",null,"Or connect by using the generate command:\n",Object(o.b)("inlineCode",{parentName:"p"},"kubectl azad-proxy generate --cluster-name dev-cluster --proxy-url https://dev.example.com --resource https://dev.example.com")),Object(o.b)("h3",{id:"aad-groups"},"AAD groups"),Object(o.b)("p",null,"To make it possible for our developers and admins to actually login to the cluster we need to add them to a AAD group."),Object(o.b)("h4",{id:"developer-groups"},"Developer groups"),Object(o.b)("p",null,"Depending on what configuration you did in global.tfvars this will differ but the group name should be something like bellow."),Object(o.b)("p",null,"This group will give your developers contributor access in the namespaces where they have access."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"<azure_ad_group_prefix>-rg-xks-<cluster-env>-aks-contributor")),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"az-rg-xks-dev-aks-contributor")),Object(o.b)("h4",{id:"admin-groups"},"Admin groups"),Object(o.b)("p",null,"To make it easy for you as a admin you should also use AZAD."),Object(o.b)("p",null,"To give your self cluster-admin:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"<azure_ad_group_prefix>-xks-<cluster-env>-clusteradmin")),Object(o.b)("p",null,"Example: aks-xks-dev-clusteradmin"),Object(o.b)("h3",{id:"authorized-ip"},"Authorized IP"),Object(o.b)("p",null,"To minimize the exposure of the XKS clusters we define a list of authorized ip:s that is approved to connect the kubernetes cluster API."),Object(o.b)("p",null,"We need to approve multiple infrastructure networks and user networks."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you are using the HUB module and you are running VMSS Azure Devops Agent you need to approve those IP:s as authorized."),Object(o.b)("li",{parentName:"ul"},"The AKS public ip"),Object(o.b)("li",{parentName:"ul"},"Your developers public ip")),Object(o.b)("p",null,"A recommendations is to add a comment with what IP you have added."),Object(o.b)("p",null,"aks_authorized_ips = ",'[\n"8.8.8.8/32",  # google dns\n"1.2.3.4/32",  # developer x ip\n"2.3.4.5/30",  # AKS0 dev\n]'))}p.isMDXComponent=!0}}]);