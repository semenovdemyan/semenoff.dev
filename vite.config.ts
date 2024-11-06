import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-vite-cv/', // укажите имя вашего репозитория
  build: {
    outDir: 'dist', // папка для сборки
  },
});
