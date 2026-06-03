# Handoff — 2026-06-02 — Gallery & Light/Dark Mode

## What was completed

### Tournament Photo Gallery (`tournament-gallery.html`)
- Photos upload as base64 to Firestore subcollection `tournaments/{id}/photos`
- Photo grid view with uploader name caption
- Full-screen lightbox on tap with ‹ › prev/next navigation and ✕ close button
- Admin delete button (🗑️) always visible on each photo when logged in
- Photo count badge on the Gallery button in `schedule.html`

### Light/Dark Mode
- Created `light-mode.css` — high-contrast white theme for outdoor sunlight use
- Dark navy theme unchanged for night use
- Toggle button (☀️/🌙) in nav on all pages, persists via localStorage
- Applied to all 14 HTML pages via `<link rel="stylesheet" href="./light-mode.css">`

### Bug fixes
- Fixed "galleryPage is not defined" — Alpine.data() must be inside `alpine:init`
- Fixed isAdmin never updating — moved `onAuthStateChanged` into Alpine `init()` 
- Fixed missing `firebase-auth-compat.js` in gallery page
- Fixed lightbox not opening — template was outside Alpine component scope
- Added `.gitignore`

## Current state
- All changes deployed to IONOS via GitHub Actions
- Gallery fully working: load, view, upload, full-screen, delete
- Light/dark toggle working across all pages

## Next steps
- No outstanding issues from this session
- Possible future work: swipe gesture support for lightbox on iPad
- Possible future work: image compression before upload (base64 files can be large)

## Key technical notes
- `Alpine.data()` MUST be inside `alpine:init` — any other timing causes "not defined" errors
- `isAdmin` MUST be set via `onAuthStateChanged` callback inside `init()` to be reactive
- Light mode uses `html:not(.dark)` CSS selectors with `!important` overrides — no Tailwind dark: classes needed
- Firestore photo subcollection path: `tournaments/{tournamentId}/photos`
