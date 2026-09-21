// Demo content is defined in content.js so an agent can safely replace it
// without touching rendering or live-reload behavior.

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

// Poll the deployed content file so the page refreshes after a Vercel deploy.
// The cache-busting query also keeps this working with the local demo server.
let currentContent;

async function watchForContentChanges() {
  try {
    const response = await fetch(`./content.js?reload=${Date.now()}`, {
      cache: "no-store",
    });

    if (!response.ok) return;

    const nextContent = await response.text();

    if (currentContent === undefined) {
      currentContent = nextContent;
      return;
    }

    if (currentContent !== nextContent) {
      window.location.reload();
    }
  } catch {
    // Keep the current page visible during a transient deployment or outage.
  }
}

setInterval(watchForContentChanges, 1000);
watchForContentChanges();
