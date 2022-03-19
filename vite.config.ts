import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    tsconfigPaths(),
    AutoImport({
      imports: [
        'react',
        'vitest',
      ],
      dts: true,
    })],
})
