const gatewayContent = {
  state: "secure",
  eyebrow: "Northstar Agent Gateway",
  title: "Every agent request is authenticated, authorized, and audited",
  description: "Northstar sits between your AI agents and the systems they reach. Each agent proves its identity before any call goes through, every request is checked against policy and scoped to the minimum access it needs, credentials are held in a secure vault and never exposed to prompts or models, and every action is recorded in a tamper-evident audit log.",
  controls: [
    { name: "Agent authentication", detail: "Every agent must present a verified identity before the gateway forwards any request. Unauthenticated calls are rejected.", enabled: true },
    { name: "Least-privilege access", detail: "Each request is evaluated against policy and granted only the narrowly scoped, short-lived permissions the task requires.", enabled: true },
    { name: "Secrets protection", detail: "Credentials stay in a secure vault and are injected at the gateway. They are never placed in prompts or exposed to the model.", enabled: true },
    { name: "Immutable audit trail", detail: "Every agent action is logged to an append-only, tamper-evident record for review and compliance.", enabled: true },
  ],
};
