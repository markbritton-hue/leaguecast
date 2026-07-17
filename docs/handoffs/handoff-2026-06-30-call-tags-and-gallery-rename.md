# Handoff — 2026-06-30 — Fish Call Tags & Gallery Rename

## What was completed this session

### 1. Fish Call Tags page (`call-tags.html`)
- New standalone page, **no login required** (public)
- Linked from index.html nav as "CALL TAGS" card (always visible)
- 8 color-coded tag swatches: blue, green, purple, **yellow (#facc15)**, red, cyan, orange, pink
- Single decimal lbs input per fish (3 decimal places, e.g. `2.500`)
- Live total weight display (3 decimal lbs)
- Cards stay in entry order until **Call Out** is pressed → then sorts by weight descending
- **Call Out button** opens a popup modal:
  - Fewer than 6 fish: "No call out" message
  - 6+ fish: shows the fish at position #6 in weight order (the one bumped from the top 5 = the called-out fish), with its color dot, weight, and red "Call Out" label
- Save to localStorage (`leaguecast_calltags`), Clear All
- UI: Call Out + Total Weight as side-by-side cards; Add Tag as full-width card below

### 2. Gallery photo rename (`tournament-gallery.html`)
- Admin-only ✏️ button added next to 🗑️ on each photo card
- Opens a modal with text input pre-filled with current `uploadedBy` name
- Saves to Firestore and updates the page live without reload

## Tournament call-out rules (clarified this session)
- Color tags = on-the-water cull tracking tool per angler
- 5-fish limit per angler
- New fish caught → compare to lightest in bag → if heavier, CULL the lightest (call it out)
- "Called out" fish = the fish leaving the bag, announced by color
- In the app: position 6 in weight-sorted list = the fish that got bumped

## Current state
- Everything pushed and deployed via GitHub Actions → IONOS
- Working tree clean, no pending changes

## Exact next steps for next session
- None defined — ask Mark what's next
- Possible refinements to call tags: ability to clear a single fish weight (without removing the tag), or a "next call out" progression button
- Gallery: consider adding a caption field separate from `uploadedBy`

## Open questions / pending decisions
- Call tags: should pressing "Call Out" multiple times step through the call-out sequence (fish 5, then 4, then 3...)? Currently it always shows position #6.
- Should the Call Tags page have a tournament context (linked from a specific tournament) or stay as a standalone global tool?
