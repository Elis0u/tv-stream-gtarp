import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
    plugins: [ react() ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src'),
            },
            {
                find: '@assets',
                replacement: path.resolve(__dirname, 'src/assets'),
            },
            {
                find: '@components',
                replacement: path.resolve(__dirname, 'src/components'),
            },
            {
                find: '@pages',
                replacement: path.resolve(__dirname, 'src/pages'),
            },
            {
                find: '@utils',
                replacement: path.resolve(__dirname, 'src/utils'),
            },
            {
                find: '@router',
                replacement: path.resolve(__dirname, 'src/router'),
            },
        ],
    },
})
