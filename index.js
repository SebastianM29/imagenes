
require('dotenv').config();
const  Server  = require('./backend/models/server');


console.log(process.env.NODE_ENV)


const server = new Server();

server.listen();










