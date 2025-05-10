import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    'baseUrl': 'http://localhost:4200',
    supportFile: false,
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false,
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
  },
});
