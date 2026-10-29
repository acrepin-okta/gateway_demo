const gatewayContent = {
  state: "secure",
  eyebrow: "Gateway secured",
  title: "Every agent request is authenticated, authorized, and audited",
  description: "The Northstar gateway verifies the identity of every AI agent before any request reaches your systems, enforces least-privilege policy on each call, keeps credentials out of prompts and model context entirely, and records every action in a tamper-evident audit log.",
  controls: [
    {
      name: "Agent authentication",
      detail: "Every agent must present a verified identity before the gateway forwards a request. Unauthenticated calls are rejected.",
      enabled: true,
    },
    {
      name: "Least-privilege access",
      detail: "Policy is evaluated on every request, granting each agent only the scopes it needs for the task at hand.",
      enabled: true,
    },
    {
      name: "Secrets protection",
      detail: "Credentials are held in a secure vault and injected at the gateway. They never appear in prompts, model context, or logs.",
      enabled: true,
    },
    {
      name: "Immutable audit trail",
      detail: "Every agent action is recorded in an append-only, tamper-evident log for review and compliance.",
      enabled: true,
    },
  ],
};
