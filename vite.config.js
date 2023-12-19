import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths"
import { ViteMinifyPlugin } from 'vite-plugin-minify'

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
});
