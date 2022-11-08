import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve, dirname } from 'node:path';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueI18n({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './src/lang/**'
      ),
    }),
    cssInjectedByJsPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './src/export.ts'
      ),
      name: 'RokkaGallery',
      formats: ['umd'],
      fileName: () => 'rokka-gallery.js',
    },
  },
  define: {
    'process.env': {},
  },
});
