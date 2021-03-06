var path = require("path");
 
module.exports = {
  entry:"./js/index.jsx",
  output: { filename: "./js/out.js", path: path.resolve(__dirname, "js") },
  devServer: {
    inline: true,
    contentBase: './',
    port: 3000
  },
  mode: "development", watch: true,
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["es2015", "stage-2", "react"]
        }
      }
    },
    {
      test: /\.scss$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS, using Node Sass by default
    ]
    }
  ]
  }
}
