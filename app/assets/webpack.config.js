module.exports = {
  context: __dirname + '/javascripts',
  entry: './webpack_application.js',
  output: {
    filename: 'webpack.bundle.js',
    path: __dirname + '/javascripts/webpack',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "file-loader" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ["node_modules", "javascripts"]
  },
};
