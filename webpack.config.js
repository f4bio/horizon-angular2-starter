const path = require("path");
const webpack = require("webpack");
const BASE_DIR = path.resolve(__dirname);

/**
 * Webpack Plugins
 */
const DefinePlugin = webpack.DefinePlugin;
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ForkCheckerPlugin = require("awesome-typescript-loader").ForkCheckerPlugin;

/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = "development";
const HMR = (process.argv.join("").indexOf("hot") > -1);
const METADATA = {
  __HOST__: "localhost",
  __PORT__: 1337,
  __ENV__: ENV,
  __HMR__: HMR
};

module.exports = {
  metadata: METADATA,
  debug: true,
  devtool: "source-map",
  entry: {
    "vendor": path.join(BASE_DIR, "assets", "vendor"),
    "polyfills": path.join(BASE_DIR, "assets", "polyfills"),
    "app": path.join(BASE_DIR, "assets", "src", "boot")
  },
  output: {
    path: path.join(BASE_DIR, "dist"),
    filename: "[name].bundle.js",
    sourceMapFilename: "[name].map",
    chunkFilename: "[id].chunk.js"
  },
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js", ".jsx", ".babel"]
  },
  module: {
    loaders: [{
      test: /\.woff2?(\?v=[0-9]\.[.0-9]*)?$/,
      loader: "url?limit=10000&minetype=application/font-woff&name=./fonts/[name].[ext]"
    }, {
      test: /\.ttf(\?v=[0-9]\.[.0-9]*)?$/,
      loader: "url?limit=10000&minetype=application/octet-stream&name=./fonts/[name].[ext]"
    }, {
      test: /\.eot?(\?v=[0-9]\.[.0-9]*)?$/,
      loader: "file?&name=./fonts/[name].[ext]"
    }, {
      test: /\.svg?(\?v=[0-9]\.[.0-9]*)?$/,
      loader: "url?limit=10000&minetype=image/svg+xml&name=./fonts/[name].[ext]"
    }, {
      test: /\.ts(x?)$/,
      loaders: ["awesome-typescript"],
      exclude: /node_modules/
    }, {
      test: [/\.babel$/, /\.es6$/, /\.jsx$/],
      loader: "babel",
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: "json"
    }, {
      test: /\.css/,
      loaders: ["style", "css", "postcss"],
      exclude: /node_modules/
    }, {
      test: [/\.scss$/, /\.sass$/],
      loaders: ["style", "css", "sass"],
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      loader: "raw",
      exclude: [path.join(BASE_DIR, "assets", "src", "index.html")]
    }]
  },
  plugins: [
    new DefinePlugin({
      __ENV__: JSON.stringify(METADATA["__ENV__"]),
      __HMR__: METADATA["__HMR__"]
    }),
    new OccurenceOrderPlugin(true),

    new CommonsChunkPlugin({
      name: "commons",
      filename: "commons.js",
      chunks: ["app", "polyfills", "vendor"]
    }),

    new ForkCheckerPlugin(),

    new CopyWebpackPlugin([{
      from: "assets/index.html"
    }]),

    new CleanWebpackPlugin(["dist", "build"], {
      root: BASE_DIR,
      verbose: true,
      dry: false
    })
  ],
  node: {
    global: "window",
    crypto: "empty",
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
