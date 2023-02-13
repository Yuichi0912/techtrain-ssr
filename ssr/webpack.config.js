const path = require("path");

module.exports = {
  // バンドルするファイルに対するプロパティ
  mode: "production",
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: path.resolve(__dirname, "./server/index.js"),

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: path.resolve(__dirname, "dist"),
    // 出力ファイル名
    filename: "main.js",
  },

  // loaderの設定を行う
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                //   // プリセットを指定することで、ES2021 を ES5 に変換
                "@babel/preset-env",
                "@babel/preset-react",
              ],
            },
          },
          // {
          //   loader: "ts-loader",
          // },
        ],
      },
    ],
  },
  // 開発サーバーを立ち上げるプロパティ
  // devServer: {
  //   static: {
  //     directory: path.resolve(__dirname, "dist"),
  //   },
  //   port: 8000,
  // },

  // resolve: {
  //   alias: {
  //     path: "path-browserify",
  //   },
  // },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json",".scss"],
  },
  target: "node",

  ignoreWarnings: [
    {
      // module: /log4js/,
      message:
        /Critical dependency: the request of a dependency is an expression/,
    },
  ],
};
