#!/usr/bin/env python3
"""Tiny static server with dependency-free live reload support."""

from __future__ import annotations

import hashlib
import http.server
import os
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parent
WATCHED_EXTENSIONS = {".html", ".css", ".js"}


def project_version() -> str:
    digest = hashlib.sha256()
    for path in sorted(ROOT.iterdir()):
        if path.is_file() and path.suffix in WATCHED_EXTENSIONS:
            stat = path.stat()
            digest.update(path.name.encode())
            digest.update(str(stat.st_mtime_ns).encode())
            digest.update(str(stat.st_size).encode())
    return digest.hexdigest()


class LiveReloadHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self) -> None:  # noqa: N802 - method name belongs to stdlib API
        if urlparse(self.path).path == "/__version":
            body = project_version().encode()
            self.send_response(200)
            self.send_header("Content-Type", "text/plain; charset=utf-8")
            self.send_header("Cache-Control", "no-store")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        super().do_GET()

    def log_message(self, message: str, *args: object) -> None:
        print(f"[gateway-demo] {message % args}")


def main() -> None:
    os.chdir(ROOT)
    port = int(os.environ.get("PORT", "8080"))
    server = http.server.ThreadingHTTPServer(("127.0.0.1", port), LiveReloadHandler)
    print(f"Northstar Agent Gateway running at http://localhost:{port}")
    print("Live reload is enabled. Press Ctrl+C to stop.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
