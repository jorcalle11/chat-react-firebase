var webpack = require('webpack')
var path = require('path')
var Dashboard = require('webpack-dashboard')
var DashboardPlugin = require('webpack-dashboard/plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const port = process.env.PORT || 3000
const dashboard = new Dashboard()
const dirSource = path.resolve('src')


module.exports = {
  context: dirSource,
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './index.jsx',
  ],
  output: {
    path: dirSource,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['','.js','.jsx']
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' }
    ],
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot','babel'] },
      { test: /\.css$/, loaders: ['style-loader','css-loader']},
      { test: /\.styl$/, loaders: ['style','css','stylus'] },
      { test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: 'url' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({template: path.join(__dirname,'index.html')}),
    new DashboardPlugin(dashboard.setData)
  ],
  devServer: {
    hot:true,
    inline: true,
    quiet: true, // for show webpack-dashboard
    contentBase: dirSource,
    host: '0.0.0.0',
    port: port,
  }
}