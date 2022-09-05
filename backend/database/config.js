const mongoose = require('mongoose')




const databaseConnection = async ()=>{

    try {

        await mongoose.connect(process.env.MONGODB_CNN,{
            useNewUrlParser:true,
            useUnifiedTopology:true })


            console.log ('Base de datos online')
    } catch (error) {
        console.log(error)
        throw new Error (' no se pudo conectar a la base de datos')
    }

}






module.exports= {
    databaseConnection

}