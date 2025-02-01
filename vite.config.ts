import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import restart from 'vite-plugin-restart'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    publicDir: 'public/',
    plugins: [
        // Restart server on static/public file change
        restart({restart: ['public/**',]}),

        // React support
        react(),

        // Tailwind CSS support
        tailwindcss(),
    ],
    server: {
        host: true, // Open to local network and display URL
    },
    build: {
        outDir: 'dist/',
        emptyOutDir: true,
        minify: 'esbuild',
        sourcemap: true,
    },
    base: "/portfolio-3d/",
})
