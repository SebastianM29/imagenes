const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin')

//para saber si esta en modo desarrollo
const devMode = process.env.NODE_ENV !== 'production';
console.log(devMode)



//convierte el codigo frontend a codigo standar de html css javascript
// y mueve a otra carpeta ... primero se especifica donde esta el arhivo origen
module.exports = {
    mode: 'production',
    //entra al archivo frontend y toma el archivo app.js
    entry : './frontend/app.js',
    //donde lo aloja
    output : {
        path : path.join(__dirname, 'backend/public' ),
        filename : 'js/bundle.js'
    },
     
    module: {
        rules : [
            {
                test: /\.css/,
                use: [
                    
                    //si estoy en desarrollo carga los estilos dentro de javascript, si estoy en produccion que sean archivos de estilo separados
                    devMode ? 'style-loader' : miniCssExtractPlugin.loader,
                    'css-loader'
                                    ]
            }
        ]

    },




    //lo aloja tmb en la carpeta publica
    plugins : [
        new HtmlWebpackPlugin({
        template : './frontend/index.html',
            
        /*minify: {
            collapseWhitespace:true,
            removeComments:true,
            removeRedundantAttributes:true,
            removeScriptTypeAttributes:true,
            removeStyleLinkTypeAttributes:true,
            useShortDoctype:true
        }*/
            
        }),
        //necesito especificar como se va a ejecutar miniCssExtractPlugin
        new miniCssExtractPlugin({
            filename: 'css/bundle.css'
        })
    ]
     


} 