const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    // use {} for code splitting technique
    entry: {
        slider_js: './src/slider.js',
        
        // index: 'index.html',
        // index_eng: 'index_eng.html',
        //// Если используется include, то нужно ли обрабатывать включаемый файл?
        //// metrics: 'metrics.html',

        // media: 'media.css',
        // slider_css: 'slider.css',
        // style: 'style.css'
    },
    output: {
        filename: 'encrypted.js',
        // output files folder
        path: path.resolve(__dirname, 'dist'),
    },
    // set which loaders must be used for which file types
    module: {
        rules: [
            // no rule required for js
            {
                test: /\.css$/i, // Правило для CSS файлов
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // Правило для изображений
                type: 'asset/resource',
            },
            {
                test: /\.html$/i, // Правило для HTML файлов
                loader: 'html-loader',
            },
        ],
    },
    // TO analyze weight of dependencies
    plugins: [
        new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html', // Исходный HTML файл
            filename: 'encrypted.html', // Выходной HTML файл
            template: './public/index_eng.html',
            filename: 'encrypted_eng.html',
          }),
    ],
    // For convenient assembly of sources, that will be uploaded to the server
    devServer: {
        static: path.join(__dirname, 'public'),
        port: 9000
    }
};

