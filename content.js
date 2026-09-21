/*
 * DEMO CONTENT
 * Northstar Agent Gateway security messaging and control states.
 */
const gatewayContent = {
  state: "secure",
  eyebrow: "Secure by design",
  title: "Give every AI agent governed, secure production access.",
  description:
    "Northstar authenticates every agent, enforces least-privilege policies, keeps credentials out of prompts, and records every action in an immutable audit trail—so your agents can move fast with guardrails.",
  controls: [
    {
      name: "Agent authentication",
      detail: "Every agent is authenticated before it acts",
      enabled: true,
    },
    {
      name: "Least-privilege access",
      detail: "Policies grant each agent only the permissions it needs",
      enabled: true,
    },
    {
      name: "Secrets protection",
      detail: "Credentials are kept out of agent prompts",
      enabled: true,
    },
    {
      name: "Immutable audit trail",
      detail: "Every action is recorded in an immutable audit log",
      enabled: true,
    },
  ],
};
