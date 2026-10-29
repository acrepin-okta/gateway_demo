const gatewayContent = {
  state: "secure",
  eyebrow: "Northstar Gateway",
  title: "Every agent request is authenticated, authorized, and audited",
  description: "Northstar sits between AI agents and the systems they act on. Each request is tied to a verified agent identity, checked against policy before it reaches a downstream service, and executed with short-lived, scoped credentials that are injected by the gateway and never placed in prompts or model context. Every decision is written to a tamper-evident audit log.",
  controls: [
    {
      name: "Agent authentication",
      detail: "Every agent must present a verified identity before any request is accepted. Unauthenticated calls are rejected.",
      enabled: true,
    },
    {
      name: "Least-privilege access",
      detail: "Each request is evaluated against policy and granted only the minimum scopes needed for that specific action.",
      enabled: true,
    },
    {
      name: "Secrets protection",
      detail: "Credentials are held by the gateway and issued as short-lived tokens at call time. They never appear in prompts, model context, or agent memory.",
      enabled: true,
    },
    {
      name: "Immutable audit trail",
      detail: "Every authentication, policy decision, and downstream call is recorded in an append-only, tamper-evident log.",
      enabled: true,
    },
  ],
};
