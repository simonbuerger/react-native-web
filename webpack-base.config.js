var autoprefixer = require('autoprefixer-core');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader?module&localIdentName=[hash:base64:5]',
          '!postcss-loader'
        ].join('!')
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { cacheDirectory: true }
      }
    ]
  },
  postcss: [ autoprefixer ]
};

