import process from 'node:process'
import { x } from 'tinyexec'

const [base] = process.argv.slice(2)

if (!base) {
  console.error('Usage: tsx build-deck.ts <base-path>  (e.g. /2026/hexagonal-architecture/)')
  process.exit(1)
}

const out = `../../../dist${base}`

console.log(`Building ${base} -> ${out}`)

await x('npx', ['slidev', 'build', '--base', base, '--out', out], {
  nodeOptions: {
    stdio: 'inherit',
  },
})
