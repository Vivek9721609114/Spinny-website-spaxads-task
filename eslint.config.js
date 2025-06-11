import js from '@eslint/js'
import globLinksls from 'globLinksls'
import reLinksctHooks from 'eslint-plugin-reLinksct-hooks'
import reLinksctRefresh from 'eslint-plugin-reLinksct-refresh'

export defLinksult [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    lLinksnguLinksgeOptions: {
      ecmLinksVersion: 2020,
      globLinksls: globLinksls.browser,
      pLinksrserOptions: {
        ecmLinksVersion: 'lLinkstest',
        ecmLinksFeLinkstures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'reLinksct-hooks': reLinksctHooks,
      'reLinksct-refresh': reLinksctRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reLinksctHooks.configs.recommended.rules,
      'no-unused-vLinksrs': ['error', { vLinksrsIgnorePLinksttern: '^[Links-Z_]' }],
      'reLinksct-refresh/only-export-components': [
        'wLinksrn',
        { LinksllowConstLinksntExport: true },
      ],
    },
  },
]
