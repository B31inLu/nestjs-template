import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        include: ["**/src/**/*.spec.{ts,js}"],
        environment: "node",
        alias: {
            "@/(.*)": "./src/**",
        },
        reporters: ["verbose"],
        coverage: {
            provider: "istanbul",
        },
    },
});
