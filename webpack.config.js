const path = require("path")
const UglifyJS = require('uglifyjs-webpack-plugin')



module.exports = {
    mode:'production',
    entry:'./assets/index.js',
    devtool:'inline-source-map',
    output:{
        path:path.join(__dirname , 'dist'),
        filename:'app.bundle.js'
    },
    optimization:{
        splitChunks:{
            chunks:'all'
        },
        minimizer:[new UglifyJS()]
    },
    devServer:{
        contentBase:[path.join(__dirname , 'public') , path.join(__dirname , 'dist')],
        port:9999
    },
    module:{
        rules:[
            {test: /\.js$/ , exclude:/node_modules/, loader:'babel-loader'}
        ]
    }
}