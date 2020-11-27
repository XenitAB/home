(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),o=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),m=o(a),d=r,s=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return a?n.a.createElement(s,p(p({ref:t},i),{},{components:a})):n.a.createElement(s,p({ref:t},i))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=d;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<l;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(7),l=(a(0),a(100)),c={title:"packer",slug:"/azure-devops-templates/packer",custom_edit_url:"https://github.com/XenitAB/azure-devops-templates/edit/main/packer/README.md"},p={unversionedId:"azure-devops-templates/packer",id:"azure-devops-templates/packer",isDocsHomePage:!1,title:"packer",description:"The packer templates are meant to be used to build VM images in Azure.",source:"@site/docs/azure-devops-templates/packer.md",slug:"/azure-devops-templates/packer",permalink:"/docs/azure-devops-templates/packer",editUrl:"https://github.com/XenitAB/azure-devops-templates/edit/main/packer/README.md",version:"current",sidebar:"docs",previous:{title:"GitOps",permalink:"/docs/azure-devops-templates/gitops"},next:{title:"Terraform",permalink:"/docs/azure-devops-templates/terraform"}},b=[{value:"Template Format",id:"template-format",children:[]},{value:"Build",id:"build",children:[]},{value:"Examples",id:"examples",children:[]}],i={rightToc:b};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The packer templates are meant to be used to build VM images in Azure."),Object(l.b)("h2",{id:"template-format"},"Template Format"),Object(l.b)("p",null,"Parameter names that end with  ",Object(l.b)("inlineCode",{parentName:"p"},"Template")," will be templated before they are used.  They are templted with the ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/process/templates?view=azure-devops#format"}),"format command"),".\nThe format command is passed the environment name, which can be placed in the string."),Object(l.b)("h2",{id:"build"},"Build"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"poolNameTemplate"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'""')),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Pool name template.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"poolVmImage"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"ubuntu-18.04"')),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Pool vm image (only used if ",Object(l.b)("inlineCode",{parentName:"td"},"poolNameTemplate")," is empty)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"azureSubscriptionTemplate"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'""')),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Azure subscription name template.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resourceGroupTemplate"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'""')),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Azure resource group name template.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"packerTemplateRepo"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"https://github.com/XenitAB/cloud-automation.git"')),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GIT repository to use for packer template.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"packerTemplateRepoBranch"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"master"')),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GIT branch to use for packer template repository.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"packerTemplateFile"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'""')),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Location (inside of packerTemplateRepo) of the packer template.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"preBuild"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"[]")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Steps to run  before Docker build, takes a list of steps.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"postBuild"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"[]")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Steps to run  after Docker build, takes a list of steps.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"binaries.packer.tag"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1.6.5"')),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Packer binary version.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"binaries.packer.sha"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"a49f6408a50c220fe3f1a6192ea21134e2e8f31092c507614cd27ad4f913234b"')),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Packer binary sha.")))),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Build")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'name: $(Build.BuildId)\n\ntrigger: none\n\nresources:\n  repositories:\n    - repository: templates\n      type: git\n      name: XenitKubernetesService/azure-devops-templates\n      ref: refs/tags/2020.11.9\n\nstages:\n  - template: packer/main.yaml@templates\n    parameters:\n      poolNameTemplate: "xks-{0}"\n      azureSubscriptionTemplate: "azure-{0}-contributor"\n      resourceGroupTemplate: "rg-{0}-we-packer"\n      packerTemplateRepo: "https://github.com/XenitAB/cloud-automation.git"\n      packerTemplateRepoBranch: "2020.11.2"\n      packerTemplateFile: "azure/packer/azure-pipelines-agent/ubuntu1804.json"\n')))}o.isMDXComponent=!0}}]);