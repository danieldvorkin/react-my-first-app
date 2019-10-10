const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: { main: './app/js/main.js'},
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  target: 'node', // update from 23.12.2018
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}
