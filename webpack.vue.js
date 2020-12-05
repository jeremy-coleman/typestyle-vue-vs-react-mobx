var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


var basePath = __dirname;

module.exports = {
  mode: 'development',
  context: path.join(basePath, 'src-vue'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  entry: {
    app: './main.tsx',
    vendor: [ 'vue' ]
  },
  output: {
    path: path.join(basePath, 'dist-vue'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',

          //tsconfig location is relative to the webpack context not this file ..zz
          { loader: 'ts-loader',
            options: {
              transpileOnly: true,
              //configFile: '../tsconfig.vue.json'
              }
            }],
      },

      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }
      
/*       {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      } */
    ]
  },

  optimization:{
    splitChunks:{
      chunks: "all" //"initial" , "async"
    }
  },

  devtool: 'inline-source-map',
  
  plugins: [ 

    new HtmlWebpackPlugin({filename: 'index.html',template: 'index.html',hash: true})

  ],
}

    //new webpack.optimize.CommonsChunkPlugin({names: ['vendor', 'manifest']})