"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[200],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,h=p["".concat(c,".").concat(u)]||p[u]||d[u]||s;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2010:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],i={id:"secrets-management",title:"Secrets Management"},c=void 0,l={unversionedId:"xks/developer-guide/secrets-management",id:"xks/developer-guide/secrets-management",isDocsHomePage:!1,title:"Secrets Management",description:"Secrets management is an important feature when building secure products. Access to secrets should be limited, and it should be easy to rotate them when required. It becomes a requirement when working with",source:"@site/docs/xks/developer-guide/secrets-management.md",sourceDirName:"xks/developer-guide",slug:"/xks/developer-guide/secrets-management",permalink:"/docs/xks/developer-guide/secrets-management",editUrl:"https://github.com/xenitab/xenitab.github.io/edit/main/docs/xks/developer-guide/secrets-management.md",tags:[],version:"current",frontMatter:{id:"secrets-management",title:"Secrets Management"},sidebar:"docs",previous:{title:"Best Practices",permalink:"/docs/xks/developer-guide/best-practices"},next:{title:"Cloud IAM",permalink:"/docs/xks/developer-guide/cloud-iam"}},m=[{value:"Cloud Providers",id:"cloud-providers",children:[{value:"Azure",id:"azure",children:[],level:3},{value:"AWS",id:"aws",children:[],level:3}],level:2},{value:"Automatic Reloading",id:"automatic-reloading",children:[],level:2}],d={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Secrets management is an important feature when building secure products. Access to secrets should be limited, and it should be easy to rotate them when required. It becomes a requirement when working with\nGitOps as secrets can and should not be committed to a git repository. This means that secrets have to be loaded from another source separate from the manifests, but before the application is started.\nTo solve this problem XKS makes use of the ",(0,s.kt)("a",{parentName:"p",href:"https://secrets-store-csi-driver.sigs.k8s.io/providers.html"},"Secret Store CSI Driver")," project when running in both Azure and AWS. The CSI driver creates an\nentrypoint so that secrets store services in cloud providers can be read as Kubernetes volumes. The project works in a similar way in both Azure and AWS but there are some configuration differences\nas the service that stores the secrets is different."),(0,s.kt)("p",null,"A common question when looking at the CSI Driver is why not just load the secret with the help of the cloud provider's SDK? While that solution may work it is not recommended as it creates a close\ncoupling between the application logic and the secret source. A simple thing such as renaming the secret could require the application to be compiled again. Local development could also be affected as\nthe application would need alternative logic get the secrets locally. With the CSI Driver the application can just expect the secrets to be read through a file or environment variable, the\nmethod in which that file or environment variable got created is irrelevant for the application."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The guide below assumes that you have read and understood the ",(0,s.kt)("a",{parentName:"p",href:"/docs/xks/developer-guide/cloud-iam"},"Cloud IAM")," documentation as the Pod loading the secret will need to have permission to read the secret.")),(0,s.kt)("p",null,"The main component of the Secret Store CSI Driver is the Secret Provider Class. The Secret Provider Class creates the link between a remote secret and a Kubernetes volume. It can be referenced as a\nvolume which can be mounted in a Pod, it can additionally be configured to be written to a Kubernetes Secret. The name of the Secret Provider Class is only used as a reference when creating a module.\nThe ",(0,s.kt)("inlineCode",{parentName:"p"},"objects")," field contains a list of references to the secret in the secret store. The object name is the name of the secret in for example Azure KeyVault or AWS Secrets Manager."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: secrets-store.csi.x-k8s.io/v1alpha1\nkind: SecretProviderClass\nmetadata:\n  name: foo\nspec:\n  provider: <provider>\n  parameters:\n    objects: |\n      - objectName: "bar"\n        objectType: "<type>"\n      - objectName: "baz"\n        objectType: "<type>"\n')),(0,s.kt)("p",null,"When mounting the Secret Provider Class to a Pod a file will be created with the contents of the secret. The file name will either be the object name or the object alias as specified in the Secret\nProvider Class. If a Secret Provider Class has multiple objects, multiple files will be mounted in the Pod. Keep this in mind when creating Secret Provider Classes. Try to only mount the secrets\nneeded for a Pod instead of creating a large Secret Provider Class which contains all the secrets needed in a namespace. The Pod resulting from the Deployment below (together with the Secret Provider Class) will have two files mounted in it,\n",(0,s.kt)("inlineCode",{parentName:"p"},"/mnt/secrets-store/bar")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"/mnt/secrets-store/baz"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: foo\nspec:\n  template:\n    spec:\n      containers:\n        - name: foo\n          volumeMounts:\n            - name: secret-store\n              mountPath: "/mnt/secrets-store"\n              readOnly: true\n      volumes:\n        - name: secret-store\n          csi:\n            driver: secrets-store.csi.k8s.io\n            readOnly: true\n            volumeAttributes:\n              secretProviderClass: foo\n')),(0,s.kt)("p",null,"Additionally, you may want to have your secrets available as environment variables. Extending the example above, the secret ",(0,s.kt)("inlineCode",{parentName:"p"},"bar")," is now also available as the environment variable ",(0,s.kt)("inlineCode",{parentName:"p"},"BAR"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: foo\nspec:\n  template:\n    spec:\n      containers:\n        - name: foo\n          volumeMounts:\n            - name: secret-store\n              mountPath: "/mnt/secrets-store"\n              readOnly: true\n          env:\n            - name: BAR\n              valueFrom:\n                secretKeyRef:\n                  name: bar\n                  key: bar\n      volumes:\n        - name: secret-store\n          csi:\n            driver: secrets-store.csi.k8s.io\n            readOnly: true\n            volumeAttributes:\n              secretProviderClass: foo\n')),(0,s.kt)("p",null,"Note that even if you only want to access your secret via an environment variable, you still need to mount the secret store as a volume."),(0,s.kt)("h2",{id:"cloud-providers"},"Cloud Providers"),(0,s.kt)("h3",{id:"azure"},"Azure"),(0,s.kt)("p",null,"The Azure provider for the CSI driver requires some configuration to work, as it is possible to have multiple Azure Key Vaults. For that reason the Secret Provider Class has to specify the name of the\nKey Vault and the tenant id where the CSI Driver can find the secret. Additionally it is important to set ",(0,s.kt)("inlineCode",{parentName:"p"},'usePodIdentity: "true"')," as authentication to the Azure API will be done with the help of\nAAD Pod Identity."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: secrets-store.csi.x-k8s.io/v1alpha1\nkind: SecretProviderClass\nmetadata:\n  name: connection-string-test\nspec:\n  provider: azure\n  parameters:\n    usePodIdentity: "true"\n    keyvaultName: "kvname"\n    objects: |\n      array:\n        - |\n          objectName: connectionstring\n          objectType: secret\n    tenantId: "11111111-1111-1111-1111-111111111111"\n')),(0,s.kt)("p",null,"To use the Secret Provider Class simply mount it as a volume in the Pod where you want to read the secret. The only extra configuration that is required is setting the label ",(0,s.kt)("inlineCode",{parentName:"p"},"aadpodidbinding")," to the\nname of the Azure Identity. This is required as the CSI Driver will assume the Pods identity when authenticating with the Azure API. Without this label the fetching of the secret will fail."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: connection-string-test\n  namespace: tenant\n  labels:\n    aadpodidbinding: tenant\nspec:\n  selector:\n    matchLabels:\n      app: connection-string-test\n  template:\n    metadata:\n      labels:\n        app: connection-string-test\n    spec:\n      containers:\n        - name: connection-string-test\n          image: alpine:latest\n          volumeMounts:\n            - name: secret-store\n              mountPath: "/mnt/secrets-store"\n              readOnly: true\n      volumes:\n        - name: secret-store\n          csi:\n            driver: secrets-store.csi.k8s.io\n            readOnly: true\n            volumeAttributes:\n              secretProviderClass: connection-string-test\n')),(0,s.kt)("h3",{id:"aws"},"AWS"),(0,s.kt)("p",null,"There are two secret store services in AWS that is supported by the CSI Driver, ",(0,s.kt)("a",{parentName:"p",href:"https://aws.amazon.com/secrets-manager/"},"AWS Secret Manager")," and ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html"},"AWS System Manager Parameter\nStore"),". Both services have their own pros and cons in regards to features and pricing, but in the\nend both services deliver the same features in the cluster. The example below shows how to read the secret ",(0,s.kt)("inlineCode",{parentName:"p"},"application/connection-string-test/connectionstring")," with examples for both Secret Manager\nand System Manager Parameter Store."),(0,s.kt)("p",null,"Create an IAM role which gives permission to read the specific secret, note that the full ARN path including the secret name is included in the resource field. This is to limit secret acccess for the\napplication as there is only a single service instance per account and region. The CSI Driver also requires the ",(0,s.kt)("inlineCode",{parentName:"p"},"secretsmanager:ListSecrets")," permission or ",(0,s.kt)("inlineCode",{parentName:"p"},"ssm:DescribeParameters")," to function\nproperly. It will not be able to read any secret values with this permission, just list them."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'data "aws_iam_policy_document" "db_connection_string" {\n  statement {\n    effect = "Allow"\n    actions = [\n      "secretsmanager:ListSecrets",\n    ]\n    resources = ["*"]\n  }\n  statement {\n    effect = "Allow"\n    actions = [\n      "secretsmanager:GetSecretValue",\n      "secretsmanager:DescribeSecret",\n      "secretsmanager:GetResourcePolicy",\n      "secretsmanager:ListSecretVersionIds"\n    ]\n    resources = ["arn:aws:secretsmanager:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:secret:application/connection-string-test/connectionstring"]\n  }\n}\n')),(0,s.kt)("p",null,"or"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'data "aws_iam_policy_document" "db_connection_string" {\n  statement {\n    effect = "Allow"\n    actions = [\n      "ssm:DescribeParameters",\n    ]\n    resources = ["*"]\n  }\n  statement {\n    effect = "Allow"\n    actions = [\n      "ssm:GetParameter",\n      "ssm:GetParameters",\n    ]\n    resources = ["arn:aws:ssm:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:parameter/db-*"]\n  }\n}\n')),(0,s.kt)("p",null,"Complete the configuration by passing the policy document to the IRSA module which will create the IAM policy and role, this should be the same for both Secret Manager and System Manager Parameter\nStore."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'module "irsa_test" {\n  source = "github.com/xenitab/terraform-modules//modules/aws/irsa?ref=2021.08.9"\n\n  name = "irsa-test"\n  oidc_providers = [\n    for v in var.oidc_urls :\n    {\n      url = v\n      arn = aws_iam_openid_connect_provider.this[v].arn\n    }\n  ]\n  kubernetes_namespace       = "tenant"\n  kubernetes_service_account = "connection-string-test"\n  policy_json                = data.aws_iam_policy_document.get_login_profile.json\n}\n')),(0,s.kt)("p",null,"After the IAM role and policy have been created a Secret Provider Class has to be created specifying the secrets that should be read. Make sure to specify the correct object type, it should either be\n",(0,s.kt)("inlineCode",{parentName:"p"},"secretsmanager")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"ssmparameter"),". Note the configuration of ",(0,s.kt)("inlineCode",{parentName:"p"},"objectAlias")," for the object. This is required as the secret name contains the character ",(0,s.kt)("inlineCode",{parentName:"p"},"/")," in the name. By default the CSI Driver uses\nthe name as the file name, which would cause issues as this is not permitted in Linux. The solution is to give the secret an alias instead."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: secrets-store.csi.x-k8s.io/v1alpha1\nkind: SecretProviderClass\nmetadata:\n  name: connection-string-test\n  namespace: tenant\nspec:\n  provider: aws\n  parameters:\n    objects: |\n      - objectName: "application/connection-string-test/connectionstring"\n        objectType: "secretsmanager" | "ssmparameter"\n        objectAlias: "connectionstring"\n  secretObjects:\n    - data:\n        - key: password\n          objectName: "connectionstring"\n      secretName: connectionstring\n      type: Opaque\n')),(0,s.kt)("p",null,"Create a deployment which mounts the secret from the remote service. The secret is mounted as a volume in the Pod and will be populated with the value stored in the remote service. It is important\nthat the Service Account is configured properly as the CSI Driver will assume the Pod's role when fetching the secret value."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: connection-string-test\n  namespace: tenant\n  annotations:\n    eks.amazonaws.com/role-arn: arn:aws:iam::111111111111:role/connection-string-test\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: connection-string-test\n  namespace: tenant\nspec:\n  selector:\n    matchLabels:\n      app: connection-string-test\n  template:\n    metadata:\n      labels:\n        app: connection-string-test\n    spec:\n      serviceAccountName: connection-string-test\n      containers:\n        - name: connection-string-test\n          image: alpine:latest\n          volumeMounts:\n            - name: secret-store\n              mountPath: "/mnt/secrets-store"\n              readOnly: true\n      volumes:\n        - name: secret-store\n          csi:\n            driver: secrets-store.csi.k8s.io\n            readOnly: true\n            volumeAttributes:\n              secretProviderClass: connection-string-test\n')),(0,s.kt)("h2",{id:"automatic-reloading"},"Automatic Reloading"),(0,s.kt)("p",null,"A Pod will get the latest version of the Secret Provider Class when started. The CSI Driver will poll the secret and update when the secret value is updated. However the Pod will not be\nupdated as this would require the application to be able to restart the process and read the file instead. The Pod will not receive the new value until a new instance of the Pod is created. This could\nbecome annoying for situations where the secret value may change often or there are a lot of secrets being read."),(0,s.kt)("p",null,"The solution in XKS is to configure the Secret Provider Class to annotate the Pod to be recreated when the Secret value is updated. The Pod recreation is done with the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/stakater/Reloader"},"Reloader")," project which is present in all XKS clusters. Reloader works by adding an annotation with the key ",(0,s.kt)("inlineCode",{parentName:"p"},"secret.reloader.stakater.com/reload"),", where the value\nis the name of the secret. If you need to recreate your Pod when any of multiple secrets are changed, use comma-separated values:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'secret.reloader.stakater.com/reload: "foo,bar"\n')),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"When using an object alias the object name in the secrets objects refers to the alias and not to the original object name.")),(0,s.kt)("p",null,"Below is an example of creating a Service Provider Class which also creates a Kubernetes Secret, there is no need to actually use the created secret but in the example below it is mounted as an environment variable."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: secrets-store.csi.x-k8s.io/v1alpha1\nkind: SecretProviderClass\nmetadata:\n  name: application\n  namespace: tenant\nspec:\n  provider: <provider>\n  parameters:\n    objects: |\n      - objectName: "foo"\n        objectType: "<type>"\n  secretObjects:\n    - data:\n        - key: bar\n          objectName: foo\n      secretName: foo\n      type: Opaque\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: application\n  namespace: tenant\nspec:\n  selector:\n    matchLabels:\n      app: application\n  template:\n    metadata:\n      annotations:\n        secret.reloader.stakater.com/reload: "foo"\n      labels:\n        app: application\n    spec:\n      serviceAccountName: application\n      containers:\n        - name: application\n          image: alpine:latest\n          env:\n            - name: BAR\n              valueFrom:\n                secretKeyRef:\n                  name: foo\n                  key: bar\n          volumeMounts:\n            - name: secret-store\n              mountPath: "/mnt/secrets-store"\n              readOnly: true\n      volumes:\n        - name: secret-store\n          csi:\n            driver: secrets-store.csi.k8s.io\n            readOnly: true\n            volumeAttributes:\n              secretProviderClass: foo\n')))}p.isMDXComponent=!0}}]);