const gatewayContent = {
  state: "secure",
  eyebrow: "Agent Gateway",
  title: "Every agent request is authenticated, authorized, and audited",
  description: "Northstar routes every AI agent call through the gateway. Each agent proves its identity before it can act, policy is checked on every request so agents get only the access they need, credentials are held in a secure vault and never placed in prompts, and every action is recorded in a tamper-proof audit log.",
  controls: [
    {
      name: "Agent authentication",
      detail: "Every agent authenticates with its own verified identity before any request is allowed through.",
      enabled: true,
    },
    {
      name: "Least-privilege access",
      detail: "Policy is evaluated on every request, granting only the scopes each agent needs for the task at hand.",
      enabled: true,
    },
    {
      name: "Secrets protection",
      detail: "Credentials stay in a secure vault and are injected at the gateway, never stored in or exposed to prompts.",
      enabled: true,
    },
    {
      name: "Immutable audit trail",
      detail: "Every agent action is logged to a tamper-proof record for review and compliance.",
      enabled: true,
    },
  ],
};
