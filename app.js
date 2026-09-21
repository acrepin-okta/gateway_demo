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

function renderGatewayContent() {
  const isSecure = gatewayContent.state === "secure";
  const hero = document.querySelector("#heroCard");

  hero.dataset.state = gatewayContent.state;
  document.querySelector("#eyebrowText").textContent = gatewayContent.eyebrow;
  document.querySelector("#heroTitle").textContent = gatewayContent.title;
  document.querySelector("#heroDescription").textContent = gatewayContent.description;

  document.querySelector("#controlList").innerHTML = gatewayContent.controls
    .map(
      (control) => `
        <div class="control-row">
          <span class="control-symbol ${control.enabled ? "enabled" : "disabled"}">
            ${control.enabled ? "✓" : "×"}
          </span>
          <div>
            <strong>${control.name}</strong>
            <p>${control.detail}</p>
          </div>
          <span class="control-state ${control.enabled ? "on" : "off"}">
            ${control.enabled ? "Enforced" : "Disabled"}
          </span>
        </div>`,
    )
    .join("");

  document.title = `${isSecure ? "Secure" : "Unsafe"} · Northstar Agent Gateway`;
}

renderGatewayContent();

// The local development server exposes a version fingerprint. Polling it gives
// us dependency-free live reload whenever a demo file is edited.
let currentVersion;

async function watchForChanges() {
  try {
    const response = await fetch(`/__version?t=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return;
    const nextVersion = await response.text();
    if (currentVersion && currentVersion !== nextVersion) window.location.reload();
    currentVersion = nextVersion;
  } catch {
    // A plain static server still works; it just requires manual refresh.
  }
}

setInterval(watchForChanges, 700);
watchForChanges();
