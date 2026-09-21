const gatewayContent = {
  state: "safe",
  eyebrow: "Secure by design",
  title: "Give every AI agent governed, least-privilege access.",
  description:
    "Northstar authenticates every agent, enforces policy on each request, and keeps credentials out of prompts—so your agents can move fast with guardrails.",
  controls: [
    {
      name: "Agent authentication",
      detail: "Every agent identity is verified before access is granted",
      enabled: true,
    },
    {
      name: "Least-privilege access",
      detail: "Each agent receives only the permissions it needs",
      enabled: true,
    },
    {
      name: "Secrets protection",
      detail: "Credentials are never included in agent prompts",
      enabled: true,
    },
    {
      name: "Immutable audit trail",
      detail: "Every request is logged in a tamper-proof record",
      enabled: true,
    },
  ],
};
