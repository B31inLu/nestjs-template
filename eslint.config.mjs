import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        name: "userDeclateBaseRule",
        files: ["**/src/**/*.{ts,js}", "**/lib/**/**.{ts,js}"],
        ignores: ["**/dist/**", "**/docs/**"],
        rules: {
            "no-console": ["off"],
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/interface-name-prefix": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
        },
        languageOptions: {
            sourceType: "module",
            globals: { ...globals.node },
        },
    },
    {
        name: "testConfig",
        files: ["**/__test__/*.spec.{ts,js}"],
        languageOptions: {
            sourceType: "module",
            globals: { ...globals.node, vitest: true, faker: true },
        },
    }
);
