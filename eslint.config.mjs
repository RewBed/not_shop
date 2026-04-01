import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import globals from 'globals'
import vueParser from 'vue-eslint-parser'
import vue from 'eslint-plugin-vue'

const commonGlobals = {
  ...globals.browser,
  ...globals.node,
  defineProps: 'readonly',
  defineEmits: 'readonly',
  defineExpose: 'readonly',
  withDefaults: 'readonly',
  defineSlots: 'readonly'
}

export default [
  {
    ignores: ['.nuxt/**', '.output/**', 'node_modules/**', 'dist/**']
  },
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue']
      },
      globals: commonGlobals
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      'no-undef': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      'vue/multi-word-component-names': 'off'
    }
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: commonGlobals
    }
  },
  {
    files: ['app/components/LegalDocumentContentPage.vue'],
    rules: {
      // The source markdown is local and controlled in the repository.
      'vue/no-v-html': 'off'
    }
  },
  eslintConfigPrettier
]
