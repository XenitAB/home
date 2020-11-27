(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,O=m["".concat(b,".").concat(u)]||m[u]||d[u]||l;return a?n.a.createElement(O,c(c({ref:t},i),{},{components:a})):n.a.createElement(O,c({ref:t},i))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,b=new Array(l);b[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var i=2;i<l;i++)b[i]=a[i];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},143:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/terraform-architecture-c640744bb489e813c3d841591a0ec6c0.jpg"},96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),l=(a(0),a(100)),b={title:"Terraform",slug:"/azure-devops-templates/terraform",custom_edit_url:"https://github.com/XenitAB/azure-devops-templates/edit/main/terraform/README.md"},c={unversionedId:"azure-devops-templates/terraform",id:"azure-devops-templates/terraform",isDocsHomePage:!1,title:"Terraform",description:"The Terraform templates are used to run Terraform in a dev->qa->prod environment promotion flow.",source:"@site/docs/azure-devops-templates/terraform.md",slug:"/azure-devops-templates/terraform",permalink:"/docs/azure-devops-templates/terraform",editUrl:"https://github.com/XenitAB/azure-devops-templates/edit/main/terraform/README.md",version:"current",sidebar:"docs",previous:{title:"packer",permalink:"/docs/azure-devops-templates/packer"}},o=[{value:"Architecture",id:"architecture",children:[]},{value:"Template Format",id:"template-format",children:[]},{value:"Plan",id:"plan",children:[]},{value:"Apply",id:"apply",children:[]},{value:"Examples",id:"examples",children:[]}],i={rightToc:o};function p(e){var t=e.components,b=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,b,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The Terraform templates are used to run Terraform in a ",Object(l.b)("inlineCode",{parentName:"p"},"dev->qa->prod")," environment promotion flow."),Object(l.b)("h2",{id:"architecture"},"Architecture"),Object(l.b)("p",null,Object(l.b)("img",{alt:"terraform-architecture",src:a(143).default})),Object(l.b)("h2",{id:"template-format"},"Template Format"),Object(l.b)("p",null,"Parameter names that end with  ",Object(l.b)("inlineCode",{parentName:"p"},"Template")," will be templated before they are used.  They are templted with the ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/process/templates?view=azure-devops#format"}),"format command"),".\nThe format command is passed the environment name, which can be placed in the string."),Object(l.b)("h2",{id:"plan"},"Plan"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"poolNameTemplate"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'""')),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Name of pool to use in template format.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"sourceBranch"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"refs/heads/master"')),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Source branch to limit image builds to.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"terraformLint.enable"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Enable running Terraform lint step.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"terraformLint.ignoreRuleViolations"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Continues if any Terraform lint violations occur.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"binaries.tflint.tag"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"v0.20.3")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Version of tflint to download.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"binaries.tflint.sha"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"e993129a256a8c4303bf883e973a922f63160b6e8b7ab0bb4d33bb0f87b00db2")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"SHA sum to verify downloaded tflint binary with.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"environments"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"[{name: dev}, {name: qa}, {name: prod}]")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Environments that should be deployed to.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"azureSubscriptionTemplate"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'""')),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Name of Azure subscription in template format.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"terraformVersion"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0.13.4")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Version of Terraform to use.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"terraformFolder"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'""')),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Path to Terraform directory.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"opaBlastRadius"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"50")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Highest allowable blast radius when running plan.")))),Object(l.b)("h2",{id:"apply"},"Apply"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"poolNameTemplate"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'""')),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Name of pool to use in template format.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"sourceBranch"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"refs/heads/master"')),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Source branch to limit image builds to.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"azureSubscriptionTemplate"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'""')),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Name of Azure subscription in template format.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"terraformVersion"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0.13.4")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Version of Terraform to use.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"terraformFolder"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'""')),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Path to Terraform directory.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"environments"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"[{name: dev, deployTags: false}, {name: qa, deployTags: true}, {name: prod, deployTags: true}]")),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Environments that should be deployed to.")))),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'name: $(Build.BuildId)\n\ntrigger:\n  batch: true\n  branches:\n    include:\n      - master\n  paths:\n    include:\n      - TF\n\nresources:\n  repositories:\n    - repository: templates\n      type: git\n      name: PROJ/azure-devops-templates\n      ref: resf/tags/2020.11.0\n\nstages:\n  - template: terraform/plan/main.yaml@templates\n    parameters:\n      azureSubscriptionTemplate: "SUB"\n      poolNameTemplate: "POOL"\n      terraformFolder: "TF"\n  - template: terraform/apply/main.yaml@templates\n    parameters:\n      azureSubscriptionTemplate: "SUB"\n      poolNameTemplate: "POOL"\n      terraformFolder: "TF"\n')))}p.isMDXComponent=!0}}]);