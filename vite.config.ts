import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command }) => ({
  plugins: [tailwindcss()],
  base: command === 'build' ? '/Gitgano_Portfolio/' : '/',
}));
