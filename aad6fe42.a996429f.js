(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return o}));var b=n(3),r=n(7),a=(n(0),n(116)),l={title:"OPA Gatekeeper",slug:"/terraform-modules/kubernetes/opa-gatekeeper",custom_edit_url:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/opa-gatekeeper/README.md"},c={unversionedId:"terraform-modules/kubernetes/opa-gatekeeper",id:"terraform-modules/kubernetes/opa-gatekeeper",isDocsHomePage:!1,title:"OPA Gatekeeper",description:"Adds opa-gatekeeper and gatekeeper-library to a Kubernetes clusters.",source:"@site/docs/terraform-modules/kubernetes/opa-gatekeeper.md",slug:"/terraform-modules/kubernetes/opa-gatekeeper",permalink:"/docs/terraform-modules/kubernetes/opa-gatekeeper",editUrl:"https://github.com/XenitAB/terraform-modules/edit/main/modules/kubernetes/opa-gatekeeper/README.md",version:"current",sidebar:"docs",previous:{title:"Grafana Loki",permalink:"/docs/terraform-modules/kubernetes/loki"},next:{title:"Velero",permalink:"/docs/terraform-modules/kubernetes/velero"}},i=[{value:"Requirements",id:"requirements",children:[]},{value:"Providers",id:"providers",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]}],s={rightToc:i};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(b.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Adds ",Object(a.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/open-policy-agent/gatekeeper"}),Object(a.b)("inlineCode",{parentName:"a"},"opa-gatekeeper"))," and ",Object(a.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/xenitab/gatekeeper-library"}),"gatekeeper-library")," to a Kubernetes clusters."),Object(a.b)("p",null,"Running the gatekeeper is a prerequirement for the library to work, as the library only adds different types of constraints that are used by gatekeeper.",Object(a.b)("br",{parentName:"p"}),"\n","Constraints are added through first creating a ",Object(a.b)("inlineCode",{parentName:"p"},"ConstraintTemplate")," and then adding a ",Object(a.b)("inlineCode",{parentName:"p"},"Constraint")," that enforces the template. The module constains a list of default",Object(a.b)("br",{parentName:"p"}),"\n","constraints in the ",Object(a.b)("inlineCode",{parentName:"p"},"default_constraints")," that are recomended to always be applied. These constraints are cloud agnostic and are either re-implemetnations of specific PSPs",Object(a.b)("br",{parentName:"p"}),"\n","or orginal constraints meant to enforce best practices. The default constraints will be added if you do not override this variable with either a list of different",Object(a.b)("br",{parentName:"p"}),"\n","constraints or an empty list. By default all namespaces expect those specified in the ",Object(a.b)("inlineCode",{parentName:"p"},"excludes")," namespaces will have the constraints enforced. What this means is that",Object(a.b)("br",{parentName:"p"}),"\n","if a resource does does comform to the constraints added by this module they will not be allowed to be created and will fail when applying."),Object(a.b)("p",null,"Constraints configuration are given in a specific object format that is compatible with the gatekeeper-library values format. The module makes sure that both templates",Object(a.b)("br",{parentName:"p"}),"\n","and the constraints are created. The example below would create a template with the kind of ",Object(a.b)("inlineCode",{parentName:"p"},"K8sPSPVolumeTypes")," which gatekeeper will create a CRD from, and a constraint",Object(a.b)("br",{parentName:"p"}),"\n","resource of kind ",Object(a.b)("inlineCode",{parentName:"p"},"K8sPSPVolumeTypes")," that enforces the rule."),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-hcl"}),'{\n  kind               = "K8sPSPVolumeTypes"\n  name               = "psp-volume-types"\n  enforcement_action = ""\n  match = {\n    kinds      = []\n    namespaces = []\n  }\n  parameters = {\n    volumes = ["configMap", "downwardAPI", "emptyDir", "persistentVolumeClaim", "secret", "projected"]\n  }\n}\n')),Object(a.b)("p",null,"Certain fields in the configuration object are required while others are not. The ",Object(a.b)("inlineCode",{parentName:"p"},"kind")," and ",Object(a.b)("inlineCode",{parentName:"p"},"name")," field are obviously required as they determine which template and constraint",Object(a.b)("br",{parentName:"p"}),"\n","that should be created. Other fiels such as ",Object(a.b)("inlineCode",{parentName:"p"},"enforcement_action"),", ",Object(a.b)("inlineCode",{parentName:"p"},"match.kinds"),", ",Object(a.b)("inlineCode",{parentName:"p"},"parameters")," do not always have to be set as they receive default values from the Helm chart.",Object(a.b)("br",{parentName:"p"}),"\n","Check the ",Object(a.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/XenitAB/gatekeeper-library/blob/master/charts/gatekeeper-library-constraints/generated/defaults.yaml"}),"defaults file")," in gatekeeper-library to see",Object(a.b)("br",{parentName:"p"}),"\n","what the default values are. It is reccomended to leave the ",Object(a.b)("inlineCode",{parentName:"p"},"match.kinds")," to the default value as most constraints act on specific resource types, and the default value is",Object(a.b)("br",{parentName:"p"}),"\n","set to right right kind. With the configuration above the following template and constraint will be created. Note the ",Object(a.b)("inlineCode",{parentName:"p"},"mathc.kinds")," field in the constraint resource."),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: templates.gatekeeper.sh/v1beta1\nkind: ConstraintTemplate\nmetadata:\n  name: k8spspvolumetypes\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sPSPVolumeTypes\n      validation:\n        openAPIV3Schema:\n          properties:\n            volumes:\n              items:\n                type: string\n              type: array\n  targets:\n  - target: admission.k8s.gatekeeper.sh\n    rego: {REGO}\n---\napiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sPSPVolumeTypes\nmetadata:\n  name: psp-volume-types\nspec:\n  enforcementAction: deny\n  match:\n    kinds:\n    - apiGroups:\n      - ""\n      kinds:\n      - Pod\n  parameters:\n    volumes:\n    - configMap\n    - downwardAPI\n    - emptyDir\n    - persistentVolumeClaim\n    - secret\n    - projected\n')),Object(a.b)("p",null,"New constraints have to be added to ",Object(a.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/xenitab/gatekeeper-library"}),"gatekeeper-library")," with a new version of the Helm chart. Then the Helm chart version",Object(a.b)("br",{parentName:"p"}),"\n","can be updated in the module, which enables use of the new constraints."),Object(a.b)("p",null,"The gatekeeper-library requires two Helm charts for things to work, one that first sets up ",Object(a.b)("inlineCode",{parentName:"p"},"ConstraintTemplate")," and after that one that creates the ",Object(a.b)("inlineCode",{parentName:"p"},"Constraint"),". This has",Object(a.b)("br",{parentName:"p"}),"\n","to be done as otherwise there would be a chicken and the egg problem with the CRDs created by the ",Object(a.b)("inlineCode",{parentName:"p"},"ConstraintTemplate"),". This behavior is not visibile outside of the module",Object(a.b)("br",{parentName:"p"}),"\n","as the same values are passed to both of the charts, there will never be a difference between the constraints created and the templates that exist."),Object(a.b)("h2",{id:"requirements"},"Requirements"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Version"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"terraform"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"0.13.5")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"helm"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.3.2")))),Object(a.b)("h2",{id:"providers"},"Providers"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Version"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"helm"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.3.2")))),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"additional","_","constraints"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Additional constraints that should be added"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(a.b)("pre",null,"list(object({",Object(a.b)("br",null),"    kind               = string",Object(a.b)("br",null),"    name               = string",Object(a.b)("br",null),"    enforcement_action = string",Object(a.b)("br",null),"    match = object({",Object(a.b)("br",null),"      kinds = list(object({",Object(a.b)("br",null),"        apiGroups = list(string)",Object(a.b)("br",null),"        kinds     = list(string)",Object(a.b)("br",null),"      }))",Object(a.b)("br",null),"      namespaces = list(string)",Object(a.b)("br",null),"    })",Object(a.b)("br",null),"    parameters = any",Object(a.b)("br",null),"  }))")),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"[]")),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"no")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"default","_","constraints"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Default constraints that should be added"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(a.b)("pre",null,"list(object({",Object(a.b)("br",null),"    kind               = string",Object(a.b)("br",null),"    name               = string",Object(a.b)("br",null),"    enforcement_action = string",Object(a.b)("br",null),"    match = object({",Object(a.b)("br",null),"      kinds = list(object({",Object(a.b)("br",null),"        apiGroups = list(string)",Object(a.b)("br",null),"        kinds     = list(string)",Object(a.b)("br",null),"      }))",Object(a.b)("br",null),"      namespaces = list(string)",Object(a.b)("br",null),"    })",Object(a.b)("br",null),"    parameters = any",Object(a.b)("br",null),"  }))")),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(a.b)("pre",null,"[",Object(a.b)("br",null),"  {",Object(a.b)("br",null),'    "enforcement_action": "",',Object(a.b)("br",null),'    "kind": "K8sPSPAllowPrivilegeEscalationContainer",',Object(a.b)("br",null),'    "match": {',Object(a.b)("br",null),'      "kinds": [],',Object(a.b)("br",null),'      "namespaces": []',Object(a.b)("br",null),"    },",Object(a.b)("br",null),'    "name": "psp-allow-privilege-escalation-container",',Object(a.b)("br",null),'    "parameters": {}',Object(a.b)("br",null),"  },",Object(a.b)("br",null),"  {",Object(a.b)("br",null),'    "enforcement_action": "",',Object(a.b)("br",null),'    "kind": "K8sPSPHostNamespace",',Object(a.b)("br",null),'    "match": {',Object(a.b)("br",null),'      "kinds": [],',Object(a.b)("br",null),'      "namespaces": []',Object(a.b)("br",null),"    },",Object(a.b)("br",null),'    "name": "psp-host-namespace",',Object(a.b)("br",null),'    "parameters": {}',Object(a.b)("br",null),"  },",Object(a.b)("br",null),"  {",Object(a.b)("br",null),'    "enforcement_action": "",',Object(a.b)("br",null),'    "kind": "K8sPSPHostNetworkingPorts",',Object(a.b)("br",null),'    "match": {',Object(a.b)("br",null),'      "kinds": [],',Object(a.b)("br",null),'      "namespaces": []',Object(a.b)("br",null),"    },",Object(a.b)("br",null),'    "name": "psp-host-network-ports",',Object(a.b)("br",null),'    "parameters": {}',Object(a.b)("br",null),"  },",Object(a.b)("br",null),"  {",Object(a.b)("br",null),'    "enforcement_action": "",',Object(a.b)("br",null),'    "kind": "K8sPSPFlexVolumes",',Object(a.b)("br",null),'    "match": {',Object(a.b)("br",null),'      "kinds": [],',Object(a.b)("br",null),'      "namespaces": []',Object(a.b)("br",null),"    },",Object(a.b)("br",null),'    "name": "psp-flexvolume-drivers",',Object(a.b)("br",null),'    "parameters": {}',Object(a.b)("br",null),"  },",Object(a.b)("br",null),"  {",Object(a.b)("br",null),'    "enforcement_action": "",',Object(a.b)("br",null),'    "kind": "K8sPSPPrivilegedContainer",',Object(a.b)("br",null),'    "match": {',Object(a.b)("br",null),'      "kinds": [],',Object(a.b)("br",null),'      "namespaces": []',Object(a.b)("br",null),"    },",Object(a.b)("br",null),'    "name": "psp-privileged-container",',Object(a.b)("br",null),'    "parameters": {}',Object(a.b)("br",null),"  },",Object(a.b)("br",null),"  {",Object(a.b)("br",null),'    "enforcement_action": "",',Object(a.b)("br",null),'    "kind": "K8sPSPProcMount",',Object(a.b)("br",null),'    "match": {',Object(a.b)("br",null),'      "kinds": [],',Object(a.b)("br",null),'      "namespaces": []',Object(a.b)("br",null),"    },",Object(a.b)("br",null),'    "name": "psp-proc-mount",',Object(a.b)("br",null),'    "parameters": {}',Object(a.b)("br",null),"  },",Object(a.b)("br",null),"  {",Object(a.b)("br",null),'    "enforcement_action": "",',Object(a.b)("br",null),'    "kind": "K8sPSPReadOnlyRootFilesystem",',Object(a.b)("br",null),'    "match": {',Object(a.b)("br",null),'      "kinds": [],',Object(a.b)("br",null),'      "namespaces": []',Object(a.b)("br",null),"    },",Object(a.b)("br",null),'    "name": "psp-readonlyrootfilesystem",',Object(a.b)("br",null),'    "parameters": {}',Object(a.b)("br",null),"  },",Object(a.b)("br",null),"  {",Object(a.b)("br",null),'    "enforcement_action": "",',Object(a.b)("br",null),'    "kind": "K8sPSPVolumeTypes",',Object(a.b)("br",null),'    "match": {',Object(a.b)("br",null),'      "kinds": [],',Object(a.b)("br",null),'      "namespaces": []',Object(a.b)("br",null),"    },",Object(a.b)("br",null),'    "name": "psp-volume-types",',Object(a.b)("br",null),'    "parameters": {',Object(a.b)("br",null),'      "volumes": ',"[",Object(a.b)("br",null),'        "configMap",',Object(a.b)("br",null),'        "downwardAPI",',Object(a.b)("br",null),'        "emptyDir",',Object(a.b)("br",null),'        "persistentVolumeClaim",',Object(a.b)("br",null),'        "secret",',Object(a.b)("br",null),'        "projected",',Object(a.b)("br",null),'        "csi"',Object(a.b)("br",null),"      ]",Object(a.b)("br",null),"    }",Object(a.b)("br",null),"  },",Object(a.b)("br",null),"  {",Object(a.b)("br",null),'    "enforcement_action": "",',Object(a.b)("br",null),'    "kind": "K8sPSPCapabilities",',Object(a.b)("br",null),'    "match": {',Object(a.b)("br",null),'      "kinds": [],',Object(a.b)("br",null),'      "namespaces": []',Object(a.b)("br",null),"    },",Object(a.b)("br",null),'    "name": "psp-capabilities",',Object(a.b)("br",null),'    "parameters": {',Object(a.b)("br",null),'      "allowedCapabilities": ',"[",Object(a.b)("br",null),'        ""',Object(a.b)("br",null),"      ]",",",Object(a.b)("br",null),'      "requiredDropCapabilities": ',"[",Object(a.b)("br",null),'        "NET_RAW"',Object(a.b)("br",null),"      ]",Object(a.b)("br",null),"    }",Object(a.b)("br",null),"  },",Object(a.b)("br",null),"  {",Object(a.b)("br",null),'    "enforcement_action": "",',Object(a.b)("br",null),'    "kind": "K8sBlockNodePort",',Object(a.b)("br",null),'    "match": {',Object(a.b)("br",null),'      "kinds": [],',Object(a.b)("br",null),'      "namespaces": []',Object(a.b)("br",null),"    },",Object(a.b)("br",null),'    "name": "block-node-port",',Object(a.b)("br",null),'    "parameters": {}',Object(a.b)("br",null),"  },",Object(a.b)("br",null),"  {",Object(a.b)("br",null),'    "enforcement_action": "dryrun",',Object(a.b)("br",null),'    "kind": "K8sRequiredProbes",',Object(a.b)("br",null),'    "match": {',Object(a.b)("br",null),'      "kinds": [],',Object(a.b)("br",null),'      "namespaces": []',Object(a.b)("br",null),"    },",Object(a.b)("br",null),'    "name": "required-probes",',Object(a.b)("br",null),'    "parameters": {',Object(a.b)("br",null),'      "probeTypes": ',"[",Object(a.b)("br",null),'        "tcpSocket",',Object(a.b)("br",null),'        "httpGet",',Object(a.b)("br",null),'        "exec"',Object(a.b)("br",null),"      ]",",",Object(a.b)("br",null),'      "probes": ',"[",Object(a.b)("br",null),'        "readinessProbe"',Object(a.b)("br",null),"      ]",Object(a.b)("br",null),"    }",Object(a.b)("br",null),"  },",Object(a.b)("br",null),"  {",Object(a.b)("br",null),'    "enforcement_action": "",',Object(a.b)("br",null),'    "kind": "K8sPodPriorityClass",',Object(a.b)("br",null),'    "match": {',Object(a.b)("br",null),'      "kinds": [],',Object(a.b)("br",null),'      "namespaces": []',Object(a.b)("br",null),"    },",Object(a.b)("br",null),'    "name": "pod-priority-class",',Object(a.b)("br",null),'    "parameters": {}',Object(a.b)("br",null),"  },",Object(a.b)("br",null),"  {",Object(a.b)("br",null),'    "enforcement_action": "",',Object(a.b)("br",null),'    "kind": "K8sExternalIPs",',Object(a.b)("br",null),'    "match": {',Object(a.b)("br",null),'      "kinds": [],',Object(a.b)("br",null),'      "namespaces": []',Object(a.b)("br",null),"    },",Object(a.b)("br",null),'    "name": "external-ips",',Object(a.b)("br",null),'    "parameters": {}',Object(a.b)("br",null),"  }",Object(a.b)("br",null),"]")),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"no")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"exclude"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Namespaces to opt out of constraints"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(a.b)("pre",null,"list(object({",Object(a.b)("br",null),"    excluded_namespaces = list(string)",Object(a.b)("br",null),"    processes           = list(string)",Object(a.b)("br",null),"  }))")),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(a.b)("pre",null,"[",Object(a.b)("br",null),"  {",Object(a.b)("br",null),'    "excluded_namespaces": ',"[",Object(a.b)("br",null),'      "kube-system",',Object(a.b)("br",null),'      "gatekeeper-system"',Object(a.b)("br",null),"    ]",",",Object(a.b)("br",null),'    "processes": ',"[",Object(a.b)("br",null),'      "*"',Object(a.b)("br",null),"    ]",Object(a.b)("br",null),"  }",Object(a.b)("br",null),"]")),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"no")))),Object(a.b)("h2",{id:"outputs"},"Outputs"),Object(a.b)("p",null,"No output."))}o.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var b=n(0),r=n.n(b);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,b)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,b,r=function(e,t){if(null==e)return{};var n,b,r={},a=Object.keys(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),o=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=o(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,b=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=o(n),O=b,j=u["".concat(l,".").concat(O)]||u[O]||p[O]||a;return n?r.a.createElement(j,c(c({ref:t},s),{},{components:n})):r.a.createElement(j,c({ref:t},s))}));function j(e,t){var n=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var a=n.length,l=new Array(a);l[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:b,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);