import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: ["pseudoporphyritic-decidedly-hyon.ngrok-free.dev"],
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
});
