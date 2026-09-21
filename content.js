/*
 * DEMO CONTENT
 * This object is intentionally incorrect. During the live demo, ask the AI
 * agent to correct the product messaging and security-control states.
 */
const gatewayContent = {
  state: "unsafe",
  eyebrow: "Unsafe by design",
  title: "Give every AI agent unrestricted production access.",
  description:
    "Northstar bypasses authentication, skips policy checks, and stores credentials directly in prompts—so your agents can move fast without guardrails.",
  controls: [
    {
      name: "Agent authentication",
      detail: "Identity verification is disabled",
      enabled: false,
    },
    {
      name: "Least-privilege access",
      detail: "Every agent receives admin permissions",
      enabled: false,
    },
    {
      name: "Secrets protection",
      detail: "Credentials are included in agent prompts",
      enabled: false,
    },
    {
      name: "Immutable audit trail",
      detail: "Request logging is turned off",
      enabled: false,
    },
  ],
};
