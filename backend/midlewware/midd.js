const multer=require('multer');
const path = require('path');



const storage = multer.diskStorage({
      destination:'./backend/public/uploads',
      filename(req,file,cb){
        cb(null,new Date().getTime()+ path.extname(file.originalname))
      }

})




module.exports = storage
