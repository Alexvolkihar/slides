import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))

const [slug, yearArg] = process.argv.slice(2)

if (!slug) {
  console.error('Usage: pnpm new <slug> [year]')
  console.error('Example: pnpm new clean-code-talk')
  process.exit(1)
}

const year = yearArg || new Date().getFullYear().toString()
const base = `/${year}/${slug}/`
const deckDir = path.join(root, year, slug, 'src')

if (await fs.stat(deckDir).catch(() => null)) {
  console.error(`Error: ${deckDir} already exists.`)
  process.exit(1)
}

await fs.mkdir(deckDir, { recursive: true })

const templateDir = path.join(root, '_template')
for (const file of ['global-bottom.vue', 'unocss.config.ts', 'style.css', 'slides.md']) {
  await fs.copyFile(path.join(templateDir, file), path.join(deckDir, file))
}

await fs.writeFile(
  path.join(deckDir, 'package.json'),
  `${JSON.stringify(
    {
      type: 'module',
      version: '0.0.0',
      private: true,
      scripts: {
        dev: 'slidev --open',
        build: `tsx ../../../scripts/build-deck.ts ${base}`,
        export: 'slidev export',
      },
    },
    null,
    2,
  )}\n`,
)

const vercelConfigPath = path.join(root, 'vercel.json')
const vercelConfig = JSON.parse(await fs.readFile(vercelConfigPath, 'utf-8'))
vercelConfig.rewrites ||= []
vercelConfig.rewrites.push({
  source: `${base}:path*`,
  destination: `${base}index.html`,
})
await fs.writeFile(vercelConfigPath, `${JSON.stringify(vercelConfig, null, 2)}\n`)

console.log(`
Created ${deckDir}
Added vercel.json rewrite for ${base}

Next steps:
1. cd ${path.relative(process.cwd(), deckDir)}
2. pnpm dev          # edit slides.md
3. From repo root: git add -A && git commit -m "feat: add ${slug} deck" && git push
   (Vercel auto-deploys on push -- no new repo, no new DNS record needed)

Deck will be live at: https://slides.alexvolkihar.ovh${base}
`)
