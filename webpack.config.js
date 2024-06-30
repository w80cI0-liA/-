const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    // use {} for code splitting technique
    entry: {
        slider_js: 'slider.js',

        index: 'index.html',
        index_eng: 'index_eng.html',
        metrics: 'metrics.html',

        media: 'media.css',
        slider_css: 'slider.css',
        style: 'style.css'
    },
    output: {
        filename: 'encrypted.js'
    },
    // TODO: Настроить для моих html и css файлов
    // which loaders use for which file types
    module: {
        rules: [
            // no rule required for js
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ],
    },

    // TO analyze weight of dependencies
    plugins: [
        new BundleAnalyzerPlugin()
    ],

    devServer: {
        static: path.join(__dirname, 'public'),
        port: 9000
    }
};

