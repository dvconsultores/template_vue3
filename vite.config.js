// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// Utilities
import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig((command, mode, ssrBuild) => {
  const isProduction = process.env.NODE_ENV === 'production'
  const env = loadEnv(mode, process.cwd(), '')

  const baseUrl = isProduction ? env.BASE_URL : env.VITE_BASE_URL

  return {
    base: baseUrl,
    plugins: [
      vue({ 
        template: { transformAssetUrls }
      }),
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
      vuetify({
        autoImport: true,
        styles: { configFile: 'src/assets/styles/config/vuetify-settings.scss' }
      }),
    ],
    define: {
      'process.env': {
        BASE_URL: baseUrl,
        API_URL: env.VITE_API_URL,
      },
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: [
        '.js',
        '.json',
        '.jsx',
        '.mjs',
        '.ts',
        '.tsx',
        '.vue',
      ],
    },
    server: {
      port: 3000,
    },
  }
})
