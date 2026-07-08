# slides.alexvolkihar.ovh

Monorepo of Slidev decks, one repo + one Vercel project + one domain, each deck served
under `/<year>/<slug>/` with working direct-link/reload per-slide URLs (`/1`, `/2`, ...).

Structure inspired by [antfu/talks](https://github.com/antfu/talks): a pnpm workspace
where each deck is built with `slidev build --base /<year>/<slug>/` into a shared `dist/`,
deployed as one static site. `vercel.json` rewrites each deck's path to its own
`index.html` so Slidev's client-side router can handle direct navigation to any slide.

## Add a new deck

```bash
pnpm new <slug> [year]   # defaults to current year
cd <year>/<slug>/src
pnpm dev                 # edit slides.md
```

Then from the repo root:

```bash
git add -A && git commit -m "feat: add <slug> deck" && git push
```

Vercel auto-deploys on push. No new repo, no new DNS record needed — everything lives
under `slides.alexvolkihar.ovh/<year>/<slug>/`.

## Local build

```bash
pnpm install
pnpm build   # builds every deck into dist/<year>/<slug>/
```
