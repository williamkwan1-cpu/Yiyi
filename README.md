# Talk Mandarin with 依依

A speaking-first Mandarin app for a Cantonese speaker. Runs in the browser, installs to the
home screen, and holds a continuous spoken conversation: she speaks, listens, you answer out
loud, she answers back.

## Daily session (the tutor)
Home → **Start today's session** (or Talk → Daily session). A session is paced to your daily goal
(15 minutes by default) and runs in four stages, shown at the top of the call:

1. **Warm-up** — a quick question on words you're learning, your homework, and a repeated mistake.
2. **New** — up to 5 new words or phrases, always in a sentence, plus the week's grammar pattern,
   explained in English in three sentences or fewer, with the Cantonese bridge.
3. **Practice** — a role-play with family or friends that uses today's words, with a small surprise.
4. **Wrap-up** — a summary, one mini homework challenge, and a preview of next time.

Tap **Stuck? Get a hint** (or say "help" / 帮帮我) for the words you need. Tap **Finish** to wrap up early.

The course follows 13 weekly topics for everyday talk with family and friends. It moves to the next
week only after a progress check shows the current pattern is being used correctly about 80% of the time.

- **Words** are tracked as *new* (taught in the last 2 sessions), *learning*, or *known* (used
  correctly 3+ times). A known word that gets corrected drops back to learning. Taught words that are
  in the dictionary also join Review cards.
- **Recurring mistakes** are counted by type and flagged after 3 repeats; she practises them in the warm-up.
- **Weekly check** every 7 sessions (or any time from the Me tab): new words, grammar covered, what keeps
  slipping, strongest skill, next week's focus and an estimated CEFR level, with milestones A0–C1.
- **Corrections** (Me tab): straight away, or saved for the end of the session.

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
