import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/main.js",
  output: {
    file: "public/bundle.js",
    format: "iife"
  },
  plugins: [
    resolve({
      browser: true // resolve using "browser" field from node_module
    }),
    commonjs({
      namedExports: {
        "@microsoft/applicationinsights-core-js/browser/applicationinsights-core-js.min": [
          "_InternalMessageId",
          "AppInsightsCore",
          "CoreUtils",
          "DiagnosticLogger",
          "LoggingSeverity"
        ]
      }
    }) // convert CommonJS to ES
  ]
};
