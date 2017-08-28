var webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js',
        'webpack-dev-server/client?http://0.0.0.0:4000', // 개발서버포트
        'webpack/hot/only-dev-server'
    ],

    output: {
        path: '/', //__dirname + '/public/' public말고 /으로하면 파일을 메모리에 저장
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        filename: 'bundle.js',
        publicPath:'/',
        historyApiFallback:true,
        contentBase: './public/',
        proxy: {
            "**": "http://localhost:3000" // express 서버주소
        },
        stats: {
            // 콘솔 로그를 최소화 합니다
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }
    },


    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/,
            }
        ]
    }

};
