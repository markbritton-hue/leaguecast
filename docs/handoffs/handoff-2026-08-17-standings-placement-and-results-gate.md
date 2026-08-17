# Handoff — 2026-08-17 — Standings Placement & Results Card Gate

## What was completed

1. **Tournament placement in season standings dropdown** (`index.html`)
   - New `getTournamentPlace(teamId, tournamentId)` method: filters `this.weighins` to the given tournament, sorts by `totalWeight` desc with big-bass (`getBigFish`) as tiebreaker, finds the team's index, and formats it as an ordinal string ("1st Place", "2nd Place", etc.), prefixing `T-` on ties (matches the season leaderboard's existing tie-detection logic).
   - Displayed in the expanded per-team tournament breakdown, under the tournament name/date, only when that team has a weigh-in for that tournament (`x-show="getTournamentWeighin(...)"`).

2. **Results card disabled state on home page** (`index.html`)
   - When `activeTournamentId` is falsy (no open tournament), the Results card now gets `opacity-50 cursor-not-allowed pointer-events-none` and its href falls back to `#` instead of `results.html`.
   - This reuses the exact disabled-card pattern already established on `manage.html`'s Check-In/Weigh-In cards, so the visual language is now consistent across both pages.

## Current state

- Both changes pushed to `main`: `e2210a6` (placement), `a77fbaa` (Results gate).
- No known issues. Both changes are small, additive, and don't touch data/Firestore — purely template/display logic in `index.html`'s `alpine:init` block.

## Next steps / open items

- None outstanding. No open questions from the user this session.
