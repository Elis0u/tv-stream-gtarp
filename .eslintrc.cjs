module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    ignorePatterns: [
        "dist",
        ".eslintrc.cjs"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    settings: {
        react: {
            "version": "18.2"
        }
    },
    plugins: [
        "react",
        "react-hooks",
        "@stylistic"
    ],
    rules: {
        "object-curly-spacing": ["warn", "always"],
        "no-duplicate-imports": "error",
        "no-debugger": "warn",
        "no-dupe-args": "error",
        "no-irregular-whitespace": "error",
        "camelcase": "error",
        "no-var": "error",
        "react/react-in-jsx-scope": 0,
        "react/prop-types": 0,
        "react/no-unescaped-entities": 0,
        "react-hooks/exhaustive-deps": 1,
        "react-hooks/rules-of-hooks": "error",
        "@stylistic/indent": ["warn", 4],
        "@stylistic/array-bracket-spacing": ["warn", "always"],
        "@stylistic/arrow-spacing": "warn",
        "@stylistic/quotes": ["warn", "single"],
        "@stylistic/semi": ["warn", "never"],
        "@stylistic/arrow-spacing": "warn",
        "@stylistic/no-trailing-spaces": "warn",
        "@stylistic/no-multi-spaces": "warn"
    }
}
