// Offizielles ESLint-Regelset für JavaScript importieren
const js = require("@eslint/js");

// Neue Flat-Config für ESLint v9 exportieren
module.exports = [
  // Empfohlene Standardregeln aktivieren
  js.configs.recommended,

  {
    // Gilt für alle JavaScript-Dateien
    files: ["**/*.js"],

    languageOptions: {
      // ECMAScript-Version festlegen
      ecmaVersion: 2021,

      // CommonJS aktivieren, weil du require/module.exports nutzt
      sourceType: "commonjs",

      // Node-Globals definieren
      globals: {
        console: "readonly",
        process: "readonly",
        module: "readonly",
        require: "readonly"
      }
    },

    rules: {
      // console.log erlauben
      "no-console": "off"
    }
  }
];