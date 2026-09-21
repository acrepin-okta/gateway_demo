const gatewayContent = {
  state: "secure",
  eyebrow: "Gateway Status",
  title: "Every agent request is authenticated, authorized, and logged",
  description:
    "The gateway verifies each agent's identity before any request reaches a downstream system, enforces least-privilege policy on every call, and keeps credentials out of prompts and model context entirely. All activity is written to an immutable audit trail.",
  controls: [
    {
      name: "Agent authentication",
      detail: "Every agent is authenticated before its request is allowed to proceed.",
      enabled: true,
    },
    {
      name: "Least-privilege access",
      detail: "Policy checks scope each request to only the access it needs.",
      enabled: true,
    },
    {
      name: "Secrets protection",
      detail: "Credentials are never stored or exposed in prompts; secrets stay out of model context.",
      enabled: true,
    },
    {
      name: "Immutable audit trail",
      detail: "Every request is recorded in a tamper-proof audit log.",
      enabled: true,
    },
  ],
};
