import antfu from '@antfu/eslint-config'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import tailwind from 'eslint-plugin-tailwindcss'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

export default antfu(
  {
    react: true,
    nextjs: true,
    typescript: true,
    isInEditor: false,

    stylistic: {
      indent: 2,
      semi: false,
      quotes: 'single',
    },

    formatters: {
      css: true,
    },
  },

  jsxA11y.flatConfigs.recommended,
  ...tailwind.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        config: `${dirname(fileURLToPath(import.meta.url))}/app/globals.css`,
      },
    },
  },
  {
    rules: {
      'antfu/no-top-level-await': 'off',
      'no-console': ['warn'],
      'style/brace-style': ['error', '1tbs'],
      'ts/consistent-type-definitions': ['error', 'type'],
      'react/prefer-destructuring-assignment': 'off',
      'node/prefer-global/process': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          tsconfigRootDir: '.',
        },
      ],
    },
  },
)
