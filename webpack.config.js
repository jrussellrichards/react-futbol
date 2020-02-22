const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {

  // mode: 'development',
  module: {
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     publicPath: '/'
    //   },
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      }],
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader',
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
        },
      }],
    },
    {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
      }],
    },
    {
      test: /\.css$/,
      loader: [
        MiniCSSExtractPlugin.loader,
        'css-loader',
      ],
    },

    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCSSExtractPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
  },
  resolve: {extensions: ['.js', '.jsx']}

};
