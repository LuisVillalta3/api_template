module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    quotes: ["error", "double"],
    "import/extensions": 0,
    "linebreak-style": 0,
    "no-use-before-define": 0,
  },
};
