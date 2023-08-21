const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
    // Reglas de los loaders
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      // Fallbacks
    },
  },
  devServer: {
    port: 3001, // Cambia este valor al puerto que desees
    liveReload: false,
  },
};
