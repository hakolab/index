const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
 devServer: {
    contentBase: './public',
    historyApiFallback: true,
 },
 module: {
     rules: [
       {
         test: /\.m?js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
             loader: 'babel-loader',
             options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [ 
                  "@babel/plugin-proposal-class-properties" 
                ] 
             }
         }
        },
        {
          test: /\.css$/,
          use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'}
          ]
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/,
         use: {
           loader: 'url-loader',
         }
       }
    ],
 },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  }, 
};