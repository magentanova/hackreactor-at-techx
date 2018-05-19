var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
   filename: 'bundle.css'
});

module.exports = {
    entry: [__dirname + '/js/app.jsx', __dirname + '/scss/style.scss'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: [/\.jsx$/,/\.js$/],
                exclude: [__dirname + '/node_modules/','/node_modules/','node_modules'],
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: [__dirname + '/node_modules/','/node_modules/','node_modules'],
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                exclude: ['/node_modules'],
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        extractPlugin
    ]
};
