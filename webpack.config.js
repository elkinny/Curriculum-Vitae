const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/js/index.js', './src/scss/main.scss'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },

  stats: 'minimal',
  watch: true,
  devServer: {
    stats: 'errors-only',
    compress: true,
    open: true,
    port: 3300,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: path.resolve(__dirname, 'src'),
              publicPath: '../',
              useRelativePaths: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: 'src/index.html',
      filename: 'index.html',
    }),
    new ExtractTextPlugin({
      filename: 'css/style.css',
    }),
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.js', // 'vue/dist/vue.common.js' for webpack 1
    },
  },
};
