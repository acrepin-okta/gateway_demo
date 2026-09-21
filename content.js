/*
 * GATEWAY CONTENT
 * Copy and security-control states for the Northstar dashboard.
 */
const gatewayContent = {
  state: "secure",
  eyebrow: "Secure by design",
  title: "Give every AI agent governed, least-privilege access.",
  description:
    "Northstar authenticates every agent, enforces policy checks on every request, and keeps credentials out of prompts—so your agents can move fast with guardrails.",
  controls: [
    {
      name: "Agent authentication",
      detail: "Every agent's identity is verified before access",
      enabled: true,
    },
    {
      name: "Least-privilege access",
      detail: "Agents receive only the permissions their task requires",
      enabled: true,
    },
    {
      name: "Secrets protection",
      detail: "Credentials are kept out of agent prompts",
      enabled: true,
    },
    {
      name: "Immutable audit trail",
      detail: "Every request is logged in a tamper-proof record",
      enabled: true,
    },
  ],
};
