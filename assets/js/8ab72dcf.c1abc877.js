"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[1401],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return n?a.createElement(m,o(o({ref:t},h),{},{components:n})):a.createElement(m,o({ref:t},h))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(2263),r=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,s=void 0!==o&&o,l=i.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var h=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+h:h}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},639:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return h},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(4996),s=["components"],l={id:"networking",title:"Networking"},c=void 0,h={unversionedId:"xks/developer-guide/networking",id:"xks/developer-guide/networking",isDocsHomePage:!1,title:"Networking",description:"Network Policies",source:"@site/docs/xks/developer-guide/networking.md",sourceDirName:"xks/developer-guide",slug:"/xks/developer-guide/networking",permalink:"/docs/xks/developer-guide/networking",editUrl:"https://github.com/xenitab/xenitab.github.io/edit/main/docs/xks/developer-guide/networking.md",tags:[],version:"current",frontMatter:{id:"networking",title:"Networking"},sidebar:"docs",previous:{title:"Observability",permalink:"/docs/xks/developer-guide/observability"},next:{title:"Working with XKF from Windows",permalink:"/docs/xks/developer-guide/wsl2"}},p=[{value:"Network Policies",id:"network-policies",children:[{value:"Examples",id:"examples",children:[{value:"Allow Internet Egress",id:"allow-internet-egress",children:[],level:4},{value:"Allow Ingress Nginx",id:"allow-ingress-nginx",children:[],level:4},{value:"Allow Cross Namespace",id:"allow-cross-namespace",children:[],level:4}],level:3},{value:"Debugging",id:"debugging",children:[],level:3}],level:2},{value:"Ingress",id:"ingress",children:[{value:"Public and Private Ingress",id:"public-and-private-ingress",children:[],level:3},{value:"External Routing",id:"external-routing",children:[],level:3},{value:"Rate Limiting",id:"rate-limiting",children:[],level:3},{value:"Nginx Configuration",id:"nginx-configuration",children:[],level:3},{value:"Debugging",id:"debugging-1",children:[],level:3}],level:2},{value:"Linkerd",id:"linkerd",children:[{value:"Get Started",id:"get-started",children:[],level:3},{value:"FAQ",id:"faq",children:[{value:"Is all network traffic encrypted?",id:"is-all-network-traffic-encrypted",children:[],level:4},{value:"What overhead can I expect?",id:"what-overhead-can-i-expect",children:[],level:4}],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"network-policies"},"Network Policies"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"Network Policies")," in Kubernetes add the ability to allow and deny network traffic from specific pods and namespaces. Both\negress traffic from a Pod and ingress traffic to a Pod can be controlled. In a vanilla Kubernetes cluster all traffic between all namespaces is allowed by default. This is not the case in XKS. Out of\nthe box in XKS all tenant namespaces have a default deny rule added to them. This default deny rule will block any traffic going between namespaces. It will deny both ingress traffic from other\nnamespaces and egress traffic to other namespaces. All traffic within the namespace between Pods is allowed. The reasoning behind this setup is that Pods should not have more network access than they\nrequire to function, as it reduces the blast radius in case of an exploit."),(0,i.kt)("img",{alt:"Default Deny Network Policy",src:(0,o.Z)("img/assets/xks/developer-guide/network-policy-default-deny.jpg")}),(0,i.kt)("p",null,"The default deny Network Policy contains an exception for traffic destined to the cluster's DNS service. Without this exception DNS resolution would not work. The Pod selector in the Network Policy is\nempty, this means that the Network Policy will apply for all Pods in the namespace."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-deny\n  namespace: tenant\nspec:\n  egress:\n    - ports:\n        - port: 53\n          protocol: UDP\n      to:\n        - namespaceSelector: {}\n          podSelector:\n            matchLabels:\n              k8s-app: kube-dns\n    - to:\n        - podSelector: {}\n  ingress:\n    - from:\n        - podSelector: {}\n  podSelector: {}\n  policyTypes:\n    - Ingress\n    - Egress\n")),(0,i.kt)("p",null,"There may come a time when you have to create new Network Policies to allow specific Pods traffic, as the default can be pretty restrictive. A common situation when this is required is when a Pod needs to\ncommunicate with the public Internet, or communicate with other Pods in other tenant namespaces. When creating new Network Policies make sure that you do not open up more than is actually required. A good source of example\nNetwork Policies is the Github repository ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ahmetb/kubernetes-network-policy-recipes"},"kubernetes-network-policy-recipes"),". It contains a lot of good examples with diagrams and\ndescriptions. The examples found there contain the most common use cases to make things simpler for you."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A helpful tool when create new Network Policies is the ",(0,i.kt)("a",{parentName:"p",href:"https://editor.cilium.io/"},"Cilium Network Policy Editor"),".")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("h4",{id:"allow-internet-egress"},"Allow Internet Egress"),(0,i.kt)("p",null,"A common scenario is opening up traffic to the public Internet. A current limitation with Network Policies today is that it is not possible to create egress rules based on DNS names. This means that\nthe simplest solution is to allow traffic to all public IPs, as trying to resolve the DNS to an IP would only work short term."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-internet-egress\nspec:\n  egress:\n    - to:\n        - ipBlock:\n            cidr: 0.0.0.0/0\n  podSelector:\n    matchLabels:\n      app: foo\n  policyTypes:\n    - Egress\n")),(0,i.kt)("h4",{id:"allow-ingress-nginx"},"Allow Ingress Nginx"),(0,i.kt)("p",null,"Traffic from the ingress controller has to be explicitly allowed as no traffic is allowed from outside the namespace by default. This can be considered a fail-safe to protect against accidental\nIngress creation, where an application is exposed to the Internet when that was not the intent. It is enough to allow ingress from the ingress controller even if the traffic actually originates from\noutside the cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-ingress-controller\nspec:\n  ingress:\n    - from:\n        - namespaceSelector:\n            matchLabels:\n              name: ingress-nginx\n  podSelector:\n    matchLabels:\n      app: foo\n  policyTypes:\n    - Ingress\n")),(0,i.kt)("h4",{id:"allow-cross-namespace"},"Allow Cross Namespace"),(0,i.kt)("p",null,"When allowing network traffic across tenant namespaces considerations have to be made for the default deny Network Policy in both namespaces. An allow rule has to be created to allow the source\nnamespace (the side initating the connection) to send traffic to the destination namespace. The destination namespace has to allow traffic from the source namespace. The first Network Policy should be used\nin the source namespace and the second should be used in the destination namespace."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-egress-to-destination\n  namespace: source\nspec:\n  egress:\n    - to:\n        - namespaceSelector:\n            matchLabels:\n              name: destination\n          podSelector:\n            matchLabels:\n              app: bar\n  podSelector:\n    matchLabels:\n      app: foo\n  policyTypes:\n    - Egress\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-ingress-from-source\n  namespace: destination\nspec:\n  ingress:\n    - from:\n        - namespaceSelector:\n            matchLabels:\n              name: source\n          podSelector:\n            matchLabels:\n              app: foo\n  podSelector:\n    matchLabels:\n      app: bar\n  policyTypes:\n    - Ingress\n")),(0,i.kt)("h3",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"TBD"),(0,i.kt)("h2",{id:"ingress"},"Ingress"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress")," in Kubernetes is used to allow network traffic from the outside the cluster to reach Pods inside the cluster. Ingress works\nas a layer on top of Kubernetes Services by exposing the Service with a hostname. All Ingress traffic is Layer 7 routed, meaning that traffic is routed based on the host header in the HTTP request. This\nalso means that Ingress only works with HTTP traffic. Doing it this way means that only a single load balancer is required reducing cost compared to running multiple load balancers, one per Ingress."),(0,i.kt)("img",{alt:"Ingress Overview",src:(0,o.Z)("img/assets/xks/developer-guide/ingress-overview.jpg")}),(0,i.kt)("p",null,"XKS comes with everything pre-configured for Ingress to work. The cluster will either have a single ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/"},"Nginx Ingress Controller")," which is exposed to the\npublic Internet or two controllers where one is public and one is private. On top of that the cluster is configured with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/external-dns"},"External DNS"),"(which creates\nDNS records) and ",(0,i.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/"},"Cert Manager")," (which deals with certificate creation and renewal). Together these three tools offer an automated solution where the complexity of DNS and\ncertificates are not handled by the application. The recommendation is to always enable TLS for all Ingress resources no matter how small the service is. Updating a certificate is\nquick and easy so there is no reason not to do this. Every XKS cluster comes with a preconfigured Cluster Issuer which will provision certificates from ",(0,i.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt"),"."),(0,i.kt)("p",null,"Start off by creating a Certificate resource for your Ingress. It is possible to have Cert Manager automatically create a Certificate when an Ingress resource is created. This however has the\ndownside that every Ingress resource will receive its own Certificate. Lets Encrypt has ",(0,i.kt)("a",{parentName:"p",href:"https://letsencrypt.org/docs/rate-limits/"},"rate limits")," for the same domain, if one were to create a\nCertificate per ingress that rate limit would be hit pretty quickly. For this reason it is better to create a shared Certificate per tenant namespace with multiple DNS names instead. Each DNS name will be\npresent in the Certificate so that it can be used for multiple Ingress resources. When the Certificate is provisioned it will be written to a Secret."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: cert-manager.io/v1\nkind: Certificate\nmetadata:\n  name: shared\n  namespace: tenant\nspec:\n  issuerRef:\n    group: cert-manager.io\n    kind: ClusterIssuer\n    name: letsencrypt\n  dnsNames:\n    - app-one.example.com\n    - app-two.example.com\n  secretName: shared-cert\n")),(0,i.kt)("p",null,"To complete the ingress configuration an Ingress resource has to be created. The Ingress resource defines the Service where the traffic should be routed to and the DNS name which should resolve to\nthat Service. An additional configuration is the TLS configuration which configures the certificate to use. Cert Manager writes the certificate data to a Secret which is configured in the Certificate\n",(0,i.kt)("inlineCode",{parentName:"p"},"secretName"),". That same Secret should be referenced in the TLS configuration. A DNS record will be automatically created when the Ingress is applied to the cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: app-one\n  namespace: tenant\nspec:\n  rules:\n    - host: app-one.example.com\n      http:\n        paths:\n          - path: /\n            backend:\n              service:\n                name: app-one\n                port:\n                  name: http\n  tls:\n    - hosts:\n        - app-one.example.com\n      secretName: shared-cert\n")),(0,i.kt)("h3",{id:"public-and-private-ingress"},"Public and Private Ingress"),(0,i.kt)("p",null,"By default an XKS cluster will deploy a single public Ingress controller. All Ingress resources will be routed with a public IP and therefore exposed to the public Internet. It is however also possible to\ncreate private Ingress resources which are only exposed through an IP that is private to the virtual network in which the Kubernetes cluster is deployed. This is an opt in feature\nas two load balancing services are needed. Making an Ingress private is simple when the private Ingress feature is enabled. All that is required is that the Ingress class has to be set\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx-private"),", this makes sure that the resource is only served through the private IP."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: app-one\n  namespace: tenant\nspec:\n  ingressClassName: nginx-private\n  rules:\n    - host: app-one.example.com\n      http:\n        paths:\n          - path: /\n            backend:\n              service:\n                name: app-one\n                port:\n                  name: http\n  tls:\n    - hosts:\n        - app-one.example.com\n      secretName: shared-cert\n")),(0,i.kt)("h3",{id:"external-routing"},"External Routing"),(0,i.kt)("p",null,"There is no requirement that the destination for an Ingress resource has to be served from within the cluster. It is possible to route Ingress traffic either to endpoints outside of the\ncloud provider or to another service that is only accessible from within the private network. Using the XKS Ingress instead of a separate solution has it's benefits in these situations,\nas DNS record creation and certificate management is already setup to work. A typical use case may be during a migration period when XKS and another solution may exist in parallel.\nAll traffic can enter through XKS but then be forwarded to the external destination. The service endpoints can be updated as applications are migrated to run inside XKS instead of outside."),(0,i.kt)("p",null,"A Service resource is required to configure the destination of the traffic. There are two options available in Kubernetes when directing traffic outside of the cluster. The first option is to\ncreate a Service of type ExternalName which specifies a host name which the Service should write to. When a request is made to the Service the given external name IP will be resolved and the\nrequest will be sent to that destination."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: to-external\nspec:\n  type: ExternalName\n  externalName: example.com\n")),(0,i.kt)("p",null,"The other option is to create a Service which routes to a static IP. This is implemented with a Serivce without an external name or label selector, then also creating an Endpoint for the Service.\nThis way the Service will only resolve to the static IP given, in this case the static IP is ",(0,i.kt)("inlineCode",{parentName:"p"},"1.2.3.4")," and the port is ",(0,i.kt)("inlineCode",{parentName:"p"},"443"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: to-external\nspec:\n  ports:\n    - protocol: TCP\n      port: 443\n---\napiVersion: v1\nkind: Endpoints\nmetadata:\n  name: to-external\nsubsets:\n  - addresses:\n      - ip: 1.2.3.4\n    ports:\n      - port: 443\n")),(0,i.kt)("p",null,"The Serivce resources only solve half the problem as they are only accessible within the cluster. They have to be exposed with an Ingress resource to solve the other half, so that on host name\ncan be translated to another. The example assume that all traffic is expected to be HTTPS on both ends. The Ingress below exposes the Service named ",(0,i.kt)("inlineCode",{parentName:"p"},"to-external")," on the port ",(0,i.kt)("inlineCode",{parentName:"p"},"443")," with the host\nname ",(0,i.kt)("inlineCode",{parentName:"p"},"forward.xenit.io"),". It also assumes that a TLS Secret exists which is valid for the Ingress host name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: forward-traffic\n  annotations:\n    nginx.ingress.kubernetes.io/backend-protocol: "HTTPS"\n    nginx.ingress.kubernetes.io/upstream-vhost: "forward.xenit.io"\nspec:\n  rules:\n    - host: forward.xenit.io\n      http:\n        paths:\n          - pathType: Prefix\n            path: /\n            backend:\n              service:\n                name: forward-traffic\n                port:\n                  number: 443\n  tls:\n    - hosts:\n        - forward.xenit.io\n      secretName: to-external\n')),(0,i.kt)("p",null,'The only major changes with the Ingress compared to a "normal" Ingress resource are the annotations. The annotations ',(0,i.kt)("inlineCode",{parentName:"p"},'nginx.ingress.kubernetes.io/backend-protocol: "HTTPS"')," makes sure that the traffic\non the backend is sent as HTTPS traffic. Without this annotation there is a risk that the backend traffic could be transported as HTTP. The second annotations\n",(0,i.kt)("inlineCode",{parentName:"p"},'nginx.ingress.kubernetes.io/upstream-vhost: "forward.xenit.io"')," specifies the host header set in the upstream request. This annotation is not necessarily required for all external endpoints, but a lot\nof endpoints resolve their routing through layer 7 which means that the host header has to be set properly. A good practice is to set the annotation value to be the same as the external name."),(0,i.kt)("p",null,"Another use case is to rewrite the request paths. This is possible through the ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx.ingress.kubernetes.io/rewrite-target")," which can allow for complex path modification logic. For details how to\nuse the annotation refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/examples/rewrite/#rewrite-target"},"documentation"),"."),(0,i.kt)("h3",{id:"rate-limiting"},"Rate Limiting"),(0,i.kt)("p",null,"At times it is beneficial to rate limit the amount of requests that reach an internal application from the Internet. Rate limiting can be configured to act based on different parameters. Rate limiting\nis configured for an Ingress through the use of annotations. The annotations ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx.ingress.kubernetes.io/limit-connections")," limits the amount of concurrent connections allowed from a single source IP.\nThe other annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx.ingress.kubernetes.io/limit-rps")," sets a limit for the amount of requests per second that can be sent from a single source IP. These two strategies do not work together, you\nhave to decide on one or the other. Below is an example of a Ingress which limits the amount of concurrent connections."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: example\n  annotations:\n    nginx.ingress.kubernetes.io/limit-connections: 10\nspec:\n  rules:\n    - host: example.com\n      http:\n        paths:\n          - path: /\n            backend:\n              service:\n                name: example\n                port:\n                  name: http\n  tls:\n    - hosts:\n        - example.com\n      secretName: cert\n")),(0,i.kt)("p",null,"For more information refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#rate-limiting"},"official documentation"),"."),(0,i.kt)("h3",{id:"nginx-configuration"},"Nginx Configuration"),(0,i.kt)("p",null,"It is useful to be aware of ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#annotations"},"annotation configuration")," in the Nginx ingress controller.\nSometimes a specific Ingress requires custom behavior that is not default in the ingress controller, this behavior can be customized with the help of annotations for a specific Ingress resource.\nFor example, changing the client body buffer size may be useful if the header size in the expected requests is larger than the buffer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: foo\n  namespace: bar\n  annotations:\n    nginx.ingress.kubernetes.io/client-body-buffer-size: 1M\nspec:\n  rules:\n    - host: foo.dev.example.com\n      http:\n        paths:\n          - backend:\n              serviceName: foo\n              servicePort: http\n  tls:\n    - hosts:\n        - foo.dev.example.com\n")),(0,i.kt)("h3",{id:"debugging-1"},"Debugging"),(0,i.kt)("p",null,"Common networking problems include forgetting to set up egress or ingress rules that apply for your pods - or setting them up and then having the requirements change, which then causes connection errors."),(0,i.kt)("p",null,"Remember that you can inspect your network policies with ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get networkpolicies"),". If you cannot see your policy there, verify if it is actually present in your ",(0,i.kt)("inlineCode",{parentName:"p"},"kustomization.yaml")," file."),(0,i.kt)("h2",{id:"linkerd"},"Linkerd"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://linkerd.io/"},"Linkerd")," is an optional service mesh that can be added to XKS. The component is opt-in as it adds a certain amount of overhead,\nso unless it has been requested Linkerd will not be present in XKS. A service mesh extends the networking functionality in a Kubernetes cluster. It is\nuseful when features such as end-to-end encryption or GRPC load balancing is required. Linkerd will automatically handle TCP loadbalancing so when\nGRPC is used Linkerd will detect this and loadbalance between instances of GRPC servers."),(0,i.kt)("p",null,"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://linkerd.io/2.10/overview/"},"official documentation")," for documentation that may be missing from this page."),(0,i.kt)("p",null,"Linkerd works by injecting a sidecar into every Pod which uses Linkerd. All network requests have to be sent through the sidecar which will then be\nresponsible for forwarding it. The sidecar will handle things like traffic encryption before sending the packets outside of the node."),(0,i.kt)("img",{alt:"Linkerd Overview",src:(0,o.Z)("img/assets/xks/developer-guide/linkerd-overview.jpg")}),(0,i.kt)("h3",{id:"get-started"},"Get Started"),(0,i.kt)("p",null,"To enable sidecar injection the Pod has to have the annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"linkerd.io/inject: enabled")," added to it. A common mistake when enabling Linkerd is\nthat the annotation is added to Deployment and not the Pod template, make sure that you do not do this as the sidecar will not be injected if\nyou do."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: linkerd-test\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: linkerd-test\n  template:\n    metadata:\n      annotations:\n        linkerd.io/inject: enabled\n      labels:\n        app: linkerd-test\n    spec:\n      containers:\n        - name: linkerd-test\n          image: alpine:latest\n          ports:\n            - containerPort: 8080\n              name: http\n              protocol: TCP\n")),(0,i.kt)("p",null,"Eventually a Pod should be created. An important detail is that there should be two containers in the Pod. One container should be the one defined in\nthe Deployment and the other one the Linkerd sidecar. This can be verified by getting the Pod's containers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get pods <POD_NAME> -o jsonpath="{.spec.containers[*].name}"\nlinkerd-test linkerd-proxy\n')),(0,i.kt)("p",null,"With the sidecar added all traffic going out of the container will automatically be proxied through the sidecar."),(0,i.kt)("h3",{id:"faq"},"FAQ"),(0,i.kt)("h4",{id:"is-all-network-traffic-encrypted"},"Is all network traffic encrypted?"),(0,i.kt)("p",null,"No, it depends on the traffic type and is something that should be verified rather than assumed. More information can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://linkerd.io/2.10/features/automatic-mtls/#"},"Linkerd documentation"),"."),(0,i.kt)("h4",{id:"what-overhead-can-i-expect"},"What overhead can I expect?"),(0,i.kt)("p",null,"Each Pod will at a minimum consume an additional 10 MB due to the extra sidecar, and the number can grow as traffic increases."))}u.isMDXComponent=!0}}]);