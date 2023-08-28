import { ProvidePlugin } from 'webpack';
import { resolve as _resolve } from 'path';

export const mode = 'development';
export const entry = './src/index.js';
export const output = {
  path: _resolve(__dirname, 'dist'),
  filename: 'bundle.js',
};
export const performance = {
  // Desactivar advertencias para módulos críticos
  hints: false
};
export const module = {
  rules: [
    {
      test: /.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    },
    {
      test: /.css$/,
      use: ['style-loader', 'css-loader'],
    },
  ],
};
export const resolve = {
  extensions: ['.js', '.jsx'],
  fallback: {
    crypto: require.resolve('crypto-browserify'),
    fs: false,
    timers: false,
    http: require.resolve('stream-http'),
    assert: require.resolve('assert'),
    "zlib": require.resolve("browserify-zlib")
  },
};
export const devServer = {
  port: 4000,
  liveReload: true,
};
export const plugins = [
  new ProvidePlugin({
    React: 'react',
  }),
];
