import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve, dirname } from 'node:path';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import singleScriptEmbedWithProps from './src/plugins/single-script-embed-with-props';

const OUTPUT_OBJECT_NAME = 'RokkaGallery';
const OUTPUT_FILENAME = 'rokka-gallery.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './src/lang/**'
      ),
    }),
    cssInjectedByJsPlugin({ topExecutionPriority: false }),
    // Has to be loaded last
    singleScriptEmbedWithProps(),
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
      name: OUTPUT_OBJECT_NAME,
      formats: ['iife'],
      fileName: () => OUTPUT_FILENAME,
    },
  },
  define: {
    'process.env': {},
  },
});
