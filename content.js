const gatewayContent = {
  state: "secure",
  eyebrow: "Northstar Agent Gateway",
  title: "Every agent request is authenticated, authorized, and audited",
  description: "Northstar sits between your AI agents and the systems they reach. Each agent must prove its identity before any call goes through, every request is checked against policy and scoped to the minimum access it needs, credentials are kept out of prompts and model context entirely, and every action is written to a tamper-evident audit log.",
  controls: [
    { name: "Agent authentication", detail: "Every agent authenticates before any request is forwarded. Unauthenticated calls are rejected.", enabled: true },
    { name: "Least-privilege access", detail: "Each request is evaluated against policy and limited to the scopes the task requires.", enabled: true },
    { name: "Secrets protection", detail: "Credentials are held by the gateway and never placed in prompts or model context.", enabled: true },
    { name: "Immutable audit trail", detail: "Every agent action is recorded to an append-only log for review.", enabled: true },
  ],
};
