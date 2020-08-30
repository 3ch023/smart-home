const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const NormalModuleReplacementPlugin = require("webpack/lib/NormalModuleReplacementPlugin");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new NormalModuleReplacementPlugin(/src\/js\/registry\/DevicesAPI\.js/,
        './DevicesAPI.mock.js'
    )
  ]
});