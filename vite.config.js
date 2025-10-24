export default {
    root: "src",
    build: {
        outDir: "../public",
    },
    server: {
        // SPA 라우팅을 위한 히스토리 API 폴백 설정
        historyApiFallback: true,
    },
    preview: {
        // 빌드된 파일 미리보기 시에도 SPA 라우팅 지원
        port: 4173,
        strictPort: true,
        historyApiFallback: true,
    },
};