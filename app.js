/*
 * DEMO CONTENT
 * Northstar Agent Gateway security messaging and control states.
 * Corrected in NSTAR-2 to accurately describe the product's behavior.
 */
const gatewayContent = {
  state: "secure",
  eyebrow: "Secure by design",
  title: "Give every AI agent governed, least-privilege access.",
  description:
    "Northstar authenticates every agent, enforces least-privilege policies, and keeps credentials out of prompts—so your agents move fast within clear guardrails.",
  controls: [
    {
      name: "Agent authentication",
      detail: "Every agent is authenticated before it can act",
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
      detail: "Every action is recorded in an immutable audit trail",
      enabled: true,
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
