# Handoff — 2026-08-17 — Manage Page Overlay Links

## What was completed

Added a "Live Overlay Links" section at the bottom of `manage.html`, below the data export buttons, with three direct links (each `target="_blank"`) to pages that were previously unlinked from any nav:

- `live-board.html` — 🏆 Live Standings Board
- `live-weighin-panel.html` — ⚖️ Live Weigh-In Panel
- `ct-overlay-bm7x.html` — 🏷️ Live Call Tags Overlay

All three are streaming/OBS-browser-source style pages (transparent or semi-transparent backgrounds, live Firestore data). Since `manage.html` itself is admin-gated via `auth-guard.js`, putting the call tag overlay's obscure-URL link here is safe — it stays out of public nav while giving admins an easy way to find it instead of needing the raw URL memorized/bookmarked.

## Current state

- Pushed to `main` in two commits: `ab232ae` (live-board + live-weighin-panel), `8f4e28b` (call tag overlay).
- No known issues.

## Next steps / open items

- None outstanding. This closes out the call tag overlay feature arc that started 2026-08-16 (see `handoff-2026-08-16-call-tag-overlay.md`) — build, live sync, styling, and now discoverability for admins.
