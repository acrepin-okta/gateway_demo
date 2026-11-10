const gatewayContent = {
  state: "secure",
  eyebrow: "Northstar Gateway · Protected",
  title: "Every agent request is authenticated, authorized, and audited",
  description: "Northstar sits between AI agents and the systems they act on. Each request is tied to a verified agent identity, checked against policy before it reaches a downstream service, and executed with short-lived, scoped credentials that never appear in prompts or model context. Every decision is written to a tamper-evident audit log.",
  controls: [
    {
      name: "Agent authentication",
      detail: "Every agent must present a verified identity before any request is accepted. Unauthenticated requests are rejected.",
      enabled: true,
    },
    {
      name: "Least-privilege access",
      detail: "Each request is evaluated against policy and granted only the scopes it needs, for only as long as it needs them.",
      enabled: true,
    },
    {
      name: "Secrets protection",
      detail: "Credentials are held in a secure vault and injected at the gateway. They are never placed in prompts, model context, or logs.",
      enabled: true,
    },
    {
      name: "Immutable audit trail",
      detail: "Every authentication, policy decision, and action is recorded in an append-only, tamper-evident log.",
      enabled: true,
    },
  ],
};
