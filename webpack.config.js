var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app/assets/javascripts',
  entry: ['jquery', 'jquery-ujs', './webpack_application.js'],
  output: {
    filename: 'webpack.bundle.js',
    path: __dirname + '/app/assets/javascripts/webpack',
    //publicPath: '/assets/'
    publicPath: '/assets/webpack/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "file-loader" }
      //{ test: require.resolve("jquery"), loader: "expose?$!expose?jQuery" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ["node_modules", "javascripts"]
  },
  plugins: [
    new webpack.OldWatchingPlugin(),
      new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery'
                })
  ],
  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    //jquery: "jQuery"
  }
};
