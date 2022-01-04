// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: {
        site: [
            path.resolve(__dirname, 'src/css/site.css'),
            // path.resolve(__dirname, 'src/scripts/site.tsx')
        ],
    },
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        // publicPath: '/dist/',
        // crossOriginLoading: 'anonymous',
    },
    devServer: {
        open: true,
        host: 'localhost',
        static: {
            directory: path.join(__dirname, 'public'),
            watch: true
        },
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: "Personal Blog",
            template: path.resolve(__dirname,'src/index.html'),
            minify: false
        }),
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'post.html',
            title: "Personal Blog | Post",
            template: path.resolve(__dirname,'src/post.html'),
            minify: false
        }),
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'design-system.html',
            title: "Personal Blog | Design System",
            template: path.resolve(__dirname,'src/design-system.html'),
            minify: false
        })
    ],
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".jsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader"
                ],
            },
            { test: /\.(t)sx?$/, loader: "ts-loader" }
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
        
    } else {
            config.devtool =  "source-map";
            config.mode = 'development';
    }
    return config;
};
