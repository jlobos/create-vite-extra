import { defineConfig } from 'vite'
import deno from '@deno/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [deno()],
  build: {
    lib: {
      entry: 'src/my-element.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})