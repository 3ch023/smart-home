const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module:{
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ 'style-loader', 'css-loader' ]
            }

        ]
    }
};