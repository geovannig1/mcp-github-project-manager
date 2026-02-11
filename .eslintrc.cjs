module.exports = {
    root: true,
    env: {
      node: true,
      es2022: true,
      jest: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["@typescript-eslint", "jest", "prettier"],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:jest/recommended",
      "prettier",
    ],
    ignorePatterns: ["build/", "node_modules/"],
  };
  