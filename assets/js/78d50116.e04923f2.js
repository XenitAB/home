"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[7417],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,b=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8486:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],u={id:"starboard",title:"Starboard"},l=void 0,s={unversionedId:"xks/developer-guide/starboard",id:"xks/developer-guide/starboard",isDocsHomePage:!1,title:"Starboard",description:"Starboard is used to continuously scan different Kubernetes resources.",source:"@site/docs/xks/developer-guide/starboard.md",sourceDirName:"xks/developer-guide",slug:"/xks/developer-guide/starboard",permalink:"/docs/xks/developer-guide/starboard",editUrl:"https://github.com/xenitab/xenitab.github.io/edit/main/docs/xks/developer-guide/starboard.md",tags:[],version:"current",frontMatter:{id:"starboard",title:"Starboard"},sidebar:"docs",previous:{title:"Reports",permalink:"/docs/xks/developer-guide/reports"},next:{title:"Working with XKF from Windows",permalink:"/docs/xks/developer-guide/wsl2"}},c=[{value:"Vulnerability reports",id:"vulnerability-reports",children:[],level:2}],p={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/starboard/"},"Starboard")," is used to continuously scan different Kubernetes resources.\nFor developers we will mostly focus on vulnerability reports."),(0,a.kt)("p",null,"Vulnerability reports use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/trivy/"},"Trivy")," to continuously scan your container image for CVE:s."),(0,a.kt)("h2",{id:"vulnerability-reports"},"Vulnerability reports"),(0,a.kt)("p",null,"To get specific data about your container image you need to login in to the Kubernetes cluster and look at the generated CRD:s."),(0,a.kt)("p",null,"To view all the vulnerability reports that you have in the current namespace:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get vulnerabilityreports\n")),(0,a.kt)("p",null,"To get a specific vulnerability report just run a describe on the object in current namespace."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl describe vulnerabilityreports.aquasecurity.github.io <the-specific-report>\n")),(0,a.kt)("p",null,"For more specific questions around Starboard we recommend reading the ",(0,a.kt)("a",{parentName:"p",href:"https://aquasecurity.github.io/starboard/latest/faq"},"official documentation"),"."))}d.isMDXComponent=!0}}]);