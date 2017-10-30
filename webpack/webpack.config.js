const path=require('path');
const glob=require('glob');
const HtmlPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');
const PurifyCSSPlugin=require('purifycss-webpack');
const Webpack=require('webpack');
const entry=require('./webpack_config/entry_config.js');
const CopyWebpackPlugin=require('copy-webpack-plugin');
module.exports={
    entry: entry,
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:'http://localhost:8081/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:[{
                //     loader:'style-loader'
                // },{
                //     loader:'css-loader'
                // }]
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[{
                        loader:'css-loader',
                        options:{importLoaders: 1}
                    },'postcss-loader']
                })
            },{
                test:/\.(png|jpg|jpeg|gif)/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'images/'
                    }
                }]
            },{
                test:/\.(html|htm)$/i,
                use:[{
                    loader:'html-withimg-loader'
                }]
            },{
                test:/\.scss/,
                // use:[{
                //     loader:'style-loader'
                // },{
                //     loader:'css-loader'
                // },{
                //     loader:'sass-loader'
                // }]
                // use:['style-loader','css-loader','sass-loader']
                use:ExtractTextPlugin.extract({
                   use:[{
                        loader:'css-loader'
                    },{
                        loader:'sass-loader'
                   }],
                   fallback:'style-loader'
                })
            },{
                test:/\.(js|jsx)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            'env','react'
                        ]
                    }
                },
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin("css/index.css"),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html'))
        }),
        new Webpack.BannerPlugin('翻版必究'),
        new Webpack.ProvidePlugin({
            $:'jquery',
            vue:'vue',
        }),
        new Webpack.optimize.CommonsChunkPlugin({
            name:['jquery','vue'],
            filename:'assets/js/[name].js',
            minChunks: 2
        }),
        new CopyWebpackPlugin([{
            from: __dirname+'/src/public',
            to: './public'
        }]),
        // new UglifyJsPlugin()
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:8081
    },
    watchOptions:{
        poll:1000,
        aggregeateTimeout:500,
        ignored:/node_modules/
    }
}