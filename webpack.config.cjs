const path = require("path");

module.exports = {
  entry: {
    bundleIndex: "./js/forms.js",
    bundleCurriculo: "./js/curriculo.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
};
