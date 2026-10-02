const gatewayContent = {
  state: "secure",
  eyebrow: "Agent gateway secured",
  title: "Every agent request is authenticated, authorized, and audited",
  description:
    "Northstar routes every agent request through the gateway. Each agent proves its identity before it can act, every call is checked against policy, credentials are never placed in prompts, and every action is recorded.",
  controls: [
    {
      name: "Agent authentication",
      detail: "Every agent authenticates before any request is accepted. Authentication is never bypassed.",
      enabled: true,
    },
    {
      name: "Least-privilege access",
      detail: "Policy checks run on every request, and agents receive only the access their task requires.",
      enabled: true,
    },
    {
      name: "Secrets protection",
      detail: "Credentials are held by the gateway and are never stored in or passed through prompts.",
      enabled: true,
    },
    {
      name: "Immutable audit trail",
      detail: "Every agent action is written to a tamper-resistant log for review.",
      enabled: true,
    },
  ],
};
