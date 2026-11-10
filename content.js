const gatewayContent = {
  state: "secure",
  eyebrow: "Secured by Northstar Gateway",
  title: "Every agent request is authenticated, authorized, and audited",
  description: "Northstar Gateway sits between AI agents and the systems they act on. Each agent proves its identity before any request is forwarded, every action is checked against policy and scoped to the minimum access it needs, credentials are injected at the gateway and never exposed in prompts, and every decision is written to a tamper-evident audit log.",
  controls: [
    {
      name: "Agent authentication",
      detail: "Every agent must present a verified identity before the gateway forwards any request. Unauthenticated calls are rejected.",
      enabled: true,
    },
    {
      name: "Least-privilege access",
      detail: "Each request is evaluated against policy and limited to the narrowest scopes the task requires.",
      enabled: true,
    },
    {
      name: "Secrets protection",
      detail: "Credentials are held and injected by the gateway. They never appear in prompts, model context, or agent output.",
      enabled: true,
    },
    {
      name: "Immutable audit trail",
      detail: "Every request and policy decision is recorded in an append-only log that cannot be altered after the fact.",
      enabled: true,
    },
  ],
};
