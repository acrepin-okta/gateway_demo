const gatewayContent = {
  state: "secure",
  eyebrow: "Northstar Agent Gateway",
  title: "Every agent request is authenticated, authorized, and audited",
  description: "Northstar sits between AI agents and the tools they call. Each request is tied to a verified agent identity, checked against policy before it runs, and executed with credentials the gateway injects at call time, so secrets never appear in prompts or model context. Every decision is written to a tamper-evident audit log.",
  controls: [
    {
      name: "Agent authentication",
      detail: "Every agent must present a verified identity before any request is accepted. Unauthenticated requests are rejected.",
      enabled: true,
    },
    {
      name: "Least-privilege access",
      detail: "Each action is checked against policy before it runs, and agents receive only the scopes their task requires.",
      enabled: true,
    },
    {
      name: "Secrets protection",
      detail: "Credentials are held by the gateway and injected at call time. They are never placed in prompts or exposed to the model.",
      enabled: true,
    },
    {
      name: "Immutable audit trail",
      detail: "Every request and policy decision is recorded in an append-only log that cannot be altered after the fact.",
      enabled: true,
    },
  ],
};
