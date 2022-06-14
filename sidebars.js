module.exports = {
  "docs": [
    {
      "type": "doc",
      "id": "index"
    },
    {
      "type": "category",
      "label": "Xenit Kubernetes Service",
      "items": [
        {
          "type": "doc",
          "id": "xks/index"
        },
        {
          "type": "doc",
          "id": "xks/architecture-and-design",

        },
        {
          "type": "category",
          "label": "Developer Guide",
          "items": [
            "xks/developer-guide/api-migrations",
            "xks/developer-guide/introduction",
            "xks/developer-guide/best-practices",
            "xks/developer-guide/secrets-management",
            "xks/developer-guide/cloud-iam",
            "xks/developer-guide/container-security",
            {
              "type": "category",
              "label": "CI/CD",
              "items": [
                "xks/developer-guide/ci-cd/ci",
                "xks/developer-guide/ci-cd/cd",
                "xks/developer-guide/ci-cd/gitops",
                "xks/developer-guide/ci-cd/flux",
              ]
            },
            "xks/developer-guide/scheduling-scaling",
            "xks/developer-guide/observability",
            "xks/developer-guide/networking",
            "xks/developer-guide/wsl2",
            "xks/developer-guide/reports",
          ]
        },
        {
          "type": "category",
          "label": "Operator Guide",
          "items": [
            "xks/operator-guide/index",
            "xks/operator-guide/getting-started",
            "xks/operator-guide/agents",
            "xks/operator-guide/networking",
            "xks/operator-guide/blast-radius",
            "xks/operator-guide/blue-green",
            "xks/operator-guide/aws-azdo",
            "xks/operator-guide/github",
            {
              "type": "category",
              "label": "Kubernetes",
              "items": [
                "xks/operator-guide/kubernetes/aks",
                "xks/operator-guide/kubernetes/eks",
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "Projects",
      "items": []
    }
  ]
}
