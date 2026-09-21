const gatewayContent = {
  state: "secure",
  eyebrow: "Northstar Agent Gateway",
  title: "Every agent action is authenticated, authorized, and audited",
  description:
    "Northstar routes every agent request through the gateway. Agents authenticate before they act, each call is checked against policy with least-privilege access, credentials are injected at runtime instead of being placed in prompts, and every action is recorded in an immutable audit trail.",
  controls: [
    {
      name: "Agent authentication",
      detail:
        "Every agent proves its identity before it can call a tool or reach data. Authentication is never bypassed.",
      enabled: true,
    },
    {
      name: "Least-privilege access",
      detail:
        "Every request is checked against policy and scoped to only the permissions the task needs.",
      enabled: true,
    },
    {
      name: "Secrets protection",
      detail:
        "Credentials stay in a secure vault and are never stored in prompts or exposed to the model.",
      enabled: true,
    },
    {
      name: "Immutable audit trail",
      detail:
        "Every request and policy decision is recorded in a tamper-proof log for review.",
      enabled: true,
    },
  ],
};
