module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "prettier/prettier": "error",
    "linebreak-style": "off",
    "import/resolver": "off",
    "react/require-default-props": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "no-use-before-define": "off",
    "no-unused-vars": ["off"],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        types: ["string", "number", "array"],
        format: ["camelCase", "UPPER_CASE"],
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "should", "has", "can", "did", "will"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
        suffix: ["Type"],
      },
      {
        selector: "typeParameter",
        format: ["PascalCase"],
        prefix: ["T", "P", "K", "N"],
      },
      {
        selector: ["function"],
        format: ["camelCase", "PascalCase"],
      },
    ],
    "react/jsx-props-no-spreading": [
      "off",
      {
        html: "ignore",
        custom: "ignore",
      },
    ],
    "no-param-reassign": ["error", { props: false }],
  },
};
