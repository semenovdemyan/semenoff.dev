import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8888,
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  base: '/semenoff.dev/',
  build: {
    outDir: 'dist',
  },
});
