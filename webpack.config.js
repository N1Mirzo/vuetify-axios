const path = require('path');

// Installed plugins
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

// Installing of the path
const setPath = function (folderName) {
    return path.join(__dirname, folderName);
};

// Set mode development
const buildingForLocal = () => {
    return (NODE_ENV === 'development');
};

// Set ExtractHTMLPlugin
const extractHTML = new HtmlWebpackPlugin({
    inject: true,
    hash: true,
    template: setPath('/src/index.html'),
    filename: 'index.html',
    minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true
    },
    environment: process.env.NODE_ENV,
    isLocalBuild: buildingForLocal(),
    imgPath: (!buildingForLocal()) ? 'assets' : 'src/assets'
});

// Set common config
const config = {
    mode: buildingForLocal() ? 'development' : 'production',
    entry: {
        build: path.join(setPath('src'), 'index.js'),
    },
    output: {
        path: buildingForLocal() ? path.resolve(__dirname) : setPath('dist'),
        filename: buildingForLocal() ? 'js/main.js' : 'js/main.[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules/",
                loader: "babel-loader"
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    { loader: buildingForLocal ? 'style-loader' : MiniCssExtractPlugin.loader, },
                    { loader: 'style-loader', options: { sourceMap: true } },  // creates style nodes from JS strings
                    { loader: 'css-loader', options: { sourceMap: true } }, // translates CSS into CommonJS
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } } // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name(file) {
                                if (process.env.NODE_ENV === 'development') {
                                    return '[path][name].[ext]';
                                }

                                return '[hash].[ext]';
                            }
                        },
                    },
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 8000,
        inline: true,
        hot: true,
        noInfo: false,
        clientLogLevel: 'none'
    },
    devtool: buildingForLocal() ? 'inline-source-map' : 'source-map',
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            chunks: "all"
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    performance: {
        hints: false
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: buildingForLocal() ? 'css/[name].css' : 'css/[name].[hash].css',
            chunkFilename: buildingForLocal() ? '[id].css' : '[id].[hash].css',
        }),
        extractHTML,
        new CleanWebpackPlugin('dist', {})
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'components': path.resolve(__dirname, '../src/components'),
            '@': path.resolve(__dirname, '../src'),
            'root': path.resolve(__dirname, '../src'),
            'home': path.resolve(__dirname, '../')
        },
        extensions: ['.js', '.jsx', '.vue', '.json']
    },
};

module.exports = config;