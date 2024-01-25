const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    "ready.js": "./src/ready.js",
    "readyFree.js": "./src/free.js",
    "injectLoader.js": "./src/injectLoader.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
};
