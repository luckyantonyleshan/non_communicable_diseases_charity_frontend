// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    historyApiFallback: true,
    port: 5173,
    strictPort: true,
    open: true  
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});