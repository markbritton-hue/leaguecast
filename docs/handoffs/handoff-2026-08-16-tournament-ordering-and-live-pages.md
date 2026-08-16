# Handoff — 2026-08-16: Tournament ordering + live display pages

## Completed this session

1. **Tournament list reordering** (`tournaments.html`, `schedule.html`)
   - New order: last week's tournament (labeled "Previous") → divider → upcoming tournaments ascending (first one labeled "Upcoming") → older past tournaments.
   - Sort logic is inline in each page's `init()`: split `all` into `past`/`upcoming` around `today`, `lastWeek = past[0]`, `olderPast = past.slice(1)`.
   - `schedule.html` has an extra white divider (`border-white`) after the upcoming list, separating it from older past tournaments. `tournaments.html` does not have this second divider — only asked for on schedule.

2. **New page: `live-board.html`**
   - Not linked from any nav/card, no login required.
   - Shows **season-wide overall standings** (not single-tournament results) — reuses the same `buildSeasonLeaderboard` logic as `index.html`'s Season Standings section (total weight, biggest-bass tiebreaker, tie ranks like `T-2`).
   - Visual style matches home page: podium (trophy images) for top 3, then a 2-column grid of team cards with rank-icon treatment (gold/silver/bronze trophy images, numeric rank otherwise). Shows total weight and big bass weight per team.
   - Auto-reloads every 30s (`setInterval(() => location.reload(), 30000)`).

3. **New page: `live-weighin-panel.html`**
   - Not linked, no login, `background: transparent` — intended as an overlay/browser-source panel (e.g. OBS).
   - Live-updates via Firestore `onSnapshot` on `weighins` filtered to the currently open tournament — no reload needed for new weigh-ins.
   - Also auto-reloads every 30s, mainly to re-resolve which tournament is currently "open" in case that changes mid-session.
   - Shows rank, team name, total weight, big bass weight. No scroll cap — grows to fit all entries.

Both new pages resolve "current tournament" the same way: query `tournaments` where `status == 'open'` limit 1, fall back to most recent by date if none open.

## Current state
- Everything committed and pushed to `main`; working tree clean at session end.
- Site deploys to IONOS via GitHub Actions on push to `main` (per existing `.github/workflows/Deploy.yml`).

## Next steps / open questions
- User asked for "the full URL" of the new pages — I don't have the production domain in this session. Confirm the live IONOS domain so `live-board.html` and `live-weighin-panel.html` can be linked/shared directly (e.g. for OBS browser-source setup on the weigh-in panel).
- No other outstanding work from this session.
