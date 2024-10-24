import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './src/main.jsx', // or ./src/index.js based on your structure
    },
  },
});
