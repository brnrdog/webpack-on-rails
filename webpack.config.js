var DashboardPlugin = require('webpack-dashboard/plugin');
var AssetsPlugin = require('assets-webpack-plugin');

var production = process.env.NODE_ENV === 'production';
production = true;

module.exports = {
  entry: {
    'scripts': './webpack/scripts.js',
    'styles': './webpack/styles.scss',
  },
  output: {
    path: './public/assets',
    filename: production ? '[name]-[hash].js' : '[name].js',
  },
  resolve: {
    alias: {
      scripts: './scripts',
      styles: './styles',
      images: './images'
    },
    extensions: ['', '.js', '.jsx', '.coffee']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel' ,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }
    ]
  },
  plugins: [
    new DashboardPlugin(),
    new AssetsPlugin({
      prettyPrint: true,
      fullPath: false
    })
  ],
  autoWatch: !production
}
