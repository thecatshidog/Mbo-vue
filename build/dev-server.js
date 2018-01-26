const path = require('path');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const opn = require('opn');

const config = require('../config');
const webpackDevServerConfig = require('./webpack.dev.conf');

const url = config.dev.host + config.dev.port;
const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
var proxy = [{
  path: '/api',
  target: 'http://localhost: 3001',
  host: 'localhost:3001',
  secure: true
}];

const server = new webpackDevServer(webpack(webpackDevServerConfig), {
  publicPath: webpackDevServerConfig.output.publicPath,
  hot: true,
  watchOptions: {
      ignored: /node_modules/,
  },
  https: protocol === 'https',
  stats: {
      colors: true
  },
  historyApiFallback: true,
  contentBase: path.resolve(__dirname, 'public'),
  proxy
});

server.app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../public/index.html'))
});
server.listen(config.dev.port, "localhost", function(req, res) {
  console.log('在localhost：' + config.dev.port + '开启服务,等待webpack开启')
});