const gatewayContent = {
  state: "secure",
  eyebrow: "Secured by the gateway",
  title: "Every agent action is authenticated, authorized, and audited",
  description:
    "Northstar routes every agent request through the gateway. Agents authenticate before they act, each request is checked against policy, credentials never appear in prompts, and every action is recorded in a tamper-proof audit trail.",
  controls: [
    {
      name: "Agent authentication",
      detail:
        "Every agent proves its identity before it can make a request. Nothing bypasses authentication.",
      enabled: true,
    },
    {
      name: "Least-privilege access",
      detail:
        "Policy is checked on every request, and agents receive only the scopes their task requires.",
      enabled: true,
    },
    {
      name: "Secrets protection",
      detail:
        "Credentials stay in the gateway vault and are injected at call time. They are never stored in prompts.",
      enabled: true,
    },
    {
      name: "Immutable audit trail",
      detail:
        "Every agent action is written to an append-only log that cannot be edited or deleted.",
      enabled: true,
    },
  ],
};
