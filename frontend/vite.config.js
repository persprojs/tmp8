import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/, // Process .js and .jsx files
    exclude: /node_modules/, // Exclude dependencies
  },
  server: {
    port: 5173,
  },
});
