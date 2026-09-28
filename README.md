# Talk Mandarin with 依依

A speaking-first Mandarin app for a Cantonese speaker. Runs in the browser, installs to the
home screen, and holds a continuous spoken conversation: she speaks, listens, you answer out
loud, she answers back.

## Files
- `index.html` — the whole app (3,000-word dictionary included)
- `manifest.webmanifest`, `sw.js`, `icon-*.png` — what makes it installable and work offline

## Putting it online
Any static HTTPS host works. On GitHub Pages: push these files to a repo, then
Settings → Pages → Deploy from branch → `main` / root. The app must be served over
**HTTPS**, otherwise Chrome will not give it the microphone.

## Installing on Android
Open the page in Chrome → menu (⋮) → **Add to Home screen**. It then runs full screen
with its own icon.

## First run
Me tab → 依依's connection → pick a provider and paste a key:

- **Google Gemini (free)** — get a key at aistudio.google.com/apikey. Free tier, daily limits,
  no card. Key formats changed in 2026, so paste whatever you are given; the app authenticates
  with the `x-goog-api-key` header and falls back to `Authorization: Bearer`, then asks your key
  which models it may use and picks a stable Flash one. A Google AI Plus/Pro subscription does
  *not* cover API access; the key is separate and free.
- **Claude (paid)** — console.anthropic.com → API keys. Starts with `sk-ant-`. Runs on
  Haiku 4.5, roughly £1 a month at ten minutes of talking a day.

The key is kept in this browser's storage on the phone and is sent only to the provider you
picked. Progress is stored the same way.

## Offline
Cards, drills and the word list work with no connection. 依依 needs the network.
Recruit PT
