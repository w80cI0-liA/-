const path = require('path');
const miniCss = require('mini-css-extract-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // production
    entry: {
        slider_js: './src/slider.js',
    },
    output: {
        path: path.resolve(__dirname, '/public'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[name]-[hash][ext]'
    },
    // For convenient assembly of sources, that will be uploaded to the server
    devServer: {
        static: './public',
        port: 9000,
        hot: true
    },
    module: {
        rules: [
            // no rule required for js
            {
                test: /\.css$/i, // Правило для CSS файлов
                use: [miniCss.loader, 'style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // Правило для изображений
                type: 'asset/resource',
            },
            //// Правило для HTML файлов
            // {
            //     test: /\.html$/i, 
            //     loader: 'html-loader',
            // },
        ],
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new miniCss({
            filename: 'styles.css',
        }),
    ],

};

