module.exports = {
    output: {
        publicPath: '/module/dist/',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};