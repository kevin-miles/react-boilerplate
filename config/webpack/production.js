const merge = require('webpack-merge');
const Common = require('./common');

module.exports = merge(Common, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    //new HtmlWebpackPlugin({template: './dist/index.html'})
  ]
});