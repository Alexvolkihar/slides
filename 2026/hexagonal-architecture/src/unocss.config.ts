import config from '@slidev/client/uno.config'
import { mergeConfigs, presetWebFonts } from 'unocss'

export default mergeConfigs([
  config,
  {
    shortcuts: {
      'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-purple-400 via-blue-400 to-teal-400',
    },
    presets: [
      presetWebFonts({
        fonts: {
          sans: 'DM Sans',
          serif: 'Bodoni Moda',
          mono: 'Fira Code',
        },
        timeouts: {
          warning: 10_000,
          failure: 30_000,
        },
      }),
    ],
  },
])
