"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[8024],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5657:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"cloud-iam",title:"Cloud IAM"},c=void 0,l={unversionedId:"xks/developer-guide/cloud-iam",id:"xks/developer-guide/cloud-iam",isDocsHomePage:!1,title:"Cloud IAM",description:"Sometimes applications will need to integrate with other cloud resources as they require things like persistent data storage. When working with XKS each namespace is accompanied by an Azure resource",source:"@site/docs/xks/developer-guide/cloud-iam.md",sourceDirName:"xks/developer-guide",slug:"/xks/developer-guide/cloud-iam",permalink:"/docs/xks/developer-guide/cloud-iam",editUrl:"https://github.com/xenitab/xenitab.github.io/edit/main/docs/xks/developer-guide/cloud-iam.md",tags:[],version:"current",frontMatter:{id:"cloud-iam",title:"Cloud IAM"},sidebar:"docs",previous:{title:"Secrets Management",permalink:"/docs/xks/developer-guide/secrets-management"},next:{title:"Container Security",permalink:"/docs/xks/developer-guide/container-security"}},u=[{value:"Cloud Providers",id:"cloud-providers",children:[{value:"Azure",id:"azure",children:[{value:"SDK",id:"sdk",children:[],level:4},{value:"Limiting Permissions",id:"limiting-permissions",children:[],level:4}],level:3},{value:"AWS",id:"aws",children:[{value:"SDK",id:"sdk-1",children:[],level:4}],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sometimes applications will need to integrate with other cloud resources as they require things like persistent data storage. When working with XKS each namespace is accompanied by an Azure resource\ngroup or an AWS account. This is where cloud resources can be created by each tenant. To keep things simple it may be a good idea to not share these resources across multiple tenants, as one of the\ntenants has to own each resource. Instead look at other options like exposing an API inside the cluster instead. As one may expect the authentication methods differ when running XKS in Azure and AWS,\nthis is because the APIs and underlying authentication methods differ greatly. It is important to take this into consideration when reading this documentation."),(0,i.kt)("h2",{id:"cloud-providers"},"Cloud Providers"),(0,i.kt)("h3",{id:"azure"},"Azure"),(0,i.kt)("p",null,"The recommended way to authenticate towards Azure in XKS is to make use of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/aad-pod-identity"},"AAD Pod Identity")," which runs inside the cluster. AAD Pod Identity allows Pods\nwithin the cluster to use ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview"},"managed identities")," to authenticate towards Azure. This removes the need\nfor static credentials that have to be passed to the Pods. It works by intercepting API requests before they leave the cluster and will attach the correct credential based on the source Pod of the\nrequest."),(0,i.kt)("p",null,"Each tenant namespace comes preconfigured with an ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/aad-pod-identity/docs/concepts/azureidentity/"},"AzureIdentity")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/aad-pod-identity/docs/concepts/azureidentitybinding/"},"AzureIdentityBinding"),". These have been setup so that the identity has access to the tenant's resource group. All that has\nto be done to enable the managed identity is to add the label ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," to the Pod. The preconfigured AzureIdentity has a labelselector which expects the label to have the same value as the namespace\nname."),(0,i.kt)("p",null,"This example will deploy a Pod with the Azure CLI so that you can test access to the Azure API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: msi-test\n  namespace: tenant\n  labels:\n    aadpodidbinding: ${NAMESPACE_NAME}\nspec:\n  containers:\n    - name: msi-test\n      image: mcr.microsoft.com/azure-cli\n      tty: true\n      volumeMounts:\n        - name: az-cli\n          mountPath: /root/.azure\n  volumes:\n    - name: az-cli\n      emptyDir: {}\n")),(0,i.kt)("p",null,"After the Pod has started you can execute a shell in the Pod and verify that the managed identity is working."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n tenant exec -it msi-test\naz login --identity\naz account show\n")),(0,i.kt)("p",null,"Make sure your application supports retries when retrieving tokens. It should at least be able to retry for 60 seconds. Read more about it ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/aad-pod-identity/docs/best-practices/#retry-on-token-retrieval"},"here"),". More good practices can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/aad-pod-identity/docs/best-practices"},"aad-pod-identity docs"),"."),(0,i.kt)("h4",{id:"sdk"},"SDK"),(0,i.kt)("p",null,"A common scenario is that an application may need API access to Azure resources through the API. In these cases the best solution is to use the language specific SDKs which will most of the time\nsupport MSI credentials. Below are examples for how to create a client using MSI credentials which can interact with Azure storage account blobs."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Golang ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "time"\n\n  "github.com/Azure/go-autorest/autorest/azure/auth"\n    blob "github.com/Azure/azure-storage-blob-go/azblob"\n)\n\nfunc main() {\n  msiConfig := auth.NewMSIConfig()\n\n  spt, err := msiConfig.ServicePrincipalToken()\n  if err != nil {\n    return nil, err\n  }\n  if err := spt.Refresh(); err != nil {\n    return nil, err\n  }\n\n  tc, err := blob.NewTokenCredential(spt.Token().AccessToken, func(tc blob.TokenCredential) time.Duration {\n    err := spt.Refresh()\n    if err != nil {\n      return 30 * time.Second\n    }\n    tc.SetToken(spt.Token().AccessToken)\n    return spt.Token().Expires().Sub(time.Now().Add(2 * time.Minute))\n  }), nil\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," C# with ASP.NET ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-aspnet"},'using Azure;\nusing Azure.Identity;\nusing Azure.Storage.Blobs;\n\nasync static Task CreateBlockBlobAsync(string accountName, string containerName, string blobName)\n{\n    string containerEndpoint = string.Format("https://{0}.blob.core.windows.net/{1}",\n                                                accountName,\n                                                containerName);\n    BlobContainerClient containerClient = new BlobContainerClient(new Uri(containerEndpoint),\n                                                                    new DefaultAzureCredential());\n}\n')),(0,i.kt)("h4",{id:"limiting-permissions"},"Limiting Permissions"),(0,i.kt)("p",null,"TBD"),(0,i.kt)("h3",{id:"aws"},"AWS"),(0,i.kt)("p",null,"When authenticating towards AWS in XKS we recommend using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/setting-up-enable-IAM.html"},"IAM Roles for Service Accounts")," (IRSA). IRSA\nworks by intercepting AWS API calls before leaving the cluster and appending the correct authentication token to the request. This removes the need for static security credentials as it is handled\noutside the app. IRSA works by annotating a Service Account with a reference to a specfic AWS IAM role. When that Service Account is attached to a Pod, the Pod will be able to assume the IAM role.\nThe reason IRSA works in a multi-tenant cluster is because the reference is multi-directional. The Service Account has to specify the full role ARN it wants to assume and the IAM role has to specify\nthe name and namespace of the Service Account which is allowed to assume the role. So it is not enough to know the ARN of the role unless you have access to the correct namespace and Service Account."),(0,i.kt)("p",null,"Start by defining a variable for the OIDC URLs that should be trusted. Currently this is a static definition that needs to be specified but work is planned to make this value discoverable in the\nfuture."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcl"},'variable "oidc_urls" {\n  description = "List of EKS OIDC URLs to trust."\n  type        = list(string)\n}\n')),(0,i.kt)("p",null,"A new OIDC provider has to be created for each trusted URL. The simplest way to do this is to iterate the URL list. This should only be done once per tenant account, so try to define all roles in the\nsame Terraform state."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcl"},'data "tls_certificate" "this" {\n  for_each = {\n    for v in var.oidc_urls :\n    v => v\n  }\n  url = each.value\n}\n\nresource "aws_iam_openid_connect_provider" "this" {\n  for_each = {\n    for v in var.oidc_urls :\n    v => v\n  }\n  client_id_list  = ["sts.amazonaws.com"]\n  thumbprint_list = [data.tls_certificate.this[each.value].certificates[0].sha1_fingerprint]\n  url             = each.value\n}\n')),(0,i.kt)("p",null,"Define an AWS IAM policy document and an instance of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XenitAB/terraform-modules/tree/main/modules/aws/irsa"},"IRSA Terraform module"),". The policy document describes which\npermissions should be granted to a Pod and the IRSA module creates the IAM policy and role for a Service Account in a specific namespace. The example below will for example only work with a Service\nAccount called ",(0,i.kt)("inlineCode",{parentName:"p"},"irsa-test")," in the namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"tenant"),". Keep in mind that a policy document and module instance is required for each unique permission set."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcl"},'data "aws_iam_policy_document" "get_login_profile" {\n  statement {\n    effect = "Allow"\n    actions = [\n      "iam:GetLoginProfile",\n    ]\n    resources = ["*"]\n  }\n}\n\nmodule "irsa_test" {\n  source = "github.com/xenitab/terraform-modules//modules/aws/irsa?ref=2021.08.9"\n\n  name = "irsa-test"\n  oidc_providers = [\n    for v in var.oidc_urls :\n    {\n      url = v\n      arn = aws_iam_openid_connect_provider.this[v].arn\n    }\n  ]\n  kubernetes_namespace       = "tenant"\n  kubernetes_service_account = "irsa-test"\n  policy_json                = data.aws_iam_policy_document.get_login_profile.json\n}\n')),(0,i.kt)("p",null,"It is a good idea to output the ARN of the created role, as it will be needed in the next step."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcl"},'output "irsa_test_arn" {\n  value = module.irsa_test.role_arn\n}\n')),(0,i.kt)("p",null,"The correct IAM roles and policies should be created after the Terraform has been applied. The next step is to create a Service Account with the same name as specified in the IRSA module and annotate it\nwith the key ",(0,i.kt)("inlineCode",{parentName:"p"},"eks.amazonaws.com/role-arn"),". The value should be the full ARN of the created IAM role. Note that the account id is part of the ARN as the IAM role is created in a different account\nthan the one the cluster is located in."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: irsa-test\n  namespace: tenant\n  annotations:\n    eks.amazonaws.com/role-arn: arn:aws:iam::111111111111:role/irsa-test\n")),(0,i.kt)("p",null,"Create a Pod using the newly created Service Account to test using the IAM role."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: irsa-test\n  namespace: tenant\nspec:\n  serviceAccountName: irsa-test\n  containers:\n  - name: irsa-test\n      image: amazon/aws-cli\n      command: ["sh"]\n      stdin: true\n      tty: true\n')),(0,i.kt)("p",null,"After the Pod has started you can execute a shell in the Pod and verify that the managed identity is working."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n tenant exec -it irsa-test\naws sts get-caller-identity\n")),(0,i.kt)("h4",{id:"sdk-1"},"SDK"),(0,i.kt)("p",null,"TBD"))}p.isMDXComponent=!0}}]);