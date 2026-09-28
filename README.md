# Sequence

A free daily puzzle: put five things in order in four guesses.

## Run it

It's a static site with no build step. Turn on GitHub Pages for this repository (Settings → Pages → deploy from the `main` branch, root folder) and the game is live at `https://<username>.github.io/sequence/`.

To test locally, run `python3 -m http.server` in this folder and open http://localhost:8000.

## Add puzzles

Puzzles live in `puzzles.js`, one per day, in order. Puzzle 1 plays on the launch date set by `LAUNCH` near the top of the script in `index.html`.

List each puzzle's items in the correct order, top to bottom. The game shuffles them the same way for every player that day.

```js
{
  prompt: "Order by year completed",
  top: "Oldest", bottom: "Newest",
  items: [["Brooklyn Bridge", "1883"], ...],   // exactly 5 items
  note: "A one-line fact shown after the game."
}
```

When the list runs out, players see "No puzzle today", so keep a few weeks ahead.

## Replays and testing

- `#day3` replays puzzle 3 once its day has arrived. Future days show "unlocks on…" instead.
- `#test` (or `#test-day10` for a specific day) opens the whole schedule, including future days, so you can check upcoming puzzles. Keep that link to yourself.

Neither mode saves stats.

## Files

- `index.html` is the game, styles, and logic.
- `puzzles.js` holds the daily puzzles.
- `manifest.webmanifest` and the `icon-*.png` files let players add Sequence to their home screen.

Stats and streaks are stored in each player's browser. There are no accounts, cookies, or server.
