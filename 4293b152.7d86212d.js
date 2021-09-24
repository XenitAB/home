(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{140:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),p=n,b=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return r?a.a.createElement(b,l(l({ref:t},u),{},{components:r})):a.a.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},82:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(140)),i={title:"Contributing",slug:"/terraform-modules/CONTRIBUTING",custom_edit_url:"https://github.com/XenitAB/terraform-modules/edit/main/CONTRIBUTING.md"},l={unversionedId:"terraform-modules/CONTRIBUTING",id:"terraform-modules/CONTRIBUTING",isDocsHomePage:!1,title:"Contributing",description:"This guide will help you get started contributing to this repo, with instructions to setup your",source:"@site/docs/terraform-modules/CONTRIBUTING.md",slug:"/terraform-modules/CONTRIBUTING",permalink:"/docs/terraform-modules/CONTRIBUTING",editUrl:"https://github.com/XenitAB/terraform-modules/edit/main/CONTRIBUTING.md",version:"current",sidebar:"docs",previous:{title:"Azure DevOps agents",permalink:"/docs/xks/operator-guide/azure-devops-agents"},next:{title:"Xenit Terraform modules",permalink:"/docs/terraform-modules"}},c=[{value:"Setup",id:"setup",children:[]},{value:"Development",id:"development",children:[{value:"Creating a Module",id:"creating-a-module",children:[]}]}],u={rightToc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This guide will help you get started contributing to this repo, with instructions to setup your\ndevelopment environment and tips when developing."),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,"There are some dependencies that are required to be able to run the linters, checks and formatting.\nThe following tools are required to be installed on your local development machine to run the validation.\nA tip is to use your favorite flavor of package manager like ",Object(o.b)("inlineCode",{parentName:"p"},"brew")," or ",Object(o.b)("inlineCode",{parentName:"p"},"pacman")," to make the\nprocess simpler."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.terraform.io/downloads.html"}),"terraform")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/terraform-linters/tflint"}),"tflint")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/terraform-docs/terraform-docs"}),"terraform-docs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tfsec/tfsec"}),"tfsec"))),Object(o.b)("p",null,"If you are using macOS you will need to install a newer version of make, as the one included by default\nis soon legally allowed to drink in Germany. The new make version will not remove the existing one\nbut instead install it as the command ",Object(o.b)("inlineCode",{parentName:"p"},"gmake"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"brew install make\n")),Object(o.b)("p",null,"Install tflint azure plugin"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"ARCH=\"linux\" # or 'darwin' if macOS\nmkdir -p $HOME/.tflint.d/plugins\ncd $HOME/.tflint.d/plugins\nwget https://github.com/terraform-linters/tflint-ruleset-azurerm/releases/download/v0.6.0/tflint-ruleset-azurerm_${ARCH}_amd64.zip\nunzip tflint-ruleset-azurerm_${ARCH}_amd64.zip\nrm tflint-ruleset-azurerm_${ARCH}_amd64.zip\n")),Object(o.b)("h2",{id:"development"},"Development"),Object(o.b)("p",null,"Eeach PR has a set of checks that are required to pass before it can be merged. This is to ensure consitency and stability in each\nof the modules. You should run through all the make recipes before creating a PR to make sure that all of your HCL is formatted\ncorrectly."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"make\n# or on macOS\ngmake\n")),Object(o.b)("h3",{id:"creating-a-module"},"Creating a Module"),Object(o.b)("p",null,"Creating a new module is simple but has some non-obvious requirements for all of the checks to pass. First create a new module\ndirectory in the 'modules' directory and in a fitting category directory. After the module is created a validation configuration\nneeds to be created for the module. In the 'validation' directory create a new directory with the same name and path as the module.\nInside there you should create a ",Object(o.b)("inlineCode",{parentName:"p"},"m\u0300ain.tf")," file which imports the module with a local path and passes dummy values for all of the\nrequired variables, so that it is possible to run ",Object(o.b)("inlineCode",{parentName:"p"},"terraform validate"),"."))}s.isMDXComponent=!0}}]);