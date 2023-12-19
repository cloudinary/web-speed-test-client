import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths"
import {ViteMinifyPlugin} from 'vite-plugin-minify'

export default defineConfig({
    base: '/',
    plugins: [react(), viteTsconfigPaths(), ViteMinifyPlugin({})],
    resolve: {
        alias: {
            src: "/src",
        },
    },
    server: {
        open: true,
        port: 3000,
    },
    build: {
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.').slice(-1);
                    if (/css/i.test(extType)) {
                        extType = 'css';
                    }
                    return `static/${extType}/[name]-[hash][extname]`;
                },
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
            },
        },
    },
});
