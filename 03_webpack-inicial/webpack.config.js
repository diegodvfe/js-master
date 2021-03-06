const HtmlWebPackPlugin = require ('html-webpack-plugin')


module.exports ={

  mode: 'development',
  module: {
    rules:[
        {
            test: /\.html$/i,
            loader: 'html-loader',
            option: {
              attribute:{minimize: false}
            },
        }
    ]
  },

      plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: '.index.html'
        }),
      ]

}