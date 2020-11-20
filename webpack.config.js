const path = require("path")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const glob = require("glob")

module.exports = {
  entry: {
    //"bundle.min.js": glob.sync("build/static/?(js|jsx|css)/main.*.?(js|jsx|css)").map(f => path.resolve(__dirname, f)),
    "bundle.infolink.js": glob.sync("ReactWorld/*.?(js|jsx|css)").map(f => path.resolve(__dirname, f)),
  },
  output: {
    path: path.resolve(__dirname, './wwwroot/js'),
    filename: "[name]",
    libraryTarget: 'umd', 
    //libraryExport: 'default', 
    //globalObject: 'this',
    library: "InfoLinkComponents"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            drop_console: true
          },
          output: {
            comments: false
          }
        }
      })
    ]
  }
}