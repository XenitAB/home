(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(140)),o=n(142),c={id:"linkerd",title:"Linkerd"},d={unversionedId:"xks/developer-guide/linkerd",id:"xks/developer-guide/linkerd",isDocsHomePage:!1,title:"Linkerd",description:"Linkerd is an optional service mesh that can be added to XKS. The component is opt-in as it adds a certain amount of overhead,",source:"@site/docs/xks/developer-guide/linkerd.md",slug:"/xks/developer-guide/linkerd",permalink:"/docs/xks/developer-guide/linkerd",editUrl:"https://github.com/xenitab/xenitab.github.io/edit/main/docs/xks/developer-guide/linkerd.md",version:"current",sidebar:"docs",previous:{title:"Security",permalink:"/docs/xks/developer-guide/security"},next:{title:"Flux",permalink:"/docs/xks/developer-guide/flux"}},l=[{value:"Get Started",id:"get-started",children:[]},{value:"FAQ",id:"faq",children:[{value:"Is all network traffic encrypted?",id:"is-all-network-traffic-encrypted",children:[]},{value:"What overhead can I expect?",id:"what-overhead-can-i-expect",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://linkerd.io/"}),"Linkerd")," is an optional service mesh that can be added to XKS. The component is opt-in as it adds a certain amount of overhead,\nso unless it has bee done Linkerd will not be present in XKS. A service mesh extends the networking functionality in a Kubernetes cluster. It is\nuseful when features such as end to end encryption or GRPC load balancing is required. Linkerd will automatically handle TCP loadbalancing so when\nGRPC is used Linkerd will detect this and loadbalance between instances of GRPC servers."),Object(a.b)("p",null,"Refer to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://linkerd.io/2.10/overview/"}),"oficial documentation")," for documentation that may be missing from this page."),Object(a.b)("p",null,"Linkerd works by injecting a sidecar into every Pod which uses Linkerd. All network requests have to be sent through the sidecar which will then be\nresponsible with forwarding it. The sidecar will hanlde things like traffic encryption before sending the packets outside of the node."),Object(a.b)("img",{alt:"Linkerd Overview",src:Object(o.a)("img/assets/xks/developer-guide/linkerd-overview.drawio.jpeg")}),Object(a.b)("h2",{id:"get-started"},"Get Started"),Object(a.b)("p",null,"To enable sidecar injection the Pod has to have the annotation ",Object(a.b)("inlineCode",{parentName:"p"},"linkerd.io/inject: enabled")," added to it. A common misstake when enabling Linkerd is\nthat the annotation is added to Deployment and not the Pod template, make sure that you do not do this misstake as the sidecar will not be injected if\nyou do."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: linkerd-test\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: linkerd-test\n  template:\n    metadata:\n      annotations:\n        linkerd.io/inject: enabled\n      labels:\n        app: linkerd-test\n    spec:\n      containers:\n      - name: linkerd-test\n        image: alpine:latest\n        ports:\n        - containerPort: 8080\n          name: http\n          protocol: TCP\n")),Object(a.b)("p",null,"Eventually a Pod should be created. A important detail is that there should be two containers in the Pod. One container should be the one defined in\nthe Deployment and the other one the Linkerd sidecar. This can be verified by getting the Pods containers."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'$ kubectl get pods <POD_NAME> -o jsonpath="{.spec.containers[*].name}"\nlinkerd-test linkerd-proxy\n')),Object(a.b)("p",null,"With the sidecar added all traffic going out of the container will automatically be proxied through the sidecar."),Object(a.b)("h2",{id:"faq"},"FAQ"),Object(a.b)("h3",{id:"is-all-network-traffic-encrypted"},"Is all network traffic encrypted?"),Object(a.b)("p",null,"No it depends on the traffic type and is something that should be verified rather than assumed. More information can be found in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://linkerd.io/2.10/features/automatic-mtls/#"}),"Linkerd documentation"),"."),Object(a.b)("h3",{id:"what-overhead-can-i-expect"},"What overhead can I expect?"),Object(a.b)("p",null,"Each Pod will at minimum consume and additional 10 MB due to the extra sidecar and the number can grow as traffic increases."))}u.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,h=u["".concat(o,".").concat(b)]||u[b]||p[b]||a;return n?i.a.createElement(h,c(c({ref:t},l),{},{components:n})):i.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},141:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(21);t.default=function(){var e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},142:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(141),i=n(143);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,d=a.absolute,l=void 0!==d&&d;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},143:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))}}]);