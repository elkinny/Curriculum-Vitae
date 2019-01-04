const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/js/index.js', './src/scss/main.scss'],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.json'],
  },
  watch: true,
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000,
    open: true,
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      title: 'Elkin Art',
      template: 'src/index.html',
      filename: 'index.html',
      minify: { collapseWhitespace: true },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: { attrs: false },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'img/[name].[ext]' },
          },
        ],
      },
    ],
  },
};
