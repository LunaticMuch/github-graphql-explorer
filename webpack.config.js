const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');


module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    graphiql: './graphiql.js',
    voyager: './voyager.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: { esmodules: true } }],
                '@babel/preset-react',
                // 'module:metro-react-native-babel-preset',
                // 'module:react-native-dotenv',
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new CopyPlugin({
      patterns: [
        { from: '*.html' },
        { from: '../node_modules/graphiql/graphiql.css' },
        { from: '../node_modules/graphql-voyager/dist/voyager.css' },
        { from: '../node_modules/graphql-voyager/dist/voyager.worker.js' },
      ],
    }),
  ],
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: true,
    // bypass simple localhost CORS restrictions by setting
    // these to 127.0.0.1 in /etc/hosts
    allowedHosts: ['local.test.com', 'locahost', 'github.com', 'graphiql.com'],
  },
};
