# LeagueCast Session Handoff — 2026-05-29

## Completed This Session

### 1. Repository & Branding
- ✅ Renamed GitHub repo from "RealRank" to "leaguecast" (all lowercase)
- ✅ Updated local git remote URL to match new repo name
- ✅ All code pushed to GitHub Pages: https://markbritton-hue.github.io/leaguecast/

### 2. Tournaments Management
- ✅ Created `import-tournaments.html` — bulk import tool for tournaments from Google Sheet
  - Includes all 16 tournaments (excluding 5/28 first tournament)
  - Pre-configured with dates, locations, start times, no-wake times, size limits
  - Ready to use at `/import-tournaments.html`
- ✅ Both admin and user tournament pages sorted by date (ascending/upcoming first)
  - Admin: `tournaments.html` — create & manage tournaments
  - Users: `schedule.html` — view tournament schedule

### 3. Standings & Scoring
- ✅ Removed points-based scoring system
- ✅ Now displays weight-based standings only
- ✅ Removed sort toggle button (was weight vs points)

### 4. Weigh-In Form Improvements
- ✅ Simplified weight input: decimal pounds only (removed oz field)
  - Big Bass Weight: e.g., 5.750 lbs
  - Total Weight: e.g., 23.125 lbs
- ✅ Restricted input to 3 decimal places maximum
  - Pattern validation: `^\d+(\.\d{0,3})?$`
  - Keypress handler prevents invalid characters
  - `limitDecimals()` function enforces restriction
- ✅ Updated penalty from 8 oz to 0.5 lbs per dead fish
- ✅ Weights display with 3 decimal precision throughout app

### 5. UI Enhancements
- ✅ Added BJones Fishing Channel page (`bjones-channel.html`)
  - YouTube subscribe button (links to @BJonesfishing)
  - Latest videos grid (pulls from YouTube RSS feed)
  - Styled to match LeagueCast design
- ✅ Added BJones Channel link on main page (index.html)
  - YouTube icon (red, hovers to lighter red)
  - "Fishing tips & videos" description

## Current State

**All changes pushed to GitHub:** 8 commits in this session
- Latest commit: `7dee5ce Sort user tournaments schedule by date order`
- Branch: `main` (up to date with origin/main)

**Live URLs:**
- Main site: https://markbritton-hue.github.io/leaguecast/
- Import tool: https://markbritton-hue.github.io/leaguecast/import-tournaments.html
- Admin tournaments: https://markbritton-hue.github.io/leaguecast/tournaments.html
- User schedule: https://markbritton-hue.github.io/leaguecast/schedule.html
- BJones Channel: https://markbritton-hue.github.io/leaguecast/bjones-channel.html

## Next Steps

### Immediate Testing (next session):
1. Test weigh-in form with new decimal weight format
   - Verify 3 decimal restriction works
   - Verify penalty calculation (0.5 lbs) displays correctly
   - Check that weights are stored and displayed correctly

2. Test tournament import utility
   - Verify all 16 tournaments import correctly
   - Check dates display in correct order
   - Verify 5/28 tournament was correctly excluded

3. Verify standings page
   - Confirm points system is fully removed
   - Check that weight-based standings display correctly
   - Verify tournament ordering is consistent

### Configuration Needed:
- BJones YouTube channel ID
  - Currently: placeholder in bjones-channel.html
  - Need: actual channel ID (UC_xxxxxxxx)
  - Update: Line 246 in bjones-channel.html and js/config.js

### Future Enhancements:
- Add Google Maps links to tournaments during import
- Consider adding tournament breakdown/results page
- Performance monitoring for GitHub Pages deployment

## Notes

- Firebase API key is public (intentional for browser app, security via Firestore rules)
- No .env file needed (static Firebase app)
- All session work was committed and pushed immediately
- Git history is clean with no secrets or sensitive data

## Open Questions

- Should the import tool auto-activate the first tournament?
- Do you want to update the BJones YouTube channel ID now, or later?
- Any issues observed with the new weigh-in decimal format?

---

**Session closed:** 2026-05-29
**Next session focus:** Testing new features and configuration
