/**
 * Created by brook on 2017/2/19.
 */
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config');
require('daemon')();
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.entry.app.unshift('webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/dev-server');

const compiler = webpack(Object.assign({}, config, {
  devServer: {
    hot: true,
  },
}));
const server = new WebpackDevServer(compiler, {
  publicPath: '/dist/',
});
server.listen(8080);
