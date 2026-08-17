# Handoff — 2026-08-16 — Call Tag Streaming Overlay

## What was completed

1. **New page: `ct-overlay-bm7x.html`**
   - Transparent-background overlay page intended for OBS (or similar) as a browser source during a live stream.
   - Shows each active call tag's color dot + weight, plus a running total, updating live via Firestore `onSnapshot` on `calltags/live`.
   - Layout: "Call Tags" heading + tag rows anchored bottom-left, filling 2 rows before wrapping into a new column. Heading and rows each have a light see-through grey pill background (`rgba(200,200,200,0.35)`); everything else stays fully transparent.
   - Weights shown to 2 decimal places.
   - No auto-refresh — relies solely on the live snapshot listener (a 30s `location.reload()` was added then explicitly removed per user request).
   - **Access control is by obscure URL only** (user's explicit choice over a password gate or app auth check). This is not real security — treat the URL as semi-public. If the user later wants it locked down, add a PIN gate or reuse `auth-guard.js`.

2. **`call-tags.html` updated with admin-gated Firestore sync**
   - Previously localStorage-only (per-device), so call tags entered on one device never showed on another — this was the root cause of "I logged in as admin on my phone and don't see the call tag fish."
   - Now: if `firebase.auth().onAuthStateChanged` reports a signed-in user, the page loads its initial state from Firestore doc `calltags/live` (falling back to localStorage if that Firestore doc is empty or the read fails), and pushes every change back to that same doc (debounced 400ms) — via `pushLive()`, called from `onWeightChange()` and `clearAll()`.
   - **Non-admin/anonymous users are untouched** — they still only use localStorage, never touching Firestore at all. This was an explicit, later instruction from the user ("only admins... other people will store their call tags locally") — the initial version synced for everyone, then was scoped back.
   - Added `firebase-auth-compat.js` script tag (wasn't previously loaded on this page) since `firebase.auth()` is now used.

3. **Firestore security rules** (managed in Firebase console for project `reelrank-6fbd5`, not tracked in this repo) needed a new rule for the `calltags` collection — the default rules blocked everything with `permission-denied` until the user manually added `allow read, write: if true` for `match /calltags/{doc}`. This was diagnosed live via a `FirebaseError: Missing or insufficient permissions` console error on the overlay page.

## Current state

- All changes pushed to `main`, deployed via the existing GitHub Actions → IONOS pipeline (same as always).
- Live commit chain (oldest → newest) for this feature: `704b020` (initial overlay + push), `3372f4a` (auto-refresh added), `c81f0be` (2 decimals), `884765b` (load from Firestore), `65e8490` (admin-only gating), `482e712` (heading), `a7f1271`→`6ad772e` (background — whole-page grey walked back to per-row grey only), `0200143` (heading gets grey bg too), `2eb4af9`→`2e961e1` (bottom-left 2-row layout, then heading moved down to join it), `431bb26` (auto-refresh removed).
- No known open bugs. Live sync was confirmed working after the Firestore rule was added (user reported the earlier "blank page" was actually a `permission-denied` console error, not a rendering bug).

## Next steps / open items

- None outstanding — feature is functionally complete per the user's requests this session.
- If asked to harden overlay access later: options discussed were a shared PIN/passphrase gate, or reusing the app's existing `auth-guard.js`/login pattern — user explicitly chose "obscure URL, no gate" for now.
- Nobody has verified the overlay in an actual OBS browser-source (only regular browser tabs, per user's live testing) — worth confirming CSS transparency renders correctly as an OBS source specifically if that becomes relevant.
