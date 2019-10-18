/**
 * Jorge Eliécer Muñoz Herrera
 * https://github.com/jorgeemherrera
 * 
 * 2019
 */

 const http = require ('http');
 const app = require('./app');
 
 const port = process.env.PORT || 3000;

 const server = http.createServer(app);

 server.listen(port);