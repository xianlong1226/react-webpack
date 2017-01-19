var config = require('./webpack.base.config.js');
config.devServer = {
  host: '0.0.0.0',
  port: 9000,
  publicPath: '/',
  stats: {
    colors: true
  },
  proxy: require('./locals').proxy
};
//config.inline = true
config.progress = true;
config.colors = true;
config.devtool = 'cheap-module-eval-source-map';
config.debug = true;

module.exports = config;
