const express = require ('express')
const morgan = require ('morgan');
const multer = require('multer');
const cors = require ('cors');
const storage = require('../midlewware/midd');
const { databaseConnection } = require('../database/config');

//const mult = require('./const');







class Server {
constructor (){
this.app = express();

this.port=process.env.PORT,
this.database();
this.middlewares();
this.routes()



}


async database (){

  await databaseConnection();

} 


//middlewares
middlewares(){
    this.app.use(morgan('dev'));
    
    
    
    
    //express static me ubia el index html
    this.app.use(express.static('./backend/public'));
   
  
    //este midd nos va a ayudar a interpretar los datos del formularios como un json
    this.app.use(multer({storage}).single('image'));
    this.app.use(express.urlencoded({extended: false}));
    
    this.app.use(cors());
    //lectura y parseo del body

    
    //para decirle que la inf que viene del backend viene en formato json
    this.app.use(express.json());    
    

   
 
    
    


}

routes(){
   
  this.app.use('/libros', require ('../routes/user'));
     

}

listen (){
     //start the server
     this.app.listen( this.port, () => {
        console.log('Servidor activo, local host',this.port);
    });

}



}








module.exports = Server