import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    // 프로젝트의 루트 폴더를 src로 설정합니다
    root: "src",

    build: {
        // 빌드 결과물이 저장될 위치입니다
        outDir: "../public",
        // 빌드 시 index.html과 gallery.html을 정확히 찾도록 설정합니다
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                gallery: resolve(__dirname, 'src/gallery.html')
            }
        }
    },

    server: {
        // SPA 라우팅을 위한 설정입니다
        historyApiFallback: true,
    },

    preview: {
        port: 4173,
        strictPort: true,
        historyApiFallback: true,
    },
});