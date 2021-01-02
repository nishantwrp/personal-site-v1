module.exports = {
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/essential"
  ],
  plugins: ["prettier", "vue"],
  ignorePatterns: [".cache/**/*", "node_modules/**/*", "static/prism/*"]
};
