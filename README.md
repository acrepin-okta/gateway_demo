# Northstar Agent Gateway demo

A dependency-free, dark-mode production dashboard for a live AI coding demo.
The initial page intentionally contains incorrect and unsafe security messaging.
During the demo, an AI agent corrects the messaging and control states while the
dashboard is running.

## Install Python on macOS

If Homebrew is already installed:

```bash
brew install python
```

Confirm the installation:

```bash
python3 --version
```

If Homebrew is not installed, install it from [brew.sh](https://brew.sh/) and
then run the commands above. Python can also be installed directly from
[python.org](https://www.python.org/downloads/).

## Run the project

Clone the repository and move into it:

```bash
git clone https://github.com/acrepin-okta/gateway_demo.git
cd gateway_demo
```

Start the local server:

```bash
python3 dev_server.py
```

Open [http://localhost:8080](http://localhost:8080) in your browser. Keep the
terminal process running for the duration of the demo. Stop it with
**Control+C**.

There is no package installation, build step, or external service dependency.

## Live-demo prompt

Give the coding agent this exact prompt from the repository root:

> Find and correct the dangerously inaccurate security messaging in this Agent
> Gateway dashboard. The product authenticates every agent, enforces
> least-privilege policies, keeps credentials out of prompts, and records every
> action in an immutable audit trail. Update the control states to match. Keep
> the design and application behavior intact.

The editable demo content is in `content.js`. The agent should change
the security messaging, set all four controls to enabled, and change `state`
from `unsafe` to `secure`. The state change activates the green secure visual
treatment.

## Live reload

Always start the project with:

```bash
python3 dev_server.py
```

While [localhost:8080](http://localhost:8080) is open, the page checks for
changes to `content.js` every second. When the agent saves the file, the browser
reloads automatically and displays the corrected dashboard.

The same polling works on Vercel. When a change to `content.js` reaches the
production deployment, an already-open dashboard detects it and reloads. The
`vercel.json` cache policy ensures that the poll receives the current file.

The agent only needs to edit the local files. It does **not** need to commit or
push for the browser to show the changes. If automatic reload does not occur,
refresh the browser manually.

## Reset between rehearsals

Restore the intentionally unsafe starting state with:

```bash
git restore content.js
```

This discards all uncommitted changes to `content.js`, so first save anything you
want to keep.

To use a different port:

```bash
PORT=8081 python3 dev_server.py
```
