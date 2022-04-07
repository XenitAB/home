"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[9053],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=d(n),p=i,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||a;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3919:function(e,t,n){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return r}});var o=n(2263),i=n(3919);function a(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var a=void 0===o?{}:o,r=a.forcePrependBaseUrl,s=void 0!==r&&r,l=a.absolute,d=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return d?e+u:u}(a,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},2413:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=n(4996),s=["components"],l={id:"scheduling-scaling",title:"Scheduling and Scaling"},d=void 0,u={unversionedId:"xks/developer-guide/scheduling-scaling",id:"xks/developer-guide/scheduling-scaling",isDocsHomePage:!1,title:"Scheduling and Scaling",description:"The Kubernetes scheduler is responsible for assigning new Pods to Nodes. This functionality is a core component of Kubernetes. The Kuberetes Scheduler in its simplest form assigns Pods based on two main criteria.",source:"@site/docs/xks/developer-guide/scheduling-scaling.md",sourceDirName:"xks/developer-guide",slug:"/xks/developer-guide/scheduling-scaling",permalink:"/docs/xks/developer-guide/scheduling-scaling",editUrl:"https://github.com/xenitab/xenitab.github.io/edit/main/docs/xks/developer-guide/scheduling-scaling.md",tags:[],version:"current",frontMatter:{id:"scheduling-scaling",title:"Scheduling and Scaling"},sidebar:"docs",previous:{title:"Flux",permalink:"/docs/xks/developer-guide/ci-cd/flux"},next:{title:"Observability",permalink:"/docs/xks/developer-guide/observability"}},c=[{value:"Pod Resources",id:"pod-resources",children:[],level:2},{value:"Scheduling on Specific Nodes",id:"scheduling-on-specific-nodes",children:[],level:2},{value:"Affinity and Anti Affinity",id:"affinity-and-anti-affinity",children:[{value:"Nodes",id:"nodes",children:[],level:3},{value:"Pods",id:"pods",children:[],level:3}],level:2},{value:"Pod Disruption Budget",id:"pod-disruption-budget",children:[],level:2},{value:"Horizontal Pod Autoscaler",id:"horizontal-pod-autoscaler",children:[],level:2},{value:"Priority Class",id:"priority-class",children:[],level:2}],h={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Kubernetes scheduler is responsible for assigning new Pods to Nodes. This functionality is a core component of Kubernetes. The Kuberetes Scheduler in its simplest form assigns Pods based on two main criteria."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Filtering - Checks Nodes for available resources and if they meet the requirements of the Pod."),(0,a.kt)("li",{parentName:"ol"},"Scoring - Ranks the filtered Nodes and chooses the highest ranked one.")),(0,a.kt)("p",null,"Most Kubernetes users encounter the scheduler for the first time when creating either a Deployment or Pod. The scheduler has to decide which Node to assign the Pod to. In the case of a Deployment the replica count can be increased and decreased at a moment's notice by the user. When replica is changed for example from three to twenty the scheduler will have a lot of Pods all of a sudden to assign to Nodes. Having a deeper understanding of the Kubernetes scheduler will allow for efficient resource consumption and debugging any scheduling issues. This section will give an overview overscheduling and scaling features in Kubernetes and how they relate to each other."),(0,a.kt)("h2",{id:"pod-resources"},"Pod Resources"),(0,a.kt)("p",null,"Setting good ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"},"resource requests and limits")," for a container is an important component in helping the scheduler select the correct Node to schedule a Pod to. There are two types of resource configuration fields, and these are configured for each container in a Pod.\nThe resource request tells the scheduler how much of each resource each container in a Pod is expected to consume, though a Pod is allowed to consume more. The limit sets the maximum amount of resources each container in a Pod can consume. There are two main resource types that one should be aware of, CPU and memory.\nThe CPU resource is defined in CPU units where one CPU unit is the equivalent of one CPU core. Fractional units can also be requested, in either decimals like ",(0,a.kt)("inlineCode",{parentName:"p"},"0.1")," but also in terms of millicores where ",(0,a.kt)("inlineCode",{parentName:"p"},"100m")," would be the same amount. The memory resource is defined in whole integers with the quantity suffixes\n",(0,a.kt)("inlineCode",{parentName:"p"},"Ei, Pi, Ti, Gi, Mi, Ki"),"."),(0,a.kt)("p",null,"If you do not specify any resources for a container the default resource request and limit will be applied as shown below. These resources are low on purpose, both to minimize the effects of overprovisioning but also to make it obvious for XKF users that resources have not been specified. The keen-eyed may notice that\na CPU limit is not set by default, this is on purpose and the reasons for it will be discussed later."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"resources:\n  request:\n    cpu: 50m\n    memory: 32Mi\n  limits:\n    memory: 256Mi\n")),(0,a.kt)("p",null,"The scheduler will look at the cumulative resource requests across all containers in a Pod during the scheduling phase. The scheduler will exclude any Node which does not have capacity for the Pods resource request. Capacity is determined based on the total resources available in a Node minus the sum of all the\nresource requests of all Pods currently scheduled to the Node. A Pod may at times request more resource than any Node has capacity for, there are two possible outcomes for this situation. If the Pods resource request is less than a Nodes total available resources, a new Node will be added to the cluster. The Pod will\nhowever be considered unschedulable if the resource request exceeds the total resources available on a single node. In these cases either the resource request has to change or a new Node type has to be added to the cluster to cater to these needs."),(0,a.kt)("img",{alt:"Pod Scheduling",src:(0,r.Z)("img/assets/xks/developer-guide/pod-scheduling.jpg")}),(0,a.kt)("p",null,"It is possible to overprovision Node resources in cases where the resource request for each container is much larger that the actual resource consumption. Efficient resource allocation is a constant battle between requesting enough resources to avoid under allocation while not\nrequesting too much which would result in overallocation. The easiest way to think about resources consumption and availability is to imaging the capacity as a glass, as more resources are consumed water is added to the glass. If the consumption increase does not stop the glass will eventually overfill."),(0,a.kt)("img",{alt:"Pod Scheduling",src:(0,r.Z)("img/assets/xks/developer-guide/pod-resource-request.jpg")}),(0,a.kt)("p",null,"The resource limit defined for a Pod has no affect on the scheduling of a Pod. Limits instead comes into play for a Pod during runtime. Exceeding the resource limit for CPU and memory will have\ndifferent affects. A Pod which exceeds the memory limit will be terminated with an out of memory error (OOM Error).  The Pod will after termination be started again, it may start to exceed the limit again which will result in another OOM error. These types of errors can either be resolved by having the application\nconsume less memory alternatively increasing the memory limit. Without a memory limit a Pod would be able to continue consuming memory until the Node runs out. This would not only affect critical\nsystem processes that runs in the node but other Pods which may not even be able to consume the resources it requested."),(0,a.kt)("p",null,"CPU limits should be treated slightly differently from memory limits. When memory is overconsumed applications will crash when there is no place to store new data. However when CPU is overconsumed throttling will occur. Applications will not immediately crash even if performance may be severely deprecated. CPU differs from memory as a resource in the sense that CPU time will be wasted if not consumed and applications required CPU time can vary a lot. Reserving CPU time that is not used is a waste if another application would benefit from using it. Setting a CPU limit for a Pod will result in artificial CPU throttling even if it would not necessarily be required. It is for that reason that a CPU limit is not enforced for Pods by default, instead it is something that should be opted into when the effects of CPU throttling is understood. It is still important to set a reasonable CPU request for Kubernetes to determine the minimal resource requirements, but CPU limits should be avoided in most cases where it is not fully understood."),(0,a.kt)("h2",{id:"scheduling-on-specific-nodes"},"Scheduling on Specific Nodes"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector"},"Node Selectors")," are the easiest may to make sure that a Pod runs on a specific Node. It is a label selector which filters out which Nodes the Pod can be scheduled to. Any Node which does not match the label selector will not be considered for scheduling."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A Pod with a Node Selector which does not match with any Node will never be scheduled.")),(0,a.kt)("p",null,"Given the two nodes with different values for the ",(0,a.kt)("inlineCode",{parentName:"p"},"agentpool")," label."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Node\nmetadata:\n  name: aks-standard-node\n  labels:\n    agentpool: standard\n---\napiVersion: v1\nkind: Node\nmetadata:\n  name: aks-memory-node\n  labels:\n    agentpool: memory\n")),(0,a.kt)("p",null,"The Node Selector would make sure that the Pod would only be scheduled on the second Node ",(0,a.kt)("inlineCode",{parentName:"p"},"aks-memory-node")," and never on the first Node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: app\nspec:\n  nodeSelector:\n    agentpool: memory\n")),(0,a.kt)("h2",{id:"affinity-and-anti-affinity"},"Affinity and Anti Affinity"),(0,a.kt)("p",null,"This is similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"nodeSelector")," bur greatly enhances the types of constraints you can express."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The affinity/anti-affinity language is more expressive. The language offers more matching rules."),(0,a.kt)("li",{parentName:"ol"},'Rules can be "preferred" rather than hard requirements, so if the scheduler can\'t satisfy them, the pod will still be scheduled'),(0,a.kt)("li",{parentName:"ol"},"You can constrain against labels on other pods running on the node (or other topological domain), rather than against labels on the node itself.")),(0,a.kt)("h3",{id:"nodes"},"Nodes"),(0,a.kt)("p",null,"There are currently two types of node affinity, called ",(0,a.kt)("inlineCode",{parentName:"p"},"requiredDuringSchedulingIgnoredDuringExecution")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"preferredDuringSchedulingIgnoredDuringExecution"),'. You can think of them as "hard" and "soft" requirements to schedule a pod. The ',(0,a.kt)("inlineCode",{parentName:"p"},"IgnoredDuringExecution")," part of the names means that if labels on a node change at runtime such that the affinity rules on a pod are no longer met, the pod continues to run on the node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  affinity:\n    nodeAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n        nodeSelectorTerms:\n        - matchExpressions:\n          - key: kubernetes.io/name\n            operator: In\n            values:\n            - ABC\n            - XYZ\n      preferredDuringSchedulingIgnoredDuringExecution:\n      - weight: 100\n        preference:\n          matchExpressions:\n          - key: label-key\n            operator: In\n            values:\n            - label-value\n")),(0,a.kt)("p",null,"This example only allows pods to be scheduled on nodes with a key ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes.io/name")," with value ",(0,a.kt)("inlineCode",{parentName:"p"},"ABC")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"XYZ")," Among the nodes matching this criteria, nodes with the key ",(0,a.kt)("inlineCode",{parentName:"p"},"label-key")," and the value ",(0,a.kt)("inlineCode",{parentName:"p"},"label-value")," will be preferred."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"weight")," field is ranged 1-100 and for each node matching all scheduling requirements, the kube-scheduler computes a score, as mentioned earlier. It then adds this number to that sum to calculate the best matching node."),(0,a.kt)("h3",{id:"pods"},"Pods"),(0,a.kt)("p",null,"podAffinity and podAntiAffinity lets you constrain which nodes pods are eligible to be scheduled on based of label of the pods running on the node rather than the labels on the node."),(0,a.kt)("p",null,"podAnitAffinity"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  affinity:\n    podAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n      - labelSelector:\n          matchExpressions:\n          - key: label1\n            operator: In\n            values:\n            - label-value\n        topologyKey: topology.kubernetes.io/zone\n    podAntiAffinity:\n      preferredDuringSchedulingIgnoredDuringExecution:\n      - weight: 100\n        podAffinityTerm:\n          labelSelector:\n            matchExpressions:\n            - key: label2\n              operator: In\n              values:\n              - label-value-anti\n          topologyKey: topology.kubernetes.io/zone\n")),(0,a.kt)("p",null,"This shows an example where we use both affinity rules."),(0,a.kt)("p",null,"Affinity rule: the pod can only be scheduled onto a node if that node is in the same zone as at least one already-running pod that has a label with key ",(0,a.kt)("inlineCode",{parentName:"p"},"label1")," and value ",(0,a.kt)("inlineCode",{parentName:"p"},"label-value"),"."),(0,a.kt)("p",null,"antiAffinity rule: the pod should not be scheduled onto a node if that node is in the same zone as a pod with a label having key ",(0,a.kt)("inlineCode",{parentName:"p"},"label2")," and value ",(0,a.kt)("inlineCode",{parentName:"p"},"label-value-anti")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  affinity:\n    podAntiAffinity:\n      preferredDuringSchedulingIgnoredDuringExecution:\n        - podAffinityTerm:\n            labelSelector:\n              matchExpressions:\n                - key: prometheus\n                  operator: In\n                  values:\n                    - xks\n            topologyKey: kubernetes.io/hostname\n          weight: 100\n        - podAffinityTerm:\n            labelSelector:\n              matchExpressions:\n                - key: prometheus\n                  operator: In\n                  values:\n                    - xks\n            topologyKey: topology.kubernetes.io/zone\n          weight: 100\n")),(0,a.kt)("p",null,"This is an example configuration of podAntiAffinity for Prometheus. Spreading the pod deployment based on ",(0,a.kt)("inlineCode",{parentName:"p"},"topology.kubernetes.io/zone")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"topology.kubernetes.io/hostname")," to only allow 1 pod on each node and to mitigate downtime in case an entire zone goes down, e.g: if a pod runs in zone A with key ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus")," and value ",(0,a.kt)("inlineCode",{parentName:"p"},"xks"),' do not schedule it in zone A - choose zone B or C. Note that these settings are "preferred" and not required.'),(0,a.kt)("p",null,"We recommend using this configuration, as critical services should be distributed to multiple zones to minimize downtime."),(0,a.kt)("p",null,"You can read more about this ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/"},"in the official documentation"),"."),(0,a.kt)("h2",{id:"pod-disruption-budget"},"Pod Disruption Budget"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/configure-pdb/"},"Pod Disruption Budgets")," are critical for any production deployment of an application. It enforces so that there are always a set amount of replicas of an application running. There is a risk that an application will during a short period of time have zero replicas\nrunning without if a Pod Disruption Budget has not been defined. XKS depends heavily on the existence of Pod Disruption Budgets to make sure that a cluster node pool can be scaled safely and upgrades can be applied to node pools without involving individual developers. During these types of event multiple Nodes will be drained.\nThe Node will block any new Pods from being scheduled to it and start evicting all existing Pods running the Node during a drain. Without a Pod Disruption Budget all Pods belonging to the same Deployment may be stopped at the same time, before any new Pods have had the time to start. With a Pod Disruption Budget a limited\namount of Pods will be stopped, and then started on a new Node. Eviction will continue with the remaining Pods after the new Pods are running and passed their readiness probe. This documentation is only relevant for applications that are deployed with multiple replicas. It is not possible to create a Pod Disruption Budget for\na single replica application, one has to assume that downtime will most likely happen and an application is deployed as a single replica."),(0,a.kt)("p",null,"Creating a Pod Disruption Budget can be very simple. Assume a Deployment named podinfo with the label ",(0,a.kt)("inlineCode",{parentName:"p"},"app: podinfo")," and a replica count of three exists in a cluster. The Pod Disruption Budget below would make sure that at least two of the replicas will be running at all times. It is important that ",(0,a.kt)("inlineCode",{parentName:"p"},"minAvailible")," is always\nsmaller than ",(0,a.kt)("inlineCode",{parentName:"p"},"replicas"),". It would be impossible to evict a Pod if the two values were equal. Removing a Pod would go against the Pod Disruption Budget, and creating an extra Pod would go against the replica count. This result is that a Node will never be able to evict Pods safely."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: policy/v1\nkind: PodDisruptionBudget\nmetadata:\n  name: podinfo\nspec:\n  minAvailable: 2\n  selector:\n    matchLabels:\n      app: podinfo\n")),(0,a.kt)("h2",{id:"horizontal-pod-autoscaler"},"Horizontal Pod Autoscaler"),(0,a.kt)("p",null,"A static replica count may work for a lot of applications but may not be optimal for production workloads. The goal should be to achieve good stability and latency while avoiding overprovisioning. As discussed earlier one way to scale an application is through increasing its resource requests and limits, this type of scaling is known as vertical scaling. Another option is to increase the amount of replicas instead, this type of scaling is known as horizontal scaling. Increasing the replica count will result in more Pods which can share the workload and increase the through put. Changing the replica count manually during the day would just be time consuming and impossible to achieve at scale."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"},"Horizontal Pod Autoscaler")," can do this automatically. The version ",(0,a.kt)("inlineCode",{parentName:"p"},"autoscaling/v1")," of the Horizontal Pod Autoscaler only supports scaling based on CPU utilization. Future versions will support scaling based on more metrics types."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: autoscaling/v1\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: app\nspec:\n  minReplicas: 1\n  maxReplicas: 5\n  targetCPUUtilizationPercentage: 60\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: app\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Pod Disruption Budget discusses the problems related to setting a minimum availability which is the same or higher than the static replica count. The same problem can occur with Horizontal Pod Autoscalers if the value is smaller than the minimum replica value.")),(0,a.kt)("p",null,"For more details refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/"},"Horizontal Pod Autoscaler walkthrough"),"."),(0,a.kt)("h2",{id:"priority-class"},"Priority Class"),(0,a.kt)("p",null,"The Kubernetes scheduler will out of the box treat each Pod with the same priority. The scheduler will assign Pods to Nodes in the order in which they were created, when multiple Pods without a set priority are waiting to be scheduled. This is usually not an issue as Pods tend to be assigned to Nodes quickly. However them\nscheduling duration may increase if multiple Horizontal Pod Autoscalers were to increase the replica count at the same time, as new Nodes would have to be provisioned first. In this case the queue would grow while waiting for more capacity in the cluster. Some applications may be more critical than others for the survival\nof a product. Waiting for the applications turn may not be the optimal solution if other applications have no problem waiting a bit longer to start running."),(0,a.kt)("p",null,"Setting Priority Class to a Pod can help the scheduler decide which Pods are more important and should be assigned to a Node first. In XKS there are three Priority Classes available."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tenant-low")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tenant-medium")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tenant-high"))),(0,a.kt)("p",null,"The Priority Class is set with the ",(0,a.kt)("inlineCode",{parentName:"p"},"priorityClassName")," field. Always start off with using the Priority Class ",(0,a.kt)("inlineCode",{parentName:"p"},"tenant-low"),", and decide later on if it should be changed. This is for the simple reason that if every Pod has a high priority no Pod will be considered of high priority as it would be the same as setting no priority\nat all. Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"tenant-medium")," could be a good choice for applications that are user facing and may scale up and down frequently."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  priorityClassName: tenant-low\n  containers:\n    - name: nginx\n      image: nginx\n")))}p.isMDXComponent=!0}}]);