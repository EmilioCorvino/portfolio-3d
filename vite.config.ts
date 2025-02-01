import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import restart from 'vite-plugin-restart'

// https://vite.dev/config/
export default defineConfig({
    root: 'src/',
    publicDir: '../public/',
    plugins: [
        // Restart server on static/public file change
        restart({restart: ['../public/**',]}),

        // React support
        react()
    ],
    build: {
        outDir: '../dist/',
        emptyOutDir: true,
        minify: 'esbuild',
        sourcemap: true,
    },
})
