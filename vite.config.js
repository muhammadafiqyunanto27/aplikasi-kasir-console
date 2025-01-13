import { defineConfig } from 'vite'
export default defineConfig({
    //konfigurasi untuk testing dengan vitest
    test: {
        globals: true,
        environment: 'node',
        include: ['test/**/*.test.ts']
    }
})