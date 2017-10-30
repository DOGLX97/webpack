const path=require('path');
const HtmlPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');
module.exports={
    entry:{
        entry:"./src/entry.js"
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:'http://localhost:8080/'
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
                    use:'css-loader'
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
                test:/\.scss$/,
                use:['css-loader','style-loader','sass-loader']
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
        // new UglifyJsPlugin()
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:8081
    }
}