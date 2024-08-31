/// <reference types='vite/client' />

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import {resolve} from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Устанавливаем алиас для папки src
    }
  },
  plugins: [
    tsconfigPaths()
  ],
});
