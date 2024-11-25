import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@question/components": "/src/question/components",
            "@type": "/src/types",
            "@question": "/src/question",
            "@api": "/src/apis",
            "@util": "/src/util",
        },
    },
});
