import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  nodePolyfills({
    // Add all node built-ins including 'process'
    include: ['process']
  })
],
define: {
  global: 'globalThis',
}
})
