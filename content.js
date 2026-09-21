const gatewayContent = {
  state: "secure",
  eyebrow: "Secured by the gateway",
  title: "Every agent action is authenticated, authorized, and audited",
  description:
    "The gateway sits between your AI agents and the tools they call. Each agent proves its identity before it acts, every request is checked against policy with least-privilege access, and credentials are held securely outside of prompts. Every action is written to an immutable audit trail.",
  controls: [
    {
      name: "Agent authentication",
      detail:
        "Every agent authenticates before it can reach a tool. Requests without a verified identity are rejected.",
      enabled: true,
    },
    {
      name: "Least-privilege access",
      detail:
        "Policy is checked on every call, and agents receive only the access their task requires.",
      enabled: true,
    },
    {
      name: "Secrets protection",
      detail:
        "Credentials are stored in a secure vault and injected at call time. They never appear in prompts.",
      enabled: true,
    },
    {
      name: "Immutable audit trail",
      detail:
        "Every agent action and policy decision is recorded in a tamper-proof log for review.",
      enabled: true,
    },
  ],
};
