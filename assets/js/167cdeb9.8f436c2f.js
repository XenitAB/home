"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[4232],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1717:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],s={id:"api-migrations",title:"API-migrations"},c=void 0,p={unversionedId:"xks/developer-guide/api-migrations",id:"xks/developer-guide/api-migrations",title:"API-migrations",description:"In kubernetes API:s gets continuously upgraded and deprecated.",source:"@site/docs/xks/developer-guide/api-migrations.md",sourceDirName:"xks/developer-guide",slug:"/xks/developer-guide/api-migrations",permalink:"/docs/xks/developer-guide/api-migrations",editUrl:"https://github.com/xenitab/xenitab.github.io/edit/main/docs/xks/developer-guide/api-migrations.md",tags:[],version:"current",frontMatter:{id:"api-migrations",title:"API-migrations"},sidebar:"docs",previous:{title:"Architecture and design",permalink:"/docs/xks/architecture-and-design"},next:{title:"Introduction",permalink:"/docs/xks/developer-guide/introduction"}},l=[{value:"SecretProviderClass v1alpha1 to v1",id:"secretproviderclass-v1alpha1-to-v1",children:[],level:2}],u={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In kubernetes API:s gets continuously upgraded and deprecated.\nAs a part of XKF we are in charge of upgrading the applications but it's up to you as a developer to upgrade the\nresources if you are utilizing them, but we will of course inform you when it's time and what is needed to be done."),(0,i.kt)("p",null,"This page is about sharing that information."),(0,i.kt)("h2",{id:"secretproviderclass-v1alpha1-to-v1"},"SecretProviderClass v1alpha1 to v1"),(0,i.kt)("p",null,"Moving SecretProviderClass apiVersion from ",(0,i.kt)("inlineCode",{parentName:"p"},"secrets-store.csi.x-k8s.io/v1alpha1")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"secrets-store.csi.x-k8s.io/v1"),"."),(0,i.kt)("p",null,"So the only thing you need to do is to change is the API version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: secrets-store.csi.x-k8s.io/v1alpha1\nkind: SecretProviderClass\nmetadata:\n  name: foo\nspec:\n  provider: <provider>\n  parameters:\n    objects: |\n      - objectName: "bar"\n        objectType: "<type>"\n      - objectName: "baz"\n        objectType: "<type>"\n')),(0,i.kt)("p",null,"to"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: secrets-store.csi.x-k8s.io/v1\nkind: SecretProviderClass\nmetadata:\n  name: foo\nspec:\n  provider: <provider>\n  parameters:\n    objects: |\n      - objectName: "bar"\n        objectType: "<type>"\n      - objectName: "baz"\n        objectType: "<type>"\n')))}d.isMDXComponent=!0}}]);