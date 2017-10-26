const path=require('path');
const HtmlPlugin=require('html-webpack-plugin');
module.exports={
    entry:{
        entry:"./src/entry.js"
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'entry.js'
    },
    module:{},
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:8081
    }
}