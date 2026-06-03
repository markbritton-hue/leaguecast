# Handoff — 2026-06-03 — UI Polish, Payouts & Tiebreaker

## What was completed

### Main page UI
- **Background image**: Bass boat on lake from Unsplash (photo-1551942296-97384c850440), dark overlay, frosted glass cards, position `center -100px` to show anglers
- **Nav cards**: Horizontal layout — emoji left, large bold title (text-xl) filling width, `p-4` padding for tappable height
- **Season totals**: Two cards below standings showing total fish caught and total lbs across all weighins

### Tiebreaker logic (results.html + index.html)
- Equal total weight → higher big bass weight wins (distinct rank, not T-)
- Equal total weight AND equal big bass → true tie (T-1, T-2 etc.)
- Reads `bigFish || bigBassWeight` for backwards compatibility with older records
- Fixed in both per-tournament results AND season standings

### Payout formula (results.html)
- Formula: `(teams × $40 − teams × $5) × 80%`
- 1st: 50%, 2nd: 30%, 3rd: 20% — all rounded to nearest dollar via `Math.round()`
- Breakdown shown in admin payout section

### Results page
- Big bass label moved to right side, inline with weight

## Current state
- All deployed to IONOS, GitHub Actions workflow on push to main
- No outstanding bugs or incomplete features

## Exact next steps
- None identified — app is feature-complete for current season needs
- Possible future: swipe gestures on gallery lightbox for iPad
- Possible future: image compression before base64 upload (large photos may hit Firestore doc size limits)

## Open questions
- Is the $5/team fee + 20% admin deduction the final formula, or subject to change?
- Should the season standings tiebreaker also consider number of wins before big bass?

## Key technical references
- Unsplash image URL: `https://images.unsplash.com/photo-1551942296-97384c850440`
- Payout getters in `results.html`: `totalCollected`, `totalDeductions`, `totalPot`
- Tiebreaker sort: `b.totalWeight - a.totalWeight || getBigFish(b) - getBigFish(a)`
