import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve, dirname } from 'node:path';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

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
      name: "RokkaGallery",
      formats: ['umd'],
      fileName: ()  => "rokka-gallery.js",
    },
    rollupOptions: {
      output: {
        // Renames output CSS file 
        assetFileNames: "rokka-gallery.[ext]",
      },
    },
  },
  define: {
    'process.env': {}
  }
});
