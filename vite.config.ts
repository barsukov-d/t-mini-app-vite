// FILE: vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: { transformAssetUrls },
		}),

		// @quasar/plugin-vite options list:
		// https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
		quasar({
			// sassVariables: './src/quasar-variables.sass',
		}),
		basicSsl(),
	],
	build: {
		outDir: './docs',
	},
	base: './',
	server: {
		host: true,
		port: 5173,
	},
})
