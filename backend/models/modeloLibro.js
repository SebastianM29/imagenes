const { model,Schema  } = require('mongoose');



const LibroSchema = Schema ({
    title : {
        type : String ,
        required : [true,'el titulo es requerido']
    },
    author : {
        type : String ,
        required : [true,'el autor es requerido']
    },
    isbn : {
        type : String ,
        required : true
    },
    imagepath : {
        type : String ,
        required : true
    },
    created_at : {
        type : Date ,
        default : Date.now
    },





});


module.exports = model('modeloLibro', LibroSchema )



