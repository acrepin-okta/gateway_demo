const gatewayContent = {
  state: "secure",
  eyebrow: "Northstar Agent Gateway",
  title: "Every agent action is authenticated, authorized, and audited",
  description: "Northstar sits between AI agents and the tools they call. Every request is authenticated, checked against least-privilege policy before it runs, and executed with credentials held in a secure vault — never placed in prompts. Each action is written to an immutable audit trail, so you always know which agent did what, on whose behalf.",
  controls: [
    { name: "Agent authentication", detail: "Every agent request is authenticated before it reaches a downstream tool.", enabled: true },
    { name: "Least-privilege access", detail: "Policy checks run on every call, limiting agents to the scopes they need.", enabled: true },
    { name: "Secrets protection", detail: "Credentials stay in a secure vault and are never exposed in prompts.", enabled: true },
    { name: "Immutable audit trail", detail: "Every action is logged to a tamper-proof record for review.", enabled: true },
  ],
};
