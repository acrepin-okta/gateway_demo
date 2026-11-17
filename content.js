const gatewayContent = {
  state: "secure",
  eyebrow: "Northstar Agent Gateway",
  title: "Every agent request is authenticated, authorized, and audited",
  description:
    "Northstar sits between AI agents and the tools they call. Each request is tied to a verified agent identity, checked against policy before it reaches a downstream system, and recorded in a tamper-evident log. Credentials are held by the gateway and never placed in prompts or exposed to the model.",
  controls: [
    {
      name: "Agent authentication",
      detail: "Every agent must present a verified identity before any request is forwarded. Unauthenticated calls are rejected.",
      enabled: true,
    },
    {
      name: "Least-privilege access",
      detail: "Each request is evaluated against policy and scoped to only the resources and actions the agent is allowed to use.",
      enabled: true,
    },
    {
      name: "Secrets protection",
      detail: "Tokens and credentials stay in the gateway's vault and are injected at call time, never stored in prompts or shown to the model.",
      enabled: true,
    },
    {
      name: "Immutable audit trail",
      detail: "Every allowed and denied request is written to an append-only log for review and investigation.",
      enabled: true,
    },
  ],
};
