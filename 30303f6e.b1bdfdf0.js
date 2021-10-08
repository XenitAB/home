(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{141:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,g=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(g,c(c({ref:t},l),{},{components:n})):a.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},142:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(20);t.default=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},143:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(142),a=n(144);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,u=o.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},144:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(141)),i=n(143),c={id:"azure-devops-agents",title:"Azure DevOps agents"},u={unversionedId:"xks/operator-guide/azure-devops-agents",id:"xks/operator-guide/azure-devops-agents",isDocsHomePage:!1,title:"Azure DevOps agents",description:"Instead of using the default agent in azure we use a VMSS (Virtual machine scale set)",source:"@site/docs/xks/operator-guide/azure-devops-agents.md",slug:"/xks/operator-guide/azure-devops-agents",permalink:"/docs/xks/operator-guide/azure-devops-agents",editUrl:"https://github.com/xenitab/xenitab.github.io/edit/main/docs/xks/operator-guide/azure-devops-agents.md",version:"current",sidebar:"docs",previous:{title:"Operator Guide",permalink:"/docs/xks/operator-guide/operator-guide"},next:{title:"Contributing",permalink:"/docs/terraform-modules/CONTRIBUTING"}},l=[{value:"Governance",id:"governance",children:[]},{value:"Setup packer repo",id:"setup-packer-repo",children:[{value:"Terraform configure packer image",id:"terraform-configure-packer-image",children:[]}]},{value:"Configure Azure devops",id:"configure-azure-devops",children:[{value:"configure Service connections",id:"configure-service-connections",children:[]},{value:"Setup Agent Pool",id:"setup-agent-pool",children:[]},{value:"Azure Devops Billing",id:"azure-devops-billing",children:[]}]},{value:"Peering config",id:"peering-config",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Instead of using the default agent in azure we use a VMSS (Virtual machine scale set)"),Object(o.b)("p",null,"To configure azure agent we need to run a few steps in a specific order."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In Governance add hub & azpagent"),Object(o.b)("li",{parentName:"ul"},"Configure & run packer, which generates a vm image"),Object(o.b)("li",{parentName:"ul"},"hub with the correct packer file defined"),Object(o.b)("li",{parentName:"ul"},'core & hub with "peering_config" defined')),Object(o.b)("h2",{id:"governance"},"Governance"),Object(o.b)("p",null,"First you need to update your governance template. It should include a definition for hub & azpagent."),Object(o.b)("p",null,"It should look something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-.tfvars"}),'  {\n    common_name                = "hub",\n    delegate_aks               = false,\n    delegate_key_vault         = true,\n    delegate_service_endpoint  = false,\n    delegate_service_principal = false,\n    lock_resource_group        = false,\n    tags = {\n      "description" = "Used for main dns"\n    }\n  },\n  {\n    common_name                = "azpagent",\n    delegate_aks               = false,\n    delegate_key_vault         = true,\n    delegate_service_endpoint  = false,\n    delegate_service_principal = true,\n    lock_resource_group        = false,\n    tags = {\n      "description" = "Azure Pipelines Agent"\n    }\n  },\n\n')),Object(o.b)("h2",{id:"setup-packer-repo"},"Setup packer repo"),Object(o.b)("p",null,"To create a vm image and we utilize ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.packer.io/"}),"packer"),", here you can find a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/XenitAB/azure-devops-templates/tree/main/packer-docker"}),"template")," for our packer."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a new git repo located in azure, for example call it packer."),Object(o.b)("li",{parentName:"ul"},"Create a new pipeline pointing it to .ci/azure-pipelines-agent.yaml")),Object(o.b)("p",null,"Ether start a build in Azure DevOps or on your local client using the Make command."),Object(o.b)("p",null,"The job will take about ",Object(o.b)("strong",{parentName:"p"},"40")," minutes."),Object(o.b)("h3",{id:"terraform-configure-packer-image"},"Terraform configure packer image"),Object(o.b)("p",null,"You should now be able to see a vm image in your resource group."),Object(o.b)("p",null,"Grab the name of the agent and add to your hub terraform config."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"# Assuming that you don't have any other image this RG.\naz image list -o json --query '[0].name'\n")),Object(o.b)("p",null,"In my case it's called azp-agent-2021-04-09T08-18-30Z."),Object(o.b)("h2",{id:"configure-azure-devops"},"Configure Azure devops"),Object(o.b)("p",null,"To be able to communicate with the VMSS we need to configure a Service connection."),Object(o.b)("p",null,"You will find service connection under a random project within azure devops."),Object(o.b)("p",null,"To setup the service connection you need to get a secret generated by terraform."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"# Assuming that you are connected to the correct subscription\naz keyvault secret show --vault-name <vault-name> --name <secret-name> -o tsv --query value\n# Example:\naz keyvault secret show --vault-name kv-prod-we-core-1337 --name sp-rg-xks-prod-azpagent-contributor -o tsv --query value\n")),Object(o.b)("h3",{id:"configure-service-connections"},"configure Service connections"),Object(o.b)("p",null,"To create a new Service connection from Azure Devops:"),Object(o.b)("p",null,"Project settings -> Service connections -> New service connection -> Azure Resource Manager -> Service principal (manual)"),Object(o.b)("p",null,'{"clientId":"12345","clientSecret":"SoMuchSecret","subscriptionId":"sub-id","tenantId":"tenant-id"}'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Subscription Id = subscriptionId"),Object(o.b)("li",{parentName:"ul"},"Service Principal Id = clientId"),Object(o.b)("li",{parentName:"ul"},"Service principal key = clientSecret"),Object(o.b)("li",{parentName:"ul"},"Tenant ID = tenantId"),Object(o.b)("li",{parentName:"ul"},"Service connection name = random-name")),Object(o.b)("h3",{id:"setup-agent-pool"},"Setup Agent Pool"),Object(o.b)("p",null,"In Azure DevOps under project settings."),Object(o.b)("p",null,"Agent pools -> Add Pool -> Pick VMSS from dropdown"),Object(o.b)("img",{alt:"Agent image",src:Object(i.a)("img/assets/xks/operator-guide/agent_pool.png")}),Object(o.b)("h3",{id:"azure-devops-billing"},"Azure Devops Billing"),Object(o.b)("p",null,"Configure billing."),Object(o.b)("p",null,"This will increase your azure cost. Read up on how much on your own."),Object(o.b)("p",null,"Organization Settings -> Billing"),Object(o.b)("p",null,'Under "Self-Hosted CI/CD" set "Paid parallel jobs" = 3'),Object(o.b)("h2",{id:"peering-config"},"Peering config"),Object(o.b)("p",null,"We need to setup peering_config between the hub and the core resource group."),Object(o.b)("p",null,"This to be able to talk from Azure DevOps agent VMSS pool to the core network."),Object(o.b)("p",null,"Bellow you can find a example on how you can do it:"),Object(o.b)("p",null,"hub/variables/prod.tfvars"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-.tfvars"}),'peering_config = [\n  {\n    name                         = "core-dev"\n    remote_virtual_network_id    = "/subscriptions/your-sub-id/resourceGroups/rg-dev-we-core/providers/Microsoft.Network/virtualNetworks/vnet-dev-we-core"\n    allow_forwarded_traffic      = true\n    use_remote_gateways          = false\n    allow_virtual_network_access = true\n  },\n]\n')),Object(o.b)("p",null,"core/variables/dev.tfvars"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-.tfvars"}),'peering_config = [\n  {\n    name                         = "hub"\n    remote_virtual_network_id    = "/subscriptions/your-sub-id/resourceGroups/rg-prod-we-hub/providers/Microsoft.Network/virtualNetworks/vnet-prod-we-hub"\n    allow_forwarded_traffic      = true\n    use_remote_gateways          = false\n    allow_virtual_network_access = true\n  },\n]\n')),Object(o.b)("p",null,"After your terraform code is applied you should be able to see that your two vnets is connected:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"az network vnet list -o json --query '[0].virtualNetworkPeerings'\n")))}p.isMDXComponent=!0}}]);